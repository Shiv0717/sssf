import React from 'react';
import Herosection from '../components/Herosection';
import Impactful from '../components/Impactful';
import ProgramsSection from '../components/ProgramsSection';
import NGODashboard from '../components/NGODashboard';
import Faqs from '../components/Faqs';
import About from '../components/About';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import VideoSection from '../components/VideoSection';
import DisclaimerMarquee from "../components/DisclaimerMarquee";
const Home = () => {
  return (
    <div>
      <Herosection/>
      <DisclaimerMarquee/>
      <Impactful/>
      <About/>
      <ProgramsSection/>
      <Events/>
      <VideoSection/>
      <Gallery/>
      <Faqs/>
    </div>
  );
}

export default Home;
