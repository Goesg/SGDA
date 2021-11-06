const Visita = require('../models/Visita')

class visitaController {
    constructor(name){
        this.name = name
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataUser =  await {
                    nome:req.body.nome,
                    sexo:req.body.sexo,
                    rg:req.body.rg,
                    expedicao:req.body.expedicao,
                    dataEntrada: new Date().toLocaleDateString(),
                    dataSaida: req.body.dataSaida,
                    autorizado: req.body.autorizado,
                    id_Apartamento:req.body.id_Apartamento
                }
                let resultInsert = await Visita.insertUser(dataUser)
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
            let resultFindAll = await Visita.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos ${this.name}s`}
            res.status(500).json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Visita.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async showByRg(req,res){    
        try{
            let resultFindData = await Visita.findByRg(req.params.rg)
            res.json(resultFindData.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo rg`}
            res.status(500).json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                nome:req.body.nome,
                sexo:req.body.sexo,
                rg:req.body.rg,
                expedicao:req.body.expedicao,
                dataEntrada: req.body.dataEntrada,
                dataSaida: req.body.dataSaida,
                autorizado: req.body.autorizado,
                id_Apartamento:req.body.id_Apartamento
            }
            let resultUpdate = await Visita.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Visita.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    }
}

module.exports = new visitaController ('visita')