import React, { Fragment } from 'react';
import "./Modal.css"
import Main, {etiquetas} from './Main';

export let etiquetasFiltradas = [];

const Modal = (props) => {
    
    const {modal, setModal, modalArray, setModalArray, compania, setCompany, setFiltrar} = props;

    function ocultarModal(){
        // setModal(false);
        setModalArray(modalArray.splice(0,modalArray.lenght))
    }

    function eliminarEtiqueta(etiquetaEliminar){
        console.log("Eliminado" + etiquetaEliminar);
        setModalArray(modalArray.filter(etiqueta => etiqueta !== etiquetaEliminar ))
        etiquetasFiltradas = etiquetas.filter(etiqueta => etiqueta !== etiquetaEliminar)
    }
    


    return ( 
        <Fragment>
            <div className= {modal ? " contenedor_modal active" : " contenedor_modal desactive" } >
                <div className='modal'>
                    <div className='etiquetas'>
                        <ul className='lista_etiquetas'>
                            {
                                modalArray.map( etiqueta => (
                                <li key={etiqueta} >
                                    <span>{etiqueta}</span>
                                    <p onClick={ () => { eliminarEtiqueta(etiqueta)} } >X</p>
                                </li>
                                ) )
                            }

                            {/* <li>
                                <span>Frontend</span>
                                <p>X</p>
                            </li>
                            <li>
                                <span>CSS</span>
                                <p>X</p>
                            </li>
                            <li>
                                <span>JavaScript</span>
                                <p>X</p>
                            </li> */}
                        </ul>
                    </div>
                    <p className='clear' onClick={ () => ocultarModal() } >Clear</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Modal;