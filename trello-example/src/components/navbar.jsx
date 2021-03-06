
import React from 'react';

import './styles/Navbar.css';
import masterLogo from '../images/master.png'


class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <div className="Navbar__container">
                            <img className="Navbar__container-logo" src={masterLogo} alt="Logo Master"/>
                            <span className="font-weight-bold">Bienvenido a platzi master</span>
                            
                            <a className="font-weight-light" href='#'>Opción 1 </a>
                            <a className="font-weight-light" href='#'>Opción 2 </a>
                            <a className="font-weight-light" href='#'>Opción 3 </a>
                    </div>  
                </div>     
            </div>
        )
    }
}

export default Navbar;