import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Shield, 
  Target, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Award,
  Clock,
  MapPin
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CommunityImpact = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const headerRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  const featuredId = 2;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

      // Stats animation
      gsap.fromTo(statsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

      // Cards animation
      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 100, rotationY: 15, scale: 0.8 },
          {
            opacity: 1, y: 0, rotationY: 0, scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          });
      });

      // CTA animation
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 60, scale: 0.8 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

      // Hover animations
      cardRefs.current.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -12,
            rotationY: 8,
            scale: 1.03,
            duration: 0.5,
            ease: "power2.out"
          });

          const image = card.querySelector('img');
          const number = card.querySelector('.card-number');
          const stats = card.querySelector('.impact-stats');

          gsap.to(image, { scale: 1.15, duration: 0.5, ease: "power2.out" });
          gsap.to(number, {
            scale: 1.2,
            backgroundColor: card.dataset.color,
            duration: 0.4
          });

          if (stats) {
            gsap.to(stats, { opacity: 1, y: 0, duration: 0.4, delay: 0.1 });
          }
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          });

          const image = card.querySelector('img');
          const number = card.querySelector('.card-number');
          const stats = card.querySelector('.impact-stats');

          gsap.to(image, { scale: 1, duration: 0.5 });
          gsap.to(number, { scale: 1, duration: 0.4 });

          if (stats) {
            gsap.to(stats, { opacity: 0, y: 20, duration: 0.3 });
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const impactAreas = [
    {
      id: 1,
      title: "Education for All",
      image: "/impack/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg",
      color: "#3B82F6",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      description: "Providing quality education to underprivileged children through innovative learning programs.",
      duration: "Since 2009",
      stats: "25K+ Students",
      icon: Users
    },
    {
      id: 2,
      title: "Women Empowerment",
      image: "/images/image4.jpeg",
      color: "#8B5CF6",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      description: "Skill development and economic independence programs for women across communities.",
      duration: "5 Years",
      stats: "15K+ Women",
      icon: Target
    },
    {
      id: 3,
      title: "Healthcare Initiatives",
      image: "/impack/Health-Care.jpg",
      color: "#10B981",
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-50 to-green-50",
      description: "Medical camps and health awareness programs in underserved rural areas.",
      duration: "Ongoing",
      stats: "100K+ Lives",
      icon: Heart
    },
    {
      id: 4,
      title: "Child Protection",
      image: "/impack/children_in_slums.jpg",
      color: "#EF4444",
      gradient: "from-rose-500 to-red-500",
      bgGradient: "from-rose-50 to-red-50",
      description: "Safe environments and rehabilitation programs for vulnerable children.",
      duration: "7 Years",
      stats: "10K+ Children",
      icon: Shield
    },
    {
      id: 5,
      title: "Disaster Relief",
      image: "/images/image2.jpeg",
      color: "#F59E0B",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      description: "Emergency response and rehabilitation support during natural disasters.",
      duration: "Emergency",
      stats: "50+ Campaigns",
      icon: Award
    }
  ];

  const impactStats = [
    { number: "50,000+", label: "Lives Transformed", icon: Users, color: "blue" },
    { number: "15+", label: "Years of Service", icon: Clock, color: "purple" },
    { number: "25+", label: "Active Communities", icon: MapPin, color: "green" },
    { number: "95%", label: "Success Rate", icon: TrendingUp, color: "orange" }
  ];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold mb-6 shadow-lg shadow-blue-500/25"
          >
            <Sparkles className="w-4 h-4" />
            Moments of Impact
            <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent pb-4">
            Our Gallery
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
          Explore moments of impact from our journey across India — from community events to rural development projects. Each image reflects our mission to empower communities and create lasting change.

          </p>
        </div>

       
        {/* Grid Layout 30% - 70% */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8">
          {/* Left Side: Featured Large Card */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full min-h-[32rem] overflow-hidden rounded-3xl shadow-2xl group cursor-pointer"
            >
              <img
                src={impactAreas.find(a => a.id === featuredId).image}
                alt="Featured Impact"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               
                 
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${impactAreas.find(a => a.id === featuredId).gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            </motion.div>
          </div>

          {/* Right Side: 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {impactAreas
              .filter(area => area.id !== featuredId)
              .map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.id}
                    ref={addToRefs}
                    data-color={area.color}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer transform perspective-1000 transition-all duration-500 h-80 bg-white border border-gray-100 shadow-sm hover:shadow-xl"
                  >
                    {/* Image Container */}
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Number Badge */}
                      <div
                        className="card-number absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm border-2 border-white/30 transition-all duration-300 shadow-lg backdrop-blur-sm"
                        style={{ backgroundColor: `${area.color}CC` }}
                      >
                        0{area.id}
                      </div>

                      {/* Icon */}
                      <div className={`absolute top-4 left-4 w-10 h-10 bg-gradient-to-r ${area.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>

                   

                    {/* Hover Color Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span>Join Our Mission</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <p className="text-gray-600 mt-4 text-sm">
            Help us create lasting change in communities across India
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default CommunityImpact;