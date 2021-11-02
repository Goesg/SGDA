const {db,Sequelize} = require('../connection')

const Condominio = db.define('condominio',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco:{
        type: Sequelize.STRING,
    },
    cidade:{
        type: Sequelize.STRING,
    },
    estado:{
        type: Sequelize.STRING, 
    },
    cep:{
        type: Sequelize.STRING,   
    },
})

module.exports = Condominio