import './App.css';
import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Main from './componentes/Main';
import Modal from './componentes/Modal';
import headerImage from "./imagenes/images/bg-header-desktop.svg"

function App() {

  const [modal,setModal] = React.useState(false)
  const [modalArray, setModalArray] = React.useState([])
  const [compania, setCompany] = React.useState([]);
  const [filtrar,setFiltrar] = React.useState(false)
  const [etiquetasFiltradas, setEtiquetasFiltradas] = React.useState([])


  return (
    <Fragment>
      <Header
        headerImage = {headerImage}
      />
      <Modal
        modal = {modal}
        setModal = {setModal}
        modalArray = {modalArray}
        setModalArray = {setModalArray}
        compania = {compania}
        setCompany = {setCompany}
        setFiltrar = {setFiltrar}
        setEtiquetasFiltradas = {setEtiquetasFiltradas}
        
      />
      <Main
        modal = {modal}
        setModal = {setModal}
        modalArray = {modalArray}
        setModalArray = {setModalArray}
        compania = {compania}
        setCompany = {setCompany}
        filtrar = {filtrar}
        setFiltrar = {setFiltrar}
        etiquetasFiltradas = {etiquetasFiltradas}
      />
    </Fragment>
  );
}

export default App;
