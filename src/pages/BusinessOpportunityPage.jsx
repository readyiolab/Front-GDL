import { useState } from 'react';
import { 
  Globe, 
  DollarSign, 
  BarChart, 
  CheckCircle, 
  ShoppingBag, 
  Heart, 
  Leaf, 
  ArrowRight, 
  Home, 
  Youtube, 
  MessageCircle, 
  Share2, 
  Monitor,
  Database,
  MapPin,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function BusinessOpportunityPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const products = [
    {
      name: "StemRenew",
      image: "/api/placeholder/150/150",
      description: "Cell vitality & energy",
      color: "bg-teal-50",
      borderColor: "border-teal-300"
    },
    {
      name: "Omega-3",
      image: "/api/placeholder/150/150",
      description: "Heart & brain health",
      color: "bg-amber-50",
      borderColor: "border-amber-300"
    },
    {
      name: "Herbal Kits",
      image: "/api/placeholder/150/150",
      description: "Natural detox & wellness",
      color: "bg-green-50",
      borderColor: "border-green-300"
    }
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-400"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-blue-300"></div>
          <div className="absolute -bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-center mb-6 leading-tight"
            >
              CREATE YOUR DREAM LIFE
              <span className="block mt-2">with NHTGlobal</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="space-y-6 mb-12">
              <div className="flex items-center gap-4 bg-blue-800/30 p-4 rounded-lg backdrop-blur-sm shadow-inner">
                <div className="bg-blue-100 rounded-full p-2 text-blue-600">
                  <Globe className="w-6 h-6" />
                </div>
                <p className="text-lg">Join a global business in 40+ countries</p>
              </div>
              
              <div className="flex items-center gap-4 bg-blue-800/30 p-4 rounded-lg backdrop-blur-sm shadow-inner">
                <div className="bg-blue-100 rounded-full p-2 text-blue-600">
                  <DollarSign className="w-6 h-6" />
                </div>
                <p className="text-lg">Start from just $250 and scale at your own pace</p>
              </div>
              
              <div className="flex items-center gap-4 bg-blue-800/30 p-4 rounded-lg backdrop-blur-sm shadow-inner">
                <div className="bg-blue-100 rounded-full p-2 text-blue-600">
                  <BarChart className="w-6 h-6" />
                </div>
                <p className="text-lg">Get full support + an automated system to grow</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 text-lg flex items-center justify-center gap-2"
              >
                JOIN THE BUSINESS
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-blue-50 text-blue-700 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 text-lg flex items-center justify-center gap-2"
              >
                SEE THE SYSTEM
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      {/* About & Why Join Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About NHT Global */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 border border-blue-100"
            >
              <motion.div variants={fadeIn} className="mb-6">
                <h2 className="text-3xl font-bold text-blue-900 mb-2 inline-flex items-center">
                  ABOUT NHTGLOBAL
                  <div className="h-1 w-12 bg-blue-500 ml-4"></div>
                </h2>
              </motion.div>
              
              <motion.ul variants={staggerContainer} className="space-y-5">
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">20+ years of global wellness leadership</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Products in health, beauty, personal care</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Operating in 40+ countries</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Over $1 Billion+ in cumulative sales</p>
                </motion.li>
              </motion.ul>
            </motion.div>
            
            {/* Why Join Our Team */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8 border border-orange-100"
            >
              <motion.div variants={fadeIn} className="mb-6">
                <h2 className="text-3xl font-bold text-blue-900 mb-2 inline-flex items-center">
                  Why Join Our Team
                  <div className="h-1 w-12 bg-orange-500 ml-4"></div>
                </h2>
              </motion.div>
              
              <motion.ul variants={staggerContainer} className="space-y-5">
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-orange-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">No inventory needed</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-orange-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Proven compensation model</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-orange-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Global scalability</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-orange-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Access to Begrat system free for 15 months</p>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
      
      {/* Product Preview & Business Opportunity */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Preview */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-2 inline-flex items-center">
                  Product Preview
                  <div className="h-1 w-12 bg-blue-500 ml-4"></div>
                </h2>
              </motion.div>
              
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`${product.color} rounded-xl overflow-hidden shadow-md border ${product.borderColor} transition-all duration-300`}
                  >
                    <div className="p-4 flex flex-col items-center text-center">
                      <div className="mb-4 bg-white rounded-lg p-2 shadow-sm">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-24 h-24 object-contain mx-auto"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Business Opportunity */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-2 inline-flex items-center">
                  Business Opportunity
                  <div className="h-1 w-12 bg-green-500 ml-4"></div>
                </h2>
              </motion.div>
              
              <motion.ul variants={staggerContainer} className="space-y-5 mb-8">
                <motion.li variants={fadeIn} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="mt-1 text-green-600">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Earn commissions globally</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="mt-1 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">No monthly pressure</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="mt-1 text-green-600">
                    <BarChart className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Build your business at your pace</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="mt-1 text-green-600">
                    <Home className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Work from home or anywhere</p>
                </motion.li>
              </motion.ul>
              
              <motion.div variants={fadeIn} className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 text-lg flex items-center justify-center gap-2"
                >
                  LEARN ABOUT COMMISSIONS
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>
      
      {/* Bonus System */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeIn}>
              <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">EXCLUSIVE</span>
              <h2 className="text-3xl font-bold text-blue-900 mb-2">Bonus: Done-For-You System</h2>
              <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to succeed is ready from day one
              </p>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="bg-white rounded-xl shadow-lg p-8 border border-blue-100"
            >
              <motion.ul variants={staggerContainer} className="space-y-5">
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600 bg-blue-100 p-1 rounded-full">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Personal website</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600 bg-blue-100 p-1 rounded-full">
                    <Database className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Pre-filled product listings</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600 bg-blue-100 p-1 rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Country pricing logic</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600 bg-blue-100 p-1 rounded-full">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">WhatsApp & YouTube integration</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600 bg-blue-100 p-1 rounded-full">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Blogging + social tools</p>
                </motion.li>
              </motion.ul>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="bg-white rounded-xl shadow-lg p-8 border border-blue-100"
            >
              <motion.ul variants={staggerContainer} className="space-y-5">
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600 bg-blue-100 p-1 rounded-full">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Personal website</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600 bg-blue-100 p-1 rounded-full">
                    <Database className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Pre-filled product listings</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600 bg-blue-100 p-1 rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Country pricing logic</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600 bg-blue-100 p-1 rounded-full">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">Blogging + social tools</p>
                </motion.li>
                
                <motion.li variants={fadeIn} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-600 bg-blue-100 p-1 rounded-full">
                    <Clock className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-gray-700">15 months access</p>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 px-10 rounded-lg shadow-xl transition-all duration-300 text-lg"
            >
              GET STARTED TODAY
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}