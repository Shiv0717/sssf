import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Shield, 
  Heart, 
  Star, 
  Award, 
  TrendingUp,
  Sparkles,
  CheckCircle,
  Globe,
  HandHeart,
  Ribbon,
  ArrowRight,
  Eye,
  Clock,
  MapPin,
  ThumbsUp,
  ArrowUpRight,
  BadgeCheck,
  Leaf,
  Lightbulb,
  Zap
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      title: "Proven Impact",
      description: "15+ years of measurable results with 95% program success rate and transparent impact reporting.",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-200",
      bgColor: "bg-gradient-to-br from-blue-50/80 to-cyan-50/80",
      stats: "50K+ Lives Changed",
      delay: 0.1,
      gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "500+ dedicated professionals and volunteers with domain expertise across all social sectors.",
      color: "from-emerald-500 to-green-500",
      borderColor: "border-emerald-200",
      bgColor: "bg-gradient-to-br from-emerald-50/80 to-green-50/80",
      stats: "15+ Years Experience",
      delay: 0.2,
      gradient: "linear-gradient(135deg, #10B981, #22C55E)"
    },
    {
      icon: Shield,
      title: "Full Transparency",
      description: "80G certified with public financial reports and real-time impact tracking for complete accountability.",
      color: "from-violet-500 to-purple-500",
      borderColor: "border-violet-200",
      bgColor: "bg-gradient-to-br from-violet-50/80 to-purple-50/80",
      stats: "100% Transparent",
      delay: 0.3,
      gradient: "linear-gradient(135deg, #8B5CF6, #A855F7)"
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Grassroots approach working directly with 25+ communities across multiple states in India.",
      color: "from-rose-500 to-pink-500",
      borderColor: "border-rose-200",
      bgColor: "bg-gradient-to-br from-rose-50/80 to-pink-50/80",
      stats: "25+ Communities",
      delay: 0.4,
      gradient: "linear-gradient(135deg, #F43F5E, #EC4899)"
    },
    {
      icon: Star,
      title: "Award Winning",
      description: "Nationally recognized for excellence in social work and sustainable community development.",
      color: "from-amber-500 to-orange-500",
      borderColor: "border-amber-200",
      bgColor: "bg-gradient-to-br from-amber-50/80 to-orange-50/80",
      stats: "10+ Awards",
      delay: 0.5,
      gradient: "linear-gradient(135deg, #F59E0B, #F97316)"
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Long-term solutions that create self-reliant communities with continuous monitoring and support.",
      color: "from-teal-500 to-cyan-500",
      borderColor: "border-teal-200",
      bgColor: "bg-gradient-to-br from-teal-50/80 to-cyan-50/80",
      stats: "95% Success Rate",
      delay: 0.6,
      gradient: "linear-gradient(135deg, #14B8A6, #06B6D4)"
    }
  ];

  const impactStats = [
    { 
      number: "50,000+", 
      label: "Lives Transformed", 
      icon: Users,
      change: "+12% this year",
      trend: "up",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    { 
      number: "15+", 
      label: "Years of Service", 
      icon: Award,
      change: "Since 2009",
      trend: "stable",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    { 
      number: "25+", 
      label: "Active Communities", 
      icon: MapPin,
      change: "Across India",
      trend: "up",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    { 
      number: "95%", 
      label: "Program Success", 
      icon: TrendingUp,
      change: "+2% from last year",
      trend: "up",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50"
    }
  ];

  const certifications = [
    { 
      name: "80G Tax Exemption", 
      status: "Active", 
      verified: true,
      icon: BadgeCheck,
      color: "text-green-600"
    },
    { 
      name: "FCRA Certified", 
      status: "Active", 
      verified: true,
      icon: Shield,
      color: "text-blue-600"
    },
    { 
      name: "ISO 9001:2015", 
      status: "Certified", 
      verified: true,
      icon: Award,
      color: "text-purple-600"
    },
    { 
      name: "CSR Compliant", 
      status: "Verified", 
      verified: true,
      icon: CheckCircle,
      color: "text-amber-600"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardHover = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden py-20 lg:py-28">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-cyan-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold mb-8 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer hover:scale-105 group"
          >
            <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            Trusted Since 2009
            <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Why Choose
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient mt-2">
              Our Foundation?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12"
          >
            We combine decades of experience with innovative approaches to create 
            sustainable impact that transforms communities.
          </motion.p>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className={`${stat.bgColor} rounded-2xl p-6 border border-gray-100 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-105`}>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl lg:text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.change}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover="hover"
              className="group relative"
            >
              <motion.div
                variants={cardHover}
                className={`${feature.bgColor} rounded-3xl p-8 border ${feature.borderColor} backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl group-hover:border-transparent cursor-pointer h-full flex flex-col relative overflow-hidden`}
              >
                {/* Animated Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: feature.gradient }}
                ></div>
                
                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon with Enhanced Design */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-base mb-6 flex-1 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Stats with Enhanced Design */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 group-hover:border-white/30 transition-colors duration-300">
                    <span className="text-sm font-semibold text-gray-500 bg-white/80 px-3 py-2 rounded-full group-hover:text-white group-hover:bg-white/20 transition-all duration-300">
                      {feature.stats}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors duration-300">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

       

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-3 mx-auto group"
          >
            Join Our Mission
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;