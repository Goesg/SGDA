const Funcionario = require('../models/Funcionario')

class funcionarioController {
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
                    dataCadastro:new Date().toLocaleDateString(),
                    ativo:req.body.ativo,
                    cargo:req.body.cargo,
                    ctps:req.body.ctps,
                    id_Condominio: req.body.id_Condominio || null,
                }
                let resultInsert = await Funcionario.insertUser(dataUser)
                res.json(resultInsert.result)
            }catch(err){
                console.log(err)
                let catchErro = {erro:`Houve uma falha no servidor ao cadastrar um novo ${this.name}`}
                res.json(catchErro)
            }
         }       
         inserirUsuario() 
    };

    async showAll(req,res){
        try{
            let resultFindAll = await Funcionario.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos os ${this.name}s`}
            res.json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Funcionario.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async showByEmail(req,res){    
        try{
            let resultFindId = await Funcionario.findByEmail(req.params.email)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo email`}
            res.json(catchErro)
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
                cargo:req.body.cargo,
                ctps:req.body.ctps,
                id_Condominio: req.body.id_Condominio || null

            }
            let resultUpdate = await Funcionario.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Funcionario.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.json(catchErro)
        }
    }

    async recoveryPassword(req,res){
       try{
           let {cpf,novaSenha} = req.body
           let resultPassword = await Funcionario.updatePassword(cpf,novaSenha)
           res.json(resultPassword.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao mudar a senha`}
            res.json(catchErro)
        }
    }
    
    async login(req,res){
        try{
            let {login , senha} = await req.body
            let resultLogin = await Funcionario.login(login,senha)
            res.json(resultLogin.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao fazer login`}
            res.json(catchErro)
        }
    }
}

module.exports = new funcionarioController ('funcionário')