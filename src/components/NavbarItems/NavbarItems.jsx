import React from 'react';
import './NavbarItems.css';

const NavbarItems = ({ id, top, bottom, selected }) => {
    return (
        <div className='navbar-item'>
            <div className={"step-no" + " " + `${selected ? 'circle' : ''}`}>{id}</div>
            <div className="step-info">
                <div className="top">{top}</div>
                <div className="bottom">{bottom}</div>
            </div>
        </div>
    )
}

export default NavbarItems