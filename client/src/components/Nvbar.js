import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                the butter the better
            </Link>
            <ul>
                <Link to='/about'>About</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        </nav>
    )
};
export default Navbar;