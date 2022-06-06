import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import './crud.css'

function Produtos() {

  const [show, setShow] = useState(false);
  const [dados, setDados] = useState([]);
  const [dadoId, setDadoId] = useState([])
  const [preco, setPreco] = useState('')
  const [produto, setProduto] = useState('')
  const [quantidade, setQuantidade] = useState('')

  const showEditar = (id) => {
    axios.get(`http://localhost:3001/produtos/${id}`)
      .then(response => {
        setDadoId(response.data.id);
        setProduto(response.data.produto);
        setPreco(response.data.preco);
        setQuantidade(response.data.quantidade);
        setShow(true);
      })
  }

  const showAdicionar = () => {
    setProduto('');
    setPreco('');
    setQuantidade('');
    setDadoId(false)
    setShow(true);
  }

  const adicionar = (json) => {
    axios.post('http://localhost:3001/produtos/', json)
      .then(response => {
        console.log("Adicionado")
        window.location.reload()
      })
  }

  const editar = (json) => {
    axios.put(`http://localhost:3001/produtos/${dadoId}`, json)
      .then(response => {
        console.log("Editado")
        window.location.reload()
      })
  }

  const deletar = (id) => {
    axios.delete(`http://localhost:3001/produtos/${id}`)
      .then(response => {
        console.log("Deletado")
        window.location.reload()
      })
  }

  const Submit = (e) => {
    const body = {
      produto: produto,
      preco: preco,
      quantidade: quantidade,
    }
    e.preventDefault()
    if (dadoId === false) {
      adicionar(body)
    } else {
      editar(body)
    }
    setShow(false)
  }

  useEffect(() => {
    axios.get('http://localhost:3001/produtos')
      .then(response => {
        setDados(response.data);
      })
  }, []);

  return (
    <Container className="p-3 mt-3 bg-white">
      {/* <div className='text-end py-2'> */}
      <div className="d-flex justify-content-between py-2">
        <h2>Produtos</h2>
        <Button variant="primary" onClick={showAdicionar}>+ Adicionar</Button>
      </div>
      <Table striped bordered hover className="bg-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preco Un.</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((x) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.produto}</td>
              <td>{x.preco}</td>
              <td>{x.quantidade}</td>
              <th className="text-center">
                <Button variant="success" onClick={() => showEditar(x.id)}>
                  Editar
                </Button>
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={() => deletar(x.id)}
                >
                  Excluir
                </Button>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{dadoId ? `ID: ${dadoId}` : "Adicionar"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={Submit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome de produto :</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={produto}
                onChange={(e) => {
                  setProduto(e.target.value);
                }}
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Preco Un.:</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                value={preco}
                onChange={(e) => {
                  setPreco(e.target.value);
                }}
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantidade:</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                value={quantidade}
                onChange={(e) => {
                  setQuantidade(e.target.value);
                }}
                required
                autoFocus
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Fechar
              </Button>
              <Button type="submit" variant="primary">
                Salvar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Produtos;
