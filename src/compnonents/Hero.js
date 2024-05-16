import React from 'react';

import '../style.css';


export default function Hero(){
    
    return(
        <div className='hero'>
            <img src="../photo-grid.svg" alt="airbnb" width="1300" height="700" className='heroImg'/>
            <h1 className='hero-title'>Online Experiences</h1>
            <p className='hero-paragraph'>join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}