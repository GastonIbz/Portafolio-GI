import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import TecnoCard from '../components/TecnoCard';
import Work from "../components/Work";


const Project = () => {
  return (
    <div>
    <Navbar/>
 <HeroImg2 heading=" " text="" />
 <Work/>
<TecnoCard />
    <Footer/>
    </div>
  );
};

export default Project;