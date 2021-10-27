const router = require('express').Router()
const condominoController = require('../controllers/condominoController')


// INSERIR CONDOMINO
router.post('/condomino', condominoController.create)

// MOSTRAR TODOS OS USUÁRIOS
router.get('/condominos', condominoController.showAll)

// MOSTRAR CONDOMINO PELO ID
router.get('/condomino/:id', condominoController.showById)

// ATUALIZAR CONDOMINO PELO UD
router.put('/condomino', condominoController.editById)

// DELETAR USUÁRIO PELO ID
router.delete('/condomino/:id', condominoController.removeById)

// TROCAR SENHA PELO CPF
router.post('/recovery', condominoController.recoveryPassword)

// ROTA DE LOGIN DE CONDOMINO
router.post('/login',condominoController.login)

module.exports = router