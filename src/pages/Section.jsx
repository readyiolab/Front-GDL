import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Award, ArrowRight } from "lucide-react";

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-white animate-gradient-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent)]" />

      {/* Main Content */}
      <motion.div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 gap-8 items-center justify-items-center min-h-screen py-12 text-center">
          {/* Centered Content */}
          <motion.div
            className="space-y-6 lg:space-y-10 max-w-4xl"
            variants={itemVariants}
          >
            {/* Main Headline */}
            <div className="space-y-3 lg:space-y-5">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 leading-tight tracking-tight"
                variants={itemVariants}
              >
                Start Your Own{" "}
                <span className="bg-clip-text text-transparent bg-black">
                  Business
                </span>
              </motion.h1>
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900"
                variants={itemVariants}
              >
                with NHT Global
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light"
              variants={itemVariants}
            >
              Join the world's most trusted network marketing company. Build
              your empire with proven strategies and unlimited potential.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.button
                className="group relative bg-blue-950 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-base transition-all duration-300 cursor-pointer"
                aria-label="Become a Distributor"
              >
                <span className="relative z-10 font-bold tracking-wide">
                  BECOME A DISTRIBUTOR
                </span>
                <ChevronRight
                  className="relative z-10 ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </motion.button>

              <motion.button
                className="group bg-white backdrop-blur-sm text-blue-950 shadow-md font-semibold py-4 cursor-pointer px-8 rounded-full hover:bg-white/15 hover:text-cyan-800 text-base transition-all duration-300"
                aria-label="Learn More"
              >
                <span className="tracking-wide">LEARN MORE</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
      </motion.div>

      {/* Inline CSS for Gradient Animation */}
      <style jsx>{`
        @keyframes gradient-bg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-bg 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
