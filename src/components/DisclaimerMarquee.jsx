import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, X, Megaphone } from "lucide-react";

const DisclaimerMarquee = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  const disclaimerText = "Disclaimer: No third party agency is working on behalf of SSSF for any recruitment, trainings, camps or other activities related to us. Please check/consult with SSSF directly to get correct information or assistance. Please beware of any unwarranted claims made by anyone on our behalf. Kindly bring any such claims to our notice for immediate attention and action. SSSF doesn't charge any money from anyone for these activities. So if you come across any individual/organization making a monetary demand in our name please bring it to our notice immediately on info@shrishankaracharya.org";

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 py-3 px-4 border-b border-amber-600/30 shadow-lg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 relative z-10">
        {/* Left Icon */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white/20 p-2 rounded-full border border-white/30 backdrop-blur-sm"
          >
            <AlertTriangle className="w-4 h-4 text-white" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden sm:flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full border border-white/30 backdrop-blur-sm"
          >
            <Megaphone className="w-3 h-3 text-white" />
            <span className="text-white text-xs font-bold tracking-wide">IMPORTANT</span>
          </motion.div>
        </div>

        {/* Marquee Text */}
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            <span className="text-white text-sm font-medium tracking-wide mx-4">
              {disclaimerText}
            </span>
            <span className="text-white text-sm font-medium tracking-wide mx-4">
              {disclaimerText}
            </span>
          </motion.div>
        </div>

        {/* Close Button */}
       
      </div>

      {/* Pulsing Border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/40"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default DisclaimerMarquee;