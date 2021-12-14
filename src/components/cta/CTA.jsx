import React from 'react';
import './cta.scss';

const CTA = () => {
    return (
        <div className="cta__container">
            <div className="cta__container_resume">
                <h3>View my resume</h3>
                <button>CV</button>
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
