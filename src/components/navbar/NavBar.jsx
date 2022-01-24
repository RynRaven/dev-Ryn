import React, { useState } from 'react';
import './navbar.scss';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { TiThMenu , TiChevronLeftOutline} from 'react-icons/ti';
import logo from '../../assets/w-logo.png'

const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About Me</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#contacts">Contacts</a></p>
    </>
)

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="page__navbar">
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
                ? <TiChevronLeftOutline color="var(--color-bright)" size={40} onClick={() => setToggleMenu(false)} />
                : <TiThMenu color="var(--color-accent)" size={35} onClick={() => setToggleMenu(true)} />
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
