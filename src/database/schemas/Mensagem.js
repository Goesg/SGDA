const {db,Sequelize} = require('../connection')
const Condomino = require('./Condomino')

const Mensagem = db.define('mensagem',{
    assunto:{
        type: Sequelize.STRING,
        allowNull: false
    },
    texto:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    dataRegistro:{
        type: Sequelize.STRING,
    },
    remetente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    apartamento:{
        type: Sequelize.STRING,
    },
    tipo:{
        type: Sequelize.STRING
    }
})

Mensagem.belongsTo(Condomino,{
    constraint:true,
    foreignKey:'id_Condomino',
})

module.exports = Mensagem