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
const {db} = require('./database/connection')
// db.sync({force:true})

const routes = require('./routes/routes')

app.use('/',routes)

app.listen(port,(err)=>{
    if(err)console.log(`Erro ao inicializar o servido: ${err}`)
    else{console.log(`Servidor inicalizado com sucesso!!!`)}
})