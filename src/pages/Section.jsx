import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

// Animation variants
const staggerChildren = {
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hoverScale = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const Section = () => {
  // State to handle screen size for particle configuration
  const [particleOptions, setParticleOptions] = useState({});

  // Particle initialization
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles initializing...");
    await loadFull(engine);
    console.log("Particles initialized!");
  }, []);

  // Update particle options based on screen size
  useEffect(() => {
    const updateParticles = () => {
      const isMobile = window.innerWidth < 640;
      setParticleOptions({
        particles: {
          number: {
            value: isMobile ? 50 : 100, // Fewer particles on mobile
            density: {
              enable: true,
              value_area: isMobile ? 600 : 800,
            },
          },
          color: {
            value: ["#f97316", "#fb923c", "#fdba74"], // Orange shades
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: isMobile ? 0.6 : 0.8, // Slightly less opacity on mobile
            random: true,
          },
          size: {
            value: isMobile ? 3 : 5, // Smaller particles on mobile
            random: true,
          },
          move: {
            enable: true,
            speed: isMobile ? 1 : 2, // Slower movement on mobile
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: !isMobile, // Disable hover on mobile
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        retina_detect: true,
      });
    };

    updateParticles();
    window.addEventListener("resize", updateParticles);
    return () => window.removeEventListener("resize", updateParticles);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-50 via-white to-orange-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
        className="absolute inset-0 z-10" // Ensure particles are visible
        canvasClassName="h-full w-full"
      />

      {/* Background Elements */}
      <motion.div
        className="absolute top-20 sm:top-40 left-4 sm:left-10 bg-orange-200 rounded-full opacity-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 blur-3xl z-0"
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 sm:bottom-40 right-4 sm:right-10 bg-orange-300 rounded-full opacity-20 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 blur-3xl z-0"
        animate={{
          x: [0, -15, 0],
          y: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1.5,
        }}
      />

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xvYmFsJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
        }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto w-full px-4"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
          variants={itemVariants}
        >
          Start Your Own Business <br />
          <span className="block sm:inline">with NHT Global</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto font-medium"
          variants={itemVariants}
        >
          An evergreen network marketing company – with a proven track record since 2001.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.div whileHover="hover" whileTap="tap" variants={hoverScale}>
            <Button
              className="bg-orange-500 text-white font-semibold py-4 sm:py-5 px-6 sm:px-10 rounded-full hover:bg-orange-600 shadow-lg flex items-center text-sm sm:text-base"
            >
              BECOME A DISTRIBUTOR
              <ChevronRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
          </motion.div>
          <motion.div whileHover="hover" whileTap="tap" variants={hoverScale}>
            <Button
              className="bg-white text-orange-500 border border-orange-500 font-semibold py-4 sm:py-5 px-6 sm:px-10 rounded-full hover:bg-orange-50 shadow-lg text-sm sm:text-base"
            >
              LEARN MORE
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gray-400 rounded-full relative flex justify-center items-center">
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gray-400 rounded-full absolute top-2 animate-bounce" />
        </div>
        <p className="text-xs text-gray-400 mt-1 sm:mt-2">SCROLL DOWN</p>
      </motion.div>
    </section>
  );
};

export default Section;