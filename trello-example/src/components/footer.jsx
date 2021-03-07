
import React from 'react';

import './styles/Footer.css';
import platziLogo from '../images/logo.png'


class Footer extends React.Component{
    render(){
        return (
            <div className="Footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4">
                            <img className="Footer__container-logo" src={platziLogo} alt="Logo Platzi"/>
                        </div>
                        <div className="col-12">
                            <span className="font-weight-bold">Hecho con amor ❤️ para platzi master </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;