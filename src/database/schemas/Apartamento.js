const {db,Sequelize} = require('../connection')
const Condomino = require('./Condomino')

const Apartamento = db.define('apartamento',{
    numeroAndar:{
        type: Sequelize.INTEGER,    
    },
    numero:{
        type: Sequelize.INTEGER,    
    },
    interFone:{
        type: Sequelize.STRING,    
    },
})

Apartamento.belongsTo(Condomino,{
    constraint:true,
    foreignKey:'id_Condomino',
})



module.exports = Apartamento