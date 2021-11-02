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
    nomeCondomino:{
        type: Sequelize.STRING,
        allowNull: false
    },
    apartamento:{
        type: Sequelize.STRING,
        allowNull: false
    },
    bloco:{
        type: Sequelize.STRING, 
        allowNull: false    
    },
    dataRegistro:{
        type: Sequelize.STRING,   
        allowNull: false  
    },
    numeroRegistro:{
        type: Sequelize.INTEGER,   
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