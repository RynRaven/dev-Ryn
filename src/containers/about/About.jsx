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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorum voluptates aperiam veritatis quos et quia reprehenderit laborum accusantium amet!
                    </p>
                </div>
                <div className="about__box_image">
                    <img src={portrait} alt="portrait" /></div>
                <div className="about__box_skills">
                    <h1>Skills</h1>
                    <h3>Know my way around ..</h3>
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
        </div>
    )
}

export default About 
