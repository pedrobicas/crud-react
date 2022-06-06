//Importar bibliotecas
const express = require('express')
const router = express.Router()

//Importar módulos
const produtosController = require('../controllers/produtosControllers')


//Definir as rotas
router
    .get('/', produtosController.listarDados)
    .get('/:id', produtosController.listarDado)
    .post('/', produtosController.inserirDado)
    .put('/:id', produtosController.atualizarDado)
    .delete('/:id', produtosController.deletarDado)

module.exports = router;