//Importar as bibliotecas
const express = require('express')
const app = express()
const cors = require('cors');

// app.use(cors({
//     origin: '*'
// }));


//Importar módulos
const rotaProdutos = require('./routes/produtosRoutes')
const rotaUsuarios = require('./routes/usuariosRoutes')

//Variáveis
const port = 3001

//Rotas
app.use(cors());
app.use(express.json())
app.use('/produtos', rotaProdutos)
app.use('/', rotaUsuarios)

//Servidor
app.listen(port, () => {
    console.log('Servidor rodando ...')
})