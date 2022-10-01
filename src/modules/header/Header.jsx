import React from 'react';
import './styles.css'
const dojoImg = require('./dkt.png');
const userImg = require('./user.png');
const genericDojo = require('./genericDojo.png');

const dojoName = "Daikokuten";


var timesD = 0;

var timesU = 0;

const onDojoClicked = () => {
    timesD = timesD + 1
    console.log(timesD)
}

const onUserClicked = () => {
    timesU = timesU + 1
    console.log(timesU)
}
function Header(props) {
    timesU = 0
    timesD = 0

    if (props.user) {
        return (
                <div className='title'>
                    <img alt='dojoImg' src={dojoImg} className= 'imagen' onClick={onDojoClicked}/>
    
                    <button className='ftitle' onClick={onDojoClicked}>{dojoName}</button>
                                
                    <img alt='userImg' src={userImg} className= 'imagen' onClick={onUserClicked}/>
    
    
                </div>
    
        );
    }else {
        return(
            <div className='title'>
                <img alt='dojoImg' src={genericDojo} className= 'imagen'/>

                <span className='ftitle'>Kendo Club Page</span>
                            
                <img alt='userImg' src={userImg} className= 'imagen' onClick={onUserClicked}/>

            </div>
        )
    }

}

export default Header;