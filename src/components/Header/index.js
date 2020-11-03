import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" >
            <Link to="/" className={window.location.pathname === "/"
                ? "nav-link active" : "nav-link"
            }><h2>90s Music</h2></Link>
        </nav>
    );
}

export default Header;