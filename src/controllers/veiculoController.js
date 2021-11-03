const Veiculo = require('../models/Veiculo')

class veiculoController {
    constructor(name){
        this.name = name
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataUser =  await {
                    modelo:req.body.modelo,
                    placa:req.body.placa,
                    ano:req.body.ano,
                    cor:req.body.cor,
                    id_Condomino: req.body.id_Condomino,
                    id_Sindico: req.body.id_Sindico,
                    id_Funcionario: req.body.id_Funcionario
                }
                let resultInsert = await Veiculo.insertUser(dataUser)
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
            let resultFindAll = await Veiculo.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos ${this.name}s`}
            res.status(500).json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Veiculo.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async showByPlaca(req,res){    
        try{
            let resultFindData = await Veiculo.findByPlaca(req.params.placa)
            res.json(resultFindData.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pela placa`}
            res.status(500).json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                modelo:req.body.modelo,
                placa:req.body.placa,
                ano:req.body.ano,
                cor:req.body.cor,
                id_Condomino: req.body.id_Condomino,
                id_Sindico: req.body.id_Sindico,
                id_Funcionario: req.body.id_Funcionario
            }
            let resultUpdate = await Veiculo.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Veiculo.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    }
}

module.exports = new veiculoController ('veiculo')