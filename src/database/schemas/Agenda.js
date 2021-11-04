const {db,Sequelize} = require('../connection')

const Agenda = db.define('agenda',{
    data:{
        type: Sequelize.STRING,
    },
    titulo:{
        type: Sequelize.STRING,
    },
    assunto:{
        type: Sequelize.TEXT,
    },
    horario:{
        type: Sequelize.STRING,
    },
})

module.exports = Agenda