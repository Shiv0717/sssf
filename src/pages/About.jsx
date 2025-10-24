import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  Shield, 
  ExternalLink, 
  BookOpen, 
  GraduationCap, 
  Trees, 
  Sparkles, 
  Globe, 
  Star,
  ArrowRight,
  Clock,
  Linkedin,
  TrendingUp,
  MapPin,
  Ribbon
} from "lucide-react";

const OurStory = () => {
  const storySections = [
    {
      title: "OUR FOUNDATION",
      subtitle: "Shri Shankarcharya Swaroopanand Foundation",
      description: `Shri Shankarcharya Swaroopanand Foundation is a dynamic non-profit organization dedicated to addressing pressing social, economic, and environmental challenges. 
      With a team of passionate individuals and a network of dedicated volunteers, we work tirelessly to implement sustainable solutions that uplift communities and promote positive change.
      Our focus areas include education, healthcare, women’s empowerment, environmental conservation, and community development. Through collaborative partnerships and innovative projects, we strive to make a lasting impact and create a better world for present and future generations.
      
      Join us in our mission to build a more inclusive and sustainable future for all.`,
      image: "/impack/children_in_slums.jpg",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600",
      stats: [
        { value: "15+", label: "Years" },
        { value: "50+", label: "Projects" },
        { value: "12", label: "States" }
      ]
    },
    {
      title: "OUR MISSION",
      subtitle: "Building a Better Future",
      description: `Who We Are
      We are a caring, international community of professionals, philanthropists, and students in our programs. We support youth who have lost their homes and families, yet remain determined to pursue education, become self-reliant, and actively contribute to their communities.
      
      What We Do
      We guide orphaned and abandoned children toward sustainable success, shaping the future generation of professionals, leaders, and changemakers.
      
      How We Do It
      By providing a supportive family atmosphere, advanced education, and extensive leadership training, we cultivate an environment where students can flourish and achieve their skills, talents, and dreams.
      
      Why We Do It
      We are inspired to act when we see the immense potential of a child who lacks the means to fulfill it. By supporting motivated children who have been deprived of opportunities, we not only help them thrive but also undergo a profound transformation ourselves.`,
      image: "/impack/WhatsApp-Image-2018-09-07-at-3.04.14-AM.jpeg",
      icon: <Target className="w-6 h-6" />,
      gradient: "from-emerald-500 to-green-600",
      stats: [
        { value: "50K+", label: "Students" },
        { value: "100K+", label: "Lives" },
        { value: "15K+", label: "Women" }
      ]
    }
  ];

  const focusAreas = [
    {
      title: "EDUCATION",
      description: "Quality education programs for underprivileged children",
      icon: <BookOpen className="w-5 h-5" />,
      stats: "50K+ Students",
      gradient: "from-blue-500 to-cyan-500",
      image: "/impack/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg"
    },
    {
      title: "HEALTHCARE",
      description: "Medical camps and health awareness programs",
      icon: <Heart className="w-5 h-5" />,
      stats: "100K+ Lives",
      gradient: "from-rose-500 to-pink-600",
      image: "/impack/Health-Care.jpg"
    },
    {
      title: "WOMEN EMPOWERMENT",
      description: "Skill development and financial literacy",
      icon: <Users className="w-5 h-5" />,
      stats: "15K+ Women",
      gradient: "from-violet-500 to-purple-600",
      image: "/impack/thumbnail-1.jpg"
    },
    {
      title: "ENVIRONMENT",
      description: "Conservation and sustainability initiatives",
      icon: <Trees className="w-5 h-5" />,
      stats: "1M+ Trees",
      gradient: "from-emerald-500 to-green-600",
      image: "/impack/no-polythene-use.jpg"
    }
  ];

  const values = [
    {
      title: "COMPASSION",
      description: "We approach every individual with empathy and understanding",
      icon: <Heart className="w-5 h-5" />,
      color: "text-rose-600"
    },
    {
      title: "IMPACT",
      description: "We focus on creating measurable, sustainable change",
      icon: <Target className="w-5 h-5" />,
      color: "text-orange-600"
    },
    {
      title: "COMMUNITY",
      description: "We believe in the power of collective action",
      icon: <Users className="w-5 h-5" />,
      color: "text-cyan-600"
    },
    {
      title: "INTEGRITY",
      description: "We maintain transparency and accountability",
      icon: <Shield className="w-5 h-5" />,
      color: "text-indigo-600"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" }
  };

  const staggerChildren = {
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 mt-10">
      {/* Header Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-normal tracking-wide mb-8 border border-blue-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              OUR JOURNEY OF TRANSFORMATION
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              OUR <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">STORY</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover the journey of Shri Shankarcharya Swaroopanand Foundation - 
              a story of compassion, impact, and transformation in communities across the nation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Founder Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="bg-white rounded-3xl border border-gray-200 overflow-hidden "
          >
            <div className="p-8">
              <motion.div
                variants={fadeInUp}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR FOUNDER</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
              </motion.div>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Founder Image */}
                <motion.div
                  variants={fadeInUp}
                  className="lg:w-2/5 w-full flex-shrink-0"
                >
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-blue-200 shadow-xl">
                    <img
                      src="/images/founder.jpeg"
                      alt="Suman Tripathi"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Founder & Director
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Founder Details */}
                <motion.div
                  variants={fadeInUp}
                  className="lg:w-3/5 w-full flex-1 space-y-6"
                >
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Suman Tripathi</h3>
                    <p className="text-blue-600 font-medium mb-4">Director, JSCN Foundation</p>
                    
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      A visionary leader and dedicated educator, Suman Tripathi has been instrumental in driving
                      social change through education and community empowerment. With a strong academic background
                      and compassionate leadership, she brings strategic thinking to every initiative.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: <Clock className="w-4 h-4" />, text: "15+ Years Experience" },
                      { icon: <GraduationCap className="w-4 h-4" />, text: "Education Specialist" },
                      { icon: <Users className="w-4 h-4" />, text: "Community Leader" },
                      { icon: <TrendingUp className="w-4 h-4" />, text: "Social Entrepreneur" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-600">
                        <div className="bg-blue-100 p-2 rounded-lg border border-blue-200">
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <motion.a
                    href="https://www.linkedin.com/in/suman-tripathi-01068731b/?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl border border-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">Connect on LinkedIn</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Story Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid lg:grid-cols-2 gap-8"
          >
            {storySections.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white  border border-gray-200 overflow-hidden transition-all duration-500 group-hover:scale-105">
                  {/* Image Section */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Header */}
                  <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm border border-white/30">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold tracking-wide">{item.title}</h3>
                          <p className="text-white/90 text-sm">{item.subtitle}</p>
                        </div>
                      </div>
                      <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm border border-white/30">
                        <Award className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex gap-6 mb-6">
                      {item.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">Since 2009</span>
                      <motion.a
                        href="#"
                        className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        Read More
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="bg-white rounded-3xl border border-gray-200 p-8 "
          >
            <motion.div
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR FOCUS AREAS</h2>
              <p className="text-gray-600 text-lg">Comprehensive programs addressing multiple dimensions of community development</p>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-300 transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  {/* Background Image */}
                  <div className="h-32 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className={`bg-gradient-to-r ${area.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white`}>
                      {area.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 tracking-wide">{area.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{area.description}</p>
                    <div className="text-blue-600 font-bold text-sm">
                      {area.stats}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values & Who We Are */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Who We Are */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white border border-blue-500/20 
              "
            >
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 mr-4" />
                <h2 className="text-2xl font-bold tracking-wide">WHO WE ARE</h2>
              </div>
              <p className="text-blue-100 leading-relaxed text-lg mb-6">
                We are a caring, international community of professionals, philanthropists, and students in our programs. 
                We support youth who have lost their homes and families, yet remain determined to pursue education, 
                become self-reliant, and actively contribute to their communities.
              </p>
              <div className="flex items-center text-blue-200">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-semibold">International Community Making Local Impact</span>
              </div>
            </motion.div>

            {/* Our Values */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="bg-white rounded-3xl p-8 border border-gray-200 "
            >
              <motion.div
                variants={fadeInUp}
                className="text-center mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">OUR VALUES</h2>
                <p className="text-gray-600">The principles that guide our work</p>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
              </motion.div>

              <motion.div
                variants={staggerChildren}
                className="space-y-4"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group cursor-pointer hover:shadow-md"
                  >
                    <div className={`bg-white p-3 rounded-lg mr-4 border border-gray-300 group-hover:border-${value.color.split('-')[1]}-300 transition-colors shadow-sm`}>
                      <div className={value.color}>
                        {value.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 tracking-wide">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center border border-blue-500/20 "
          >
            <h2 className="text-3xl font-bold mb-4 tracking-wide">JOIN OUR MISSION</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Be part of our journey to create lasting change and build a more inclusive and sustainable future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 tracking-wide "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GET INVOLVED
              </motion.button>
              <motion.button
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LEARN MORE
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;