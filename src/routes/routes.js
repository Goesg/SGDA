const router = require('express').Router()
const condominoController = require('../controllers/condominoController')
const agendaController = require('../controllers/agendaController')
const apartamentoController = require('../controllers/apartamentoController')
const boletoController = require('../controllers/boletoController')
const condominioController = require('../controllers/condominioController')
const funcionarioController = require('../controllers/funcionarioController')


// AGENDA
router.post('/agenda', agendaController.create)
router.get('/agendas', agendaController.showAll)
router.get('/agendas/data/:data', agendaController.showBydata)
router.get('/agenda/:id', agendaController.showById)
router.put('/agenda', agendaController.editById)
router.delete('/agenda/:id', agendaController.removeById)

// APARTAMENTO
router.post('/apartamento', apartamentoController.create)
router.get('/apartamentos', apartamentoController.showAll)
router.get('/apartamento/numero/:numero', apartamentoController.showByNumero)
router.get('/apartamento/:id', apartamentoController.showById)
router.put('/apartamento', apartamentoController.editById)
router.delete('/apartamento/:id', apartamentoController.removeById)

// BOLETO
router.post('/boleto', boletoController.create)
router.get('/boletos', boletoController.showAll)
router.get('/boleto/apartamento/:apartamento', boletoController.showByApartamento)
router.get('/boleto/:id', boletoController.showById)
router.put('/boleto', boletoController.editById)
router.delete('/boleto/:id', boletoController.removeById)

// CONDOMINIO
router.post('/condominio', condominioController.create)
router.get('/condominios', condominioController.showAll)
router.get('/condominio/cidade/:cidade', condominioController.showByCidade)
router.get('/condominio/:id', condominioController.showById)
router.put('/condominio', condominioController.editById)
router.delete('/condominio/:id', condominioController.removeById)

// CONDOMINO
router.post('/condomino', condominoController.create)
router.get('/condominos', condominoController.showAll)
router.get('/condomino/:id', condominoController.showById)
router.put('/condomino', condominoController.editById)
router.delete('/condomino/:id', condominoController.removeById)
router.post('/recovery/condomino', condominoController.recoveryPassword)
router.post('/login/condomino',condominoController.login)

// FUNCIONARIO
router.post('/funcionario', funcionarioController.create)
router.get('/funcionarios', funcionarioController.showAll)
router.get('/funcionario/:id', funcionarioController.showById)
router.put('/funcionario', funcionarioController.editById)
router.delete('/funcionario/:id', funcionarioController.removeById)
router.post('/recovery/funcionario', funcionarioController.recoveryPassword)
router.post('/login/funcionario',funcionarioController.login)


module.exports = router