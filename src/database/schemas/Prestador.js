const {db,Sequelize} = require('../connection')

const Prestador = db.define('prestador',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    sexo:{
        type: Sequelize.STRING,
    },
    dataNascimento:{
        type: Sequelize.STRING,
    },
    estadoCivil:{
        type: Sequelize.STRING,
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    rg:{
        type: Sequelize.STRING,
    },
    cnpj:{
        type: Sequelize.STRING,
    },
    endereco:{
         type: Sequelize.STRING,
    },
    bairro:{
        type: Sequelize.STRING,      
    }, 
    cep:{
        type: Sequelize.STRING,       
    },
    telefone:{
        type: Sequelize.STRING,      
    },
    celular:{
        type: Sequelize.STRING,      
    },
})

module.exports = Prestador