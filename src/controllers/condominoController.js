const Condomino = require('../models/Condomino')

class condominoController {
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
                let resultInsert = await Condomino.insertUser(dataUser)
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
            let resultFindAll = await Condomino.findAll()
            res.status(resultFindAll.status).json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos usuarios`}
            res.status(500).json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Condomino.findById(req.params.id)
            res.status(resultFindId.status).json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar usuario pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async showByEmail(req,res){    
        try{
            let resultFindId = await Condomino.findByEmail(req.body.email)
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
            let resultUpdate = await Condomino.updateById(dataUpdate)
            res.status(resultUpdate.status).json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar usuario pelo id`}
            res.status(500).json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Condomino.deleteById(req.params.id)
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
           let resultPassword = await Condomino.updatePassword(cpf,newPassword)
           res.json(resultPassword.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao mudar a senha`}
            res.status(500).json(catchErro)
        }
    }
    
    async login(req,res){
        try{
            let {email , password} = await req.body
            let resultLogin = await Condomino.loginUser(email,password)
            res.json(resultLogin.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao fazer login`}
            res.status(500).json(catchErro)
        }
    }
}

module.exports = new condominoController