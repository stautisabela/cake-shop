import React, { useState } from 'react';
import { Link } from 'react-router';
import './Nvbar.css';

const Navbar = () => {
    const [language, setLanguage] = useState('EN');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLangSelect = (lang) => {
        setLanguage(lang);
        setDropdownOpen(false);
    };

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
                <div className='dropdown'>
                    <button onClick={toggleDropdown} className='dropdown-toggle'>
                        {language}
                    </button>
                    {dropdownOpen && (
                        <div className='dropdown-menu'>
                            {['EN', 'SV'].map((lang) => (
                                <button key={lang}
                                        onClick={() => handleLangSelect(lang)}
                                        className='dropdown-item'>
                                    {lang}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
};
export default Navbar;