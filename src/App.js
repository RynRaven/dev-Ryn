import React from 'react';

import { Brand, CTA, NavBar } from './components';
import { Blog, Features, Footer, Header, Possibility, What } from './containers';
import './App.scss';

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <NavBar />
                <Header />
            </div> 
            <Brand />
            <What />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
