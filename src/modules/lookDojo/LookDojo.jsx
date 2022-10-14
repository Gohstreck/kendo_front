import React from 'react';
import Header from '../header/Header';
import './styles.css'

function handleSumbmit(event){
    alert("An event was submitted: " + this.state.value)
    event.preventDefault();
}



const LookDojo = () => {
    /**
     * 1 buscar por nombre
     * 2 buscar por ciudad/ region
     * 3 Buscar por sensei.
     */
    const [lookText, setLookText] = React.useState("Escribe para iniciar la busqueda");

    const [lookOptionText, setLookOptionText] = React.useState("Nombre");
    const opciones = ['Nombre', 'Region', 'Sensei']
    var createOptiones = opciones.map( (elem) => 
        <option key={elem} value={elem} className='selectItem'
        onClick={(e) => {setLookOptionText(elem)} }> {elem}</option>
    )

    
        return (
            <div>
                <Header />

                <input className='searchBar' type='text'  placeholder = {lookText}

                onChange={(e) => {console.log(e.target.value); setLookText(e.target.value)}} />

                <label className='aviso'> Estas buscando por: </label>
                <select className='selectBox'>
                    {createOptiones}
                </select >


            </div>
        );
    }


export default LookDojo;