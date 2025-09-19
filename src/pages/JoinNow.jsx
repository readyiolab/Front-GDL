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
  Download,
  Rocket,
  BookOpen,
  DollarSign,
} from "lucide-react";
import RegistrationStepsWithModal from "./RegistrationStepsWithModal";

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

  const preLaunchCountries = [
    "Australia",
    "Dubai",
    "Taiwan",
    "Vietnam",
    "New Zealand",
  ];

  const contactCountries = [
    "Thailand",
    "Brazil",
    "Africa",
    "Nigeria",
    "Mongolia",
    "Philippines",
  ];

  const benefits = [
    "Immediate distributor status activation",
    "Personal website and management tools",
    "Access to comprehensive training materials",
    "Direct support from GDL team leaders",
    "Global compensation plan benefits",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 py-10 sm:py-14 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>

       

        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white backdrop-blur-sm  px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-blue-950" />
            <span className="text-blue-950 font-medium text-xs sm:text-sm">
              Join Thousands of Successful Distributors
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
            Become an NHT Global
            <span className="block text-white">
              Independent Distributor
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Follow our step-by-step registration process and start your journey
            to financial freedom with Get Dream Life support
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <motion.button
              className="group bg-white  text-blue-950 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl  transition-all duration-300 flex items-center gap-2 sm:gap-3"
              
            >
              Start Registration Now
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 sm:gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Guide
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Registration Steps */}
      <motion.section
        className="py-12 sm:py-20 px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <motion.div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 py-2 rounded-full mb-4 sm:mb-6">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
              <span className="text-black font-medium text-xs sm:text-sm">
                Secure Registration Process
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-6 text-black">
              Registration Steps
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-12 text-center max-w-4xl mx-auto text-black">
              Follow these simple steps to become an NHT Global Independent
              Distributor with Get Dream Life team support
            </p>
          </div>

          <RegistrationStepsWithModal />
        </div>
      </motion.section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-slate-100 to-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-950" />
              <span className="text-blue-950 font-semibold text-xs uppercase tracking-wide">
                Distributor Benefits
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 text-blue-950 flex items-center justify-center gap-3 sm:gap-5">
              What You Get After Registration
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-950">
              Unlock Your Success
            </h3>
          </div>

          <p className="text-base sm:text-lg mb-8 sm:mb-12 text-center max-w-4xl mx-auto text-black">
            After making the payment, you will immediately become a distributor
            of NHT Global. You will receive an email with details. Log in with
            your distributor ID and password to access your back office, where
            you can check the delivery of your package/product and monitor all
            your growing business details.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {[
              {
                icon: (
                  <Rocket className="h-8 w-8 sm:h-10 sm:w-10 text-black" aria-hidden="true" />
                ),
                description: "Immediate distributor status activation",
              },
              {
                icon: (
                  <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-black" aria-hidden="true" />
                ),
                description: "Personal website and management tools",
              },
              {
                icon: (
                  <BookOpen
                    className="h-8 w-8 sm:h-10 sm:w-10 text-black"
                    aria-hidden="true"
                  />
                ),
                description: "Access to comprehensive training materials",
              },
              {
                icon: (
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-black" aria-hidden="true" />
                ),
                description: "Direct support from GDL team leaders",
              },
              {
                icon: (
                  <DollarSign
                    className="h-8 w-8 sm:h-10 sm:w-10 text-black"
                    aria-hidden="true"
                  />
                ),
                description: "Global compensation plan benefits",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-200 to-blue-100 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full"
              >
                <div className="p-2 sm:p-3 bg-blue-50 rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Countries Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 text-black">
              Special Country Guidelines
            </h2>
            <p className="text-base sm:text-lg text-black max-w-4xl mx-auto">
              Different procedures for countries in pre-launch phase and new
              markets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gray-100 rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gray-200 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-black" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-black">
                    Pre-Launch Countries
                  </h3>
                  <p className="text-sm sm:text-base text-black font-medium">
                    Special Registration Process
                  </p>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Countries:</h4>
                <div className="flex flex-wrap gap-2">
                  {preLaunchCountries.map((country, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  "Select 'Hong Kong' as country and proceed",
                  "Select 'Overseas' in 'Province for bonus checks' field",
                  "Select your actual country and follow steps B to E",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-900">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gray-200 rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-black" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-black">
                    Contact Required
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 font-medium">
                    Personal Assistance Needed
                  </p>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Countries:</h4>
                <div className="flex flex-wrap gap-2">
                  {contactCountries.map((country, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-700 font-medium mb-3 sm:mb-4">
                  For these countries, please contact us directly for
                  personalized registration assistance.
                </p>
                <button className="w-full bg-black text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-800 transition text-sm sm:text-base">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  Contact Us Now
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 bg-gray-100 rounded-xl p-4 sm:p-6 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4">
              Country Not Listed? Become a Pioneer!
            </h3>

            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
              If your country isn't listed, there's an amazing opportunity to
              become a pioneer and open new markets with NHT Global.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-800 transition text-sm sm:text-base">
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                Pioneer Registration Steps
              </button>

              <button className="bg-gray-200 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border border-gray-300 flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-300 transition text-sm sm:text-base">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                Contact for Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinNow;