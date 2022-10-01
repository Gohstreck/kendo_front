import React from 'react';

import {slide as Menu} from 'react-burger-menu'
import './styles.css'



function onMaterialClick() {
    console.log("On material clicked")
}
function onVentaClick() {
    console.log("On venta clicked")
}
function register(){
    console.log("On register clicked")
}
function onTorneosClick(){
    console.log("On Torneos clicked")
}

function LatColumnHome(props) {

    if (props.logged) {
        return (

            <Menu {...props}>

            <button className='clearBtn' onClick={props.onDojoClick}> Buscar Dojos</button>
            <button className='clearBtn' onClick={onTorneosClick}> Torneos </button>
            <button className='clearBtn' onClick={onMaterialClick}> Materiales </button>
            <button className='clearBtn' onClick={props.onVentaClick}> Paginas de venta </button>
            <button className='clearBtn' onClick={props.modifyUser}> Modificar usuario  </button> 
            
            </Menu>

        );
    }else{

        return (

            <Menu {...props} >
                <button className='clearBtn' onClick={register}> Registrarse </button> 
                <button className='clearBtn' onClick={props.iniciarSesion}> Iniciar sesion </button> 
                <button className='clearBtn' onClick={props.onDojoClick}> Buscar Dojos </button> 

                <button className='clearBtn' onClick={onMaterialClick}> Materiales  </button> 
                <button className='clearBtn' onClick={onVentaClick}> Paginas de venta  </button> 

            </Menu>

        );

    }

}


/*
            <button className='clearButton' href='' onClick={props.onDojoClick}>  </a> 
                <button className='clearBtn' href='' onClick={props.iniciarSesion}>  </button> 
                <button className='clearBtn' href='' onClick={onMaterialClick}>   </button> 
                <button className='clearBtn' href='' onClick={onVentaClick}>   </button> 



                <button className='openBtn' onClick={() => openNav(true)}> &#9776; </button>
                <button className='closeBtn' onClick={closeNav}>&times;</button>
<button className='openBtn' onClick={() => openNav(false)}> &#9776; </button>*/

export default LatColumnHome;