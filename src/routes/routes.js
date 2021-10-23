const router = require('express').Router()
const condominioController = require('../controllers/condominioController')


// INSERIR USUARIO
router.post('/user', condominioController.create)

// MOSTRAR TODOS OS USUÁRIOS
router.get('/users', condominioController.showAll)

// MOSTRAR USUARIO PELO ID
router.get('/user/:id', condominioController.showById)

// ATUALIZAR USUARIO PELO UD
router.put('/user', condominioController.editById)

// DELETAR USUÁRIO PELO ID
router.delete('/user/:id', condominioController.removeById)

// TROCAR SENHA PELO CPF
router.post('/recovery', condominioController.recoveryPassword)

// ROTA DE LOGIN DE USUARIO
router.post('/login',condominioController.login)

module.exports = router