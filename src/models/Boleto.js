const {database} = require('../database/connection')

class Boleto{
    
    constructor(table,name){
        this.table = table;
        this.name = name;
    }

    async insertUser(dataUser){
        try{
        // INSERT
            let errSql;
            await database.insert(dataUser).into(this.table).then(sql => errSql = false).catch(err => errSql = true)
            if(errSql) return {status:404, result:{erro:`Erro ao inserir no banco!!! \n O id do condômino informado não existe. \n Revise as informações!`}} 
            else{ return {status:200, result:{Ok:`${this.name} cadastrado com sucesso!`}} }
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

    async findByApartamento(apartamento){
        try{
           let user = await database.select().table(this.table).where({apartamento:apartamento})
           if(user.length > 0) return {status:200, result:user} 
           else return {status:404, result:{erro:`O apartamento ${apartamento} não corresponde a nenhum ${this.name}`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findByApartamento`)
        };
    };

    async findAllByIdCondomino(idCondomino){
        try{
           let user = await database.select().table('condomino').innerJoin(this.table,'boleto.id_Condomino','condomino.id').where({'boleto.id_Condomino':idCondomino})
           if(user.length > 0) return {status:200, result:user[0]} 
           else return {status:404, result:{erro:`O id do condômino ${idCondomino} não corresponde a nenhum ${this.name}`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findAllByIdCondomino`)
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
            let errSql;
            await database.where({id:dataUpdate.id}).update(dataUpdate).table(this.table).then(sql => errSql = false).catch(err => errSql = true)
            if(errSql) return {status:404, result:{erro:`Erro ao atualizar ${this.name}!!! \n O id do condômino informado não existe. \n Revise as informações!`}} 
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

module.exports = new Boleto('boleto','boleto')