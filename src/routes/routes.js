const router = require('express').Router()
const condominoController = require('../controllers/condominoController')
const agendaController = require('../controllers/agendaController')
const apartamentoController = require('../controllers/apartamentoController')
const boletoController = require('../controllers/boletoController')
const condominioController = require('../controllers/condominioController')
const encomendaController = require('../controllers/encomendaController')
const eventoController = require('../controllers/eventoController')
const funcionarioController = require('../controllers/funcionarioController')
const mensagemController = require('../controllers/mensagemController')
const negociacaoController = require('../controllers/negociacaoController')
const noticiaController = require('../controllers/noticiaController')
const petController = require('../controllers/petController')
const prestadorController = require('../controllers/prestadorController')
const reservaController = require('../controllers/reservaController')
const sindicoController = require('../controllers/sindicoController')
const solicitacaoController = require('../controllers/solicitacaoController')
const veiculoController = require('../controllers/veiculoController')
const visitaController = require('../controllers/visitaController')

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
router.get('/boleto/view/:idCondomino', boletoController.showAllByIdCondomino)

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

// ENCOMENDA
router.post('/encomenda', encomendaController.create)
router.get('/encomendas', encomendaController.showAll)
router.get('/encomendas/idCondomino/:idCondomino', encomendaController.showByIdCondomino)
router.get('/encomenda/:id', encomendaController.showById)
router.put('/encomenda', encomendaController.editById)
router.delete('/encomenda/:id', encomendaController.removeById)

// EVENTO
router.post('/evento', eventoController.create)
router.get('/eventos', eventoController.showAll)
router.get('/eventos/data/:data', eventoController.showBydata)
router.get('/evento/:id', eventoController.showById)
router.put('/evento', eventoController.editById)
router.delete('/evento/:id', eventoController.removeById)

// FUNCIONARIO
router.post('/funcionario', funcionarioController.create)
router.get('/funcionarios', funcionarioController.showAll)
router.get('/funcionario/:id', funcionarioController.showById)
router.put('/funcionario', funcionarioController.editById)
router.delete('/funcionario/:id', funcionarioController.removeById)
router.post('/recovery/funcionario', funcionarioController.recoveryPassword)
router.post('/funcionario/login',funcionarioController.login)

// MENSAGEM
router.post('/mensagem', mensagemController.create)
router.get('/mensagens', mensagemController.showAll)
router.get('/mensagens/pergunta/:idCondomino', mensagemController.showByIdCondominoPergunta)
router.get('/mensagens/pergunta', mensagemController.showAllByPergunta)
router.get('/mensagens/resposta', mensagemController.showAllByResposta)
router.get('/mensagens/resposta/:idCondomino', mensagemController.showByIdCondominoResposta)
router.get('/mensagem/:id', mensagemController.showById)
router.put('/mensagem', mensagemController.editById)
router.delete('/mensagem/:id', mensagemController.removeById)

// NEGOCIACAO
router.post('/negociacao', negociacaoController.create)
router.get('/negociacoes', negociacaoController.showAll)
router.get('/negociacao/codMovel/:codMovel', negociacaoController.showByCodigo)
router.get('/negociacao/:id', negociacaoController.showById)
router.put('/negociacao', negociacaoController.editById)
router.delete('/negociacao/:id', negociacaoController.removeById)

// NOTICIA
router.post('/noticia', noticiaController.create)
router.get('/noticias', noticiaController.showAll)
router.get('/noticias/data/:data', noticiaController.showBydata)
router.get('/noticia/:id', noticiaController.showById)
router.put('/noticia', noticiaController.editById)
router.delete('/noticia/:id', noticiaController.removeById)

// PET
router.post('/pet', petController.create)
router.get('/pets', petController.showAll)
router.get('/pets/apartamento/:apartamento', petController.showByApartamento)
router.get('/pet/:id', petController.showById)
router.put('/pet', petController.editById)
router.delete('/pet/:id', petController.removeById)

// PRESTADOR
router.post('/prestador', prestadorController.create)
router.get('/prestadores', prestadorController.showAll)
router.get('/prestador/:id', prestadorController.showById)
router.put('/prestador', prestadorController.editById)
router.delete('/prestador/:id', prestadorController.removeById)

// RESERVA
router.post('/reserva', reservaController.create)
router.get('/reservas', reservaController.showAll)
router.get('/reservas/idCondomino/:idCondomino', reservaController.showByIdCondomino)
router.get('/reserva/:id', reservaController.showById)
router.put('/reserva', reservaController.editById)
router.delete('/reserva/:id', reservaController.removeById)

// SINDICO
router.post('/sindico', sindicoController.create)
router.get('/sindicos', sindicoController.showAll)
router.get('/sindico/:id', sindicoController.showById)
router.put('/sindico', sindicoController.editById)
router.delete('/sindico/:id', sindicoController.removeById)
router.post('/recovery/sindico', sindicoController.recoveryPassword)
router.post('/sindico/login',sindicoController.login)

// SOLICITACAO
router.post('/solicitacao', solicitacaoController.create)
router.get('/solicitacoes', solicitacaoController.showAll)
router.get('/solicitacao/idCondomino/:idCondomino', solicitacaoController.showAllByIdCondomino)
router.get('/solicitacao/:id', solicitacaoController.showById)
router.put('/solicitacao', solicitacaoController.editById)
router.delete('/solicitacao/:id', solicitacaoController.removeById)

// VEICULO
router.post('/veiculo', veiculoController.create)
router.get('/veiculos', veiculoController.showAll)
router.get('/veiculo/placa/:placa', veiculoController.showByPlaca)
router.get('/veiculo/:id', veiculoController.showById)
router.put('/veiculo', veiculoController.editById)
router.delete('/veiculo/:id', veiculoController.removeById)

// VISITA
router.post('/visita', visitaController.create)
router.get('/visitas', visitaController.showAll)
router.get('/visita/rg/:rg', visitaController.showByRg)
router.get('/visita/:id', visitaController.showById)
router.put('/visita', visitaController.editById)
router.delete('/visita/:id', visitaController.removeById)



module.exports = router