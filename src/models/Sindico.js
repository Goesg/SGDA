const {database} = require('../database/connection')
const bcrypt = require('bcryptjs')
const Validation = require('../controllers/validations/validation');
const sindicoValidation = new Validation('sindico')

class Sindico{
    
    constructor(table,name){
        this.table = table;
        this.name = name;
    }

    async insertUser(dataUser){
        try{
        // VALIDAR EMAIL, CPF, LOGIN E SENHA
            let invalidEmail = await sindicoValidation.validarEmail(dataUser.email)
            if(invalidEmail) return invalidEmail
            
            let invalidSenha = await sindicoValidation.validarSenha(dataUser.senha)
            if(invalidSenha) return invalidSenha

            let invalidCpf = await sindicoValidation.validarCpf(dataUser.cpf)
            if(invalidCpf) return invalidCpf

            let invalidLogin = await sindicoValidation.validarLogin(dataUser.login)
            if(invalidLogin) return invalidLogin

        // BCRYPT
            let salt = await bcrypt.genSaltSync(10)
            let hash = await bcrypt.hashSync(dataUser.senha,salt)
            dataUser.senha = await hash
            console.log("encripta")
            console.log(dataUser.senha)
            console.log(dataUser)
        // INSERT
            await database.insert(dataUser).into(this.table)
            return {status:200, result:{Ok:`${this.name} cadastrado com sucesso!`}}  
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método insertUser`)
        };
    };

    async findAll(){
        try{
           let users = await database.select().table(this.table)
           if(users.length > 0) return {status:200, result:users}          
           else return {status:404, result:{erro:`Nenhum ${this.name} foi encontrado`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findAll`)
        };
    };

    async findAllByName(name){
        try{
           let user = await database.select().table(this.table).where({nome:nome})
           if(user.length > 0) return {status:200, result:user} 
           else return {status:404, result:{erro:`O nome ${name} não corresponde a nenhum ${this.name}`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findAllByName`)
        };
    };

    async findById(id){
        try{
            let user = await database.select().table(this.table).where({id:id})
            if(user.length > 0) return {status:200, result:user[0]} 
            else return {status:404, result:{erro:`O id ${id} não corresponde a nenhum ${this.name}`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método  findById`)
        };
    };

    async findByCpf(cpf){
        try{
            let user = await database.select().table(this.table).where({cpf:cpf})
            if(user.length > 0) return {status:200, result:user[0]} 
            else return {status:404, result:{erro:`O cpf ${cpf} não corresponde a nenhum ${this.name}`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findByCpf`)
        };
    };

    async findByEmail(email){
        try{
            let user = await database.select().table(this.table).where({email:email})
            if(user.length > 0) return {status:200, result:user[0]} 
            else return {status:404, result:{erro:`O email ${email} não corresponde a nenhum ${this.name}`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findByEmail`)
        };
    };

    async findByLogin(login){
        try{
            let user = await database.select().table(this.table).where({login:login})
            if(user.length > 0) return {status:200, result:user[0]} 
            else return {status:404, result:{erro:`O login ${login} não corresponde a nenhum ${this.name}`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findByLogin`)
        };
    };

    async updateById(dataUpdate){
        try{
        // VALIDACAO   
            let userId = await this.findById(dataUpdate.id)
            if(userId.status == 404) return userId
            await database.where({id:dataUpdate.id}).update(dataUpdate).table(this.table)
            return {status:200 , result:{Ok:`${this.name} atualizado com sucesso!`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método updateById`)
        };
    };

    async deleteById(id){
        try{
        // VALIDACAO
            let resultId = await this.findById(id)
            if(resultId.status == 404) return resultId
            await database.where({id:id}).delete().table(this.table)
            return {status:200, result:{Ok:`${this.name} deletado com sucesso!`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método deleteById`)
        }
    }

    async updatePassword(cpf,novaSenha){
        try{
        // VALIDACAO
            let validCpf = await this.findByCpf(cpf)
            if(validCpf.status == 404) return validCpf
            let validPassword = await sindicoValidation.validarSenha(novaSenha)
            if(validPassword) return validPassword
        // BCRYPT
            let salt = await bcrypt.genSaltSync(10)
            let hash = await bcrypt.hashSync(novaSenha,salt)
            
            await database.where({id:validCpf.result.id}).update({senha:hash}).table(this.table)
            return {status:200 , result:{Ok:`senha atualizada com sucesso!`,user:validCpf.result[0]}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método updatePassword`)
        }
    }

    async login(login,senha){
        try{
            let user = await this.findByLogin(login)
            if(user.status == 404) return user
            let correctPassword = bcrypt.compareSync(senha,user.result[0].senha) 
            if(correctPassword) return {status:200, result:{Ok:`Usuário logado com sucesso`,user:user.result[0]}}
            else{return {status:404, result:{erro:`Senha incorreta`}}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método login`)
        }
    }
}

module.exports = new Sindico('sindico','síndico')