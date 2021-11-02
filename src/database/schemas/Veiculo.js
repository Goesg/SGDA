const {db,Sequelize} = require('../connection')
const Condomino = require('./Condominio')
const Sindico = require('./Sindico')
const Funcionario = require('./Funcionario')


const Veiculo = db.define('veiculo',{
    modelo:{
        type: Sequelize.STRING,
    },
    placa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ano:{
        type: Sequelize.STRING,
    },
    cor:{
        type: Sequelize.STRING,
    },
})

Veiculo.belongsTo(Condomino,{
    constraint:true,
    foreignKey:'id_Condomino',
})

Veiculo.belongsTo(Sindico,{
    constraint:true,
    foreignKey:'id_Sindico',
})

Veiculo.belongsTo(Funcionario,{
    constraint:true,
    foreignKey:'id_Funcionario',
})




module.exports = Veiculo