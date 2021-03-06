<<<<<<< HEAD
import React from "react";
import "./scss/header.scss";

export default function Header(props) {
  return (
    <div className="container">
      <h2 className="text-center">Captura</h2>
    </div>
  );
}
=======
import React from 'react'
import './scss/header.scss'
import Logo from '../assets/images/logo-trello.png'

export default function Header(props) {
    return (
        <header className="header">
            <nav className="navbar navbar-light justify-content-center">
                <a className="navbar-brand" href="#">
                <img src={Logo} alt="Logo Trello" />
                </a>
            </nav>
        </header>
    )
}
>>>>>>> 9fa8ce185c5b8408d6f47a9783aef9983d773961
