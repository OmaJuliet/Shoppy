import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ComingSoon from '../Components/ComingSoon';
import Process from '../Components/Process';
import Hero from '../Components/Hero';




const Home = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <Process />
            <ComingSoon />
            <Footer />
        </>
    )
}

export default Home