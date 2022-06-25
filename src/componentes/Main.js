import React, {Fragment, useState} from 'react';
import "./Main.css"
import {etiquetasFiltradas} from './Modal';


const images = require.context("../imagenes", true);
// let empresas = [];
let newArray = [];
export let etiquetas = [];
export let filtrar = false;

export const Main = (props) => {
    let {modal, setModal, modalArray, setModalArray, compania, setCompany, filtrar, setFiltrar} = props;
    const [empresas,setEmpresas] = useState([]);
    let todasEmpresas = [];
    const url = "./data.json"


    React.useEffect( () => {
        obtenerDatos();
    }, [] )
    
    const obtenerDatos = async () => {
        try {
            const datos = await fetch(url)
            const companias = await datos.json()
            setEmpresas(companias)
            todasEmpresas = companias;
        } catch (error) {
            console.log(error);    
        }
    }

    
    function mostrarModal(etiqueta){
        
        setModal(true);  
        if(modalArray.some( some => some === etiqueta )){
            return
        }
        setModalArray([...modalArray, etiqueta])
        etiquetas.push(etiqueta)
        console.log(etiquetas);
        filtrarEmpresas();

    }





    function filtrarEmpresas(){
        setEmpresas(todasEmpresas)
        etiquetas.forEach( etiqueta => {
            let agregar;
            empresas.forEach(empresa => {
                let res;
                let languageBool;
                res = etiqueta === empresa.role || etiqueta === empresa.level
                empresa.languages.forEach(language => { if(etiqueta === language) { languageBool = true }  }  )
                if(res || languageBool){
                    agregar = true
                }else{
                    agregar = false
                }

                if(agregar){
                    newArray.push(empresa)
                }
            })
            setEmpresas(newArray)
            newArray = [];
        }
        )
    }







    console.log(empresas);

    return (  
        <Fragment>
            <div className='contenedor'>
                <div className='contenedor_bloques'>
                    {
                        empresas.map( company => (
                            <div className='bloque' key={company.id}>
                                <div className='imagen'>
                                    <img src={images(`${company.logo}`)} alt={company.company}/>
                                </div>
                                <div className='caracteristicas'>
                                    <div className='caracteristicas_1'>
                                        <p className='empresa'>{company.company}</p>
                                        {!company.new ? undefined : <p className='new'>NEW!</p>}
                                        {!company.new ? undefined : <p className='featured'>FEATURED</p>}
                                    </div>
                                        <span className='puesto'>{company.position}</span>
                                    <div className='adicional_contenedor'>
                                        <p className='adicional'>{company.postedAt}</p>
                                        <p className='adicional'>{company.contract}</p>
                                        <p className='adicional'>{company.location}</p>
                                    </div>
                                </div>
                                <div className='etiquetas'>
                                    <ul className='lista_etiquetas'>
                                        <li  key={company.role} onClick={ () => mostrarModal(company.role) } >{company.role}</li>
                                        <li key={company.level}  onClick={ () => mostrarModal(company.level) } >{company.level}</li>
                                        {company.languages.map( language => (
                                                <li key={language} onClick={ () => mostrarModal(language)} >{language}</li> 
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className='bloque'>
                        <div className='imagen'>
                            <img src={images("./shortly.svg")} />
                        </div>
                        <div className='caracteristicas'>
                            <div className='caracteristicas_1'>
                                <p className='empresa'>Photosnap</p>
                                <p className='new'>NEW!</p>
                                <p className='featured'>FEATURED</p>
                            </div>
                                <span className='puesto'>Senior Frontend Developer</span>
                            <div className='adicional_contenedor'>
                                <p className='adicional'>1d ago</p>
                                <p className='adicional'>Full Time</p>
                                <p className='adicional'>USA only</p>
                            </div>
                        </div>
                        <div className='etiquetas'>
                            <ul className='lista_etiquetas'>
                                <li>Frontend</li>
                                <li>Senior</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </Fragment>
    );
}

export default Main;