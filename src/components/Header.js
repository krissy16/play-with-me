import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header(){
    return(
        <header>
            <Link className="logo" to="/results">
                <img className="logo-img" src="/logo.png" alt="logo"/>
                <p className="logo-text">Play With Me</p>
            </Link>
            <Link className="add-post" to="/make-post">Create a Post</Link>
            <Link className="help" to="/">Help</Link>
        </header>
    )
}

export default Header;