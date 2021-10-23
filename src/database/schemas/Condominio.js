const {db,Sequelize} = require('../connection')

const Condominio = db.define('condominios',{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    birth_date:{
        type: Sequelize.STRING,
       
    },
    sex:{
        type: Sequelize.STRING,
       
    },
    phone:{
        type: Sequelize.STRING,
       
    },
})

module.exports = Condominio