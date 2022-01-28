import React from 'react';
import { Feature } from '../../components';
import './projects.scss';

import project1 from '../../assets/docpage2.png'
import project11 from '../../assets/docpage.png'
import project2 from '../../assets/1920x1080.png'
import project3 from '../../assets/rynverse.png'
import project4 from '../../assets/newyear.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1366 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1366, min: 900 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 900, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <Feature tittle="My work" text="What I have been doing so far .."/>
            <div className="projects__container">
                <Carousel
                    ssr={true} // means to render carousel on server-side.
                    responsive={responsive}
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    infinite={true}
                    centerMode={true}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    
                >
                    <div className="projects__container_card card-1">
                        <div className="projects__containter_card-photo">
                            <a href={project11} target="_blank">
                                <img src={project1} alt="project4" />
                            </a>
                        </div>
                        <div className="projects__container_card-text">
                            <h2>Documentation page</h2>
                            <p>Documentation page made for FreeCodeCamp free Web Design course. Used HTML and CSS (Sass).</p>
                        </div>
                        <div className="projects__container_card-view">
                            <a href={project11} target="_blank">
                                <button>View full</button>
                            </a>
                            <a href="https://codepen.io/rynraven/pen/MWooQKV" target="_blank">
                                <button>CodePen</button>
                            </a>
                        </div>
                    </div>
                    <div className="projects__container_card card-2">
                    <div className="projects__containter_card-img">
                            <a href="https://rynraven.github.io/WeatherAppAPI/" target="_blank">
                                <img src={project2} alt="project2" />
                            </a>
                        </div>
                        <div className="projects__container_card-text">
                            <h2>Weather App</h2>
                            <p>Weather App made using OpenWeatherMap API key, accesing current location displays current weather and 7 day forecast. Used HTML, CSS (Sass) and JS. Responsive design.</p>
                        </div>
                        <div className="projects__container_card-view">
                            <a href="https://rynraven.github.io/WeatherAppAPI/" target="_blank">
                                <button>View page</button>
                            </a>
                            <a href="https://www.figma.com/proto/k1KP5G67iithkw04uSFSWb/Weather-APP-with-API-using-current-location?page-id=0%3A1&node-id=105%3A2&viewport=241%2C48%2C0.16&scaling=contain" target="_blank">
                                <button>Figma</button>
                            </a>
                            <a href="https://github.com/RynRaven/WeatherAppAPI" target="_blank">
                                <button>GitHub</button>
                            </a>
                        </div>                    
                    </div>
                    <div className="projects__container_card card-3">
                    <div className="projects__containter_card-img">
                            <a href={project3} target="_blank">
                                <img src={project3} alt="project3" />
                            </a>
                        </div>
                        <div className="projects__container_card-text">
                            <h2>Rynverse</h2>
                            <p>Very first Web development project, Portfolio webside made following YouTube tutorial. Used HMTL, CSS and JS. </p>
                        </div>
                        <div className="projects__container_card-view">
                            <a href={project3} target="_blank">
                                <button>View full</button>
                            </a>
                            <a href="https://www.figma.com/file/ZvYJUkwEj3rRXwsDQcYQZs/First-portfolio-from-tutorial?node-id=67%3A32" target="_blank">
                                <button>Figma</button>
                            </a>
                        </div>                    
                    </div>
                    <div className="projects__container_card card-4">
                        <div className="projects__containter_card-img">
                            <a href={project4} target="_blank">
                                <img src={project4} alt="project4" />
                            </a>
                        </div>
                        <div className="projects__container_card-text">
                            <h2>Countdown</h2>
                            <p>New Year time coundown using jQuery.</p>
                        </div>
                        <div className="projects__container_card-view">
                            <a href={project4} target="_blank">
                                <button>View full</button>
                            </a>
                        </div>                    
                    </div>
                </Carousel>
            </div>
        </div>  
    )
}

export default Projects;
