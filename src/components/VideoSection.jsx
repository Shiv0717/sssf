import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Calendar, MapPin, Users, Clock, ExternalLink, Play, Heart, Eye } from 'lucide-react';

const VideoSection = () => {
  const events = [
    {
      id: 1,
      title: "Compassion Drive: Old Age Home Visit 2024",
      description:
        "A day filled with love, laughter, and care — our volunteers visited the elderly to share stories, perform cultural programs, and bring smiles to their faces.",
      youtubeId: "e9B7opGyFEE",
      date: "March 15, 2024",
      location: "New Delhi, India",
      attendees: "150+",
      duration: "2:00:00",
      stats: { views: "12.5K", likes: "2.1K" }
    },
    {
      id: 2,
      title: "Inspire & Learn: School Engagement Meet 2024",
      description:
        "An interactive session with students and teachers, celebrating creativity, promoting education, and inspiring young minds for a brighter future.",
      youtubeId: "QKppXzDVVjI",
      date: "February 28, 2024",
      location: "Mumbai, India",
      attendees: "400+",
      duration: "1:30:00",
      stats: { views: "8.7K", likes: "1.5K" }
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
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const hoverVariants = {
    rest: { 
      scale: 1,
      y: 0,
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
    },
    hover: { 
      scale: 1.02,
      y: -8,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200/30 rounded-full blur-xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            variants={pulseVariants}
            animate="pulse"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold mb-6  relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />
            <Youtube className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Events & Highlights</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full relative z-10"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Watch Our
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Impact Stories
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the transformative journey of our community initiatives through 
            recorded events, success stories, and impact highlights.
          </motion.p>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <motion.div
                variants={hoverVariants}
                initial="rest"
                whileHover="hover"
                className="bg-white rounded-3xl overflow-hidden border border-gray-200/60 relative"
              >
                {/* YouTube Player with Overlay */}
                <div className="relative pt-[56.25%] bg-black rounded-t-3xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${event.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                    title={event.title}
                    className="absolute top-0 left-0 w-full h-full rounded-t-3xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-3xl"
                  >
                    <motion.div
                      variants={iconVariants}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30"
                    >
                      <Play className="w-8 h-8 text-white fill-white" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <motion.h3
                      whileHover={{ color: "#3b82f6" }}
                      className="text-2xl font-bold text-gray-900 transition-colors duration-300 flex-1 mr-4"
                    >
                      {event.title}
                    </motion.h3>
                    <motion.a
                      variants={iconVariants}
                      whileHover="hover"
                      href={`https://www.youtube.com/watch?v=${event.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium bg-blue-50 px-3 py-2 rounded-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Watch
                    </motion.a>
                  </div>

                  <motion.p
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0.9 }}
                    className="text-gray-600 leading-relaxed mb-6"
                  >
                    {event.description}
                  </motion.p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1 text-gray-500"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{event.stats.views}</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1 text-gray-500"
                    >
                      <Heart className="w-4 h-4" />
                      <span>{event.stats.likes}</span>
                    </motion.div>
                  </div>

                  {/* Event Details Grid */}
                  <motion.div 
                    className="grid grid-cols-2 gap-4 border-t pt-4 text-sm text-gray-600"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[
                      { icon: Calendar, text: event.date },
                      { icon: MapPin, text: event.location },
                      { icon: Users, text: event.attendees },
                      { icon: Clock, text: event.duration }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 transition-all duration-200"
                      >
                        <item.icon className="w-4 h-4 text-blue-600" />
                        <span>{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold  transition-all duration-300"
          >
            <Youtube className="w-5 h-5" />
            View More on YouTube
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;