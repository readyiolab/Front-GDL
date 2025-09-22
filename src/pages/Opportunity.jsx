import React, { useEffect, useState } from "react";
import {
  Clock,
  Star,
  ChevronRight,
  Dot,
  ArrowRight,
  DollarSign,
} from "lucide-react";
import * as THREE from "three"; // Note: THREE.js is imported but not used; consider removing if unused
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Play } from "lucide-react";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 via-blue-900 to-blue-950 px-4 sm:px-6 overflow-x-hidden">
      <motion.section
        className="relative flex items-center justify-center py-6 sm:py-12 min-h-[50vh] sm:min-h-[60vh]"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center px-2 sm:px-6"
          variants={staggerChildren}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white backdrop-blur-sm border border-orange-400/30 px-3 py-1.5 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-8"
            variants={itemVariants}
          >
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-white0" />
            <span className="text-blue-950 font-normal text-xs sm:text-sm">
              Proven Business Model
            </span>
          </motion.div>

          <motion.h1
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-8 text-white leading-tight"
            variants={itemVariants}
          >
            Unleash Your <br />
            <span className="text-white">Potential with NHT Global</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            NHT Global offers better health, unlimited income, and freedom to
            live life on your terms.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6"
            variants={itemVariants}
          >
            <Button
              className="bg-white text-blue-950 font-normal py-3 sm:py-6 px-6 sm:px-10 rounded-full hover:bg-white/20 shadow-xl border-0 text-sm sm:text-lg min-h-[44px]"
              asChild
            >
              <motion.a
                href="#categories"
                className="flex items-center gap-2 sm:gap-3"
              >
                Join Our Community
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </Button>

            <Button
              className="bg-white/10 backdrop-blur-lg text-white font-normal py-3 sm:py-6 px-6 sm:px-10 rounded-full hover:bg-white/20 shadow-xl text-sm sm:text-lg  min-h-[44px]"
              asChild
            >
              <motion.a
                href="#learn-more"
                className="flex items-center gap-2 sm:gap-3"
              >
                Learn More
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>
    </section>
  );
};

const OpportunityPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Sample data remains unchanged
  const benefits = [
    "Direct selling industry over 50 years old",
    "More than $110 billion global industry and growing",
    "Doing business in more than 172 countries worldwide",
    "People of all ages, races, and backgrounds are involved",
    "Has empowered millions of people around the world",
    "High income potential",
    "Be your own boss",
    "No employees, no payroll, no storefront, and low overhead",
    "Major tax advantages",
    "Best chance for the average person to succeed and create a life that is more than average",
    "Global opportunity with no limits",
    "Create an extraordinary life",
  ];

  const compensationFeatures = [
    {
      title: "Bonus Volume (BV)",
      description:
        "Each product is assigned a point value called Bonus Volume (BV). The compensation plan is based on accumulating these points, ensuring competitive retail pricing and profitable wholesale-to-retail margins for distributors.",
    },
    {
      title: "Personal Volume (PV)",
      description:
        "Your Personal Volume (PV) is the purchase or sales volume processed through your Distributor ID, reflecting your direct contribution to product orders.",
    },
    {
      title: "Personal Group Volume (PGV)",
      description:
        "The Personal Group Volume (PGV) includes products purchased by you and your directly sponsored members, regardless of their placement in the genealogy tree.",
    },
    {
      title: "Active Status",
      description:
        "Achieve Active Status to earn commissions by personally sponsoring two people in both legs of your network.",
    },
    {
      title: "Distributor Levels",
      description:
        "Three levels: Bronze (3% discount), Silver (11% discount), and Gold (34% discount). Become a Gold distributor with a Gold or Platinum package for maximum benefits.",
    },
    {
      title: "Product Packages",
      description:
        "Packages include Bronze, Silver, Gold, and Platinum. Gold offers maximum discounts and 1-year free back office access. Platinum includes all products and an e-commerce site.",
    },
  ];

  const investmentFeatures = [
    {
      title: "Platinum Package",
      price: "$2,000",
      description:
        "Includes all NHT Global products and tools to kickstart your business with maximum benefits.",
      features: [
        "All NHT Global products",
        "Gold distributor level (34% discount)",
        "Lifetime free back office access",
        "E-commerce site access",
        "Maximum commission potential",
      ],
    },
    {
      title: "Gold Package",
      price: "$1,000",
      description: "Flexible product selections for serious entrepreneurs.",
      features: [
        "Various product selections",
        "Gold distributor level (34% discount)",
        "Free back office access for 1 year",
        "Maximum commission potential",
      ],
    },
    {
      title: "Silver Package",
      price: "$500",
      description:
        "Moderate investment with selected products for those starting their journey.",
      features: [
        "Selected products",
        "Silver distributor level (11% discount)",
        "$50 annual back office fee",
        "Medium commission potential",
      ],
    },
    {
      title: "Bronze Package",
      price: "$300",
      description:
        "Entry-level package with 90 BV worth of products ($250) and Business Builder Package ($50).",
      features: [
        "90 BV worth of products ($250)",
        "Business Builder Package ($50)",
        "Bronze distributor level (3% discount)",
        "Basic commission structure",
      ],
    },
  ];

  const opportunityFeatures = [
    {
      text: "Offices worldwide and distribution within more than 50 countries",
    },
    { text: "More than $1.5 billion in sales and growing" },
    { text: "Member of the Direct Selling Association" },
    {
      text: "Subsidiary of 23-year-old publicly traded company, Natural Health Trends Corp. (trading symbol: NHTC)",
    },
    {
      text: "Experienced executive team and global leaders to support you at each step towards your success",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-x-hidden">
      {/* Added overflow-x-hidden to prevent horizontal scroll */}
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
      <main className="pt-6 sm:pt-12 lg:pt-16">
        {/* Section 1: Door of Opportunity */}
        <motion.section
          className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }} // Adjusted for mobile
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
            <div className="text-center mb-8 sm:mb-12">
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-gray-900" />
                <span className="text-gray-900 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  Start Your Journey
                </span>
              </motion.div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-blue-950 shadow-text">
                Open the Door of Opportunity
              </h2>
              <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Take the next step to changing your destiny with NHT Global.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <motion.div
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Take that next step to changing your destiny",
                    "Choose the opportunity that offers you a proven formula to build your own future",
                    "Change your focus to building a healthy lifestyle",
                    "Open your mind to developing a wellness tradition across the globe",
                    "Share this opportunity with others",
                    "Open the door to NHT Global… Top Network Marketing Company Globally",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="relative pl-5 text-sm sm:text-base text-gray-700 font-normal leading-relaxed before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-gray-600"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-lg transition-shadow duration-500">
                  <motion.div className="absolute inset-0 opacity-20 z-10" />
                  <picture>
                    <source
                      srcSet="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=400&auto=format&fit=crop"
                      media="(max-width: 640px)"
                    />
                    <source
                      srcSet="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=800&auto=format&fit=crop"
                      media="(max-width: 1024px)"
                    />
                    <img
                      src="https://plus.unsplash.com/premium_photo-1682309701556-f6d7a9cac246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fE9wcG9ydHVuaXR5fGVufDB8fDB8fHww"
                      alt="Team celebrating NHT Global success"
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-500"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Why Network Marketing */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-950" />
                <span className="text-blue-950 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  Our Legacy
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-blue-950 shadow-text">
                Why Choose Network Marketing
              </h2>
              <h3 className="text-lg sm:text-2xl font-semibold text-blue-950">
                A Global Opportunity for Success
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
              <div className="relative h-auto shadow-xl flex items-center justify-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1733328013343-e5ee77acaf05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE5ldHdvcmslMjBNYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
                  alt="Global Network"
                  className="w-full h-48 sm:h-64 lg:h-auto object-cover rounded-xl max-w-full"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-4 sm:gap-6">
                <ul className="space-y-3 sm:space-y-4 list-disc pl-5">
                  {benefits.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm sm:text-base font-normal text-gray-700 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Transition Section */}
        <section className="flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-8 p-6 sm:p-8 lg:p-12 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="text-center sm:text-left max-w-md">
            <p className="text-sm sm:text-lg lg:text-xl font-medium text-black leading-relaxed">
              Let's Meet a World of Opportunity! A global company that unlocks
              your True Potential…
            </p>
          </div>
          <div className="flex justify-center">
            <svg
              className="w-8 h-8 sm:w-12 sm:h-12 text-black transform transition-transform hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
          <div className="flex justify-center sm:justify-end">
            <div className="p-2 sm:p-3">
              <img
                src="./nht-logo.png"
                alt="NHT Logo"
                className="h-10 sm:h-14 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section 4: NHT Global Opportunity */}
        <motion.section
          className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
            <div className="text-center mb-8 sm:mb-12">
              <motion.div
                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-blue-950" />
                <span className="text-blue-950 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  Global Reach
                </span>
              </motion.div>
              <motion.h2
                className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-blue-950 flex items-center justify-center gap-5 shadow-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                World of Opportunity
              </motion.h2>
              <motion.h3
                className="text-lg sm:text-2xl font-semibold text-blue-950"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                A Legacy of Success
              </motion.h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <motion.div
                className="flex flex-col gap-4 sm:gap-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {opportunityFeatures.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-950 mt-2 flex-shrink-0" />
                    <p className="text-sm sm:text-base font-normal text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="relative h-48 sm:h-64 lg:h-auto shadow-xl flex items-center justify-center">
                <picture>
                  <source
                    srcSet="https://images.unsplash.com/photo-1588458977838-bdf7b9d8700e?w=400&auto=format&fit=crop"
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet="https://images.unsplash.com/photo-1588458977838-bdf7b9d8700e?w=800&auto=format&fit=crop"
                    media="(max-width: 1024px)"
                  />
                  <img
                    src="https://plus.unsplash.com/premium_photo-1682310118537-a6e477fd0ef2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fE9wcG9ydHVuaXR5fGVufDB8fDB8fHww"
                    alt="NHT Global's worldwide business network"
                    className="w-full h-full object-cover rounded-xl max-w-full"
                    loading="lazy"
                  />
                </picture>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Compensation Plan */}
        <motion.section
          className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-100 to-slate-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
            <div className="text-center mb-8 sm:mb-12">
              <motion.div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm">
                <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-blue-950" />
                <span className="text-black font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  Earning Potential
                </span>
              </motion.div>
              <motion.h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-8 text-black flex items-center justify-center gap-5 shadow-text">
                Compensation Plan
              </motion.h2>
              <motion.h3 className="text-lg sm:text-2xl font-semibold text-black">
                Understand Your Earnings
              </motion.h3>
            </div>
            <motion.p className="text-sm sm:text-lg mb-8 sm:mb-12 text-center max-w-4xl mx-auto text-black">
              Maximize your earnings with NHT Global by understanding these key
              terms:
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-stretch min-h-full">
              {compensationFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-gray-100
 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full"
                >
                  <h3 className="text-base sm:text-xl font-semibold text-black mb-4 sm:mb-6 text-center">
                    {item.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow text-center"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 6: Investment Options */}
        <motion.section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-100 to-slate-200">
          <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
            <div className="text-center mb-8 sm:mb-12">
              <motion.div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm">
                <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-blue-950" />
                <span className="text-black font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  Investment Options
                </span>
              </motion.div>
              <motion.h2
                className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-blue-950 flex items-center justify-center gap-5 shadow-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Investment Options
              </motion.h2>
              <motion.h3
                className="text-lg sm:text-2xl font-semibold text-blue-950"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Choose Your Package
              </motion.h3>
            </div>
            <motion.p
              className="text-sm sm:text-lg mb-8 sm:mb-12 text-center max-w-4xl mx-auto text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Start with any package, but we recommend Platinum or Gold for
              serious entrepreneurs to maximize discounts and commissions.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {investmentFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-gray-100
 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-base sm:text-lg font-bold text-black mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-lg sm:text-2xl font-semibold text-black text-center mb-3 sm:mb-4">
                    {item.price}
                  </p>
                  <p
                    className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 text-center"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                        <p
                          className="text-sm sm:text-base text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: feature }}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 7: Call to Action */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-orange-50">
          <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
            <motion.h2
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-blue-950"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join NHT Global today and take control of your financial future
              with a proven business model.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                className="bg-orange-500 text-white font-normal py-3 sm:py-6 px-6 sm:px-10 rounded-full hover:bg-orange-600 shadow-xl border-0 text-sm sm:text-lg min-h-[44px]"
                asChild
              >
                <a
                  href="#categories"
                  className="flex items-center gap-2 sm:gap-3"
                >
                  Get Started Now
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button
                className="bg-white/10 backdrop-blur-lg text-black font-normal py-3 sm:py-6 px-6 sm:px-10 rounded-full hover:bg-white/20 shadow-xl text-sm sm:text-lg border border-orange-400/30 min-h-[44px]"
                asChild
              >
                <a
                  href="#learn-more"
                  className="flex items-center gap-2 sm:gap-3"
                >
                  Contact Us
                  <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Custom CSS for shadow-text and minor tweaks */}
      <style jsx>{`
        .shadow-text {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 640px) {
          .shadow-text {
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </div>
  );
};

export default OpportunityPage;
