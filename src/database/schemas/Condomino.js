const {db,Sequelize} = require('../connection')

const Condomino = db.define('condomino',{
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    login:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
         type: Sequelize.STRING,
        allowNull: false
    },
    dataNascimento:{
        type: Sequelize.STRING,
    },
    sexo:{
        type: Sequelize.STRING,
    },
    estadoCivil:{
        type: Sequelize.STRING,
    },
    rg:{
        type: Sequelize.STRING,
    },
    cep:{
        type: Sequelize.STRING,      
    }, 
    telefone:{
        type: Sequelize.STRING,       
    },
    dataCadastro:{
        type: Sequelize.STRING,      
    },
    ativo:{
        type: Sequelize.STRING,      
    },
    dependentes:{
        type: Sequelize.STRING,      
    },
    apartamento:{
        type: Sequelize.STRING,      
    },
    profissao:{
        type: Sequelize.STRING,      
    },
    
})

module.exports = Condomino