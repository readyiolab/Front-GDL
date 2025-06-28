import React, { useCallback, useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";

// Custom Particles Component
const CustomParticles = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const particles = [];

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.colors = ["#f97316", "#fb923c", "#fdba74", "#fed7aa"];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const particleCount = window.innerWidth < 640 ? 30 : 60;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    particlesRef.current = particles;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      particles.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          const force = (120 - distance) / 120;
          particle.x -= (dx / distance) * force * 1.5;
          particle.y -= (dy / distance) * force * 1.5;
        }
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ zIndex: 1 }}
    />
  );
};

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative bg-gradient-to-br from-slate-50 via-white to-orange-50/30 overflow-hidden">
      {/* Particle background */}
      <CustomParticles />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" style={{ zIndex: 2 }} />

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Subtitle Badge */}
            <div
              className={`inline-flex items-center px-4 py-2  bg-blue-200 text-blue-950 rounded-full text-sm font-medium transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-2 h-2  bg-blue-950 rounded-full mr-2 animate-pulse"></span>
              Established Since 2001
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Start Your Own{" "}
                <span className="text-transparent bg-blue-950 bg-clip-text">
                  Business with
                </span>
              </h1>
              
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                 NHT Global
              </h2>
            </div>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-black  font-semibold leading-relaxed max-w-lg transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              An evergreen network marketing company – with a proven track record since 2001
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <button className="group bg-blue-950 text-white cursor-pointer font-semibold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center text-base transition-all duration-300 hover:scale-105 active:scale-95 hover:from-orange-600 hover:to-orange-700">
                BECOME A DISTRIBUTOR
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button className="bg-white text-bue-950 border-2 border-blue-950 font-semibold py-4 px-8 rounded-2xl hover:bg-blue-950 hover:border-white hover:text-white cursor-pointer shadow-lg text-base transition-all duration-300 hover:scale-105 active:scale-95">
                LEARN MORE
              </button>
            </div>

            
          </div>

          {/* Right side - Visual space for branding or imagery */}
          <div className="hidden lg:block relative">
            <div className="w-full h-96 rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-2xl bg-gradient-to-tl from-orange-200 to-orange-300 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;