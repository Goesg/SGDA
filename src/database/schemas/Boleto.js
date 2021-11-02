const {db,Sequelize} = require('../connection')
const Condomino = require('./Condominio')

const Boleto = db.define('boleto',{
    apartamento:{
        type: Sequelize.STRING,
    },
    anoReferencia:{
        type: Sequelize.STRING,
    },
    mesReferencia:{
        type: Sequelize.STRING,
    }, 
    valorPago:{
        type: Sequelize.STRING,
    },
    bloco:{
        type: Sequelize.STRING,
    },
    dataPagamento:{
        type: Sequelize.STRING,
    },
    observacao:{
        type: Sequelize.STRING,
    },
})

Boleto.belongsTo(Condomino,{
    constraint:true,
    foreignKey:'id_Condomino',
})

module.exports = Boleto