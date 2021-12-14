import React from 'react';
import './footer.scss';
import logo from '../../assets/logo.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__up">
                <div className="footer__up-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer__up-nav">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#about">About Me</a></p>
                    <p><a href="#projects">Projects</a></p>
                    <p><a href="#contacts">Contacts</a></p>
                </div>
            </div>
            <div className="footer__down">
                <div className="footer__down-copyright">
                    <p>Copyright 2021 ©RynOliveira </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
