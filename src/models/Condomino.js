const {database} = require('../database/connection')
const bcrypt = require('bcryptjs')
const Validation = require('../controllers/validations/validation');
const condominoValidation = new Validation('condomino')

class Condominos{
    
    constructor(table){
        this.table = table;
        this.select = ['id','name','email','cpf','birth_date','sex','phone','password']
    }

    async insertUser(dataUser){
        try{
        // VALIDAR EMAIL E SENHA
            let invalidEmail = await condominoValidation.validarEmail(dataUser.email)
            if(invalidEmail) return invalidEmail
            
            let invalidPassword = await condominoValidation.validarSenha(dataUser.password)
            if(invalidPassword) return invalidPassword

            let invalidCpf = await condominoValidation.validarCpf(dataUser.cpf)
            if(invalidCpf) return invalidCpf
               
        // BCRYPT
            let salt = await bcrypt.genSaltSync(10)
            let hash = await bcrypt.hashSync(dataUser.password,salt)
            dataUser.password = hash

        // INSERT
            await database.insert(dataUser).into(this.table)
            return {status:200, result:{Ok:`usuario cadastrado com sucesso!`}}  
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model User, método insertUser`)
        };
    };

    async findAll(){
        try{
           let users = await database.select(this.select).table(this.table)
           if(users.length > 0) return {status:200, result:users}          
           else return {status:404, result:{erro:`Nenhum usuario foi encontrado`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model User, método findAll`)
        };
    };

    async findAllByName(name){
        try{
           let user = await database.select(this.select).table(this.table).where({name:name})
           if(user.length > 0) return {status:200, result:user} 
           else return {status:404, result:{erro:`O nome ${name} não corresponde a nenhum usuario`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model User, método findAllByName`)
        };
    };

    async findAllByRole(role){
        try{
           let user = await database.select(this.select).table(this.table).where({role:role})
           if(user.length > 0) return {status:200, result:user} 
           else return {status:404, result:{erro:`O cargo ${role} não corresponde a nenhum usuario`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model User, método findAllByRole`)
        };
    };

    async findById(id){
        try{
            let user = await database.select(this.select).table(this.table).where({id:id})
            if(user.length > 0) return {status:200, result:user} 
            else return {status:404, result:{erro:`O id ${id} não corresponde a nenhum usuario`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model User, método  findById`)
        };
    };

    async findByCpf(cpf){
        try{
            let user = await database.select(this.select).table(this.table).where({cpf:cpf})
            if(user.length > 0) return {status:200, result:user} 
            else return {status:404, result:{erro:`O cpf ${cpf} não corresponde a nenhum usuario`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model User, método findByCpf`)
        };
    };

    async findByEmail(email){
        try{
            let user = await database.select(this.select).table(this.table).where({email:email})
            if(user.length > 0) return {status:200, result:user} 
            else return {status:404, result:{erro:`O email ${email} não corresponde a nenhum usuario`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model User, método findByEmail`)
        };
    };

    async updateById(dataUpdate){
        try{
        // VALIDACAO   
            let userId = await this.findById(dataUpdate.id)
            if(userId.status == 404) return userId
            await database.where({id:dataUpdate.id}).update(dataUpdate).table(this.table)
            return {status:200 , result:{Ok:`usuario atualizado com sucesso!`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model User, método updateById`)
        };
    };

    async deleteById(id){
        try{
        // VALIDACAO
            let resultId = await this.findById(id)
            if(resultId.status == 404) return resultId
            await database.where({id:id}).delete().table(this.table)
            return {status:200, result:{Ok:'Usuario deletado com sucesso!'}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model User, método deleteById`)
        }
    }

    async updatePassword(cpf,newPassword){
        try{
        // VALIDACAO
            let validCpf = await this.findByCpf(cpf)
            if(validCpf.status == 404) return validCpf
            let validPassword = await condominoValidation.validarSenha(newPassword)
            if(validPassword) return validPassword
        // BCRYPT
            let salt = await bcrypt.genSaltSync(10)
            let hash = await bcrypt.hashSync(newPassword,salt)
            
            await database.where({id:validCpf.result[0].id}).update({password:hash}).table(this.table)
            return {status:200 , result:{Ok:`senha atualizada com sucesso!`,user:validCpf.result[0]}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model User, método updatePassword`)
        }
    }

    async loginUser(email,password){
        try{
            let user = await this.findByEmail(email)
            if(user.status == 404) return user
            // BCRIPT
            console.log(user.result)
            let correctPassword = bcrypt.compareSync(password,user.result[0].password) 
            if(correctPassword) return {status:200, result:{Ok:`Usuário logado com sucesso`,user:user.result[0]}}
            else{return {status:404, result:{erro:`Senha incorreta`}}}
        }catch(err){

        }
    }
}

module.exports = new Condominos('condomino')