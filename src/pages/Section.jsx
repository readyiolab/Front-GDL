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
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.colors = ["#f97316", "#fb923c", "#fdba74"];
        this.color =
          this.colors[Math.floor(Math.random() * this.colors.length)];
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

    const particleCount = window.innerWidth < 640 ? 50 : 100;
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
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.x -= (dx / distance) * force * 2;
          particle.y -= (dy / distance) * force * 2;
        }
      });
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      for (let i = 0; i < 5; i++) {
        const newParticle = new Particle();
        newParticle.x = mouseX + (Math.random() - 0.5) * 20;
        newParticle.y = mouseY + (Math.random() - 0.5) * 20;
        particles.push(newParticle);
      }

      if (particles.length > particleCount + 20) {
        particles.splice(0, 5);
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
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

// Section Component
const Section = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Particle background */}
      <CustomParticles />

      {/* Main Content */}
      <div
        className={`relative max-w-4xl mx-auto w-full px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ zIndex: 10 }}
      >
        <div className="flex flex-col items-center text-center gap-6">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Start Your Own Business <br />
            <span className="block sm:inline">with NHT Global</span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-xl font-medium transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            An evergreen network marketing company – with a proven track record since 2001.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button className="bg-orange-500 text-white font-semibold py-4 sm:py-5 px-6 sm:px-10 rounded-full hover:bg-orange-600 shadow-lg flex items-center justify-center text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95">
              BECOME A DISTRIBUTOR
              <ChevronRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </button>

            <button className="bg-white text-orange-500 border border-orange-500 font-semibold py-4 sm:py-5 px-6 sm:px-10 rounded-full hover:bg-orange-50 shadow-lg text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Section;
