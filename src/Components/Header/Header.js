import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header-container'>
            <div>
            <img src={logo} alt="" />
            </div>
            <div>
                <a href="">Order</a>
                <a href="">Review</a>
                <a href="">Product</a>
                <a href="">Inventory</a>

            </div>
           
        </div>
    );
};

export default Header;