const {db,Sequelize} = require('../connection')
const Apartamento = require('./Apartamento')

const Visita = db.define('visita',{
    nome:{
        type: Sequelize.STRING,
    },
    sexo:{
        type: Sequelize.STRING,
    },
    rg:{
        type: Sequelize.STRING,
    },
    expedicao:{
        type: Sequelize.STRING,
    },
    dataEntrada:{
        type: Sequelize.STRING,
    },
    dataSaida:{
        type: Sequelize.STRING,
    },
    autorizado:{
        type: Sequelize.STRING,
    },
})

Visita.belongsTo(Apartamento,{
    constraint:true,
    foreignKey:'id_Apartamento',
})

module.exports = Visita