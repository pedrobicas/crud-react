import React, { useState } from "react";
import { Container, Col, Row, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Crud from '../crud/index';
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router";
function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState(false);
  const Navigate = useNavigate();
  //const [alerta, setAlert = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    const json = {
      email: email,
      senha: senha,
    };
    axios.post("http://localhost:3001/login", json).then((response) => {
      console.log(response.data.msg)
      if (response.data.msg === "Sucesso") {
        console.log('sucesso')
        //colocar a tag crud aqui e importar ela
        setMsg(<Alert variant="success">Sucesso</Alert>);
        localStorage.clear();
        Navigate('/crud')
      } else {
        console.log('errado')
        setMsg(<Alert variant="danger">Email ou senha incorretos. Tente novamente.</Alert>);
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
            Bem vindo de volta!
          </h1>
          <img
            src="../../assets/img1.svg"
            className="img-fluid"
            alt="imagem login"
          />
        </Col>
        <Col sm className="text-light px-4">
          <h1 className="text-center">Login</h1>
          <Form onSubmit={Submit}>
            <Form.Group className="mb-3">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="vinicius123@gmail.com"
                className="p-2"
                style={{ backgroundColor: "#C4C4C4", border: 0 }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Senha:</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
                type="password"
                placeholder="********"
                className="p-2"
                style={{ backgroundColor: "#C4C4C4", border: 0 }}
                required
              />
            </Form.Group>
            {msg}
            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-2"
              style={{ height: 50 }}
            >
              Entrar
            </Button>
          </Form>
          <div className="text-center mt-5">
            <Link to="/cadastro" className="text-light">
              Ainda não tem cadastro?
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
