const {db,Sequelize} = require('../connection')
const Condominio = require('./Condominio')

const Funcionario = db.define('funcionario',{
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
    cargo:{
        type: Sequelize.STRING, 
        allowNull: false     
    },
    ctps:{
        type: Sequelize.STRING,      
    }, 
})

Funcionario.belongsTo(Condominio,{
    constraint:true,
    foreignKey:'id_Condominio',
})


module.exports = Funcionario