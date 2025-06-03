import React from "react";
import { motion } from "framer-motion";
import {
  Gift,
  User,
  Heart,
  Baby,
  Scale,
  Users,
  Zap,
  HeartPulse,
  Play,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Star,
  Mail,
} from "lucide-react";

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

export default function ProductsSection() {
  const productTargets = [
    {
      icon: <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />,
      title: "Weight & Metabolism",
      image: "./weight.png",
    },
    {
      icon: <Gift className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />,
      title: "Skin & Beauty",
      image: "/beauty.png",
    },
    {
      icon: <Baby className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />,
      title: "Child Care",
      image: "/child.png",
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />,
      title: "Elderly Wellness",
      image: "/elderly.png",
    },
    {
      icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />,
      title: "Energy & Vitality",
      image: "/energy.png",
    },
    {
      icon: <User className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />,
      title: "Men's Health",
      image: "/man.png",
    },
    {
      icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />,
      title: "Women's Health",
      image: "/woman.png",
    },
    {
      icon: <HeartPulse className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />,
      title: "Immunity & Cardiac Health",
      image: "/cardiac.png",
    },
  ];

  const keyPoints = [
    "Categories: Beauty, Lifestyle, Wellness, Herbal, and Cozy-Home (air and water purifiers in select markets).",
    "Use leading domestic and foreign GMP certified contract manufacturers.",
    "Utilize high technology and source the finest ingredients.",
    "Fueled by market trends and the latest scientific research.",
    "Quality and satisfaction guaranteed for all products.",
    "Designed for health, beauty, vitality, longevity, and protection.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Banner */}
      <motion.section
        className="relative  flex items-center justify-center overflow-hidden py-10 lg:py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        role="banner"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/products-web-banner.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-blue-900/60"></div>
        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center px-6"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 px-4 py-2 rounded-full mb-6"
            variants={itemVariants}
          >
            <Star className="h-4 w-4 text-orange-400" />
            <span className="text-orange-300 font-medium text-sm">
              Premium Quality
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight"
            variants={itemVariants}
          >
            Premium Products for a <br /> <span className="text-orange-400">Better Life</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Unique products in Health & Wellness, Beauty & Anti-Aging make business easy and evergreen.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <motion.button
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              variants={hoverScale}
              aria-label="Explore NHT Global Products"
            >
              <Play className="h-5 w-5" />
              Explore Products
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              variants={hoverScale}
              aria-label="Learn More About Products"
            >
              <ExternalLink className="h-5 w-5" />
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
       
      </motion.section>

      {/* Why Choose NHT Global Products */}
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
              <Star className="h-4 w-4 text-blue-500" />
              <span className="text-blue-600 font-medium text-sm">
                Trusted Quality
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Why Choose NHT Global Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium quality products designed for your health and lifestyle needs.
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
              <p className="text-lg text-gray-700 leading-relaxed">
                At NHT Global, we understand that urban lifestyles bring stress, busy schedules, environmental toxins, poor food choices, and work pressure. Our products, from anti-aging skincare to antioxidant-rich beverages, are designed to support your daily routine and help you live healthier. We offer multi-functional, safe, and easy-to-use solutions tailored to your needs, ensuring health, beauty, vitality, longevity, and protection.
              </p>
              <ul className="space-y-4">
                {keyPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium leading-relaxed">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 italic">
                Note: Product availability may vary by country. Contact us for details on purchasing for personal use.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-20 z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                <img
                  src="/products-web-banner.png"
                  alt="NHT Global Products"
                  className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
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

      {/* Video Showcase Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            className="flex flex-col items-center mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-3 rounded-full bg-orange-500 shadow-xl shadow-orange-500/20 mb-8">
              <motion.button
                className="bg-white rounded-full p-4 flex items-center justify-center group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-orange-500 rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Play className="h-8 w-8 text-white" fill="white" />
                </div>
              </motion.button>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Watch NHT Global Product Video
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              See how NHT Global products can transform your health and wellness journey.
            </p>
            <motion.button
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Watch Product Video"
            >
              <Play className="h-5 w-5" fill="currentColor" />
              Watch Video
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Product Targets Grid */}
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
              <Star className="h-4 w-4 text-blue-500" />
              <span className="text-blue-600 font-medium text-sm">
                Universal Solutions
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Targeted Solutions for All
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our universal products designed for Men, Women, Kids, and Elderly to support better health.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {productTargets.map((target, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-4 flex flex-col items-center transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative w-24 h-24 mb-4">
                  <img
                    src={target.image}
                    alt={target.title}
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute -top-2 -right-2 bg-white p-2 rounded-full shadow-md border border-gray-100">
                    {React.cloneElement(target.icon, {
                      className: "h-5 w-5 text-orange-500",
                    })}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 text-center">
                  {target.title}
                </h3>
                <motion.div
                  className="mt-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="text-sm font-medium text-orange-500">
                    Learn more
                  </span>
                  <ArrowRight className="h-4 w-4 text-orange-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative overflow-hidden"
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
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-600 to-red-500 flex items-center justify-center">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Experience Premium Health?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the complete range of NHT Global's premium products and transform your health and wellness journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              className="group bg-gradient-to-r from-white to-gray-100 text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-gray-200/25 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Explore Full Product Catalog"
            >
              <ExternalLink className="h-5 w-5" />
              Explore Our Full Catalog
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="group bg-transparent text-white border-2 border-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Contact Us"
            >
              <Mail className="h-5 w-5" />
              Contact Us
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}