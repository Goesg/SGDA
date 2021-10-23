const Condominio = require('../models/Condominio')

class condominioController {
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataUser =  await {
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password,
                    cpf:req.body.cpf,
                    birth_date: req.body.birth_date,
                    sex:req.body.sex,
                    phone:req.body.phone
                }
                let resultInsert = await Condominio.insertUser(dataUser)
                res.json(resultInsert.result)
            }catch(err){
                console.log(err)
                let catchErro = {erro:`Houve uma falha no servidor ao cadastrar um novo usuário`}
                res.status(500).json(catchErro)
            }
         }       
         inserirUsuario() 
    };

    async showAll(req,res){
        try{
            let resultFindAll = await Condominio.findAll()
            res.status(resultFindAll.status).json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos usuarios`}
            res.status(500).json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Condominio.findById(req.params.id)
            res.status(resultFindId.status).json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar usuario pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async showByEmail(req,res){    
        try{
            let resultFindId = await Condominio.findByEmail(req.body.email)
            res.status(resultFindId.status).json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar usuario pelo email`}
            res.status(500).json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                cpf:req.body.cpf,
                birth_date: req.body.birth_date,
                sex:req.body.sex,
                phone:req.body.phone
            }
            let resultUpdate = await Condominio.updateById(dataUpdate)
            res.status(resultUpdate.status).json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar usuario pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Condominio.deleteById(req.params.id)
           res.status(resultDelete.status).json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover usuario pelo id`}
            res.status(500).json(catchErro)
        }
    }

    async recoveryPassword(req,res){
       try{
           let {cpf,newPassword} = req.body
           let resultToken = await Condominio.updatePassword(cpf,newPassword)
           res.status(resultToken.status).json(resultToken.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao mudar a senha`}
            res.status(500).json(catchErro)
        }
    }
    
    async login(req,res){
        try{
            let {email , password} = await req.body
            let resultLogin = await Condominio.loginUser(email,password)
            res.json(resultLogin.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao fazer login`}
            res.status(500).json(catchErro)
        }
    }
}

module.exports = new condominioController