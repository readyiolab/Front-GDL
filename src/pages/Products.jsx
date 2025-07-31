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
import { Star, Play, ArrowRight, Check, Shield, Award, Heart, Mail, ExternalLink } from 'lucide-react';
import { createSlug } from '@/utils/slugify';
import { useApi } from '@/hooks/useApi';

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
  const [isLoadingCountries, setIsLoadingCountries] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { get } = useApi();

  // Fetch countries
  useEffect(() => {
    setIsLoadingCountries(true);
    get('/countries')
      .then((res) => {
        setCountries(res.data.data || []);
        setIsLoadingCountries(false);
      })
      .catch((err) => {
        console.error('Error fetching countries:', err);
        setError('Failed to load countries. Please try again later.');
        setIsLoadingCountries(false);
      });
  }, [get]);

  // Fetch categories
  useEffect(() => {
    setIsLoadingCategories(true);
    get('/categories')
      .then((res) => {
        setCategories(res.data.data || []);
        setIsLoadingCategories(false);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories. Please try again later.');
        setIsLoadingCategories(false);
      });
  }, [get]);

  // Auto-detect country (commented out as in original code)
  // useEffect(() => {
  //   get('/products')
  //     .then((res) => {
  //       setCountry(res.data.country || 'US');
  //     })
  //     .catch((err) => {
  //       console.error('Error detecting country:', err);
  //     });
  // }, [get]);

  const keyPoints = [
    {
      icon: <Award className="h-5 w-5" />,
      title: 'Premium Categories',
      description:
        'Beauty, Lifestyle, Wellness, Herbal, and Cozy-Home products with air and water purifiers in select markets.',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Certified Manufacturing',
      description:
        'We use leading domestic and foreign GMP certified contract manufacturers for quality assurance.',
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: 'Advanced Technology',
      description:
        'Utilize high technology and source the finest ingredients for optimal results.',
    },
    {
      icon: <Check className="h-5 w-5" />,
      title: 'Research-Driven',
      description:
        'Fueled by market trends and the latest scientific research for innovative solutions.',
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: 'Quality Guaranteed',
      description:
        'Quality and satisfaction guaranteed for all products with comprehensive support.',
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: 'Holistic Wellness',
      description:
        'Designed for health, beauty, vitality, longevity, and protection in one comprehensive range.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Banner */}
      <motion.section
        className="relative flex items-center justify-center overflow-hidden py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        role="banner"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center px-6"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-full mb-8"
            variants={itemVariants}
          >
            <Star className="h-4 w-4 text-blue-300" />
            <span className="text-blue-200 font-semibold text-sm">
              Premium Quality Products
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
            variants={itemVariants}
          >
            Transform Your <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Wellness Journey
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-4xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Discover premium health & wellness solutions designed to elevate your
            lifestyle with cutting-edge science and natural ingredients.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            variants={itemVariants}
          >
            <Button
              className="bg-white text-blue-950 font-semibold py-6 px-10 rounded-2xl hover:bg-blue-100 shadow-xl border-0 text-lg"
              asChild
            >
              <motion.a
                href="#categories"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3"
              >
                Explore Products
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </Button>

            <Button
              className="bg-white/10 backdrop-blur-lg text-white border-2 border-white/30 font-semibold py-6 px-10 rounded-2xl hover:bg-white/20 shadow-xl text-lg"
              asChild
            >
              <motion.a
                href="#learn-more"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3"
              >
                Learn More
                <Play className="h-5 w-5" />
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Country Selector */}
      <motion.section
        className="py-12 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-2">
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className="w-[250px] bg-transparent border-0 text-lg font-medium">
                <SelectValue placeholder="Select Your Country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((c) => (
                  <SelectItem key={c} value={c} className="text-lg">
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
        className="py-24 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 px-6 py-3 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-semibold text-base">
                Trusted Excellence
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Why Choose NHT Global?
            </h2>

            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Experience the difference with our scientifically-backed, premium
              quality products designed for modern wellness needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-lg border border-slate-100">
                <p className="text-lg text-slate-700 leading-relaxed mb-8 font-medium">
                  Modern urban lifestyles bring unique challenges: stress,
                  environmental toxins, busy schedules, and poor nutrition
                  choices. Our comprehensive product range addresses these
                  challenges with innovative, multi-functional solutions that
                  seamlessly integrate into your daily routine.
                </p>

                <div className="grid grid-cols-1 gap-6">
                  {keyPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                        {React.cloneElement(point.icon, { className: 'h-5 w-5 text-white' })}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-2 text-lg">{point.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{point.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-200">
                  <p className="text-sm text-blue-700 italic font-medium">
                    Note: Product availability may vary by country. Contact us for
                    personalized recommendations and purchasing information.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=500&fit=crop"
                  alt="NHT Global Premium Products"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <motion.div
                  className="absolute top-8 left-8 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl backdrop-blur-sm">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Premium Quality Assured</h4>
                    <p className="text-slate-600">GMP certified manufacturing with the finest ingredients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Categories Grid */}
      <motion.section
        id="categories"
        className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-3 bg-white border border-slate-200 px-6 py-3 rounded-full mb-8 shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Star className="h-5 w-5 text-purple-600" />
              <span className="text-slate-700 font-semibold">
                Complete Wellness Solutions
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 pb-5 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Explore Our Categories
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover targeted solutions for every aspect of your health and
              wellness journey.
            </p>
          </div>

          {isLoading ? (
            <div className="text-center text-slate-600">Loading categories...</div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : categories.length === 0 ? (
            <div className="text-center text-slate-600">No categories available.</div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <motion.div
                  key={category.categoryId}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-slate-100 p-8 flex flex-col items-center transition-all duration-500 cursor-pointer relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.03 }}
                  onClick={() =>
                    navigate(`/products/${createSlug(category.categoryName)}`, { state: { country } })
                  }
                >
                  <div className="absolute transition-opacity duration-500"></div>

                  <div className="relative w-32 h-32 mb-6">
                    <img
                      src={category.categoryBanner || 'https://via.placeholder.com/200'}
                      alt={category.categoryName}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110 shadow-md"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-xl shadow-lg border border-slate-100 group-hover:shadow-xl transition-shadow duration-300">
                      <Star className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 text-center mb-4 leading-tight">
                    {category.categoryName}
                  </h3>

                  <p className="text-sm text-slate-600 text-center mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  <motion.div
                    className="flex items-center justify-center gap-2 bg-blue-950 text-white px-6 py-3 rounded-full shadow-lg"
                  >
                    <span className="text-sm font-semibold">Explore Products</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ready to Transform Your Health?
          </h2>

          <p className="text-xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands who have already discovered the power of premium
            wellness products. Start your journey to better health, beauty, and
            vitality today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              className="bg-white text-slate-900 font-bold px-10 py-5 rounded-2xl shadow-2xl hover:bg-slate-100 text-lg"
              asChild
            >
              <motion.a
                href="#categories"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3"
              >
                <ExternalLink className="h-6 w-6" />
                Explore Our Complete Catalog
                <ArrowRight className="h-6 w-6" />
              </motion.a>
            </Button>

            <Button
              className="bg-transparent text-white border-2 border-white/30 font-bold px-10 py-5 rounded-2xl hover:bg-white/10 backdrop-blur-lg text-lg"
              asChild
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3"
              >
                <Mail className="h-6 w-6" />
                Get Personalized Consultation
                <ArrowRight className="h-6 w-6" />
              </motion.a>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProductsSection;