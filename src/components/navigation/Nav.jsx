import React from 'react';
import './nav.scss';

function Nav() {
    return (
        <div className="navigation">
            <ul className="navigation__list">
                <li className="navigation__list_item">
                    <a href="#App">
                        <div className="navigation__list_item-popup">Home</div>
                    </a>
                </li>
                <li className="navigation__list_item">
                    <a href="#about">
                        <div className="navigation__list_item-popup">About</div>
                    </a>
                </li>
                <li className="navigation__list_item">
                    <a href="#projects">
                        <div className="navigation__list_item-popup">Projects</div>
                    </a>
                </li>
                <li className="navigation__list_item">
                    <a href="#contacts">
                        <div className="navigation__list_item-popup">Contacts</div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Nav
