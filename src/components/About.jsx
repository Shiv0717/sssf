import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  ArrowRight, 
  Star, 
  Shield,
  Sparkles,
  Globe,
  Clock,
  Ribbon,
  HandHeart,
  CircleDollarSign,
  MapPin,
  Calendar,
  ThumbsUp,
  BarChart3,
  PieChart,
  Activity,
  Eye,
  Download,
  Share2,
  Play,
  Image as ImageIcon,
  Leaf,
  Zap,
  TargetIcon
} from "lucide-react";

const About = () => {
  const stats = [
    { 
      icon: Users, 
      number: "50K+", 
      label: "Lives Impacted",
      change: "+12%",
      trend: "up",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/10",
      delay: 0.1,
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    { 
      icon: Target, 
      number: "25+", 
      label: "Communities Served",
      change: "+3",
      trend: "up",
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-500/10",
      delay: 0.2,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    { 
      icon: Award, 
      number: "15", 
      label: "Years of Service",
      change: "+1",
      trend: "up",
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-500/10",
      delay: 0.3,
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
  ];

  const kpiCards = [
    {
      title: "Education Reach",
      value: "50,000+",
      subtitle: "Students Educated",
      icon: Users,
      progress: 85,
      color: "cyan",
      trend: "up",
      gradient: "from-cyan-500 to-blue-600",
      image: "/impack/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg"
    },
    {
      title: "Healthcare Impact",
      value: "100,000+",
      subtitle: "Lives Touched",
      icon: Heart,
      progress: 92,
      color: "emerald",
      trend: "up",
      gradient: "from-emerald-500 to-green-600",
      image: "/impack/Health-Care.jpg"
    },
    {
      title: "Women Empowered",
      value: "15,000+",
      subtitle: "Economic Independence",
      icon: TrendingUp,
      progress: 78,
      color: "violet",
      trend: "up",
      gradient: "from-violet-500 to-purple-600",
      image: "/impack/thumbnail-1.jpg"
    },
  ];

  const recentActivities = [
    { 
      action: "Education Program", 
      location: "Rural Maharashtra", 
      date: "2 days ago", 
      status: "completed",
      image: "/impack/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg",
      volunteers: 45
    },
    { 
      action: "Medical Camp", 
      location: "Remote Villages", 
      date: "1 week ago", 
      status: "completed",
      image: "/impack/Health-Care.jpg",
      volunteers: 32
    },
    { 
      action: "Skill Development", 
      location: "Urban Centers", 
      date: "2 weeks ago", 
      status: "in-progress",
      image: "/impack/thumbnail-1.jpg",
      volunteers: 28
    },
  ];

  const galleryImages = [
    "/impack/IMG-20180220-WA0114.jpg",
    "/impack/no-polythene-use.jpg",
    "/impack/Health-Care.jpg",
    "/impack/thumbnail-1.jpg"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  const staggerChildren = {
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 xl:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold shadow-lg shadow-cyan-500/25 border border-cyan-400/20"
              >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                Transforming Lives Since 2009
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Shri Shankarcharya
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                  Swaroopanand Foundation
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
              >
                Empowering communities through sustainable initiatives in education, healthcare, 
                and environmental conservation. Creating lasting impact across India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
                  <HandHeart className="w-4 h-4 md:w-5 md:h-5" />
                  Join Our Mission
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base backdrop-blur-sm">
                  <Play className="w-4 h-4 md:w-5 md:h-5" />
                  Watch Our Story
                </button>
              </motion.div>
            </motion.div>

            {/* Enhanced Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <motion.div 
                    className="rounded-2xl md:rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-cyan-500/10"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="/impack/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg"
                      alt="Education Program"
                      className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="rounded-2xl md:rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-emerald-500/10"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <img 
                      src="/impack/Tribal-culinary-skills.jpg"
                      alt="Healthcare"
                      className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover"
                    />
                  </motion.div>
                </div>
                <div className="space-y-3 sm:space-y-4 md:space-y-6 pt-6 sm:pt-8 md:pt-12">
                  <motion.div 
                    className="rounded-2xl md:rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-purple-500/10"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <img 
                      src="/impack/Picture22.png"
                      alt="Women Empowerment"
                      className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="rounded-2xl md:rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-violet-500/10"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <img 
                      src="/impack/world-health-day-2019-nmcg-organises-cleanup-yamuna-ghat-delhi-twitter-660x330-1.jpg"
                      alt="Environmental Work"
                      className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover"
                    />
                  </motion.div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl shadow-cyan-500/20 p-3 sm:p-4 md:p-6 border border-cyan-500/20 backdrop-blur-sm"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">15+</div>
                <div className="text-xs sm:text-sm text-gray-300">Years of Service</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl shadow-purple-500/20 p-3 sm:p-4 md:p-6 border border-purple-500/20 backdrop-blur-sm"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400">50K+</div>
                <div className="text-xs sm:text-sm text-gray-300">Lives Impacted</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced KPI Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Impact</span> in Numbers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Measurable change across education, healthcare, women empowerment, and environmental conservation
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20"
        >
          {kpiCards.map((kpi, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gray-800/60 rounded-2xl md:rounded-3xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 group-hover:scale-105 backdrop-blur-sm">
                {/* Image Section */}
                <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
                  <img 
                    src={kpi.image}
                    alt={kpi.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-3 right-3 md:top-4 md:right-4">
                    <div className={`p-2 md:p-3 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-${kpi.color}-500/30`}>
                      <kpi.icon className={`w-4 h-4 md:w-6 md:h-6 text-${kpi.color}-400`} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h3 className="text-base md:text-lg font-bold text-white">{kpi.title}</h3>
                    <div className="flex items-center gap-1 text-emerald-400 text-xs md:text-sm font-semibold">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                      +12%
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{kpi.value}</h3>
                  <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">{kpi.subtitle}</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-1.5 md:h-2">
                    <div 
                      className={`bg-gradient-to-r ${kpi.gradient} h-1.5 md:h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${kpi.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm text-gray-400 mt-1 md:mt-2">
                    <span>Progress</span>
                    <span>{kpi.progress}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            {/* Enhanced Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gray-800/60 rounded-2xl md:rounded-3xl border border-gray-700/50 overflow-hidden backdrop-blur-sm">
                <div className="relative h-48 md:h-64">
                  <img 
                    src="/impack/India-Covid-19.jpg"
                    alt="Our Mission"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/40 to-purple-600/40"></div>
                  <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Our Mission & Vision</h2>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                          <Target className="w-4 h-4 md:w-6 md:h-6 text-cyan-400" />
                          Our Mission
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
                          To create sustainable change in underserved communities through innovative programs 
                          in education, healthcare, and empowerment, fostering self-reliance and growth.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-400">
                        <div className="flex items-center gap-1 md:gap-2 bg-cyan-500/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-cyan-500/20">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
                          Since 2009
                        </div>
                        <div className="flex items-center gap-1 md:gap-2 bg-emerald-500/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-emerald-500/20">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
                          12+ States
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center justify-between p-4 md:p-6 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 rounded-xl md:rounded-2xl border border-cyan-500/20">
                        <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-200">Active Projects</span>
                        <span className="text-xl md:text-2xl font-bold text-cyan-400">50+</span>
                      </div>
                      <div className="flex items-center justify-between p-4 md:p-6 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 rounded-xl md:rounded-2xl border border-emerald-500/20">
                        <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-200">Team Members</span>
                        <span className="text-xl md:text-2xl font-bold text-emerald-400">500+</span>
                      </div>
                      <div className="flex items-center justify-between p-4 md:p-6 bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-xl md:rounded-2xl border border-purple-500/20">
                        <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-200">Success Rate</span>
                        <span className="text-xl md:text-2xl font-bold text-purple-400">95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/60 rounded-2xl md:rounded-3xl border border-gray-700/50 overflow-hidden backdrop-blur-sm"
            >
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white">Recent Activities</h2>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 md:gap-2 text-sm md:text-base">
                    View All
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  {recentActivities.map((activity, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 md:p-6 border border-gray-700/50 rounded-xl md:rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer bg-gradient-to-r from-gray-800/50 to-gray-700/30 hover:from-cyan-500/10 hover:to-purple-500/10"
                    >
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 border border-gray-600">
                        <img 
                          src={activity.image}
                          alt={activity.action}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute top-1 right-1 md:top-2 md:right-2 w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-gray-800 ${
                          activity.status === 'completed' ? 'bg-emerald-500' : 'bg-cyan-500 animate-pulse'
                        }`}></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-base md:text-lg text-white mb-1 md:mb-2 truncate">{activity.action}</div>
                        <div className="text-gray-300 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 md:gap-4 text-xs md:text-sm">
                          <div className="flex items-center gap-1 md:gap-2">
                            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
                            <span className="truncate">{activity.location}</span>
                          </div>
                          <div className="flex items-center gap-1 md:gap-2">
                            <Users className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
                            {activity.volunteers} volunteers
                          </div>
                        </div>
                      </div>
                      <div className="text-right w-full sm:w-auto">
                        <div className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">{activity.date}</div>
                        <div className={`inline-flex items-center gap-1 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold ${
                          activity.status === 'completed' 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        }`}>
                          {activity.status === 'completed' ? 'Completed' : 'In Progress'}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6 md:space-y-8">
            {/* Impact Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 rounded-2xl md:rounded-3xl border border-gray-700/50 overflow-hidden backdrop-blur-sm"
            >
              <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <Activity className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                  Real-time Impact
                </h2>
                
                <div className="space-y-3 md:space-y-4">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 p-3 md:p-4 hover:bg-gray-700/50 rounded-xl md:rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-cyan-500/20"
                    >
                      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0">
                        <img 
                          src={stat.image}
                          alt={stat.label}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-40`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center opacity-90`}>
                          <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-xl md:text-2xl text-white">{stat.number}</div>
                        <div className="text-xs md:text-sm text-gray-300 truncate">{stat.label}</div>
                      </div>
                      <div className={`flex items-center gap-1 text-xs md:text-sm font-semibold ${
                        stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                      }`}>
                        {stat.change}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Photo Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/60 rounded-2xl md:rounded-3xl border border-gray-700/50 overflow-hidden backdrop-blur-sm"
            >
              <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <ImageIcon className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                  Moments Gallery
                </h2>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="aspect-square rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group relative border border-gray-600"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <Eye className="w-4 h-4 md:w-6 md:h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-600 to-purple-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white text-center shadow-2xl shadow-cyan-500/25 border border-cyan-400/20"
            >
              <HandHeart className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-3 md:mb-4 opacity-90" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Join Our Mission</h3>
              <p className="text-cyan-100 text-sm md:text-base mb-4 md:mb-6">
                Be part of the change. Volunteer, donate, or spread awareness.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-cyan-600 font-bold py-3 md:py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base"
              >
                Get Involved Today
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;