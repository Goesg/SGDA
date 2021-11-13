const Pet = require('../models/Pet')

class petController {
    constructor(name){
        this.name = name
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataUser =  await {
                    nome:req.body.nome,
                    raca:req.body.raca,
                    idade:req.body.idade,
                    apartamento:req.body.apartamento,
                    id_Condomino:req.body.id_Condomino || null
                }
                let resultInsert = await Pet.insertUser(dataUser)
                res.json(resultInsert.result)
            }catch(err){
                console.log(err)
                let catchErro = {erro:`Houve uma falha no servidor ao cadastrar um novo ${this.name}`}
                res.json(catchErro)
            }
         }       
         inserirUsuario() 
    };

    async showAll(req,res){
        try{
            let resultFindAll = await Pet.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos os ${this.name}s`}
            res.json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Pet.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async showByApartamento(req,res){    
        try{
            let resultFindData = await Pet.findAByApartamento(req.params.apartamento)
            res.json(resultFindData.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo apartamento`}
            res.json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                nome:req.body.nome,
                raca:req.body.raca,
                idade:req.body.idade,
                apartamento:req.body.apartamento,
                id_Condomino:req.body.id_Condomino || null
            }
            let resultUpdate = await Pet.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Pet.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.json(catchErro)
        }
    }
}

module.exports = new petController ('pet')