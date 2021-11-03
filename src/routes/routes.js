const router = require('express').Router()
const condominoController = require('../controllers/condominoController')
const agendaController = require('../controllers/agendaController')
const apartamentoController = require('../controllers/apartamentoController')


// CONDOMINO
router.post('/condomino', condominoController.create)
router.get('/condominos', condominoController.showAll)
router.get('/condomino/:id', condominoController.showById)
router.post('/edit/condomino', condominoController.editById)
router.post('/delete/condomino', condominoController.removeById)
router.post('/recovery/condomino', condominoController.recoveryPassword)
router.post('/login/condomino',condominoController.login)

// AGENDA
router.post('/agenda', agendaController.create)
router.get('/agendas', agendaController.showAll)
router.post('/agendas/data', agendaController.showBydata)
router.get('/agenda/:id', agendaController.showById)
router.post('/edit/agenda', agendaController.editById)
router.post('/delete/agenda', agendaController.removeById)

// APARTAMENTO
router.post('/apartamento', apartamentoController.create)
router.get('/apartamentos', apartamentoController.showAll)
router.post('/apartamento/numero', apartamentoController.showByNumero)
router.get('/apartamento/:id', apartamentoController.showById)
router.post('/edit/apartamento', apartamentoController.editById)
router.post('/delete/apartamento', apartamentoController.removeById)


module.exports = router