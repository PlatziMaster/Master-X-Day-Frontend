
import React from 'react';

import './styles/Footer.css';
import platziLogo from '../images/logo.png'


class Footer extends React.Component{
    render(){
        return (
            <div className="Footer">
                <div className="container">
                        <img className="Footer__container-logo" src={platziLogo} alt="Logo Platzi"/>
                        <span className="font-weight-bold">Hecho con amor ❤️ para platzi master </span>   
                </div>  
            </div>
        )
    }
}

export default Footer;