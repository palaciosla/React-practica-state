import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
        <div className='navbar'>
            <div className="logo">
                <i>♠</i>
                <h3>Leandro Palacios</h3>
            </div>
            <h3 className='navbar-title'>Prácticas State</h3>
        </div>
       
    )
}

export default Navbar;