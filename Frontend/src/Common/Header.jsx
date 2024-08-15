import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Img/kmc-logo.jpeg";
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header-base">
            <div className="content-menu">
                <div className="menu-logo">
                    <img className='kmc-logo' src={logo} alt="KMCLU" />
                </div>
                <div className="logo-list">
                    <div className="header-main">
                        <div className="menu-toggle" onClick={handleToggle}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <ul className={`header-menu ${menuOpen ? 'active' : ''}`}>
                            <li><Link to="/"><i className="bi bi-house-door-fill"></i> Home</Link></li>
                            <li><Link to="/about"><i className="bi bi-info-circle-fill"></i> About</Link></li>
                            <li><Link to="/applystudent"><i className="bi bi-mortarboard-fill"></i> Addmission</Link></li>
                            <li><Link to="/login"><i className="bi bi-box-arrow-in-right"></i> Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
