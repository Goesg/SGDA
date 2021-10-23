//KNEX.JS
const kenx = require('knex')({
    client:'mysql2',
    connection:{
        host:'localhost',
        user:'root',
        password:'goes2310',
        database:'SGADC'
    }
});

//SEQUELIZE
const Sequelize = require('sequelize')

const Connection = new Sequelize('SGADC','root','goes2310',{
    host:'localhost',
    dialect:'mysql',
    define: {
        timestamps: false
    }
})
Connection.authenticate().then(()=>{console.log('Conexão com o banco estabelicida')})
.catch(err => {console.log(`Erro ao se conectar com banco: \n ${err}`)})

module.exports ={
    database : kenx,
    db : Connection,
    Sequelize : Sequelize,
}