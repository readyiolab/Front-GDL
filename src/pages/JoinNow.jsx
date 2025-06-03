import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import {
  CheckCircle,
  Globe,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  ShoppingBag,
  CreditCard,
  MapPin,
  UserPlus,
  Mail,
  Phone,
  AlertCircle,
  ExternalLink,
  Star,
  Shield,
  ChevronRight,
  Play,
  Download
} from "lucide-react";

const JoinNow = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const registrationSteps = [
    {
      step: "A",
      title: "Go to Sign Up Page",
      description: "Click on the registration link and follow the guided steps. Your sponsor will be 'Get Dream Life' (GDL Team) ensuring you get the best support from day one.",
      icon: <UserPlus className="h-8 w-8 text-white" />,
      action: "Start Registration Process",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "B",
      title: "Select Your Country",
      description: "Choose your country from the dropdown menu. Special procedures apply for pre-launch countries and new markets. We'll guide you through country-specific requirements.",
      icon: <Globe className="h-8 w-8 text-white" />,
      image: "step_b.png",
      note: "USA shown as example - requirements may vary by country",
      color: "from-green-500 to-green-600"
    },
    {
      step: "C",
      title: "Choose Your Package",
      description: "Select the distributorship package that aligns with your business goals and investment capacity. Each level offers different benefits and earning potential.",
      icon: <ShoppingBag className="h-8 w-8 text-white" />,
      image: "step_c.png",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "D",
      title: "Personal & Billing Info",
      description: "Provide accurate personal and billing information. This ensures smooth processing of your application and future transactions.",
      icon: <Mail className="h-8 w-8 text-white" />,
      image: "step_d.png",
      color: "from-orange-500 to-orange-600"
    },
    {
      step: "E",
      title: "Complete Payment",
      description: "Secure payment processing to activate your distributorship. Upon completion, you'll receive immediate access to your back office and distributor materials.",
      icon: <CreditCard className="h-8 w-8 text-white" />,
      image: "step_e.png",
      color: "from-red-500 to-red-600"
    }
  ];

  const preLaunchCountries = [
    "Australia", "Dubai", "Taiwan", "Vietnam", "New Zealand"
  ];

  const contactCountries = [
    "Thailand", "Brazil", "Africa", "Nigeria", "Mongolia", "Philippines"
  ];

  const benefits = [
    "Immediate distributor status activation",
    "Personal website and management tools",
    "Access to comprehensive training materials",
    "Direct support from GDL team leaders",
    "Global compensation plan benefits"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-20 lg:py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Star className="h-4 w-4 text-orange-400" />
            <span className="text-orange-300 font-medium text-sm">Join Thousands of Successful Distributors</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
            Become an NHT Global
            <span className="block text-orange-400">Independent Distributor</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Follow our step-by-step registration process and start your journey to financial freedom with Get Dream Life support
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="h-5 w-5" />
              Start Registration Now
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-5 w-5" />
              Download Guide
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Registration Steps */}
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
              <span className="text-blue-600 font-medium text-sm">Secure Registration Process</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Registration Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to become an NHT Global Independent Distributor with Get Dream Life team support
            </p>
          </div>

          <div className="space-y-12">
            {registrationSteps.map((stepData, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                onHoverStart={() => setActiveStep(index)}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Content */}
                  <motion.div
                    className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                    whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stepData.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-2xl font-bold text-white">
                          {stepData.step}
                        </span>
                      </motion.div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          Step {stepData.step}: {stepData.title}
                        </h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      {stepData.description}
                    </p>

                    {stepData.note && (
                      <motion.div
                        className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <p className="text-blue-800 font-medium">
                            {stepData.note}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {stepData.action && (
                      <motion.button
                        className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {stepData.icon}
                        {stepData.action}
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.button>
                    )}
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${stepData.color} opacity-20 z-10`}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                      <img
                        src={stepData.image}
                        alt={`Step ${stepData.step}: ${stepData.title}`}
                        className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Step Badge */}
                      <motion.div
                        className="absolute top-6 left-6 z-20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stepData.color} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                          {stepData.icon}
                        </div>
                      </motion.div>

                      {/* Progress Indicator */}
                      <div className="absolute bottom-6 left-6 right-6 z-20">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-700">
                              Step {index + 1} of {registrationSteps.length}
                            </span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <motion.div
                                className={`h-2 rounded-full bg-gradient-to-r ${stepData.color}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${((index + 1) / registrationSteps.length) * 100}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
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
              What You Get After Registration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Immediate access to all distributor benefits and tools for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Special Countries Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-orange-50 to-red-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Special Country Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different procedures for countries in pre-launch phase and new markets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pre-Launch Countries */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Pre-Launch Countries</h3>
                  <p className="text-orange-600 font-medium">Special Registration Process</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
                <h4 className="font-bold text-orange-800 mb-2">Countries:</h4>
                <div className="flex flex-wrap gap-2">
                  {preLaunchCountries.map((country, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Select 'Hong Kong' as country and proceed</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700">Select 'Overseas' in 'Province for bonus checks' field</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Select your actual country and follow steps B to E</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Required Countries */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Contact Required</h3>
                  <p className="text-blue-600 font-medium">Personal Assistance Needed</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <h4 className="font-bold text-blue-800 mb-2">Countries:</h4>
                <div className="flex flex-wrap gap-2">
                  {contactCountries.map((country, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                <p className="text-gray-700 font-medium mb-4">
                  For these countries, please contact us directly for personalized registration assistance.
                </p>
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="h-5 w-5" />
                  Contact Us Now
                  <ChevronRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Pioneer Opportunity */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Star className="h-10 w-10 text-white" />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Country Not Listed? Become a Pioneer!
            </h3>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              If your country isn't listed, there's an amazing opportunity to become a pioneer and open new markets with NHT Global.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-white/25 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="h-5 w-5" />
                Pioneer Registration Steps
              </motion.button>
              <motion.button
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="h-5 w-5" />
                Contact for Details
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Elements */}
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
              <UserPlus className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join NHT Global as an Independent Distributor today and unlock a world of opportunities with the support of the Get Dream Life team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="h-5 w-5" />
              Register Now
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="h-5 w-5" />
              Contact Support
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default JoinNow;