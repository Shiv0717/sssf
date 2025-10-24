import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Drone, 
  Cpu, 
  Brain,
  Eye,
  Target, 
  Briefcase, 
  Award, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  BarChart3,
  CheckCircle,
  Rocket,
  GraduationCap,
  Lightbulb,
  HeartHandshake,
  Globe,
  Star,
  ArrowRight,
  X,
  User,
  Shield,
  TrendingUp,
  Clock,
  BookOpen,
  Building,
  Heart,
  FileText,
  Download,
  ExternalLink
} from 'lucide-react';

const NSDC = () => {
  const [activeTab, setActiveTab] = useState('drones');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const droneCourses = [
    {
      id: 1,
      title: "Drone Pilot Training",
      duration: "3 Months",
      level: "Beginner to Advanced",
      skills: ["Flight Operations", "Aerial Photography", "Mapping & Surveying", "Safety Protocols"],
      icon: <Drone className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      students: 250,
      rating: 4.8,
      nsdcCode: "ELE/Q7301"
    },
    {
      id: 2,
      title: "Drone Manufacturing and Assembly Technician",
      duration: "6 Months",
      level: "Intermediate",
      skills: ["Assembly Techniques", "Electronics", "Troubleshooting", "Quality Control", "Manufacturing Processes"],
      icon: <Cpu className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      students: 180,
      rating: 4.7,
      nsdcCode: "ELE/Q7307"
    },
    {
      id: 3,
      title: "Agricultural Drone Applications",
      duration: "4 Months",
      level: "Beginner",
      skills: ["Crop Monitoring", "Spraying Techniques", "Data Analysis", "Precision Farming"],
      icon: <Globe className="w-12 h-12" />,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      students: 320,
      rating: 4.9,
      nsdcCode: "AGR/Q7302"
    }
  ];

  const aiCourses = [
    {
      id: 1,
      title: "AI - Machine Learning Engineer",
      duration: "6 Months",
      level: "Advanced",
      skills: ["Python Programming", "Machine Learning", "Deep Learning", "Neural Networks", "AI Ethics"],
      icon: <Brain className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      students: 450,
      rating: 4.8,
      nsdcCode: "SSC/Q8113"
    },
    {
      id: 2,
      title: "Computer Vision & Drones",
      duration: "5 Months",
      level: "Intermediate",
      skills: ["Image Processing", "Object Detection", "Neural Networks", "Real-time Analysis"],
      icon: <Eye className="w-12 h-12" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      students: 290,
      rating: 4.6,
      nsdcCode: "SSC/Q8115"
    },
    {
      id: 3,
      title: "AI for Social Development",
      duration: "4 Months",
      level: "Beginner",
      skills: ["Social Impact Analysis", "Predictive Modeling", "Community Solutions", "Project Management"],
      icon: <HeartHandshake className="w-12 h-12" />,
      color: "from-rose-500 to-red-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      students: 210,
      rating: 4.7,
      nsdcCode: "SSC/Q8118"
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "Drone Manufacturing and Assembly Technician",
      code: "ELE/Q7307",
      type: "NSDC Certificate",
      image: "/doc/drone.png",
      thumbnail: "/certificates/drone-manufacturing-thumb.jpg",
      validity: "Lifetime",
      level: "Level 4"
    },
    {
      id: 2,
      title: "AI - Machine Learning Engineer",
      code: "SSC/Q8113",
      type: "NSDC Certificate",
      image: "/doc/ai.png",
      thumbnail: "/certificates/ai-ml-thumb.jpg",
      validity: "Lifetime",
      level: "Level 5"
    }
  ];

  // ... (successStories, features, stats remain the same)
  const successStories = [
    {
      name: "Rahul Sharma",
      course: "Drone Pilot Training",
      achievement: "Started agricultural drone services business serving 50+ farmers",
      icon: <User className="w-12 h-12" />,
      rating: 5,
      highlight: "₹8L/yr revenue",
      role: "Entrepreneur"
    },
    {
      name: "Priya Patel",
      course: "AI Fundamentals",
      achievement: "Developed AI solution for local healthcare center, reducing diagnosis time by 40%",
      icon: <Heart className="w-12 h-12" />,
      rating: 5,
      highlight: "40% efficiency gain",
      role: "Healthcare Innovator"
    },
    {
      name: "Amit Kumar",
      course: "Computer Vision & Drones",
      achievement: "Works with disaster management department for rapid response operations",
      icon: <Shield className="w-12 h-12" />,
      rating: 5,
      highlight: "Govt. collaboration",
      role: "Disaster Management Expert"
    }
  ];

  const features = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Industry-Ready Curriculum",
      description: "Designed in collaboration with industry experts and NSDC standards"
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Placement Assistance",
      description: "100% placement support with 500+ partner companies"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "NSDC Certified",
      description: "Government recognized certification with national validity"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Trainers",
      description: "Learn from industry professionals with 10+ years experience"
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art labs and equipment for hands-on training"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Career Growth",
      description: "Average 3.5x salary hike after course completion"
    }
  ];

  const stats = [
    { number: "2000+", label: "Students Trained", icon: <GraduationCap className="w-8 h-8" /> },
    { number: "95%", label: "Placement Rate", icon: <Briefcase className="w-8 h-8" /> },
    { number: "50+", label: "Industry Partners", icon: <Building className="w-8 h-8" /> },
    { number: "4.8/5", label: "Student Rating", icon: <Star className="w-8 h-8" /> }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 mt-20">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-16 md:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 opacity-20">
          <Drone className="w-20 h-20 md:w-32 md:h-32" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20">
          <Brain className="w-20 h-20 md:w-32 md:h-32" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 text-sm md:text-base"
          >
            <Rocket className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-semibold">NSDC Certified Programs</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
          >
            Future Skills
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-blue-100"
          >
            Shri Shankarcharya Swaroopanand Foundation
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Empowering Youth with Cutting-Edge Drone Technology & Artificial Intelligence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-12 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 md:py-16 bg-white -mt-8 md:-mt-12 relative z-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full text-blue-600 mb-3 md:mb-4">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certificate Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 md:py-20 bg-gradient-to-br from-white to-blue-50"
      >
        <div className=" px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              NSDC <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certificates</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Government recognized certifications with national validity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800">{certificate.title}</h3>
                        <p className="text-blue-600 font-semibold text-sm">{certificate.code}</p>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {certificate.level}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-gray-400" />
                      <span>{certificate.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{certificate.validity}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                 <div className="mt-4">
  <motion.img
    src={certificate.image}
    alt={certificate.title}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="w-full rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
  />
</div>

                   
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology Tabs */}
      <section className="py-16 md:py-20 container mx-auto bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className=" px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our specialized courses in emerging technologies, designed for future-ready careers
            </p>
          </motion.div>

          {/* Tab Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-16"
          >
            <button
              onClick={() => setActiveTab('drones')}
              className={`px-4 py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3 ${
                activeTab === 'drones'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 transform -translate-y-1'
                  : 'bg-white text-gray-700 shadow-lg hover:shadow-xl border border-gray-200'
              }`}
            >
              <Drone className="w-5 h-5 md:w-6 md:h-6" />
              <span>Drone Technology</span>
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3 ${
                activeTab === 'ai'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 transform -translate-y-1'
                  : 'bg-white text-gray-700 shadow-lg hover:shadow-xl border border-gray-200'
              }`}
            >
              <Brain className="w-5 h-5 md:w-6 md:h-6" />
              <span>Artificial Intelligence</span>
            </button>
          </motion.div>

          {/* Courses Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {(activeTab === 'drones' ? droneCourses : aiCourses).map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                  <div className="p-4 md:p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl ${course.bgColor} ${course.borderColor} border mb-4 text-gray-700`}>
                      {course.icon}
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                      {course.title}
                    </h3>

                    {/* NSDC Code */}
                    <div className="mb-3">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                        NSDC: {course.nsdcCode}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4" />
                        <span>{course.level}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{course.students}+ students</span>
                      </div>
                      <StarRating rating={course.rating} />
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-sm md:text-base">Skills You'll Learn:</span>
                      </h4>
                      <ul className="space-y-2">
                        {course.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center text-gray-600 text-xs md:text-sm">
                            <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2 flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCourse(course)}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl p-4 md:p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    {selectedCertificate.title}
                  </h2>
                  <p className="text-blue-600 font-semibold">{selectedCertificate.code}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="flex-1 min-h-0">
                <iframe
                  src={selectedCertificate.pdfUrl}
                  className="w-full h-full min-h-[400px] rounded-lg border border-gray-200"
                  title={`Certificate ${selectedCertificate.title}`}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCertificate(null)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300"
                >
                  Close
                </motion.button>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

   
       {/* Success Stories */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our alumni who are transforming industries with their skills
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600`}>
                    {story.icon}
                  </div>
                  <StarRating rating={story.rating} />
                </div>
                
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {story.name}
                  </h4>
                  <p className="text-blue-600 font-semibold text-sm mb-2">
                    {story.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {story.course}
                  </p>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {story.achievement}
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 inline-block">
                  <span className="text-green-700 font-semibold text-sm">
                    {story.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

   <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20  bg-gradient-to-br from-gray-900 to-blue-900 text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Our Programs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive learning experience designed for your career success
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-500/20 rounded-2xl text-blue-400 mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Ready to Launch Your Career?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
          >
            Join 2000+ successful students who transformed their careers with our NSDC certified programs
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold">info@shrishankaracharya.org</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold">+91-9993561514</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold">Shri Shankarcharya Swaroopanand Foundation</div>
            </div>
          </motion.div>

         
        </div>
      </motion.section>

      {/* Course Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-2xl ${selectedCourse.bgColor} ${selectedCourse.borderColor} border`}>
                    {selectedCourse.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {selectedCourse.title}
                    </h2>
                    <p className="text-gray-600">{selectedCourse.level}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCourse(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-800">Duration</div>
                      <div className="text-gray-600">{selectedCourse.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <User className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-800">Students Enrolled</div>
                      <div className="text-gray-600">{selectedCourse.students}+ students</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="font-semibold text-gray-800">Rating</div>
                      <div className="flex items-center space-x-2">
                        <StarRating rating={selectedCourse.rating} />
                        <span className="text-gray-600">{selectedCourse.rating}/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <Award className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-800">Certification</div>
                      <div className="text-gray-600">NSDC Certified</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Skills Covered</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCourse.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCourse(null)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300"
                >
                  Close
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NSDC;




