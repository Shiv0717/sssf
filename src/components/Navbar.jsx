import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section based on route
  useEffect(() => {
    const path = location.pathname;
    const section = path === "/" ? "home" : path.replace("/", "");
    setActiveSection(section);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle PDF download
  const handlePdfDownload = () => {
    closeMenu();
    window.open('/doc/certificate.pdf', '_blank');
  };

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const mobileNavItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const navItems = [
    { path: "/", label: "Home", id: "home" },
    { path: "/about", label: "About", id: "about" },
    { path: "/services", label: "Services", id: "services" },
    { path: "/nsdc", label: "NSDC", id: "nsdc" },
    { path: "/contact", label: "Contact", id: "contact" }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-2xl shadow-2xl shadow-gray-200/50 border-b border-gray-100" 
          : "bg-white/80 backdrop-blur-xl shadow-sm"
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8 lg:py-4 h-full">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <motion.img 
                className="w-12 h-12 lg:w-16 lg:h-16"
                src="/logo/ssssf.png"
                alt="Foundation Logo"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
            </div>
            <div className="flex flex-col">
              <motion.span 
                className="font-['Poppins'] font-bold text-gray-800 text-sm lg:text-base leading-tight"
                whileHover={{ color: "#ea580c" }}
              >
                Shri Shankaracharya
              </motion.span>
              <motion.span 
                className="font-['Poppins'] font-semibold text-orange-600 text-xs lg:text-sm leading-tight"
                whileHover={{ color: "#dc2626" }}
              >
                Swaroopanand Foundation
              </motion.span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link
                to={item.path}
                className={`relative px-5 py-2.5 font-['Inter'] font-medium transition-all duration-300 rounded-2xl mx-1 group ${
                  activeSection === item.id
                    ? "text-orange-600 bg-orange-50 shadow-inner shadow-orange-200/50"
                    : "text-gray-600 hover:text-orange-600 hover:bg-gray-50/80"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Hover effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl ${
                    activeSection === item.id 
                      ? "bg-gradient-to-br from-orange-100 to-orange-50" 
                      : "bg-gradient-to-br from-gray-100 to-white opacity-0 group-hover:opacity-100"
                  }`}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full"
                    layoutId="activeDot"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <motion.div 
          className="hidden lg:flex items-center space-x-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        >
          {/* PDF Download Button */}
          <motion.button
            onClick={handlePdfDownload}
            className="px-5 py-2.5 font-['Inter'] font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300 rounded-2xl hover:bg-gray-50/80 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download</span>
          </motion.button>

          <Link
            to="/donate"
            className="relative px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all duration-300 transform hover:scale-105 font-['Inter'] font-semibold overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Donate Now</span>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Mobile Donate Button */}
          {/* <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              to="/donate"
              className="px-4 py-2 bg-orange-500 text-white rounded-xl text-sm font-['Inter'] font-medium shadow-lg shadow-orange-200 hover:bg-orange-600 transition-colors"
              onClick={closeMenu}
            >
              Donate
            </Link>
          </motion.div> */}
          
          {/* Mobile PDF Download Button */}
          <motion.button
            onClick={handlePdfDownload}
            className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Download Certificate"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </motion.button>
          
          <motion.button
            onClick={toggleMenu}
            className="p-2 rounded-xl text-gray-600 hover:text-orange-600 hover:bg-gray-50/80 transition-colors relative"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="relative w-6 h-6"
            >
              <motion.span
                className="absolute top-1 left-0 w-6 h-0.5 bg-current rounded-full"
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-3 left-0 w-6 h-0.5 bg-current rounded-full"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-5 left-0 w-6 h-0.5 bg-current rounded-full"
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-2xl shadow-gray-200/50 rounded-b-3xl mx-4 mt-2 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col p-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={mobileNavItemVariants}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center py-4 px-6 transition-all duration-300 rounded-2xl font-['Inter'] font-medium group ${
                      activeSection === item.id
                        ? "text-orange-600 bg-orange-50 shadow-inner shadow-orange-200/50"
                        : "text-gray-600 hover:text-orange-600 hover:bg-gray-50/80"
                    }`}
                    onClick={closeMenu}
                  >
                    <motion.span
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full ${
                          activeSection === item.id ? "bg-orange-500" : "bg-gray-300 group-hover:bg-orange-400"
                        }`}
                        animate={activeSection === item.id ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <span>{item.label}</span>
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                className="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* Mobile Donate Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/donate"
                    className="w-full py-3 px-6 text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-['Inter'] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    onClick={closeMenu}
                  >
                    Donate Now
                  </Link>
                </motion.div>

                {/* Mobile PDF Download Button */}
                <motion.button
                  onClick={handlePdfDownload}
                  className="py-3 px-6 text-center font-['Inter'] font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300 rounded-2xl hover:bg-gray-50/80 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Certificate</span>
                </motion.button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;