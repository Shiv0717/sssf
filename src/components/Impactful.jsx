import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Target, ArrowRight, BookOpen, Stethoscope, Briefcase } from 'lucide-react';

// Counter Animation Hook
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
};

const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, ref] = useCounter(end, duration);
  return <span ref={ref}>{count}{suffix}</span>;
};

const Impactful = () => {
  const cards = [
    {
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      textColor: "text-gray-900",
      accentColor: "from-blue-500 to-indigo-600",
      icon: BookOpen,
      title: "Education Programs",
      description: "Providing quality education and learning opportunities for underprivileged children and youth.",
      stats: 2500,
      suffix: "+",
      statText: "Students Educated"
    },
    {
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
      textColor: "text-gray-900",
      accentColor: "from-emerald-500 to-green-600",
      icon: Stethoscope,
      title: "Healthcare Initiatives",
      description: "Ensuring access to medical care, nutrition, and health awareness in remote communities.",
      stats: 15000,
      suffix: "+",
      statText: "Lives Touched"
    },
    {
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
      textColor: "text-gray-900",
      accentColor: "from-amber-500 to-orange-600",
      icon: Briefcase,
      title: "Skill Development",
      description: "Empowering individuals with vocational training and employment opportunities.",
      stats: 1200,
      suffix: "+",
      statText: "People Trained"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Making a Difference Since 2009
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-['Urbanist'] tracking-tight">
            Creating{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Lasting Impact
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-['Urbanist'] font-light">
            Transforming communities through sustainable programs in education, healthcare, 
            and skill development. Join us in building a better future for all.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                className={`rounded-3xl p-8 lg:p-10 transition-all duration-500 transform hover:-translate-y-4 ${card.bgColor} ${card.textColor} relative overflow-hidden group`}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-current to-transparent" />
                </div>

                {/* Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accentColor}`} />

                {/* Icon */}
                <motion.div 
                  className="mb-8 relative z-10"
                  variants={iconVariants}
                >
                  <div 
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${card.accentColor} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <IconComponent 
                      size={36} 
                      className="text-white" 
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-['Urbanist'] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mb-8 leading-relaxed opacity-90 font-['Urbanist'] text-lg font-light">
                    {card.description}
                  </p>

                  {/* Counter */}
                  <div className="mt-8 mb-6">
                    <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-3 font-['Urbanist'] bg-gradient-to-r ${card.accentColor} bg-clip-text text-transparent`}>
                      <Counter end={card.stats} suffix={card.suffix} />
                    </div>
                    <div className="text-base font-medium font-['Urbanist'] opacity-80">
                      {card.statText}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`mt-6 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 font-['Urbanist'] group/btn bg-white/80 backdrop-blur-sm border border-white/20 hover:bg-white shadow-md hover:shadow-lg`}
                    whileHover={{ 
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 mx-auto shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-['Urbanist']"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Mission
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Impactful;