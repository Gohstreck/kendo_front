import React from 'react';
import LatColumnHome from '../latColumnHome/LatColumnHome';
import './styles.css'

const userImg = require('../header/dkt.png');
var busca = 0;


function onDojoClick(params) {
    busca+=1;
    console.log(busca)
}
function iniciarSesion(){
    busca+=1;
    console.log(busca)
}
function modifyUser(id ){
    console.log(id)
}


const Home = props => {


    return(
        <div id='principal' >
            
            <LatColumnHome onDojoClick = {onDojoClick} iniciarSesion={iniciarSesion} 
            modifyUser = {modifyUser} outerContainerId={'principal'} pageWrapId={'carrousel'}/>



            <div id ='carrousel'>

            </div>


            </div>

    );
}

export default Home;