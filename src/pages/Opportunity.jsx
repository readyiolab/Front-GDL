import React, { useEffect, useRef, useState } from "react";
import {
  Clock,
  Star,
  ChevronRight,
  Dot,
  ArrowRight ,
  DollarSign 
} from "lucide-react";
import * as THREE from "three";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Shield,

  Globe,
 
  Play,
} from "lucide-react";
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
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-50 via-white to-orange-50 px-6 overflow-hidden">
      {/* Background image blur layer */}
      <motion.section
      className="relative flex items-center justify-center overflow-hidden py-8 sm:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="banner"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50"></div>
      
      {/* Background image blur layer */}
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500 rounded-full blur-xl z-0"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <Star className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
          <span className="text-black font-normal text-xs sm:text-sm">
            Proven Business Model
          </span>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 bg-gradient-to-r from-black via-gray-800 to-orange-600 bg-clip-text text-transparent leading-tight"
          variants={itemVariants}
        >
          Unleash Your <br />
          <span className="bg-black bg-clip-text text-transparent">
            Potential with NHT Global
          </span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          variants={itemVariants}
        >
          NHT Global offers better health, unlimited income, and freedom to live
          life on your terms.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          variants={itemVariants}
        >
          <Button
            className="bg-orange-500 text-white font-normal py-4 sm:py-6 px-8 sm:px-10 rounded-full hover:bg-orange-600 shadow-xl border-0 text-base sm:text-lg"
            asChild
          >
            <motion.a
              href="#categories"
              className="flex items-center gap-3"
            >
              Join Our Community
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.a>
          </Button>

          <Button
            className="bg-white/10 backdrop-blur-lg text-black font-normal py-4 sm:py-6 px-8 sm:px-10 rounded-full hover:bg-white/20 shadow-xl text-base sm:text-lg border border-orange-400/30"
            asChild
          >
            <motion.a
              href="#learn-more"
              className="flex items-center gap-3"
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

      {/* Hero Section - Now renders properly */}
      <HeroSection />

      {/* Main Content - Adjusted padding/margin */}
      <main className="pt-8 sm:pt-12 lg:pt-16">
        {/* Section 1: Door of Opportunity - Increased py, added space-y */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8" // Increased vertical padding
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto space-y-8">
            {" "}
            {/* Added space-y for internal spacing */}
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 px-4 py-2 rounded-full mb-6 shadow-sm" // Added shadow for highlight
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="h-4 w-4 text-gray-900" />
                <span className="text-gray-900 font-semibold text-xs uppercase tracking-wide">
                  Start Your Journey
                </span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-blue-950 shadow-text">
                {" "}
                {/* Highlight: bold + shadow */}
                Open the Door of Opportunity
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                <ul className="space-y-4">
                  {" "}
                  {/* Increased space-y */}
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
                      className="relative pl-5 text-base text-gray-700 font-medium leading-relaxed before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-gray-600"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-lg transition-shadow duration-500">
                  {" "}
                  {/* Added shadow for highlight */}
                  <motion.div className="absolute inset-0 opacity-20 z-10" />
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
                      src="https://plus.unsplash.com/premium_photo-1682309701556-f6d7a9cac246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fE9wcG9ydHVuaXR5fGVufDB8fDB8fHww"
                      alt="Team celebrating NHT Global success"
                      className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-700" // Adjusted heights for responsiveness
                      loading="lazy"
                    />
                  </picture>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Why Network Marketing - Increased py, gap */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          {" "}
          {/* Increased py */}
          <div className="max-w-6xl mx-auto space-y-8">
            {" "}
            {/* Added space-y */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-6 shadow-sm">
                {" "}
                {/* Highlight: shadow */}
                <Clock className="h-4 w-4 text-blue-950" />
                <span className="text-blue-950 font-semibold text-xs uppercase tracking-wide">
                  Our Legacy
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-blue-950 shadow-text">
                {" "}
                {/* Highlight: bold + shadow */}
                Why Choose Network Marketing
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-950">
                A Global Opportunity for Success
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {" "}
              {/* Increased gap */}
              {/* Left Side: Image */}
              <div className="relative h-auto shadow-xl flex items-center justify-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1733328013343-e5ee77acaf05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE5ldHdvcmslMjBNYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
                  alt="Global Network"
                  className="w-full h-64 sm:h-80 lg:h-auto object-cover rounded-xl" // Responsive height
                />
              </div>
              {/* Right Side: Description List */}
              <div className="flex flex-col gap-6">
                <ul className="space-y-4 list-disc pl-5">
                  {benefits.map((item, index) => (
                    <li
                      key={index}
                      className="text-base font-medium text-gray-700 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-8 p-8 lg:p-12 bg-gradient-to-r from-blue-50 to-blue-100">
          {" "}
          {/* Increased padding/gap */}
          {/* Left Text */}
          <div className="text-center sm:text-left max-w-md">
            <p className="text-base sm:text-lg lg:text-xl font-medium text-black leading-relaxed">
              {" "}
              {/* Responsive text */}
              Let's Meet a World of Opportunity! A global company that unlocks
              your True Potential…
            </p>
          </div>
          {/* Center Arrow */}
          <div className="flex justify-center">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-black transform transition-transform hover:scale-110" // Responsive size
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
          {/* Right Logo */}
          <div className="flex justify-center sm:justify-end">
            <div className="p-3">
              <img
                src="./nht-logo.png"
                alt="NHT Logo"
                className="h-12 sm:h-14 w-auto object-contain" // Responsive height
              />
            </div>
          </div>
        </section>

        {/* Section 3: NHT Global Opportunity - Increased py, gap */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50" // Increased py
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto space-y-8">
            {" "}
            {/* Added space-y */}
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-6 shadow-sm" // Highlight: shadow
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Globe className="h-4 w-4 text-blue-950" />
                <span className="text-blue-950 font-semibold text-xs uppercase tracking-wide">
                  Global Reach
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-blue-950 flex items-center justify-center gap-5 shadow-text" // Highlight: bold + shadow
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                World of Opportunity
              </motion.h2>
              <motion.h3
                className="text-xl sm:text-2xl font-semibold text-blue-950"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                A Legacy of Success
              </motion.h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {" "}
              {/* Increased gap */}
              <motion.div
                className="flex flex-col gap-6" // Increased gap
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
                    <p className="text-base font-medium text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="relative h-72 sm:h-80 lg:h-auto shadow-xl flex items-center justify-center" // Responsive height
              >
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
                    src="https://plus.unsplash.com/premium_photo-1682310118537-a6e477fd0ef2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fE9wcG9ydHVuaXR5fGVufDB8fDB8fHww"
                    alt="NHT Global's worldwide business network"
                    className="w-full h-auto object-cover rounded-xl" // Made object-cover for better fit
                    loading="lazy"
                  />
                </picture>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Compensation Plan - Increased py, gap */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-100 to-slate-200" // Increased py
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto space-y-8">
            {" "}
            {/* Added space-y */}
            <div className="text-center mb-12">
              <motion.div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-6 shadow-sm">
                {" "}
                {/* Highlight: shadow */}
                <DollarSign className="h-4 w-4 text-blue-950" />
                <span className="text-black font-semibold text-xs uppercase tracking-wide">
                  Earning Potential
                </span>
              </motion.div>
              <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-black flex items-center justify-center gap-5 shadow-text">
                {" "}
                {/* Highlight: bold + shadow */}
                Compensation Plan
              </motion.h2>
              <motion.h3 className="text-xl sm:text-2xl font-semibold text-black">
                Understand Your Earnings
              </motion.h3>
            </div>
            <motion.p className="text-base sm:text-lg mb-12 text-center max-w-4xl mx-auto text-black">
              {" "}
              {/* Responsive text */}
              Maximize your earnings with
              NHT Global by
              understanding these key terms:
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch min-h-full">
              {" "}
              {/* Increased gap */}
              {compensationFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-blue-100 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-6 text-center">
                    {" "}
                    {/* Responsive text */}
                    {item.title}
                  </h3>
                  <p
                    className="text-base text-gray-700 leading-relaxed flex-grow text-center"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: Investment Options - Increased py, gap */}
        <motion.section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-100 to-slate-200">
          {" "}
          {/* Increased py */}
          <div className="max-w-6xl mx-auto space-y-8">
            {" "}
            {/* Added space-y */}
            <div className="text-center mb-12">
              <motion.div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-6 shadow-sm">
                {" "}
                {/* Highlight: shadow */}
                <DollarSign className="h-4 w-4 text-blue-950" />
                <span className="text-black font-semibold text-xs uppercase tracking-wide">
                  Investment Options
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-blue-950 flex items-center justify-center gap-5 shadow-text" // Highlight: bold + shadow
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Investment Options
              </motion.h2>
              <motion.h3
                className="text-xl sm:text-2xl font-semibold text-blue-950"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Choose Your Package
              </motion.h3>
            </div>
            <motion.p
              className="text-base sm:text-lg mb-12 text-center max-w-4xl mx-auto text-black" // Responsive text
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Start with any package, but we recommend Platinum or Gold for
              serious entrepreneurs to maximize discounts and commissions.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {" "}
              {/* Increased gap */}
              {investmentFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r from-blue-100 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 `}
                >
                  <h3 className="text-lg font-bold text-black mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-xl sm:text-2xl font-semibold text-black text-center mb-4">
                    {" "}
                    {/* Responsive text */}
                    {item.price}
                  </p>
                  <p
                    className="text-base text-gray-700 mb-6 text-center"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <div className="flex flex-col gap-4">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                        <p
                          className="text-base text-gray-700 leading-relaxed"
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

        {/* Section 6: Call to Action */}
      </main>
    </div>
  );
};

export default OpportunityPage;
