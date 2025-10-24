import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/ScrollToTop";


const BottomBlurOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer;
    
    const handleScroll = () => {
      const scrolledFromBottom = document.documentElement.scrollHeight - 
        (window.scrollY + window.innerHeight);
      
      // Show blur only when scrolled from top AND not at the very bottom
      const shouldShow = scrolledFromBottom > 50 && window.scrollY > 100;
      
      setIsVisible(shouldShow);
      setIsScrolling(true);
      
      // Clear previous timer
      clearTimeout(scrollTimer);
      
      // Set timer to hide blur after scrolling stops
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 h-20 pointer-events-none z-40 transition-all duration-300 ${
      isVisible && isScrolling ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
    }`}>
      {/* Subtle fade blur with smooth gradient */}
      <div className="bg-gradient-to-t from-white/90 via-white/40 to-transparent h-full backdrop-blur-[2px]"></div>
    </div>
  );
};

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">

      <ScrollToTop/>
      
      <Navbar />

      <main className="flex-grow relative">
        <Outlet />
        <BottomBlurOverlay />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;