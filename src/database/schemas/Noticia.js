const {db,Sequelize} = require('../connection')

const Noticia = db.define('noticia',{
    titulo:{
        type: Sequelize.STRING,    
    },
    conteudo:{
        type: Sequelize.TEXT,    
    },
    data:{
        type: Sequelize.STRING,    
    },
})

module.exports = Noticia