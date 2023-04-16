import React from 'react';
import Logo from '../../images/Logo.svg';
import './Nav.css'

const Nav = () => {
    return (
            <nav className='header'>
                <img src={Logo} alt="" />
                <div className="">
                    <a href="">Oder</a>
                    <a href="">Order Review</a>
                    <a href="">Inventory</a>
                    <a href="">Login</a>
                </div>
            </nav>
    );
};

export default Nav;