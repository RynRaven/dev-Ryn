import React from 'react';
import './feature.scss';

const Feature = ( { tittle, text } ) => {
    return (
        <div className="container__tittle">
            <h1>{tittle}</h1>
            <div className="container__tittle_description">
                <h3>{text}</h3>
            </div>
            <div className="container__tittle_item">
                <span></span>
            </div>
        </div>
    )
}

export default Feature
