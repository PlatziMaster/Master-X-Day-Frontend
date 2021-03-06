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