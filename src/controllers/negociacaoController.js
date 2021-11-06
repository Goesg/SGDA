const Negociacao = require('../models/Negociacao')

class negociacaoController {
    constructor(name){
        this.name = name
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataUser =  await {
                    codMovel:req.body.codMovel,
                    proprietario:req.body.proprietario,
                    condomino:req.body.condomino,
                    numeroApartamento:req.body.numeroApartamento,
                    bloco:req.body.bloco,
                    dataRegistro:new Date().toLocaleDateString(),
                    valorPago:req.body.valorPago,
                    observacao:req.body.observacao,
                    id_Apartamento:req.body.id_Apartamento || null
                }
                let resultInsert = await Negociacao.insertUser(dataUser)
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
            let resultFindAll = await Negociacao.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos ${this.name}s`}
            res.status(500).json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Negociacao.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async showByCodigo(req,res){    
        try{
            let resultFindNumero = await Negociacao.findByCodMovel(req.params.codMovel)
            res.json(resultFindNumero.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo codigo`}
            res.status(500).json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                codMovel:req.body.codMovel,
                proprietario:req.body.proprietario,
                condomino:req.body.condomino,
                numeroApartamento:req.body.numeroApartamento,
                bloco:req.body.bloco,
                dataRegistro:req.body.dataRegistro,
                valorPago:req.body.valorPago,
                observacao:req.body.observacao,
                id_Apartamento:req.body.id_Apartamento || null
            }
            let resultUpdate = await Negociacao.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Negociacao.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    }
}

module.exports = new negociacaoController ('negociacao')