import React from 'react';
import './header.scss';
import portrait from '../../assets/portrait.png';
import { FaGithub, FaCodepen, FaLinkedin } from 'react-icons/fa';

function Header() {
    return (
        <div id="home" className="page__header section--padding">
            <div className="page__header-content">
                <div className="page__header-content_text">
                    <h4 className="page__header-content_text-intro">Hi There! I am </h4>
                    <h1 className="page__header-content_text-main">Līga Zeibolde</h1>
                    <h3 className="page__header-content_text-description">Front-End / UI developer</h3>
                </div>
                <button className="page__header-content_button" type="button">
                    <span className="page__header-content_button-action">View my work</span>
                </button>
            </div>

            <div className="page__header-image">
                <img src={portrait} alt="portrait" />
            </div>

            <div className="page__header-social">
                <div className="page__header-social_icons">
                    <div className="page__header-social_icons-icon github">
                        <a href="https://github.com/RynRaven"></a>
                        <div className="page__header-social_icons-popup">
                            GitHub
                        </div>
                        <span>
                            <FaGithub size={25}/>
                        </span>
                    </div>
                    <div className="page__header-social_icons-icon codepen">
                        <div className="page__header-social_icons-popup">
                            CodePen
                        </div>
                        <span>
                            <FaCodepen size={25}/>
                        </span>
                    </div>
                    <div className="page__header-social_icons-icon linkedin">
                        <div className="page__header-social_icons-popup">
                            LinkedIn
                        </div>
                        <span>
                            <FaLinkedin size={25}/>
                        </span>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Header
