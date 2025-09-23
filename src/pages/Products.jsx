import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Star, Play, ArrowRight, Check, Shield, Award, Heart } from 'lucide-react';
import { createSlug } from '@/utils/slugify';

// Animation variants
const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ProductsSection = () => {
  const [country, setCountry] = useState('US');
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Axios instance configuration
  const axiosInstance = axios.create({
    baseURL:  import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Fetch countries and categories
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [countriesRes, categoriesRes] = await Promise.all([
          axiosInstance.get('/countries', { signal: controller.signal }),
          axiosInstance.get('/categories', { signal: controller.signal }),
        ]);

        if (isMounted) {
          setCountries(countriesRes.data.data || []);
          setCategories(categoriesRes.data.data || []);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted && !axios.isCancel(err)) {
          console.error('Error fetching data:', err);
          setError('Failed to load data. Please try again later.');
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  // Key points data
  const keyPoints = [
    {
      icon: <Award className="h-4 w-4 sm:h-5 sm:w-5" />,
      title: 'Premium Categories',
      description:
        'Beauty, Lifestyle, Wellness, Herbal, and Cozy-Home products with air and water purifiers in select markets.',
    },
    {
      icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5" />,
      title: 'Certified Manufacturing',
      description:
        'We use leading domestic and foreign GMP certified contract manufacturers for quality assurance.',
    },
    {
      icon: <Star className="h-4 w-4 sm:h-5 sm:w-5" />,
      title: 'Advanced Technology',
      description:
        'Utilize high technology and source the finest ingredients for optimal results.',
    },
    {
      icon: <Check className="h-4 w-4 sm:h-5 sm:w-5" />,
      title: 'Research-Driven',
      description:
        'Fueled by market trends and the latest scientific research for innovative solutions.',
    },
    {
      icon: <Heart className="h-4 w-4 sm:h-5 sm:w-5" />,
      title: 'Quality Guaranteed',
      description:
        'Quality and satisfaction guaranteed for all products with comprehensive support.',
    },
    {
      icon: <Star className="h-4 w-4 sm:h-5 sm:w-5" />,
      title: 'Holistic Wellness',
      description:
        'Designed for health, beauty, vitality, longevity, and protection in one comprehensive range.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Banner */}
      <motion.section
        className="relative flex items-center justify-center overflow-hidden py-8 sm:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        role="banner"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-950"></div>
        
        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-blue-300" />
            <span className="text-white font-normal text-xs sm:text-sm">
              Premium Quality Products
            </span>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
            variants={itemVariants}
          >
            Transform Your <br />
            <span className="bg-white bg-clip-text text-transparent">
              Wellness Journey
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Discover premium health & wellness solutions designed to elevate your
            lifestyle with cutting-edge science and natural ingredients.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            variants={itemVariants}
          >
            <Button
              className="bg-white text-blue-950 font-normal py-4 sm:py-6 px-8 sm:px-10 rounded-full hover:bg-blue-100 shadow-xl border-0 text-base sm:text-lg"
              asChild
            >
              <motion.a
                href="#categories"
                className="flex items-center gap-3"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </Button>

            <Button
              className="bg-white/10 backdrop-blur-lg text-white font-normal py-4 sm:py-6 px-8 sm:px-10 rounded-full hover:bg-white/20 shadow-xl text-base sm:text-lg"
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

      {/* Country Selector */}
      <motion.section
        className="py-8 sm:py-12 px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-2">
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className="w-[200px] sm:w-[250px] bg-transparent border-0 text-base sm:text-lg font-medium">
                <SelectValue placeholder="Select Your Country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((c) => (
                  <SelectItem key={c} value={c} className="text-base sm:text-lg">
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.section>

      {/* Why Choose NHT Global Products */}
      <motion.section
        className="py-16 sm:py-24 px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <motion.div
              className="inline-flex items-center gap-2 bg-gray-200 border border-gray-300 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6"
            >
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-gray-900" />
              <span className="text-gray-900 font-semibold text-xs uppercase tracking-wide">
                Trusted Excellence
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-blue-950 flex items-center justify-center gap-3">
              Why Choose <span>
                <img src="./nht-logo.png" alt="NHT Global Logo" className="h-12 sm:h-16 w-auto" />
              </span>?
            </h2>

            <p className="text-base sm:text-lg text-black max-w-2xl mx-auto leading-relaxed">
              Experience the difference with our scientifically-backed, premium
              quality products designed for modern wellness needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <motion.div
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-100">
                <p className="text-base sm:text-lg text-black leading-relaxed mb-6 sm:mb-8 font-normal">
                  Modern urban lifestyles bring unique challenges: stress,
                  environmental toxins, busy schedules, and poor nutrition
                  choices. Our comprehensive product range addresses these
                  challenges with innovative, multi-functional solutions that
                  seamlessly integrate into your daily routine.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  {keyPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {point.icon}
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-2 text-base sm:text-lg">{point.title}</h4>
                        <p className="text-sm sm:text-base text-black leading-relaxed">{point.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-200">
                  <p className="text-xs sm:text-sm text-grey-700 italic font-medium">
                    Note: Product availability may vary by country. Contact us for
                    personalized recommendations and purchasing information.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"
                />
                <img
                  src="./product1.jpg"
                  alt="NHT Global Premium Products"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Categories Grid */}
      <motion.section
        id="categories"
        className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-blue-950" />
              <span className="text-blue-950 font-semibold text-xs uppercase tracking-wide">
                Complete Wellness Solutions
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-blue-950">
              Explore Our Categories
            </h2>

            <p className="text-base sm:text-lg text-black max-w-2xl mx-auto leading-relaxed">
              Discover targeted solutions for every aspect of your health and
              wellness journey.
            </p>
          </div>

          {isLoading ? (
            <div className="text-center text-slate-600 text-base sm:text-lg">Loading categories...</div>
          ) : error ? (
            <div className="text-center text-red-600 text-base sm:text-lg">{error}</div>
          ) : categories.length === 0 ? (
            <div className="text-center text-slate-600 text-base sm:text-lg">No categories available.</div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <motion.div
                  key={category.categoryId}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-slate-100 p-6 sm:p-8 flex flex-col items-center transition-all duration-500 cursor-pointer relative overflow-hidden"
                  variants={itemVariants}
                  onClick={() =>
                    navigate(`/products/${createSlug(category.categoryName)}`, { state: { country } })
                  }
                >
                  <div className="absolute transition-opacity duration-500"></div>

                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-6">
                    <img
                      src={category.categoryBanner || 'https://via.placeholder.com/200'}
                      alt={category.categoryName}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-500 shadow-md"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 text-center mb-3 sm:mb-4 leading-tight">
                    {category.categoryName}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 text-center mb-3 sm:mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  <motion.div
                    className="flex items-center justify-center gap-2 bg-blue-950 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg"
                  >
                    <span className="text-xs sm:text-sm font-medium">Explore Products</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-950 to-blue-700 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
            <span className="text-white font-semibold text-xs uppercase tracking-wide">
              Begin Your Journey
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4"
            variants={itemVariants}
          >
            Elevate Your Life with NHT Global
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8"
            variants={itemVariants}
          >
            Take the first step towards a healthier, more vibrant you. Join our global community, explore our premium products, or connect with us for personalized guidance.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            variants={itemVariants}
          >
            <Button
              className="bg-white text-blue-950 font-normal py-4 sm:py-6 px-8 sm:px-10 rounded-full hover:bg-blue-100 shadow-xl border-0 text-base sm:text-lg"
              asChild
            >
              <motion.a
                href="#join-now"
                className="flex items-center gap-3"
              >
                Join Now
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </Button>

            <Button
              className="bg-transparent border-2 border-white text-white font-normal py-4 sm:py-6 px-8 sm:px-10 rounded-full hover:bg-white/20 shadow-xl text-base sm:text-lg"
              asChild
            >
              <motion.a
                href="#contact-us"
                className="flex items-center gap-3"
              >
                Contact Us
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProductsSection;