const {db,Sequelize} = require('../connection')
const Condomino = require("./Condominio")

const Reserva = db.define('reserva',{
    tipo:{
        type: Sequelize.STRING,    
    },
    condomino:{
        type: Sequelize.STRING,    
    },
    data:{
        type: Sequelize.STRING,    
    },
    horario:{
        type: Sequelize.STRING,    
    },
    descricao:{
        type: Sequelize.STRING,    
    },
})

Reserva.belongsTo(Condomino,{
    constraint:true,
    foreignKey:'id_Condomino',
})

module.exports = Reserva