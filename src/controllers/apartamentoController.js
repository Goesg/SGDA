const Apartamento = require('../models/Apartamento')

class apartamentoController {
    constructor(name){
        this.name = name
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataUser =  await {
                    numeroAndar:req.body.numeroAndar,
                    numero:req.body.numero,
                    interFone:req.body.interFone,
                    id_Condomino:req.body.id_Condomino
                }
                let resultInsert = await Apartamento.insertUser(dataUser)
                res.json(resultInsert.result)
            }catch(err){
                console.log(err)
                let catchErro = {erro:`Houve uma falha no servidor ao cadastrar um novo ${this.name}`}
                res.status(500).json(catchErro)
            }
         }       
         inserirUsuario() 
    };

    async showAll(req,res){
        try{
            let resultFindAll = await Apartamento.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos ${this.name}s`}
            res.status(500).json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Apartamento.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async showByNumero(req,res){    
        try{
            let resultFindNumero = await Apartamento.findByNumero(req.params.numero)
            res.json(resultFindNumero.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo numero`}
            res.status(500).json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                numeroAndar:req.body.numeroAndar,
                numero:req.body.numero,
                interFone:req.body.interFone,
                id_Condomino:req.body.id_Condomino 
            }
            let resultUpdate = await Apartamento.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Apartamento.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    }
}

module.exports = new apartamentoController ('apartamento')