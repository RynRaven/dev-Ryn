import React from 'react';
import './cta.scss';
import resume from '../../assets/Resume22.pdf'

const CTA = () => {
    return (
        <div className="cta__container">
            <div className="cta__container_resume">
                <h3>View my resume</h3>
                <a href={resume}>
                    <button>CV</button>
                </a>
            </div>
            <div className="cta__container_contact">
                <h3>Get in touch with me</h3>
                <button>
                    <a href="#contacts">Contacts</a>
                </button>
            </div>
        </div>
    )
}

export default CTA
