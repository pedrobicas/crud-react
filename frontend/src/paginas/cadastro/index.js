import React, { useState } from "react";
import { Container, Col, Row, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./cadastro.css";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    const json = {
      nome: nome,
      email: email,
      senha: senha,
    };
    axios.post("http://localhost:3001/cadastro", json).then((response) => {
      console.log(response.data.msg);
      if (response.data.msg === "Sucesso") {
        console.log("sucesso");
        setMsg(<Alert variant="success">Sucesso. Para logar, <Link to='/login'>clica aqui</Link></Alert>);
        //localStorage.clear();
        // Navigate('/crud')
      } else {
        console.log("errado");
        setMsg(<Alert variant="danger">Email já cadastrado</Alert>);
      }
    });
  };

  return (
    <Container className="p-2">
      <Row
        className="shadow rounded-3 align-items-center"
        style={{ backgroundColor: "#455A64" }}
      >
        <Col sm className="rounded-3 text-center bg-light p-5">
          <h1 className="w-50 m-auto text-secondary fst-italic">
            Bem vindo ao nosso site!
          </h1>
          <img
            src="../../assets/img2.svg"
            className="img-fluid"
            alt=""
            width={558}
          />
        </Col>
        <Col sm className="text-light px-4">
          <h1 className="text-center">Cadastro</h1>
          <Form onSubmit={Submit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setNome(e.target.value);
                }}
                type="text"
                id="nome"
                placeholder="Vinicius"
                style={{ backgroundColor: "#C4C4C4", border: 0 }}
                required
                pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                title="A nome deve conter somente letras."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                placeholder="vinicius123@gmail.com"
                style={{ backgroundColor: "#C4C4C4", border: 0 }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Senha:</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
                type="password"
                id="senha"
                placeholder="********"
                style={{ backgroundColor: "#C4C4C4", border: 0 }}
                required
              />
            </Form.Group>
            {msg}
            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              style={{ height: 50 }}
            >
              Cadastrar
            </Button>
          </Form>
          <div className="text-center mt-5">
            <Link to="/login" className="text-light">
              Já sou cadastrado
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cadastro;
