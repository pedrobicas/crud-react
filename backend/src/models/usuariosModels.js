//Importar biblioteca
const Sequelize = require('sequelize')

//Importar módulos
const bancodados = require('../config/dbConnect')

//Criar a tabela (Modelo/Model -> M(MODEL)VC)
const usuarios = bancodados.define('usuarios',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = usuarios