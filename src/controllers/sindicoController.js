const Sindico = require('../models/Sindico')

class sindicoController {
    constructor(name){
        this.name = name
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataUser =  await {
                    nome:req.body.nome,
                    cpf:req.body.cpf,
                    email:req.body.email,
                    login:req.body.login,
                    senha:req.body.senha,
                    dataNascimento:req.body.dataNascimento,
                    sexo:req.body.sexo,    
                    estadoCivil:req.body.estadoCivil,
                    rg:req.body.rg,
                    cep:req.body.cep,
                    telefone:req.body.telefone,
                    dataCadastro:new Date().toLocaleDateString('PT-BR',{year: 'numeric', month: 'short', weekday: 'long', day: 'numeric',}),
                    ativo:req.body.ativo,
                }
                let resultInsert = await Sindico.insertUser(dataUser)
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
            let resultFindAll = await Sindico.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos ${this.name}s`}
            res.status(500).json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Sindico.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async showByEmail(req,res){    
        try{
            let resultFindId = await Sindico.findByEmail(req.params.email)
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
                cpf:req.body.cpf,
                email:req.body.email,
                login:req.body.login,
                senha:req.body.senha,
                dataNascimento:req.body.dataNascimento,
                sexo:req.body.sexo,    
                estadoCivil:req.body.estadoCivil,
                rg:req.body.rg,
                cep:req.body.cep,
                telefone:req.body.telefone,
                dataCadastro:req.body.dataCadastro,
                ativo:req.body.ativo,
            }
            let resultUpdate = await Sindico.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Sindico.deleteById(req.params.id)
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
           let resultPassword = await Sindico.updatePassword(cpf,novaSenha)
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
            let resultLogin = await Sindico.login(login,senha)
            res.json(resultLogin.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao fazer login`}
            res.status(500).json(catchErro)
        }
    }
}

module.exports = new sindicoController ('síndico')