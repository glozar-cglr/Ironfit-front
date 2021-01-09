import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeobjOne, homeobjThree, homeobjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';

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
         <InfoSection {...homeobjThree}/>
         
        </>
    );
};

export default Home;