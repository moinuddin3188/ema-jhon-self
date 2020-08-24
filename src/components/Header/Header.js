import React from 'react';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <img src={Logo} alt=""/>
            </div>
            <nav className='nav'>
                <a href="shop">Shop</a>
                <a href="review">Review Order</a>
                <a href="manage">Manage Inventory</a>
            </nav>
            <div className='input'>
                <input type="text" placeholder='Type hear to search'/>
            </div>
        </div>
    );
};

export default Header;