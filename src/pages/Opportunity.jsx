import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "framer-motion";
import {
  CheckCircle,
  Globe,
  Users,
  Star,
  ChevronRight,
  Play,
  ExternalLink,
  Shield,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-50 via-white to-orange-50 px-6 py-12 overflow-hidden">
      {/* Background image blur layer */}
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-red-700 rounded-full blur-xl z-0"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto w-full px-4"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 px-4 py-2 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Star className="h-4 w-4 text-orange-400" />
          <span className="text-black font-medium text-xs">
            Proven Business Model
          </span>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight transition-all duration-700 delay-200"
        >
          Unleash Your Potential <br />
          <span className="block sm:inline">with NHT Global</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          NHT Global offers better health, unlimited income, and freedom to live life on your terms.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="bg-orange-500 text-white font-semibold py-3 sm:py-4 px-5 sm:px-8 rounded-full hover:bg-orange-600 shadow-lg flex items-center justify-center text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95">
              Join Our Community
              <ChevronRight className="h-4 w-4 ml-2 transition-transform" />
            </button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="bg-white text-orange-500 border border-orange-500 font-semibold py-3 sm:py-4 px-5 sm:px-8 rounded-full hover:bg-orange-50 shadow-lg text-xs sm:text-sm transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const OpportunityPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>NHT Global Opportunity - Unleash Your Potential</title>
        <meta
          name="description"
          content="Join NHT Global for unlimited income, better health, and freedom. Explore our proven network marketing business model and compensation plan."
        />
        <meta
          name="keywords"
          content="NHT Global, network marketing, income opportunity, health and wellness, business opportunity"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="NHT Global Opportunity - Unleash Your Potential"
        />
        <meta
          property="og:description"
          content="Discover NHT Global's network marketing opportunity for financial freedom and wellness."
        />
        <meta
          property="og:image"
          content="https://igrowbig.com/images/nht-global.jpg"
        />
        <meta property="og:url" content="https://igrowbig.com/opportunity" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="NHT Global Opportunity - Unleash Your Potential"
        />
        <meta
          name="twitter:description"
          content="Join NHT Global for a proven business model and unlimited earning potential."
        />
        <meta
          name="twitter:image"
          content="https://igrowbig.com/images/nht-global.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "NHT Global",
            url: "https://igrowbig.com",
            description:
              "NHT Global offers a network marketing opportunity for financial freedom and wellness with a proven business model.",
            logo: "/logo.png",
            sameAs: [
              "https://www.facebook.com/nhtglobal",
              "https://www.twitter.com/nhtglobal",
              "https://www.linkedin.com/company/nhtglobal",
            ],
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="pt-6 sm:pt-8">
        {/* Section 1: Door of Opportunity */}
        <motion.section
          className="py-16 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="h-4 w-4 text-blue-500" />
                <span className="text-blue-600 font-medium text-xs">
                  Start Your Journey
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Open the Door of Opportunity
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Take the next step to changing your destiny with NHT Global.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ul className="space-y-3">
                  {[
                    "Take the next step to changing your destiny",
                    "Choose a proven formula to build your future",
                    "Focus on building a healthy lifestyle",
                    "Develop a wellness tradition globally",
                    "Share this opportunity with others",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-base text-gray-700 font-medium leading-relaxed">
                        {item}
                      </p>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="bg-orange-50 border border-orange-200 rounded-xl p-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-lg font-bold text-orange-900 mb-2">
                    Open the Door to NHT Global
                  </h3>
                  <p className="text-sm text-gray-600">
                    Top Network Marketing Company
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-20 z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  <picture>
                    <source
                      srcSet="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=600&auto=format&fit=crop"
                      media="(max-width: 640px)"
                    />
                    <source
                      srcSet="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=1200&auto=format&fit=crop"
                      media="(max-width: 1024px)"
                    />
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661767467261-4bed92a507?q=80&w=2070&auto=format&fit=crop"
                      alt="Team celebrating NHT Global success"
                      className="w-full h-72 lg:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </picture>
                  <motion.div
                    className="absolute top-6 left-6 z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Why Network Marketing */}
        <motion.section
          className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Network Marketing?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A proven industry with global impact and opportunity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Direct selling industry over 50 years old",
                "$110B+ global industry and growing",
                "Business in 172+ countries worldwide",
                "Involves people of all backgrounds",
                "Empowered millions globally",
                "High income potential",
                "Be your own boss",
                "No employees, low overhead",
                "Major tax advantages",
                "Best chance for the average person to succeed",
                "Global opportunity with no limits",
                "Create an extraordinary life",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-base text-gray-100 font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 3: NHT Global Opportunity */}
        <motion.section
          className="py-16 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                World of Opportunity
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A global company with true potential
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  <picture>
                    <source
                      srcSet="https://images.unsplash.com/photo-1588458977838-bdf7b9d8700e?w=600&auto=format&fit=crop"
                      media="(max-width: 640px)"
                    />
                    <source
                      srcSet="https://images.unsplash.com/photo-1588458977838-bdf7b9d8700e?w=1200&auto=format&fit=crop"
                      media="(max-width: 1024px)"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1588458977838-bdf7b9d8700e?w=2070&auto=format&fit=crop"
                      alt="NHT Global's worldwide business network"
                      className="w-full h-72 lg:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </picture>
                  <motion.div
                    className="absolute top-6 left-6 z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  NHT Global has a PROVEN Business Model
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
                <div className="space-y-4">
                  {[
                    "Offices worldwide and distribution within more than 50 countries",
                    "More than $1.5 billion in sales and growing",
                    "Member of the Direct Selling Association",
                    "Subsidiary of 23-year-old publicly traded company, Natural Health Trends Corp. (trading symbol: NHTC)",
                    "Experienced executive team and global leaders to support you at each step towards your success",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-xl font-semibold text-sm shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Learn About Our Business Model
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Compensation Plan */}
        <motion.section
          className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Compensation Plan
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Understand your earning potential
              </p>
            </div>
            <motion.p
              className="text-lg mb-12 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              To maximize your earnings with{" "}
              <span className="font-bold text-orange-400">NHT Global</span>,
              familiarize yourself with these key terms:
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Bonus Volume (BV)",
                  description:
                    'Each product is assigned a point value called <span class="font-bold text-orange-400">Bonus Volume (BV)</span>. The compensation plan is based on accumulating these points, ensuring <span class="font-bold text-orange-400">competitive retail pricing</span> and <span class="font-bold text-orange-400">profitable wholesale-to-retail margins</span> for distributors, balancing significant retail profits with substantial override income.',
                },
                {
                  title: "Personal Volume (PV)",
                  description:
                    'Your <span class="font-bold text-orange-400">Personal Volume (PV)</span> is the purchase or sales volume processed through your <span class="font-bold text-orange-400">Distributor ID#</span>, reflecting your direct contribution to product orders.',
                },
                {
                  title: "Personal Group Volume (PGV)",
                  description:
                    'The <span class="font-bold text-orange-400">Personal Group Volume (PGV)</span> includes products purchased by you and your <span class="font-bold text-orange-400">directly sponsored members</span>, regardless of their placement in the genealogy tree. It’s the combined total of all wholesale product orders in your Personal Group.',
                },
                {
                  title: "Active Status",
                  description:
                    'Achieve <span class="font-bold text-orange-400">Active Status</span> to earn commissions by personally sponsoring <span class="font-bold text-orange-400">two people</span> in both legs of your network. Full details are available in the Compensation Plan.',
                },
                {
                  title: "Distributor Levels",
                  description:
                    'There are three levels: <span class="font-bold text-orange-400">Bronze</span> (<span class="font-bold text-orange-400">3% discount</span>), <span class="font-bold text-orange-400">Silver</span> (<span class="font-bold text-orange-400">11% discount</span>), and <span class="font-bold text-orange-400">Gold</span> (<span class="font-bold text-orange-400">34% discount</span>). Become a Gold distributor instantly with a <span class="font-bold text-orange-400">Gold</span> or <span class="font-bold text-orange-400">Platinum</span> package for maximum discounts and commissions.',
                },
                {
                  title: "Product Packages",
                  description:
                    'Packages include <span class="font-bold text-orange-400">Bronze</span>, <span class="font-bold text-orange-400">Silver</span>, <span class="font-bold text-orange-400">Gold</span>, and <span class="font-bold text-orange-400">Platinum</span>. The <span class="font-bold text-orange-400">Gold</span> package offers maximum discounts and commissions, while <span class="font-bold text-orange-400">Platinum</span> is a promotional package including all products, <span class="font-bold text-orange-400">lifetime back office access</span>, and an <span class="font-bold text-orange-400">e-commerce site</span>. <span class="font-bold text-orange-400">Silver</span> and <span class="font-bold text-orange-400">Bronze</span> packages require a <span class="font-bold text-orange-400">$50 annual back office fee</span>, while <span class="font-bold text-orange-400">Gold</span> provides <span class="font-bold text-orange-400">1-year free access</span>.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-orange-400 mb-2 text-center pb-4">
                        {item.title}
                      </h3>
                      <p
                        className="text-base text-gray-100 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: Investment Options */}
        <motion.section
          className="py-16 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Investment Options
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the package that fits your goals
              </p>
            </div>
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-700">
                Start with any package, but we recommend{" "}
                <span className="font-bold text-orange-400">Platinum</span> or{" "}
                <span className="font-bold text-orange-400">Gold</span> for serious
                entrepreneurs to maximize{" "}
                <span className="font-bold text-orange-400">discounts</span> and{" "}
                <span className="font-bold text-orange-400">commissions</span> from day
                one.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Platinum Package",
                  price: "$2,000",
                  description:
                    'Includes <span class="font-bold text-orange-400">all NHT Global products</span> and tools to kickstart your business with maximum benefits.',
                  features: [
                    "All NHT Global products",
                    '<span class="font-bold text-orange-400">Gold distributor level (34% discount)</span>',
                    '<span class="font-bold text-orange-400">Lifetime free back office access</span>',
                    '<span class="font-bold text-orange-400">E-commerce site access</span>',
                    "Maximum commission potential",
                  ],
                  recommended: true,
                  color: "bg-gradient-to-br from-orange-300 to-orange-400",
                  textColor: "text-white",
                },
                {
                  title: "Gold Package",
                  price: "$1,000",
                  description:
                    'Flexible <span class="font-bold text-orange-400">product selections</span> for serious entrepreneurs.',
                  features: [
                    "Various product selections",
                    '<span class="font-bold text-orange-400">Gold distributor level (34% discount)</span>',
                    '<span class="font-bold text-orange-400">Free back office access for 1 year</span>',
                    "Maximum commission potential",
                  ],
                  recommended: true,
                  color: "bg-gradient-to-br from-orange-200 to-orange-300",
                  textColor: "text-gray-900",
                },
                {
                  title: "Silver Package",
                  price: "$500",
                  description:
                    'Moderate investment with <span class="font-bold text-orange-400">selected products</span> for those starting their journey.',
                  features: [
                    "Selected products",
                    '<span class="font-bold text-orange-400">Silver distributor level (11% discount)</span>',
                    '<span class="font-bold text-orange-400">$50 annual back office fee</span>',
                    "Medium commission potential",
                  ],
                  recommended: false,
                  color: "bg-gradient-to-br from-gray-200 to-gray-300",
                  textColor: "text-gray-800",
                },
                {
                  title: "Bronze Package",
                  price: "$300",
                  description:
                    'Entry-level package with <span class="font-bold text-orange-400">90 BV worth of products ($250)</span> and <span class="font-bold text-orange-400">Business Builder Package ($50)</span>.',
                  features: [
                    '<span class="font-bold text-orange-400">90 BV worth of products ($250)</span>',
                    '<span class="font-bold text-orange-400">Business Builder Package ($50)</span>',
                    '<span class="font-bold text-orange-400">Bronze distributor level (3% discount)</span>',
                    "Basic commission structure",
                  ],
                  recommended: false,
                  color: "bg-gradient-to-br from-amber-200 to-amber-300",
                  textColor: "text-gray-800",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`rounded-3xl shadow-2xl overflow-hidden bg-white flex flex-col h-full ${item.recommended ? "ring-2 ring-orange-400" : ""}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {item.recommended && (
                    <div className="absolute top-0 right-0 bg-orange-400 text-white px-3 py-1 rounded-bl-lg font-semibold text-xs">
                      Recommended
                    </div>
                  )}
                  <div className={`${item.color} px-6 pt-6 pb-6 ${item.textColor} text-center`}>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-2xl font-extrabold">{item.price}</p>
                  </div>
                  <div className="p-6 flex flex-col">
                    <p
                      className="text-gray-600 mb-6 text-sm"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <ul className="space-y-3 mb-6 flex-grow">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-1 text-sm">
                          <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span dangerouslySetInnerHTML={{ __html: feature }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 6: Call to Action */}
        <motion.section
          className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 mx-auto mb-auto mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Users className="h-auto10 w-auto10 text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-auto6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-centertransparent">
              Ready to Transform Your Life?
            </h2>
            <p className="text-centerlg text-gray-300 mb-auto8 max-w-3xlmx-auto leading-relaxed">
              Join thousands of successful entrepreneurs who have changed their lives with NHT Global's opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-lg hover:shadow-orange-600/25 transition-all duration-300 flex items-center gap-1"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Join NHT Global Now"
              >
                <Play className="h-4 w-4" />
                Join Now
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-white/20 transition-all duration-300 flex items-center gap-1"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Learn More About NHT Global"
              >
                <ExternalLink className="h-4 w-4" />
                Learn More
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default OpportunityPage;
