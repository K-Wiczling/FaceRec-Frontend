import React from "react";
import Tilt from 'react-parallax-tilt';
import './logo.css' 
import brain from './brain.png'

const Logo = () => {
    return (
        <div className="ma5 mt3 ">
            <Tilt className="tilt pa3 shadow-3"  >
                <img src={brain} style={{paddingTop:'5px'}} alt='logo'></img>
            </Tilt>
        </div>
    )
}
export default Logo;