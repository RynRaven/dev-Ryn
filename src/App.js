import React from 'react';

import { Socials, CTA, NavBar, Nav, Feature } from './components';
import { Contacts, Projects, Footer, Header, About } from './containers';
import './App.scss';

const App = () => {
    return (
        <div className="App" id="App">
            <div className="gradient__bg">
                <NavBar />
                <Header />
            </div> 
            <About />
            <CTA />
            <Projects />
            <Contacts />
            <Footer />
            <Nav />
        </div>
    )
}

export default App
