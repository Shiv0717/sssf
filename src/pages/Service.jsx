import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart, BookOpen, Stethoscope, Briefcase, Users, Leaf, Award, Star,
  ArrowRight, Target, Calendar, MapPin, TrendingUp, CheckCircle, Sparkles
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Resource Assistance",
    description: "We provide comprehensive material and financial support to individuals and families facing challenges, ensuring basic needs are met with dignity and care through our extensive network.",
    icon: Heart,
    image: "impack/Picture1-1.png",
    color: "#EF4444",
    gradient: "from-red-500 to-pink-600",
    bgGradient: "from-red-50 to-pink-50",
    stats: "50,000+ Families Supported",
    duration: "Since 2009",
    impact: "Essential needs provided",
    features: ["Food Distribution", "Financial Aid", "Shelter Support", "Emergency Relief"],
    achievements: ["15K+ Emergency Kits", "25K+ Food Packets", "10K+ Financial Grants"],
    locations: ["Urban Slums", "Rural Areas", "Disaster Zones"],
    partners: ["Government", "Corporate", "Community"]
  },
  {
    id: 2,
    title: "Education Support",
    description: "Through scholarships, educational workshops, and infrastructure development, we promote learning opportunities and literacy among underprivileged communities across India.",
    icon: BookOpen,
    image: "/impack/WhatsApp-Image-2018-09-07-at-3.04.47-AM.jpeg",
    color: "#3B82F6",
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
    stats: "50,000+ Students Educated",
    duration: "Since 2009",
    impact: "Literacy rate improved by 40%",
    features: ["Scholarships", "Digital Learning", "School Infrastructure", "Teacher Training"],
    achievements: ["100+ Schools Built", "25K+ Scholarships", "500+ Digital Labs"],
    locations: ["Rural Schools", "Urban Centers", "Tribal Areas"],
    partners: ["Education Dept", "Tech Companies", "NGOs"]
  },
  {
    id: 3,
    title: "Healthcare Programs",
    description: "Our comprehensive healthcare initiatives focus on preventive care, medical camps, and awareness campaigns, significantly improving community health outcomes.",
    icon: Stethoscope,
    image: "/impack/Health-Care.jpg",
    color: "#10B981",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    stats: "100,000+ Lives Impacted",
    duration: "Continuous",
    impact: "Health awareness increased",
    features: ["Medical Camps", "Vaccination Drives", "Health Education", "Medicine Distribution"],
    achievements: ["500+ Medical Camps", "1M+ Vaccinations", "50K+ Health Kits"],
    locations: ["Remote Villages", "Urban Slums", "Tribal Regions"],
    partners: ["Hospitals", "Pharma Companies", "Health Dept"]
  },
  {
    id: 4,
    title: "Skill Development",
    description: "We offer vocational training, career counseling, and job placement services to equip individuals with market-relevant skills for sustainable employment.",
    icon: Briefcase,
    image: "/impack/thumbnail-1.jpg",
    color: "#8B5CF6",
    gradient: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50",
    stats: "20,000+ Trained",
    duration: "5 Years",
    impact: "75% Employment Rate",
    features: ["Vocational Training", "Career Counseling", "Job Placement", "Entrepreneurship"],
    achievements: ["50+ Training Centers", "15K+ Jobs Created", "500+ Startups"],
    locations: ["Training Centers", "Colleges", "Community Halls"],
    partners: ["NSDC", "Industry Partners", "Educational Institutes"]
  },
  {
    id: 5,
    title: "Women's Empowerment",
    description: "Empowering women through comprehensive skill-building, entrepreneurship support, and gender equality programs, fostering economic independence.",
    icon: Users,
    image: "/impack/IMG-20180220-WA0114.jpg",
    color: "#EC4899",
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50",
    stats: "15,000+ Women Empowered",
    duration: "7 Years",
    impact: "Financial independence achieved",
    features: ["Skill Building", "Microfinance", "Leadership Training", "Legal Awareness"],
    achievements: ["10K+ Loans Provided", "5K+ Women Leaders", "100+ Self-Help Groups"],
    locations: ["Rural Communities", "Urban Centers", "Tribal Areas"],
    partners: ["Women & Child Dept", "Banks", "Social Enterprises"]
  },
  {
    id: 6,
    title: "Environmental Conservation",
    description: "Leading environmental initiatives, massive tree plantation drives, and sustainable waste management projects for a greener, sustainable future.",
    icon: Leaf,
    image: "/impack/no-polythene-use.jpg",
    color: "#059669",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    stats: "1 Million+ Trees Planted",
    duration: "Ongoing",
    impact: "Carbon footprint reduced",
    features: ["Tree Plantation", "Waste Management", "Water Conservation", "Eco Awareness"],
    achievements: ["1M+ Trees", "500+ Clean Drives", "50K+ Eco Warriors"],
    locations: ["Forest Areas", "Urban Parks", "Rural Lands"],
    partners: ["Forest Dept", "Municipal Corp", "Environmental NGOs"]
  }
];

const Service = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/20 py-20 px-4 mt-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Comprehensive Social Initiatives
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Impact Programs</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Transforming lives through sustainable development programs in education, healthcare, 
          skill development, and environmental conservation across communities.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto space-y-16 md:space-y-24"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row gap-8 md:gap-12 items-center ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-3xl  group"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Stats Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{service.stats.split('+')[0]}+</div>
                      <div className="text-xs text-gray-600 font-medium">Impact</div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-6 left-6 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    {service.duration}
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 w-full">
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-white rounded-3xl p-6 md:p-8  border border-gray-100  transition-all duration-500 ${
                    isEven ? 'lg:ml-8' : 'lg:mr-8'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          <MapPin className="w-3 h-3 inline mr-1" />
                          Multiple Locations
                        </span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          <TrendingUp className="w-3 h-3 inline mr-1" />
                          {service.impact}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features & Achievements Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm md:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {service.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                            <span className="text-sm md:text-base">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Partners & Locations */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Active Locations</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.locations.map((location, i) => (
                          <span key={i} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs">
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Partners</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.partners.map((partner, i) => (
                          <span key={i} className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs">
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                 
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Overall Impact Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-20 md:mt-28"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Overall Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">250K+</div>
              <div className="text-blue-100 text-sm md:text-base">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100 text-sm md:text-base">Years of Service</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100 text-sm md:text-base">States Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100 text-sm md:text-base">Success Rate</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Service;