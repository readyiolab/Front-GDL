import React, { useState } from 'react';
import {
  ShoppingBag, Gift, User, Heart, Flower, Home,
  Baby, Droplet, Shield, Activity, Scale, Users,
  Zap, HeartPulse, Play, ArrowRight, Check, ChevronDown, ChevronUp
} from 'lucide-react';

export default function ProductsSection() {
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [activeCategory, setActiveCategory] = useState('wellness');

  const productCategories = [
    {
      id: 'beauty',
      icon: <Gift className="h-6 w-6 text-orange-400 group-hover:text-white transition-colors" />,
      title: "Beauty",
      description: "Premium skincare products for radiant, youthful-looking skin.",
      color: "from-orange-400 to-orange-500",
    },
    {
      id: 'lifestyle',
      icon: <User className="h-6 w-6 text-orange-400 group-hover:text-white transition-colors" />,
      title: "Lifestyle",
      description: "Innovative products that enhance everyday living and well-being.",
      color: "from-teal-400 to-teal-500",
    },
    {
      id: 'wellness',
      icon: <Heart className="h-6 w-6 text-orange-400 group-hover:text-white transition-colors" />,
      title: "Wellness",
      description: "Advanced nutritional supplements for optimal health and vitality.",
      color: "from-purple-400 to-purple-500",
    },
    {
      id: 'herbal',
      icon: <Flower className="h-6 w-6 text-orange-400 group-hover:text-white transition-colors" />,
      title: "Herbal",
      description: "Natural herbal products to support holistic health.",
      color: "from-green-400 to-green-500",
    },
    {
      id: 'home',
      icon: <Home className="h-6 w-6 text-orange-400 group-hover:text-white transition-colors" />,
      title: "Cozy-Home",
      description: "High-quality air and water purifiers for a healthier home.",
      color: "from-blue-400 to-blue-500",
    },
  ];

  const productTargets = [
    {
      icon: <Scale className="h-8 w-8 text-orange-500" />,
      title: "Weight & Metabolism",
      description: "Achieve your fitness goals with effective solutions for weight management and metabolism support.",
      image: "./weight.png",
    },
    {
      icon: <Gift className="h-8 w-8 text-orange-500" />,
      title: "Skin & Beauty",
      description: "Premium skincare products for radiant, youthful-looking skin.",
      image: "/beauty.png",
    },
    {
      icon: <Baby className="h-8 w-8 text-orange-500" />,
      title: "Child Care",
      description: "Support healthy growth and development for children.",
      image: "/child.png",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Elderly Wellness",
      description: "Support aging gracefully with specialized care for seniors.",
      image: "/elderly.png",
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Energy & Vitality",
      description: "Boost your energy for an active lifestyle with vitality-enhancing products.",
      image: "/energy.png",
    },
    {
      icon: <User className="h-8 w-8 text-orange-500" />,
      title: "Men's Health",
      description: "Products designed specifically for men's wellness.",
      image: "/man.png",
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: "Women's Health",
      description: "Tailored solutions for women's unique health needs.",
      image: "/woman.png",
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-orange-500" />,
      title: "Immunity & Cardiac Health",
      description: "Support your immune system and heart health with our specialized products.",
      image: "/cardiac.png",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/api/placeholder/1920/1080')`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
            Premium Products for a <span className="text-orange-400">Better Life</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-10">
            Unique products in Health & Wellness, Beauty & Anti-Aging make business easy and evergreen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Products
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium py-4 px-8 rounded-full transition-all duration-300 text-lg">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-10 w-10 text-white opacity-80" />
        </div>
      </section>

      {/* Why Choose NHT Global Products */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose NHT Global Products?</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the premium quality and effectiveness that sets our products apart
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="p-8 md:p-12">
              <div className="relative mb-10">
                <p className={`text-lg text-gray-700 leading-relaxed ${expandedDescription ? '' : 'line-clamp-4'}`}>
                  At NHT Global, we understand that different lifestyles call for different needs. For the modern day city dweller in particular, an urban lifestyle is often associated with stress, busy schedules, environmental toxins and pollutants, poor food choices, and work pressure. These factors affect overall quality life and can challenge our bodies in ways that require additional support. From anti-aging skincare to antioxidant rich beverages, NHT products have been designed to supplement your daily routine and help you live a healthier and better life. We target your specific needs with multi-functional, multi-benefit products that are safe, immediate impact, and easy to use and incorporate into your current lifestyle.
                </p>
                {!expandedDescription && (
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
                )}
                <button
                  onClick={() => setExpandedDescription(!expandedDescription)}
                  className="mt-4 text-orange-500 font-medium flex items-center gap-1.5 mx-auto hover:text-orange-600 transition-colors px-4 py-2 rounded-full hover:bg-orange-50"
                >
                  {expandedDescription ? 'Read Less' : 'Read More'}
                  {expandedDescription ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-8 border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features of NHT Global Products</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Categories: Beauty, Lifestyle, Wellness, Herbal, and Cozy-Home (air and water purifiers in select markets).',
                    'Use leading domestic and foreign GMP certified contract manufacturers.',
                    'Utilize high technology and source the finest ingredients.',
                    'Fueled by market trends and the latest scientific research.',
                    'Quality and satisfaction guaranteed for all products.',
                    'Designed for health, beauty, vitality, longevity, and protection.',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-orange-500 text-white p-1 rounded-full mt-1 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 italic mt-6">
                  Note: Availability of products may vary country to country. Get in touch with more details if you want to buy any product for personal use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of premium health and wellness products
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {productCategories.map((category) => (
              <button
                key={category.id}
                className={`group relative rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg ${
                  activeCategory === category.id 
                    ? `bg-gradient-to-br ${category.color} text-white` 
                    : 'bg-white hover:bg-gray-50 text-gray-800'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full mb-3 ${
                    activeCategory === category.id 
                      ? 'bg-white/20' 
                      : 'bg-orange-50 group-hover:bg-orange-100'
                  }`}>
                    {React.cloneElement(category.icon, { 
                      className: `h-6 w-6 ${activeCategory === category.id ? 'text-white' : 'text-orange-500 group-hover:text-orange-600'}` 
                    })}
                  </div>
                  <h3 className="font-semibold mb-1">{category.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-10">
            <div className="inline-block p-2 rounded-full bg-orange-500 shadow-xl shadow-orange-500/20 mb-8">
              <button className="bg-white rounded-full p-3 flex items-center justify-center group">
                <div className="bg-orange-500 rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Play className="h-8 w-8 text-white" fill="white" />
                </div>
              </button>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Watch NHT Global Product Video</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See how NHT Global products can transform your health and wellness journey.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg">
              Watch Video
              <Play className="h-4 w-4" fill="currentColor" />
            </button>
          </div>
        </div>
      </section>

      {/* Product Targets Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Targeted Solutions for All</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most of our products can be universally used by Men, Women, Kids, and Elderly people. Explore our targeted solutions designed to achieve better health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productTargets.map((target, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={target.image}
                    alt={target.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-bold text-white">{target.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    {React.cloneElement(target.icon, { className: "h-6 w-6" })}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{target.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Learn more</span>
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Premium Health?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Discover the complete range of NHT Global's premium products and transform your health and wellness journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 text-lg">
              Explore Our Full Catalog
            </button>
            <button className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-semibold py-4 px-10 rounded-full transition-all duration-300 text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}