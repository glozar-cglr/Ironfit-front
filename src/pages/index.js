import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeobjOne, homeobjThree, homeobjTwo } from '../components/InfoSection/Data';
import Footer from '../components/Footer';
import Sidebar from '../components/SideBar';
import Services from '../components/ServicesComponent';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <HeroSection />
         <InfoSection {...homeobjOne}/>
         <InfoSection {...homeobjTwo}/>
         <Services />
         <InfoSection {...homeobjThree}/>
         <Footer />
         
        </>
    );
};

export default Home;