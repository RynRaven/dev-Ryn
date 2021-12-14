import React from 'react';
import './socials.scss';
import { FaGithub, FaCodepen, FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa';

const Socials = () => {
    return (
        <div>
            <div className="socials">
                <div className="socials_icons">
                    <div className="socials_icons-icon">
                        <a href="https://github.com/RynRaven" target="_blank">
                            <div className="socials_icons-popup">
                                GitHub
                            </div>
                            <span>
                                <FaGithub size={25}/>
                            </span>
                        </a>
                    </div>
                    <div className="socials_icons-icon">
                        <a href="https://codepen.io/rynraven" target="_blank">
                            <span>
                                <FaCodepen size={25}/>
                            </span>
                            <div className="socials_icons-popup">
                                CodePen
                            </div>
                        </a>
                    </div>
                    <div className="socials_icons-icon">
                        <a href="https://www.linkedin.com/in/rynligazeibolde/" target="_blank">
                            <div className="socials_icons-popup">
                                LinkedIn
                            </div>
                            <span>
                                <FaLinkedin size={25}/>
                            </span>
                        </a>
                    </div>
                    <div className="socials_icons-icon">
                        <a href="https://www.instagram.com/ljigaa/" target="_blank">
                            <div className="socials_icons-popup">
                                Instagram
                            </div>
                            <span>
                                <FaInstagram size={25}/>
                            </span>
                        </a>
                    </div>
                    <div className="socials_icons-icon">
                        <a href="https://www.facebook.com/ljigss/" target="_blank">
                            <div className="socials_icons-popup">
                                Facebook
                            </div>
                            <span>
                                <FaFacebook size={25}/>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials
