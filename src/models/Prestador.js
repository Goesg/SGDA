const {database} = require('../database/connection')
const bcrypt = require('bcryptjs')
const Validation = require('../controllers/validations/validation');
const prestadorValidation = new Validation('prestador')

class Prestador{
    
    constructor(table,name){
        this.table = table;
        this.name = name;
    }

    async insertUser(dataUser){
        try{
        // VALIDAR CPF
            let invalidCpf = await prestadorValidation.validarCpf(dataUser.cpf)
            if(invalidCpf) return invalidCpf

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
            if(user.length > 0) return {status:200, result:user} 
            else return {status:404, result:{erro:`O email ${email} não corresponde a nenhum ${this.name}`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findByEmail`)
        };
    };

    async findByLogin(login){
        try{
            let user = await database.select().table(this.table).where({login:login})
            if(user.length > 0) return {status:200, result:user} 
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
}

module.exports = new Prestador('prestador','prestador')