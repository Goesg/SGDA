const Boleto = require('../models/Boleto')

class boletoController {
    constructor(name){
        this.name = name
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataUser =  await {
                    apartamento:req.body.apartamento,
                    anoReferencia:req.body.anoReferencia,
                    mesReferencia:req.body.mesReferencia,
                    valorPago:req.body.valorPago,
                    bloco:req.body.bloco,
                    dataPagamento:req.body.dataPagamento,
                    observacao:req.body.observacao,
                    id_Condomino:req.body.id_Condomino || null,
                }
                let resultInsert = await Boleto.insertUser(dataUser)
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
            let resultFindAll = await Boleto.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos ${this.name}s`}
            res.status(500).json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Boleto.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async showByApartamento(req,res){    
        try{
            let resultFindData = await Boleto.findByApartamento(req.params.apartamento)
            res.json(resultFindData.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo apartamento`}
            res.status(500).json(catchErro)
        }
    };

    async showAllByIdCondomino(req,res){    
        try{
            let resultFindData = await Boleto.findAllByIdCondomino(req.params.idCondomino)
            res.render('boleto', {dados: resultFindData.result})
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id do condômino`}
            res.status(500).json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                apartamento:req.body.apartamento,
                anoReferencia:req.body.anoReferencia,
                mesReferencia:req.body.mesReferencia,
                valorPago:req.body.valorPago,
                bloco:req.body.bloco,
                dataPagamento:req.body.dataPagamento,
                observacao:req.body.observacao,
                id_Condomino:req.body.id_Condomino || null,
            }
            let resultUpdate = await Boleto.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Boleto.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    }
}

module.exports = new boletoController ('boleto')