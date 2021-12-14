import React from 'react';
import './header.scss';
import portrait from '../../assets/portrait.png';
import { FaGithub, FaCodepen, FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa';
import { Socials } from '../../components';

function Header() {
    return (
        <div id="home" className="page__header section--padding">
            <div className="page__header-content">
                <div className="page__header-content_text">
                    <h4 className="page__header-content_text-intro">Hi There! I am </h4>
                    <h1 className="page__header-content_text-main">Ryn Līga</h1>
                    <h3 className="page__header-content_text-description">Front-End / UI developer</h3>
                </div>
                <button className="page__header-content_button" type="button">
                    <a href="#projects"> View my work</a>
                </button>
            </div>

            <div className="page__header-image">
                <img src={portrait} alt="portrait" />
            </div>

            <Socials/>
        </div>
    )
}

export default Header
