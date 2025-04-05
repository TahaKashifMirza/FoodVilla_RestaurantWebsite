import "./Navbar.css";
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleNavLinkClick = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    const handleMenuToggleClick = () => {
        setMenuOpen(!menuOpen);
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.navbar-container')) {
                setMenuOpen(false);
                setDropdownOpen(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <header>
            <div className="navbar-container">
                <div className="logo-brand">
                    <NavLink to="/" onClick={handleNavLinkClick}><img src={'/images/logo.png'} alt="Food Villa Logo" /></NavLink>
                </div>
                <nav>
                    <div className="menu-toggle" onClick={handleMenuToggleClick}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                        <li><NavLink to="/" onClick={handleNavLinkClick}><strong>HOME</strong></NavLink></li>
                        <li><NavLink to="/about" onClick={handleNavLinkClick}><strong>ABOUT</strong></NavLink></li>
                        <li className={`dropdown ${dropdownOpen ? 'show' : ''}`} onClick={handleDropdownClick}>
                            <strong>OUR MENU</strong>
                            <ul className="dropdown-content">
                                <li><NavLink to="/biryani" onClick={handleNavLinkClick}>BIRYANI & RICE</NavLink></li>
                                <li><NavLink to="/bbq" onClick={handleNavLinkClick}>BAR-BE-QUE</NavLink></li>
                                <li><NavLink to="/fastfood" onClick={handleNavLinkClick}>FAST FOOD</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/contact" onClick={handleNavLinkClick}><strong>CONTACT US</strong></NavLink></li>
                        <li><NavLink to="/login" onClick={handleNavLinkClick}><strong>LOGIN</strong></NavLink></li>
                        <li><NavLink to="/signup" onClick={handleNavLinkClick}><strong>SIGNUP</strong></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
