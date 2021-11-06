const {db,Sequelize} = require('../connection')

const Apartamento = require('./Apartamento')

const Negociacao = db.define('negociacao',{
    codMovel:{
        type: Sequelize.STRING,
        allowNull: false  
    },
    proprietario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    numeroApartamento:{
        type: Sequelize.STRING,
        allowNull: false
    },
    bloco:{
        type: Sequelize.STRING, 
    },
    dataRegistro:{
        type: Sequelize.STRING,   
    },
    valorPago:{
        type: Sequelize.STRING,   
    },
    observacao:{
        type: Sequelize.STRING,    
    },
})

Negociacao.belongsTo(Apartamento,{
    constraint:true,
    foreignKey:'id_Apartamento',
})


module.exports = Negociacao