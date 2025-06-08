import React, { useState } from 'react';
import { Link } from 'react-router';
import './Nvbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Brand Name */}
            <Link to="/" className="brand">
                the butter the better
            </Link>

            {/* Navigation links */}
            <div className='nav-links'>
                <Link to='/about' className='nav-link'>About</Link>
                <Link to='/menu' className='nav-link'>Menu</Link>
                <Link to='/gallery' className='nav-link'>Gallery</Link>
                <Link to='/contact' className='nav-link'>Contact</Link>
            </div>

        </nav>
    )
};
export default Navbar;