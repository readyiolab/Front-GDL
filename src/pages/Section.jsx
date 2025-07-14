import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
} from "lucide-react";

// Particle Component for Background Effects
const Particle = ({ style, delay }) => (
  <motion.div
    className="absolute bg-cyan-400/40 rounded-full"
    style={style}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: [0, 1, 0], opacity: [0, 0.8, 0] }}
    transition={{ duration: 2, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Background with Dynamic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/85 to-cyan-900/75"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-transparent to-gray-900/50" />
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <Particle style={{ top: "20%", right: "15%", width: "8px", height: "8px" }} delay={0} />
        <Particle style={{ top: "40%", right: "35%", width: "6px", height: "6px" }} delay={1} />
        <Particle style={{ bottom: "30%", left: "20%", width: "10px", height: "10px" }} delay={2} />
        <Particle style={{ bottom: "20%", right: "25%", width: "7px", height: "7px" }} delay={3} />
        <motion.div
          className="absolute top-1/3 left-12 w-24 h-24 border border-cyan-500/30 rounded-xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-screen py-12 lg:py-0">
          {/* Left Content */}
          <motion.div className="lg:col-span-7 space-y-3 lg:space-y-8 text-center lg:text-left" variants={itemVariants}>
            {/* Subtitle Badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gray-800/90 backdrop-blur-lg border border-cyan-500/40 text-cyan-100 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              role="region"
              aria-label="Company Information"
            >
              <Award className="w-4 h-4 mr-2 text-cyan-400" aria-hidden="true" />
              Established Since 2001 • Trusted Worldwide
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2 lg:space-y-4">
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight font-['Playfair_Display']"
                variants={itemVariants}
              >
                Start Your Own{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  Business
                </span>
              </motion.h1>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-gray-200 via-cyan-200 to-gray-300 bg-clip-text text-transparent font-['Playfair_Display']"
                variants={itemVariants}
              >
                with NHT Global
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-['Inter'] font-light"
              variants={itemVariants}
            >
              Join the world's most trusted network marketing company. Build your empire with proven strategies and unlimited potential.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                className="group relative bg-gradient-to-r from-cyan-500 to-cyan-400 text-gray-900 font-semibold py-4 px-6 rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center text-base font-['Inter'] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Become a Distributor"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 font-bold tracking-wide">
                  BECOME A DISTRIBUTOR
                </span>
                <ChevronRight className="relative z-10 ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </motion.button>

              <motion.button
                className="group bg-gray-800/90 backdrop-blur-lg text-cyan-100 border-2 border-cyan-500/40 font-semibold py-4 px-6 rounded-full hover:bg-cyan-500/10 hover:text-cyan-50 text-base font-['Inter'] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Learn More"
              >
                <span className="tracking-wide">LEARN MORE</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;