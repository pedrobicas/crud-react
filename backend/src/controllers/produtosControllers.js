//Importar bibliotecas
const Sequelize = require('sequelize')
//const express

//Importar os módulos
const bancodados = require('../config/dbConnect')
const produtos = require('../models/produtosModels')

class ProdutosController{
    
    //Post -> Create
    static async inserirDado(req, res){
        console.log('teste')
        let novoDado = req.body
        await bancodados.sync()
        await produtos.create(novoDado)
        res.status(201).send('Dado Criado')
    }

    //Get -> Read 
    static async listarDados(req, res){
        await bancodados.sync()
        let dado = await produtos.findAll({raw : true})
        res.status(200).json(dado)
    }

    static async listarDado(req, res){
        let index = req.params.id
        await bancodados.sync()
        let dado = await produtos.findByPk(index)
        res.status(200).json(dado)
    }

    //Put -> Update
    static async atualizarDado(req, res){
        let index = req.params.id
        let dadoAtualizado = req.body
        await bancodados.sync()
        await produtos.update(dadoAtualizado, {where: {id : index}})
        res.status(200).send('Dado atualizado')
    }

    //Delete -> Delete
    static async deletarDado(req, res){
        let index = req.params.id
        await bancodados.sync()
        await produtos.destroy({where : {id : index}})
        res.status(200).send('Dado deletado')
    }
}

module.exports = ProdutosController
