const {db,Sequelize} = require('../connection')
const Condomino = require("./Condomino")

const Encomenda = db.define('encomenda',{
    dataRegistro:{
        type: Sequelize.STRING,    
    },
    apartamento:{
        type: Sequelize.STRING,    
    },
    nome:{
        type: Sequelize.STRING,    
    },
    status:{
        type: Sequelize.STRING,    
    },
})

Encomenda.belongsTo(Condomino,{
    constraint:true,
    foreignKey:'id_Condomino',
})

module.exports = Encomenda