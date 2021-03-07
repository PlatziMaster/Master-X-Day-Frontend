import React from "react";
import '../styles/App.css'
import logo from '../assets/static/Platzi.jpg'

const Header = () => (
    <header className="header">
        <h1> Dashboard Summary </h1>
        <img className="header__img" src={ logo } alt="Platzi" />
    </header>
);

export default Header
