const Encomenda = require('../models/Encomenda')

class encomendaController {
    constructor(name){
        this.name = name
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataUser =  await {
                    dataRegistro:new Date().toLocaleDateString(),
                    apartamento:req.body.apartamento,
                    nome:req.body.nome,
                    status:req.body.status,
                    id_Condomino: req.body.id_Condomino || null
                }
                let resultInsert = await Encomenda.insertUser(dataUser)
                res.json(resultInsert.result)
            }catch(err){
                console.log(err)
                let catchErro = {erro:`Houve uma falha no servidor ao cadastrar uma nova ${this.name}`}
                res.json(catchErro)
            }
         }       
         inserirUsuario() 
    };

    async showAll(req,res){
        try{
            let resultFindAll = await Encomenda.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todas ${this.name}s`}
            res.json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Encomenda.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async showByIdCondomino(req,res){    
        try{
            let resultFindData = await Encomenda.findAllByIdCondomino(req.params.idCondomino)
            res.json(resultFindData.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo condômino`}
            res.json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                dataRegistro:req.body.dataRegistro,
                apartamento:req.body.apartamento,
                nome:req.body.nome,
                status:req.body.status,
                id_Condomino: req.body.id_Condomino || null
            }
            let resultUpdate = await Encomenda.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Encomenda.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.json(catchErro)
        }
    }
}

module.exports = new encomendaController ('encomenda')