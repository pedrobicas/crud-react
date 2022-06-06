import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from '../paginas/login';
import Cadastro from '../paginas/cadastro';
import Crud from '../paginas/crud';

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/crud' element={<Crud />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;