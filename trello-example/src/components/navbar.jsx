
import React from 'react';

import './styles/Navbar.css';
import masterLogo from '../images/master.png'
import menuIcon from '../images/lista.svg'


class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <div className="Navbar__container d-block d-md-flex">
                            <img className="Navbar__container-logo" src={masterLogo} alt="Logo Master"/>
                            <span className="font-weight-bold">Bienvenido a platzi master</span>
                            
                            <a className="d-none d-sm-block font-weight-light" href='#'>Opción 1 </a>
                            <a className="d-none d-sm-block font-weight-light" href='#'>Opción 2 </a>
                            <a className="d-none d-sm-block font-weight-light" href='#'>Opción 3 </a>

                            <img className="Navbar__icon d-block d-sm-none" src={menuIcon} alt="MenuIcon"/>
                    </div>  
                </div>     
            </div>
        )
    }
}

export default Navbar;