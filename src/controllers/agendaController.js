const Agenda = require('../models/Agenda')

class agendaController {
    constructor(name){
        this.name = name
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataUser =  await {
                    data:req.body.data,
                    titulo:req.body.titulo,
                    assunto:req.body.assunto,
                    horario:req.body.horario,
                }
                let resultInsert = await Agenda.insertUser(dataUser)
                res.json(resultInsert.result)
            }catch(err){
                console.log(err)
                let catchErro = {erro:`Houve uma falha no servidor ao inserir na ${this.name}`}
                res.json(catchErro)
            }
         }       
         inserirUsuario() 
    };

    async showAll(req,res){
        try{
            let resultFindAll = await Agenda.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todas as ${this.name}s`}
            res.json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Agenda.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async showBydata(req,res){    
        try{
            let resultFindData = await Agenda.findAllByData(req.params.data)
            res.json(resultFindData.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pela data`}
            res.json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                data:req.body.data,
                titulo:req.body.titulo,
                assunto:req.body.assunto,
                horario:req.body.horario,   
            }
            let resultUpdate = await Agenda.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Agenda.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.json(catchErro)
        }
    }
}

module.exports = new agendaController ('agenda')