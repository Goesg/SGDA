const express = require('express')
const app = express()
const port = 8787

const cors = require('cors')
app.use(cors()) 

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine','ejs')
app.use(express.static('public'))

const Condomino = require('./database/schemas/Condomino')
const Sindico = require('./database/schemas/Sindico')
const Condominio = require('./database/schemas/Condominio')
const Solicitacao = require('./database/schemas/Solicitacao')
const Reserva = require('./database/schemas/Reserva')
const Prestador = require('./database/schemas/Prestador')
const Pet = require('./database/schemas/Pet')
const Noticia = require('./database/schemas/Noticia')
const Funcionario = require('./database/schemas/Funcionario')
const Apartamento = require('./database/schemas/Apartamento')
const Negociacao = require('./database/schemas/Negociacao')
const Veiculo = require('./database/schemas/Veiculo')
const Boleto = require('./database/schemas/Boleto')
const Agenda = require('./database/schemas/Agenda')
const Visita = require('./database/schemas/Visita')
const {db} = require('./database/connection')
// db.sync({force:true})

const routes = require('./routes/routes')

app.use('/',routes)

app.listen(port,(err)=>{
    if(err)console.log(`Erro ao inicializar o servido: ${err}`)
    else{console.log(`Servidor inicalizado com sucesso!!!`)}
})