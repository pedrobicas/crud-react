//Importar bibliotecas
const express = require('express')
const router = express.Router()

//Importar módulos
const usuariosController = require('../controllers/usuariosControllers')


//Definir as rotas
router
    .post('/login', usuariosController.logar)
    .post('/cadastro', usuariosController.cadastrar)
    // .post('/', usuariosController.inserirDado)
    // .put('/:id', usuariosController.atualizarDado)
    // .delete('/:id', usuariosController.deletarDado)

module.exports = router;