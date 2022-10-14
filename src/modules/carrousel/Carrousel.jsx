import React, { useEffect } from 'react';
import { useState } from 'react';
import './styles.css';

const img1 = require('./imgs/dojo-cu.jpg');
const img2 = require('./imgs/dojo-cu1.jpg');
const img3 = require('./imgs/dojo-cu2.jpg');
const img4 = require('./imgs/dojo-cu3.jpg');

export const CarrouselItem = ({children, width}) => {
    return(
        <div className='carrousel-item' style={{width : width}}>
            {children}
        </div>
    );
};


function Carrousel(props) {
    const data = [img1, img2, img3, img4];

    const [currentIndex, setCurrentIndex] = useState(0)


    const carrouselInfinteScroll = () =>{
        return setCurrentIndex((currentIndex + 1) % data.length)
    }

    useEffect(() => {
        const interval = setInterval(() => {carrouselInfinteScroll()}, 3000)
        return () => clearInterval(interval)
    });

    return (
        <div className='carrousel'>
            { data.map((item, index) => {
                return <img alt={img1} src={item} className='carrouselItem'
                style ={{transform : `translate(-${currentIndex *100}%)`}}
                key={index} 
                onClick={() => {setCurrentIndex((currentIndex+1)% data.length)} }></img>
            })}
        </div>
    );
};

export default Carrousel;