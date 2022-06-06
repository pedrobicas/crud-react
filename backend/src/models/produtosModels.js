//Importar biblioteca
const Sequelize = require('sequelize')

//Importar módulos
const bancodados = require('../config/dbConnect')

//Criar a tabela (Modelo/Model -> M(MODEL)VC)
const produtos = bancodados.define('produtos',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    produto: Sequelize.STRING,
    quantidade: Sequelize.INTEGER,
    preco: Sequelize.DECIMAL(7,2)
})

module.exports = produtos