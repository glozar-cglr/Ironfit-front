import React, { useState } from 'react';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import Sidebar from '../components/SideBar';
import { homeobjFour } from '../components/HomePage/Data';
import SearchBox from '../components/SearchBox'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <InfoSection {...homeobjFour}/>
         <SearchBox />
         <Footer />
         
        </>
    );
};

export default Home;