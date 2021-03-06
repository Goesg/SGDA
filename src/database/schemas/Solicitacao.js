const {db,Sequelize} = require('../connection')
const Condomino = require('./Condomino')

const Solicitacao = db.define('solicitacao',{
    codMovel:{
        type: Sequelize.STRING,
        allowNull: false
    },
    proprietario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    apartamento:{
        type: Sequelize.STRING,
        allowNull: false
    },
    bloco:{
        type: Sequelize.STRING, 
    },
    dataRegistro:{
        type: Sequelize.STRING,   
        allowNull: false  
    },
    numeroRegistro:{
        type: Sequelize.STRING,   
    },
    tipo:{
        type: Sequelize.STRING,    
    },
    observacao:{
        type: Sequelize.STRING,    
    },
})

Solicitacao.belongsTo(Condomino,{
    constraint:true,
    foreignKey:'id_Condomino',
})

module.exports = Solicitacao