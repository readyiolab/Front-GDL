import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useApi } from '@/hooks/useApi';
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
  Search,
  Grid3X3,
  List,
  Eye,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { createSlug, slugToName } from '@/utils/slugify';

// Animation variants
const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProductCard = ({ product, onViewDetails, country }) => {
  const currencySymbol = product.currencySymbol || '$';

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 group cursor-pointer relative"
      variants={itemVariants}
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

        <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="bg-blue-950 hover:bg-blue-900 text-white shadow-lg"
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
              {currencySymbol}
              {product.yourPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="flex-1 bg-blue-950 hover:bg-blue-900 text-white"
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
  const [categories, setCategories] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { get } = useApi();
  

  // Fetch countries
  useEffect(() => {
    get('/countries')
      .then((res) => setCountries(res.data.data || []))
      .catch((err) => console.error('Error fetching countries:', err));
  }, [get]);

  // Fetch categories
  useEffect(() => {
    get('/categories')
      .then((res) => setCategories(res.data.data || []))
      .catch((err) => console.error('Error fetching categories:', err));
  }, [get]);

  // Fetch products
  useEffect(() => {
    setIsLoading(true);
    const originalCategoryName = memoizedCategories.find(
      (cat) => createSlug(cat.categoryName) === categoryName
    )?.categoryName || slugToName(categoryName);
    get('/products', {
      params: { country, categoryName: originalCategoryName },
    })
      .then((res) => {
        setProducts(res.data.data || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setIsLoading(false);
      });
  }, [country, categoryName, memoizedCategories, get]);

  const handleViewDetails = (product) => {
    const productSlug = createSlug(product.productName);
    navigate(`/products/${categoryName}/${productSlug}`, {
      state: { country, productId: product.id },
    });
  };

  const filteredProducts = products.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    a.productName.localeCompare(b.productName)
  );

  const currentCategory = categories.find(
    (cat) => createSlug(cat.categoryName) === categoryName
  ) || {
    categoryName: slugToName(categoryName),
    description: 'Explore our premium products tailored to your wellness needs.',
    categoryBanner: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop',
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
          style={{ backgroundImage: `url(${currentCategory.categoryBanner})` }}
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
              Premium {currentCategory.categoryName}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
            variants={itemVariants}
          >
            {currentCategory.categoryName}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-200 mb-10 max-w-4xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            {currentCategory.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            variants={itemVariants}
          >
            <Button
              className="bg-white text-blue-950 font-semibold py-6 px-10 rounded-2xl shadow-xl border-0 text-lg"
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
              className="bg-white/10 backdrop-blur-lg text-white border-2 border-white/30 font-semibold py-6 px-10 rounded-2xl hover:bg-white/20 shadow-xl text-lg"
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
                  {currentCategory.categoryName}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger className="w-[150px] bg-white border-slate-200 rounded-full">
                  <MapPin className="w-4 h-4 mr-2 text-blue-950" />
                  <SelectValue />
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
              <div className="flex border border-slate-200 rounded-full">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none bg-blue-950 text-white hover:bg-blue-900"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none bg-blue-950 text-white hover:bg-blue-900"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid/List */}
        <motion.div variants={staggerChildren} initial="hidden" animate="visible">
          {sortedProducts.length === 0 ? (
            <motion.div className="text-center py-16" variants={itemVariants}>
              <div className="w-24 h-24 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                No products found
              </h3>
              <p className="text-slate-600">
                Try adjusting your search to find what you're looking for.
              </p>
            </motion.div>
          ) : (
            <div
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1'
              }`}
            >
              <AnimatePresence>
                {sortedProducts.map((product) => (
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