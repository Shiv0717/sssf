import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  Check,
  Award,
  GraduationCap,
  Users,
  Target,
  BookOpen,
  Shield,
  Heart,
  Home,
  ChefHat,
  LifeBuoy,
  Leaf,
  Briefcase,
  Trees,
  Utensils,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const programs = [
    {
      id: "P01",
      icon: BookOpen,
      title: "Education",
      description:
        "Providing quality education and learning opportunities for underprivileged children and youth through schools, scholarships, and digital learning initiatives.",
      color: "#3B82F6",
      stats: "50,000+ Students",
      impact: "85% Completion Rate",
      image:
        "/impack/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg",
      achievements: [
        "Digital learning initiatives implemented",
        "Scholarships for underprivileged students",
        "Quality education programs in rural areas",
      ],
      details: {
        beneficiaries: "50,000+",
        duration: "Ongoing",
        reach: "National",
      },
    },
    {
      id: "P02",
      icon: Shield,
      title: "Child Protection",
      description:
        "Ensuring safe environments for children through advocacy, counseling, and rehabilitation programs that protect their rights and well-being.",
      color: "#EF4444",
      stats: "25,000+ Children Protected",
      impact: "92% Success Rate",
      image: "/impack/children_in_slums.jpg",
      achievements: [
        "Child protection advocacy programs",
        "Counseling and rehabilitation services",
        "Safe environment initiatives",
      ],
      details: {
        beneficiaries: "25,000+",
        duration: "5 Years",
        reach: "Multi-state",
      },
    },
    {
      id: "P03",
      icon: Users,
      title: "Women Empowerment",
      description:
        "Empowering women through skill development, financial literacy, and leadership programs to create independent and confident community leaders.",
      color: "#8B5CF6",
      stats: "15,000+ Women Empowered",
      impact: "78% Employment Rate",
      image: "/impack/thumbnail-1.jpg",
      achievements: [
        "Skill development workshops",
        "Financial literacy programs",
        "Leadership training initiatives",
      ],
      details: {
        beneficiaries: "15,000+",
        duration: "3 Years",
        reach: "Urban & Rural",
      },
    },
    {
      id: "P04",
      icon: Heart,
      title: "Health and Hygiene",
      description:
        "Promoting health awareness, medical camps, and hygiene practices to improve community health outcomes and prevent diseases.",
      color: "#10B981",
      stats: "100,000+ Lives Impacted",
      impact: "65% Health Improvement",
      image: "/impack/Sanitary-pad-distribution-2.jpeg",
      achievements: [
        "Medical camps in remote areas",
        "Health awareness campaigns",
        "Hygiene practice implementation",
      ],
      details: {
        beneficiaries: "100,000+",
        duration: "Ongoing",
        reach: "National",
      },
    },
    {
      id: "P05",
      icon: LifeBuoy,
      title: "Disaster Relief & Rehabilitation",
      description:
        "Providing emergency aid, shelter, and long-term rehabilitation to communities affected by natural disasters.",
      color: "#F97316",
      stats: "30,000+ People Assisted",
      impact: "70% Recovery Rate",
      image: "impack/India-Covid-19.jpg",
      achievements: [
        "Rapid disaster response teams",
        "Temporary shelter setup",
        "Livelihood restoration support",
      ],
      details: {
        beneficiaries: "30,000+",
        duration: "Project-based",
        reach: "Disaster-prone Areas",
      },
    },
    {
      id: "P06",
      icon: Utensils,
      title: "Tribal Culinary Skill Development",
      description:
        "Empowering tribal communities by preserving and promoting their traditional culinary skills and enabling sustainable income generation.",
      color: "#A855F7",
      stats: "5,000+ Trained Individuals",
      impact: "60% Increase in Income",
      image: "/impack/Tribal-culinary-skills.jpg",
      achievements: [
        "Culinary training for tribal youth",
        "Showcasing tribal recipes at events",
        "Micro-enterprise support",
      ],
      details: {
        beneficiaries: "5,000+",
        duration: "2 Years",
        reach: "Tribal Regions",
      },
    },
    {
      id: "P07",
      icon: Briefcase,
      title: "Livelihood Programme",
      description:
        "Enhancing income opportunities through vocational training, entrepreneurship support, and market linkages.",
      color: "#F59E0B",
      stats: "20,000+ Livelihoods Created",
      impact: "75% Employment Rate",
      image: "/impack/IMG-20180220-WA0067.jpg",
      achievements: [
        "Vocational training centers established",
        "Entrepreneurship development programs",
        "Microfinance and market access",
      ],
      details: {
        beneficiaries: "20,000+",
        duration: "Ongoing",
        reach: "National",
      },
    },
    {
      id: "P08",
      icon: Leaf,
      title: "Environment",
      description:
        "Promoting environmental sustainability through tree plantation, waste management, and community awareness campaigns.",
      color: "#22C55E",
      stats: "1 Million+ Trees Planted",
      impact: "30% Increase in Green Cover",
      image: "/impack/world-health-day-2019-nmcg-organises-cleanup-yamuna-ghat-delhi-twitter-660x330-1.jpg",
      achievements: [
        "Large-scale tree plantation drives",
        "Community clean-up initiatives",
        "Sustainability workshops",
      ],
      details: {
        beneficiaries: "Communities Nationwide",
        duration: "Ongoing",
        reach: "National",
      },
    },
    {
      id: "P09",
      icon: GraduationCap,
      title: "Hospitality Training Programme",
      description:
        "Training youth in hospitality and soft skills to prepare them for careers in the service industry.",
      color: "#06B6D4",
      stats: "10,000+ Youth Trained",
      impact: "82% Job Placement Rate",
      image: "/impack/Picture22.png",
      achievements: [
        "Industry-certified hospitality courses",
        "Internships with hotels and restaurants",
        "Placement assistance and mentorship",
      ],
      details: {
        beneficiaries: "10,000+",
        duration: "1 Year",
        reach: "Urban Centers",
      },
    },
  ];

  const handleProgramClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        setIsPlaying(false);
      } else {
        swiper.autoplay.start();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="py-8 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50/20">
      {/* Google Fonts Import - Add this to your main CSS file or HTML head */}
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm font-semibold mb-4 lg:mb-6 font-inter">
            <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
            Our Impact Programs
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4 lg:mb-6 font-playfair leading-tight">
            Transforming Communities
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2 block">
              Through Sustainable Initiatives
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter font-light">
            Discover our comprehensive programs designed to create lasting
            impact and sustainable change across diverse communities.
          </p>
        </div>

        {/* Enhanced Program Navigation */}
        <div className="mb-8 lg:mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
            {/* Program Navigation Tabs */}
            <div className="w-full lg:w-auto overflow-x-auto">
              <div className="flex space-x-1 lg:space-x-2 p-1 bg-white/80 backdrop-blur-sm rounded-2xl w-max mx-auto lg:mx-0 border border-gray-200 shadow-sm">
                {programs.map((program, index) => (
                  <button
                    key={program.id}
                    onClick={() => handleProgramClick(index)}
                    className={`px-4 py-3 lg:px-6 lg:py-4 rounded-xl text-sm lg:text-base transition-all duration-300 flex items-center gap-3 min-w-max font-inter ${
                      activeIndex === index
                        ? "text-white shadow-lg transform scale-105 font-semibold"
                        : "text-gray-700 bg-transparent hover:bg-gray-50 font-medium"
                    }`}
                    style={{
                      backgroundColor:
                        activeIndex === index ? program.color : "transparent",
                    }}
                  >
                    <program.icon size={20} className="flex-shrink-0" />
                    <span className="hidden sm:inline">{program.title}</span>
                    <span className="sm:hidden">
                      {program.title.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleAutoplay}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:shadow-xl transform hover:scale-105"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <div className="flex gap-2">
                <button
                  ref={navigationPrevRef}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:shadow-xl transform hover:scale-105"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  ref={navigationNextRef}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:shadow-xl transform hover:scale-105"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              clickable: true,
              type: "fraction",
              el: ".custom-pagination",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.params.navigation) {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
            className="rounded-3xl overflow-hidden "
          >
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <SwiperSlide key={program.id}>
                  <div className="bg-white rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                      {/* Left Side - Full Image */}
                      <div className="relative h-80 lg:h-auto">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20"
                          style={{
                            backgroundColor: `${program.color}20`,
                            backgroundImage: `linear-gradient(135deg, ${program.color}30 0%, ${program.color}10 100%)`,
                          }}
                        >
                          {/* Background Pattern */}
                          <div
                            className="absolute inset-0 opacity-10"
                            style={{
                              backgroundImage: `radial-gradient(circle at 25% 25%, ${program.color} 2px, transparent 2px)`,
                              backgroundSize: "30px 30px",
                            }}
                          ></div>

                          {/* Content Overlay */}
                          <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                            <div>
                              <div className="flex items-center gap-3 mb-4">
                                <div
                                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl backdrop-blur-sm"
                                  style={{ backgroundColor: program.color }}
                                >
                                  <IconComponent size={28} />
                                </div>
                                <div className="font-inter">
                                  <div className="text-sm opacity-90 font-light">
                                    Active Program
                                  </div>
                                  <div className="text-2xl font-bold">
                                    {program.id}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h2 className="text-4xl lg:text-5xl font-bold leading-tight font-playfair">
                                {program.title}
                              </h2>
                              <div className="flex items-center gap-4">
                                <div
                                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white backdrop-blur-sm border border-white/30 font-inter"
                                  style={{
                                    backgroundColor: `${program.color}CC`,
                                  }}
                                >
                                  <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                                  {program.stats}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="p-6 lg:p-8 xl:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                        {/* Progress Indicator */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="text-sm text-gray-500 font-medium font-inter">
                            {String(index + 1).padStart(2, "0")} /{" "}
                            {String(programs.length).padStart(2, "0")}
                          </div>
                          <div className="text-right">
                            <div
                              className="text-2xl font-bold font-inter"
                              style={{ color: program.color }}
                            >
                              {program.impact}
                            </div>
                            <div className="text-sm text-gray-600 font-inter">
                              Success Rate
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                          <p className="text-gray-700 leading-relaxed text-lg lg:text-xl font-inter font-light">
                            {program.description}
                          </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                          <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                            <Users
                              className="w-6 h-6 mx-auto mb-3"
                              style={{ color: program.color }}
                            />
                            <div className="text-xl font-bold text-gray-900 font-inter">
                              {program.details.beneficiaries}
                            </div>
                            <div className="text-sm text-gray-600 mt-1 font-inter">
                              Beneficiaries
                            </div>
                          </div>
                          <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                            <Target
                              className="w-6 h-6 mx-auto mb-3"
                              style={{ color: program.color }}
                            />
                            <div className="text-xl font-bold text-gray-900 font-inter">
                              {program.details.duration}
                            </div>
                            <div className="text-sm text-gray-600 mt-1 font-inter">
                              Duration
                            </div>
                          </div>
                          <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                            <Award
                              className="w-6 h-6 mx-auto mb-3"
                              style={{ color: program.color }}
                            />
                            <div className="text-xl font-bold text-gray-900 font-inter">
                              {program.details.reach}
                            </div>
                            <div className="text-sm text-gray-600 mt-1 font-inter">
                              Reach
                            </div>
                          </div>
                        </div>

                        {/* Key Achievements */}
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900 text-xl flex items-center gap-3 font-inter">
                            <div
                              className="w-3 h-3 rounded-full animate-pulse flex-shrink-0"
                              style={{ backgroundColor: program.color }}
                            ></div>
                            Program Highlights
                          </h4>

                          <div className="space-y-3">
                            {program.achievements.map((achievement, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-gray-50 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                              >
                                <div
                                  className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                                  style={{ backgroundColor: program.color }}
                                >
                                  <Check size={16} />
                                </div>
                                <span className="text-gray-700 font-medium text-base lg:text-lg font-inter">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center items-center gap-4 mt-8 text-lg font-semibold text-gray-700 font-inter"></div>
        </div>
      </div>
    </section>
  );
};

export default Programs;