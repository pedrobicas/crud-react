//Importar bibliotecas
const Sequelize = require("sequelize");
//const express

//Importar os módulos
const bancodados = require("../config/dbConnect");
const usuarios = require("../models/usuariosModels");

class usuariosController {
  // cadastro
  static async cadastrar(req, res) {
    await bancodados.sync();
    let dado = await usuarios.findAll({
      where: { email: req.body.email },
    });
    if (dado.length > 0) {
      res.send({ msg: "Email já cadastrado" });
    } else {
      usuarios.create(req.body);
      res.send({ msg: "Sucesso" });
    }
  }

  // login
  static async logar(req, res) {
    await bancodados.sync();
    let dado = await usuarios.findAll({
      where: { email: req.body.email, senha: req.body.senha },
    });
    if (dado.length > 0) {
      res.send({ msg: "Sucesso" });
    } else {
      res.send({ msg: "Email ou senha incorretos" });
    }
  }
}

module.exports = usuariosController;
