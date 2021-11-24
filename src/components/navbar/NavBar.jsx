import React, { useState } from 'react';
import './navbar.scss';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/w-logo.png'

const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About Me</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#contact">Contacts</a></p>
    </>
)

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="page__navbar section--padding">
            <div className="page__navbar-links">
                <div className="page__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="page__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="page__navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={30} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                <div className="page__navbar-menu_container scale-up-center">
                    <div className="page__navbar-menu_container-links">
                        <Menu />
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default NavBar
