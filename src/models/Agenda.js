const {database} = require('../database/connection')

class Agenda{
    
    constructor(table,name){
        this.table = table;
        this.name = name;
    }

    async insertUser(dataUser){
        try{
        // INSERT
            await database.insert(dataUser).into(this.table)
            return {status:200, result:{Ok:`${this.name} cadastrada com sucesso!`}}  
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

    async findAllByData(data){
        try{
           let user = await database.select().table(this.table).where({data:data})
           if(user.length > 0) return {status:200, result:user} 
           else return {status:404, result:{erro:`A data ${data} não corresponde a nenhum ${this.name}`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findAllByData`)
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

    async updateById(dataUpdate){
        try{
        // VALIDACAO   
            let userId = await this.findById(dataUpdate.id)
            if(userId.status == 404) return userId
            await database.where({id:dataUpdate.id}).update(dataUpdate).table(this.table)
            return {status:200 , result:{Ok:`${this.name} atualizada com sucesso!`}}
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

module.exports = new Agenda('agenda','Agenda')