import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Globe,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  ShoppingBag,
  Star,
  ChevronRight,
  Play,
  ExternalLink,
  Shield,
} from "lucide-react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Section from "./Section";

// Animation variants for Section
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



const Homes = () => {
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
        <title>Get Dream Life with NHT Global - Start Your Business Today</title>
        <meta
          name="description"
          content="Join Get Dream Life (GDL) and NHT Global to start your own business, achieve financial freedom, and live your dream life with our proven network marketing opportunity."
        />
        <meta
          name="keywords"
          content="network marketing, NHT Global, Get Dream Life, business opportunity, financial freedom, entrepreneurship"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Get Dream Life with NHT Global - Start Your Business Today"
        />
        <meta
          property="og:description"
          content="Join Get Dream Life (GDL) and NHT Global to start your own business and achieve financial freedom."
        />
        <meta
          property="og:image"
          content="https://plus.unsplash.com/premium_photo-1685284067427-b9019667a008?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2xvYmFsJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D"
        />
        <meta property="og:url" content="https://www.getdreamlife.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Get Dream Life with NHT Global - Start Your Business Today"
        />
        <meta
          name="twitter:description"
          content="Join Get Dream Life (GDL) and NHT Global to start your own business and achieve financial freedom."
        />
        <meta
          name="twitter:image"
          content="https://plus.unsplash.com/premium_photo-1685284067427-b9019667a008?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2xvYmFsJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Get Dream Life",
            url: "https://www.getdreamlife.com",
            description:
              "Get Dream Life partners with NHT Global to offer a network marketing opportunity that empowers individuals to achieve financial freedom and a balanced lifestyle.",
            logo: "/logo.png",
            sameAs: [
              "https://www.facebook.com/getdreamlife",
              "https://www.twitter.com/getdreamlife",
              "https://www.linkedin.com/company/getdreamlife",
            ],
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
     <Section/>

      {/* Main Content */}
      <main className="pt-6 sm:pt-8">
        {/* Section 1: Welcome to Get Dream Life */}
        <motion.section
          className="py-20 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="h-4 w-4 text-blue-500" />
                <span className="text-blue-600 font-medium text-sm">
                  Start Your Journey Today
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Welcome to Get Dream Life
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover a world of opportunities with NHT Global and the Get Dream Life team.
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
                <ul className="space-y-4">
                  {[
                    "Excellent Health",
                    "Better Financial Potential",
                    "Enriching Personal Relationships",
                    "Freedom to spend your time enjoying what makes you happy",
                    "Start your own business and be your own boss",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-lg text-gray-700 font-medium leading-relaxed">
                        {item}
                      </p>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="bg-orange-50 border border-orange-200 rounded-xl p-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Your Dream Life Awaits
                  </h3>
                  <p className="text-lg text-gray-600">
                    Partner with NHT Global for infinite potential
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
                      src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2070&auto=format&fit=crop"
                      alt="Get Dream Life success team"
                      className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
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
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: About NHT Global */}
        <motion.section
          className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About NHT Global
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A global leader in network marketing with a proven track record.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Proven company with a record-breaking 15+ years history",
                "Revolutionary e-commerce business model",
                "Operating in more than 38 countries",
                "High impacting products for a healthy lifestyle",
                "Balanced lifestyle through improved physical, emotional, and financial health",
                "Training system to ensure your success",
                "Committed to global wellness",
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
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-100 font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 3: History of NHT Global */}
        <motion.section
          className="py-20 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                History of NHT Global
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A global leader in network marketing
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
                      alt="NHT Global's worldwide network"
                      className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
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
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Globe className="h-6 w-6 text-white" />
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
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  A Legacy of Success
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
                <div className="space-y-4">
                  {[
                    "Started in 2001, headquartered in Los Angeles, California",
                    "Global sales growing at a record pace",
                    "Financially stable with a 15+ year legacy",
                    "Contain Nobel Prize-winning research",
                    "Proprietary formulas for high-impact products",
                    "Seamless global compensation plan",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Learn About NHT Global
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: How Get Dream Life Can Help */}
        <motion.section
          className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                How Get Dream Life Can Help
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Support for your success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Comprehensive Training",
                  description:
                    "Training to understand the business in detail, ensuring you have the knowledge to succeed.",
                },
                {
                  title: "Marketing Tools",
                  description:
                    "Access to a marketing platform and tools to accelerate your success.",
                },
                {
                  title: "Direct Support",
                  description:
                    "Direct contact with founding members and top leaders committed to your success.",
                },
                {
                  title: "Global Opportunities",
                  description:
                    "Support to open new markets or countries where you can become a pioneer.",
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
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-400 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-100 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: NHT Global Core Strengths */}
        <motion.section
          className="py-20 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                NHT Global Core Strengths
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pillars of success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Product",
                  description:
                    "World-class unique, scientific, and patented product line.",
                  icon: <ShoppingBag className="h-8 w-8 text-white" />,
                },
                {
                  title: "Opportunity",
                  description:
                    "Amazing opportunity to create wealth for you and your generations.",
                  icon: <TrendingUp className="h-8 w-8 text-white" />,
                },
                {
                  title: "Leaders",
                  description:
                    "Industry top leaders available to help you at every step.",
                  icon: <Users className="h-8 w-8 text-white" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-3xl shadow-2xl overflow-hidden bg-white flex flex-col h-full"
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
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 pt-8 pb-6 text-white text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-600 text-base leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 6: Join Our Team */}
        <motion.section
          className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Join Our Team Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Sign up as a distributor today and receive a personalized website, management tools, and support to help build your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-600/25 transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Become a Distributor Now"
              >
                <Play className="h-5 w-5" />
                Become a Distributor
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform "/>
              </motion.button>
              <motion.button
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Learn More About Get Dream Life"
              >
                <ExternalLink className="h-5 w-5" />
                Learn More
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform "/>
              </motion.button>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Homes;