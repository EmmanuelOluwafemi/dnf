import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Speaker from '../components/Speaker';
import Register from '../components/Register';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Speaker />
            <Register />
            <Footer />
        </>
    )
}

export default Home;
