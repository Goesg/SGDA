const Mensagem = require('../models/Mensagem')

class mensagemController {
    constructor(name){
        this.name = name
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataUser =  await {
                    assunto:req.body.assunto,
                    texto:req.body.texto,
                    dataRegistro: new Date().toLocaleDateString(),
                    remetente:req.body.remetente,
                    apartamento:req.body.apartamento,
                    tipo:req.body.tipo,
                    id_Condomino:req.body.id_Condomino || null
                }
                let resultInsert = await Mensagem.insertUser(dataUser)
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
            let resultFindAll = await Mensagem.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todas as mensagens`}
            res.json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Mensagem.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async showAllByPergunta(req,res){    
        try{
            let resultFindData = await Mensagem.findAllByPergunta()
            res.json(resultFindData.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pela id do condomino`}
            res.json(catchErro)
        }
    };

    async showAllByResposta(req,res){    
        try{
            let resultFindData = await Mensagem.findAllByResposta()
            res.json(resultFindData.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pela id do condomino`}
            res.json(catchErro)
        }
    };

    async showByIdCondominoPergunta(req,res){    
        try{
            let resultFindData = await Mensagem.findAllByIdCondominoPergunta(req.params.idCondomino)
            res.json(resultFindData.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pela id do condomino`}
            res.json(catchErro)
        }
    };

    async showByIdCondominoResposta(req,res){    
        try{
            let resultFindData = await Mensagem.findAllByIdCondominoResposta(req.params.idCondomino)
            res.json(resultFindData.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pela id do condomino`}
            res.json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                assunto:req.body.assunto,
                texto:req.body.texto,
                dataRegistro:req.body.data,
                remetente:req.body.remetente,
                tipo:req.body.tipo,
                id_Condomino:req.body.id_Condomino || null
            }
            let resultUpdate = await Mensagem.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Mensagem.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.json(catchErro)
        }
    }
}

module.exports = new mensagemController ('mensagem')