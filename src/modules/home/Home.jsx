import React from 'react';
import Carrousel from '../carrousel/Carrousel';
import LatColumnHome from '../latColumnHome/LatColumnHome';
import Header from '../header/Header';
import Footer from '../footer/Footer';
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
        <>
            <Header user="user1"/>
            <div id='principal' className='principal' >
                
                <LatColumnHome onDojoClick = {onDojoClick} iniciarSesion={iniciarSesion} 
                modifyUser = {modifyUser} outerContainerId={'principal'} pageWrapId={'carrousel'}/>

                <Carrousel />

            </div>
            <Footer />
        </>


    );
}

export default Home;