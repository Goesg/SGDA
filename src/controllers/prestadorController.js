const Prestador = require('../models/Prestador')

class prestadorController {
    constructor(name){
        this.name = name
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataUser =  await {
                    nome:req.body.nome,
                    cargo:req.body.cargo,
                    sexo:req.body.sexo,    
                    dataNascimento:req.body.dataNascimento,
                    estadoCivil:req.body.estadoCivil,
                    cpf:req.body.cpf,
                    rg:req.body.rg,
                    cnpj:req.body.cnpj,
                    endereco:req.body.endereco,
                    bairro:req.body.bairro,
                    cep:req.body.cep,
                    telefone:req.body.telefone,
                    celular:req.body.celular,
                }
                let resultInsert = await Prestador.insertUser(dataUser)
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
            let resultFindAll = await Prestador.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos ${this.name}s`}
            res.status(500).json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Prestador.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async showByEmail(req,res){    
        try{
            let resultFindId = await Prestador.findByEmail(req.params.email)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} o pelo email`}
            res.status(500).json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                nome:req.body.nome,
                cargo:req.body.cargo,
                sexo:req.body.sexo,    
                dataNascimento:req.body.dataNascimento,
                estadoCivil:req.body.estadoCivil,
                cpf:req.body.cpf,
                rg:req.body.rg,
                cnpj:req.body.cnpj,
                endereco:req.body.endereco,
                bairro:req.body.bairro,
                cep:req.body.cep,
                telefone:req.body.telefone,
                celular:req.body.celular,
            }
            let resultUpdate = await Prestador.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Prestador.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    }

    async recoveryPassword(req,res){
       try{
           let {cpf,novaSenha} = req.body
           let resultPassword = await Prestador.updatePassword(cpf,novaSenha)
           res.json(resultPassword.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao mudar a senha`}
            res.status(500).json(catchErro)
        }
    }
    
    async login(req,res){
        try{
            let {login , senha} = await req.body
            let resultLogin = await Prestador.login(login,senha)
            res.json(resultLogin.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao fazer login`}
            res.status(500).json(catchErro)
        }
    }
}

module.exports = new prestadorController ('prestador')