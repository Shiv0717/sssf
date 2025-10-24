"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause, Calendar, User, Heart, Shield, Target } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Hero slides
const slides = [
  {
    title: "Creating Sustainable Change in Communities",
    description: "Shri Shankarcharya Swaroopanand Foundation has been transforming lives through education, healthcare, and empowerment initiatives since 2009.",
    image: "impack/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg",
    author: "SSSF Team",
    readTime: "2 min read",
    badge: "Since 2009"
  },
  {
    title: "Empowering Women Through Skill Development",
    description: "Our women empowerment programs provide skill training, financial literacy, and leadership opportunities to create independent community leaders.",
    image: "/impack/Women-Empowerment.jpeg",
    author: "Empowerment Division",
    readTime: "3 min read",
    badge: "15K+ Women"
  },
  {
    title: "Education for Underprivileged Children",
    description: "Quality education programs, digital learning initiatives, and scholarship opportunities creating brighter futures for thousands of children.",
    image: "/impack/children_in_slums.jpg",
    author: "Education Wing",
    readTime: "3 min read",
    badge: "50K+ Students"
  },
];

const fadeImgVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
};

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const textItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
};

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative mt-20 w-full md:h-[700px] h-[500px] overflow-hidden bg-gray-900">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        navigation={{
          nextEl: ".hero-next-btn",
          prevEl: ".hero-prev-btn",
        }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
          bulletClass: "hero-bullet",
          bulletActiveClass: "hero-bullet-active",
        }}
        autoplay={isPlaying ? { 
          delay: 6000, 
          disableOnInteraction: false 
        } : false}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image with Enhanced Overlay */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  key={`image-${index}`}
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial="hidden"
                  animate={activeIndex === index ? "visible" : "hidden"}
                  variants={fadeImgVariants}
                />
                
                {/* Enhanced Gradient Overlay */}
                <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div> 
                
                {/* Animated Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-emerald-600/10 animate-pulse" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full flex items-center">
                <div className="px-6 lg:px-16 xl:px-24">
                  <motion.div
                    className="max-w-2xl lg:max-w-3xl"
                    initial="hidden"
                    animate={activeIndex === index ? "visible" : "hidden"}
                    variants={textContainerVariants}
                  >
                    {/* Badge */}
                    <motion.div
                      variants={textItemVariants}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg px-4 py-2.5 rounded-full border border-white/20 mb-8 shadow-lg"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse" />
                      <span className="text-sm font-semibold text-white tracking-wider">
                        {slide.badge}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                      variants={textItemVariants}
                      className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 tracking-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      variants={textItemVariants}
                      className="text-md md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-10 max-w-2xl font-light"
                    >
                      {slide.description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      variants={textItemVariants}
                      className=" hidden md:flex flex-col sm:flex-row gap-4 mb-8"
                    >
                      <button className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 w-fit">
                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      <button className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm w-fit">
                        Donate Now
                      </button>
                    </motion.div>

                    {/* Meta Information */}
                    
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Enhanced Controls Container */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
          {/* Custom Pagination */}
          <div className="hero-pagination flex items-center gap-2 bg-black/30 backdrop-blur-lg px-4 py-2 rounded-full border border-white/10" />

          {/* Play/Pause Button */}
          

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button className="hero-prev-btn w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
              <ChevronLeft className="w-7 h-7 text-white" />
            </button>
            <button className="hero-next-btn w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
              <ChevronRight className="w-7 h-7 text-white" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
       
      </Swiper>

      {/* Enhanced Styles */}
      <style jsx global>{`
        .hero-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 6px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          margin: 0 4px;
        }

        .hero-bullet::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, #ffffff, transparent);
          transition: left 0.6s ease;
        }

        .hero-bullet:hover::before {
          left: 100%;
        }

        .hero-bullet-active {
          width: 40px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
          transform: scale(1.1);
        }

        .hero-pagination {
          backdrop-filter: blur(10px);
          padding: 8px 12px;
        }

        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .hero-bullet {
            width: 8px;
            height: 8px;
          }
          
          .hero-bullet-active {
            width: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;