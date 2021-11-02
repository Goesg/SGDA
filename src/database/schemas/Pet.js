const {db,Sequelize} = require('../connection')
const Condomino = require('./Condominio')

const Pet = db.define('pet',{
    nome:{
        type: Sequelize.STRING,    
    },
    raca:{
        type: Sequelize.STRING,    
    },
    idade:{
        type: Sequelize.STRING,    
    },
    apartamento:{
        type: Sequelize.STRING,    
    },
})

Pet.belongsTo(Condomino,{
    constraint:true,
    foreignKey:'id_Condomino',
})

module.exports = Pet