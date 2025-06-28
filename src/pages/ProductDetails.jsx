import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  Star, 
  Heart, 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Eye,
  MapPin,
  Shield,
  Award,
  SlidersHorizontal,
  ArrowUpDown,
  ArrowRight,
} from 'lucide-react';

// Animation variants
const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const hoverScale = {
  hover: { scale: 1.02, y: -2 },
  tap: { scale: 0.98 },
};

const ProductCard = ({ product, onViewDetails, country }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discountPercent = Math.round(((product.basePrice - product.yourPrice) / product.basePrice) * 100);
  const currencySymbol = product.currencySymbol || '$';

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 group cursor-pointer relative"
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={() => onViewDetails(product)}
    >
      <div className="relative overflow-hidden">
        {product.productImage ? (
          <img
            src={product.productImage}
            alt={product.productName}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center">
            <div className="text-slate-400 text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-slate-200 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8" />
              </div>
              <p className="text-sm">No Image</p>
            </div>
          </div>
        )}
        
        {discountPercent > 0 && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
            {discountPercent}% OFF
          </div>
        )}
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-slate-400'}`} 
          />
        </button>

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg"
          >
            <Eye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-slate-900 line-clamp-2 mb-2">
            {product.productName}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span className="text-2xl font-bold text-slate-900">
              {currencySymbol}{product.yourPrice.toFixed(2)}
            </span>
            {product.basePrice > product.yourPrice && (
              <span className="text-lg text-slate-500 line-through ml-2">
                {currencySymbol}{product.basePrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="text-sm text-green-600 font-medium">
            Preferred Price: {currencySymbol}{product.preferredCustomerPrice.toFixed(2)}
          </div>
        </div>

        <div className="mb-4 space-y-1">
          <div className="flex items-center text-sm text-slate-600">
            <Shield className="w-4 h-4 mr-2 text-blue-600" />
            Assured Quality
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductDetails = () => {
  const { categoryName } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [country, setCountry] = useState(state?.country || 'US');
  const [countries, setCountries] = useState([]);
  const [products, setProducts] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Category-specific banner data
  const categoryBannerData = {
    'Weight & Metabolism': {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
      title: 'Optimize Your Weight & Metabolism',
      description: 'Discover scientifically-backed solutions to support healthy weight management and boost your metabolism.'
    },
    'Skin & Beauty': {
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=1080&fit=crop',
      title: 'Radiate Beauty from Within',
      description: 'Explore premium skincare and beauty products designed for a radiant, youthful glow.'
    },
    'Child Care': {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=1080&fit=crop',
      title: 'Gentle Care for Little Ones',
      description: 'Safe, nurturing products crafted to support the health and wellness of children.'
    },
    'Elderly Wellness': {
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop',
      title: 'Support Vitality in Golden Years',
      description: 'Tailored wellness solutions to promote health, mobility, and vitality for seniors.'
    },
    'Energy & Vitality': {
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&h=1080&fit=crop',
      title: 'Ignite Your Energy & Vitality',
      description: 'Boost your energy levels with products designed to enhance stamina and vitality.'
    },
    'Men\'s Health': {
      image: 'https://images.unsplash.com/photo-1594824388641-d7cb250d3d6b?w=1920&h=1080&fit=crop',
      title: 'Empower Men’s Health',
      description: 'Targeted solutions to support men’s wellness, strength, and vitality.'
    },
    'Women\'s Health': {
      image: 'https://images.unsplash.com/photo-1584466977773-ead6f6d773c8?w=1920&h=1080&fit=crop',
      title: 'Nurture Women’s Wellness',
      description: 'Premium products crafted to support women’s health and hormonal balance.'
    },
    'Immunity & Cardiac Health': {
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c768?w=1920&h=1080&fit=crop',
      title: 'Strengthen Your Heart & Immunity',
      description: 'Support your immune system and heart health with our advanced formulas.'
    },
  };

  // Fetch countries
  useEffect(() => {
    axios.get('http://localhost:3001/api/countries')
      .then(res => setCountries(res.data.data))
      .catch(err => console.error('Error fetching countries:', err));
  }, []);

  // Fetch products
  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:3001/api/products', {
      params: { country, categoryName: decodeURIComponent(categoryName) },
    })
      .then(res => {
        setProducts(res.data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setIsLoading(false);
      });
  }, [country, categoryName]);

  const handleViewDetails = (product) => {
    navigate(`/products/${encodeURIComponent(categoryName)}/${product.id}`, { state: { country } });
  };

  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.yourPrice - b.yourPrice;
      case 'price-high':
        return b.yourPrice - a.yourPrice;
      case 'name':
        return a.productName.localeCompare(b.productName);
      default:
        return 0;
    }
  });

  const banner = categoryBannerData[decodeURIComponent(categoryName)] || {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop',
    title: decodeURIComponent(categoryName),
    description: 'Explore our premium products tailored to your wellness needs.'
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-slate-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Category Banner */}
      <motion.section
        className="relative flex items-center justify-center overflow-hidden py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        role="banner"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${banner.image})` }}
        ></div>

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
              Premium {decodeURIComponent(categoryName)}
            </span>
          </motion.div>
          
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
            variants={itemVariants}
          >
            {banner.title}
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-slate-200 mb-10 max-w-4xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            {banner.description}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            variants={itemVariants}
          >
            <Button
              className="bg-white text-blue-950 font-semibold py-6 px-10 rounded-2xl  shadow-xl border-0 text-lg"
              asChild
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3"
              >
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </Button>
            
            <Button
              className="bg-white/10 backdrop-blur-lg text-white border-2 border-white/30 font-semibold py-6 px-10  rounded-2xl hover:bg-white/20 shadow-xl text-lg"
              asChild
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/products')}
                className="text-slate-600 hover:text-slate-900"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back to Categories
              </Button>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                  {decodeURIComponent(categoryName)}
                </h2>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger className="w-[150px] bg-white border-slate-200 rounded-full">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(c => (
                    <SelectItem key={c} value={c} className="text-lg">{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6" id="products">
        {/* Search and Filters */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-4 mb-6 border border-slate-100"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-white border-slate-200 rounded-full">
                  <ArrowUpDown className="w-4 h-4 mr-2 text-blue-600" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
              
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="border-slate-200 rounded-full hover:bg-blue-50 text-blue-600"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
              
              <div className="flex border border-slate-200 rounded-full">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid/List */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {sortedProducts.length === 0 ? (
            <motion.div 
              className="text-center py-16"
              variants={itemVariants}
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-600">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </motion.div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              <AnimatePresence>
                {sortedProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={handleViewDetails}
                    country={country}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;