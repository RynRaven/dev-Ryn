import React from 'react';
import './about.scss';
import portrait from '../../assets/portrait.png';
import { Feature } from '../../components';
import { SiHtml5 , SiCss3 , SiSass , SiJavascript , SiReact , SiNodedotjs , SiNpm , SiGit} from 'react-icons/si';


function About () {
    return (
        <div className="about section--padding" id="about">
            <Feature tittle="About Me" text="Why choose me? "/>
            <div className="about__box">
                <div className="about__box_info">
                    <p>
                    Hello! My name is Ryn and I am self-thought front-End developer based in Riga, Latvia.
                    I can easily adapt to every situation and am open for out of the box thinking in order to achieve the best results in most efficient way. 
                    I’m multilingual and fluent in English and Latvian, with some knowledge in Russian and eager to learn Portuguese. 
                    As it goes for tech side, I am able to work with following technologies: 
                    </p>
                </div>
                <div className="about__box_skills">
                    <div className="about__box_skills-container">
                        <ul>
                            <li> <SiHtml5/> HTML</li>
                            <li> <SiCss3/> CSS</li>
                            <li> <SiSass/> Sass</li>
                            <li> <SiJavascript/> JavaScript</li>
                            <li> <SiReact/> React</li>
                            <li> <SiNodedotjs/> Node.js</li>
                            <li> <SiNpm/> npm</li>
                            <li> <SiGit/> Git</li>
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
