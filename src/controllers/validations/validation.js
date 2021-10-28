const {database} = require('../../database/connection')

class checkEmail{
    constructor(table){
        this.table = table;
    }
    async checkerEmail(email){
        try{
            if(email == undefined || email == null || email == " "){
                return {status:404, result:{erro:`Obrigatório a informação de algum email`}};   
            };
            let regExpEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z]+\.[a-zA-Z]+$/
            if(regExpEmail.test(email) == false){
                return {status:404, result:{erro:`Insira um email válido`}};
            };
            let existEmail = await database.select().from(this.table).where({email:email}).then(result =>{
                if(result.length > 0) return true
                else{return false}                     
            });
            if(existEmail) return{status:406, result:{erro:`Email já existente`}}
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }
}

class checkPassword{
    static  async checkerPassword(password){
        if(password == undefined || password == null || password == " "){
            return {status:404, result:{erro:`Obrigatório uma senha para realizar seu cadastro`}}    
        }
        else if(password.length < 6){
            return {status:404, result:{erro:`A senha precisa conter mais de 6 caracteres`}}     
        }
    }
}


class checkCpf{
    constructor(table){
        this.table = table;
    }
    async checkerCpf(cpf){
        try{
            if(cpf == undefined || cpf == null || cpf == " "){
                return {status:404, result:{erro:`Obrigatório a informação de algum cpf`}};   
            };
            let existCpf = await database.select().from(this.table).where({cpf:cpf}).then(result =>{
                if(result.length > 0) return true
                else{return false}                     
            });
            if(existCpf) return{status:406, result:{erro:`cpf já existente`}}
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }
}


class userValidation{
    constructor(table){
        this.table = table;
    }
       async validarEmail(email){
            try{
                return await new checkEmail(this.table).checkerEmail(email)
            }catch(err){
                console.log(err)
                throw new Error(`Erro no UserValidation método validar email`)
            }      
        }

        async validarSenha(password){
            try{
               return await checkPassword.checkerPassword(password)
            }catch(err){
                console.log(err)
                throw new Error(`Erro no UserValidation método validar senha`)
            }   
        }

        async validarCpf(cpf){
            try{
                return await new checkCpf(this.table).checkerCpf(cpf)
            }catch(err){
                console.log(err)
                throw new Error(`Erro no UserValidation método validar cpf`)
            }
        }
}

module.exports = userValidation