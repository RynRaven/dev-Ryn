import React from 'react';
import './about.scss';
import portrait from '../../assets/portrait.png';
import { Feature } from '../../components';


function About () {
    return (
        <div className="about section--padding" id="about">
            <Feature tittle="About Me" text="Why choose me? "/>
            <div className="about__box">
                <div className="about__box_info">
                    <p>
                        Hai! My name is Ryn Oliveira and I am self-thought Front-End developer based in Riga, Latvia. Started my learning of Web development in the August of 2020. I'm able to work with following technologies: 
                    </p>
                </div>
                <div className="about__box_skills">
                    <div className="about__box_skills-container">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>Bem</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>npm</li>
                            <li>GitHub</li>
                        </ul> 
                    </div>
                    
                </div>
                <div className="about__box_image">
                    <img src={portrait} alt="portrait" /></div>
            </div>
        </div>
    )
}

export default About 
