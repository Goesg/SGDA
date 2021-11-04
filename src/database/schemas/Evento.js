const {db,Sequelize} = require('../connection')

const Evento = db.define('evento',{
    nome:{
        type: Sequelize.STRING,    
    },
    tipo:{
        type: Sequelize.STRING,    
    },
    descricao:{
        type: Sequelize.TEXT,    
    },
    data:{
        type: Sequelize.STRING,    
    },
})

module.exports = Evento