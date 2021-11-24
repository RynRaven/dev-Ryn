import React from 'react';

import { CTA, NavBar } from './components';
import { Blog, Features, Footer, Header, Possibility, About } from './containers';
import './App.scss';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <NavBar />
                <Header />
            </div> 
            <About />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
