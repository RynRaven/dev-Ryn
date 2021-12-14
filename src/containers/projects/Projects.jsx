import React from 'react';
import { Feature } from '../../components';
import './projects.scss';

import project1 from '../../assets/previewssex.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 660 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 660, min: 0 },
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
                        <img 
                            className="projects__containter_card-img"
                            src={project1} 
                            alt="project1" 
                        />
                        <div className="projects__container_card-text">
                            <h2>Tittle</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laboriosam delectus aspernatur odio alias eum!</p>
                        </div>
                        <div className="projects__container_card-view">
                            <button>View full</button>
                            <button>CodePen</button>
                            <button>GitHub</button>
                        </div>
                    </div>
                    <div className="projects__container_card card-2">
                        <img 
                            className="projects__containter_card-img"
                            src={project1} 
                            alt="project2" 
                        />
                        <div className="projects__container_card-text">
                            <h2>Tittle 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laboriosam delectus aspernatur odio alias eum!</p>
                        </div>
                        <div className="projects__container_card-view">
                            <button>View full</button>
                            <button>CodePen</button>
                            <button>GitHub</button>
                        </div>                    
                    </div>
                    <div className="projects__container_card card-3">
                        <img 
                            className="projects__containter_card-img"
                            src={project1} 
                            alt="project3" 
                        />
                        <div className="projects__container_card-text">
                            <h2>Tittle 3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laboriosam delectus aspernatur odio alias eum!</p>
                        </div>
                        <div className="projects__container_card-view">
                            <button>View full</button>
                            <button>CodePen</button>
                            <button>GitHub</button>
                        </div>                    
                    </div>
                    <div className="projects__container_card card-4">
                        <img 
                            className="projects__containter_card-img"
                            src={project1} 
                            alt="project4" 
                        />
                        <div className="projects__container_card-text">
                            <h2>Tittle 4</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laboriosam delectus aspernatur odio alias eum!</p>
                        </div>
                        <div className="projects__container_card-view">
                            <button>View full</button>
                            <button>CodePen</button>
                            <button>GitHub</button>
                        </div>                    
                    </div>
                </Carousel>
            </div>
        </div>  
    )
}

export default Projects;
