import React, { useRef, useState } from 'react';
import './contacts.scss';
import emailjs from 'emailjs-com';
import { Feature, Socials } from '../../components';
import { HiMail, HiPhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Result =() => {
    return (
        <p className="result-text">Your messsage has been succesfully sent! <br/> You will be contacted shortly.
        </p>
    )
}

const Contacts = () => {
    const form = useRef();
    const [result, showResult] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm(
            'service_portfolio', 
            'template_portfolio', 
            form.current, 
            'user_7pcMuFkmeTsBkhqrFEvum'
            )
            .then((result) => {
                console.log(result.text);
                showResult(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contacts' id="contacts">
            <Feature tittle="Contacts" text="Lets keep in touch"/>

            <div className='contacts__container'>
                <div className='contacts__container_submit'>
                    <h3 className="contacts__container_submit-subtittle">
                        Send me a message 
                    </h3>
                    <form className="contacts__container_submit--form" 
                            ref={form} onSubmit={sendEmail}
                            autocomplete="on">
                        <label htmlFor="user_name">Your name</label>
                        <input className="contacts__container_submit--form-name" 
                            type="text" 
                            name="user_name" 
                            placeholder="Your Name"
                            required/>
                        <label htmlFor="contacts__container_submit--form-mail">Your Email</label>
                        <input className="contacts__container_submit--form-mail" 
                            type="email" 
                            name="user_email" 
                            placeholder="Your Email"
                            required/>
                        <label htmlFor="user_name">Enter Your message here</label>
                        <textarea className="contacts__container_submit--form-field" 
                            name="message" 
                            placeholder="Enter Your message .. "
                            rows={4}
                            required/>
                        <div className="contacts__container_submit--form-done">
                        <input className="contacts__container_submit--form-button"
                        type="submit" 
                        value="Send" />
                        { result ?  <Result/> : null}
                        </div>
                    </form>
                </div>
                <div className='contacts__container_socials'>
                    <div className='contacts__container_socials-info'>
                        <p>
                            <span>
                                <HiMail size={35}/>
                            </span>
                            liga.zeibolde@gmail.com</p>
                        <p>
                            <span>
                                <HiPhone size={35}/> 
                            </span>
                            +371 28018734</p>
                        <p>
                            <span>
                                <HiOutlineLocationMarker size={35}/>
                            </span>
                            Riga, Latvia</p>
                    </div>
                    <div className='contacts__container_socials-links'>
                        <Socials/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contacts
