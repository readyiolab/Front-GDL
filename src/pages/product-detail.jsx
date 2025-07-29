import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Eye, AlertTriangle, Shield, CheckCircle } from "lucide-react";
import { useApi } from '@/hooks/useApi'; 

// Animation variants
const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const hoverScale = {
  hover: { scale: 1.02, y: -2 },
  tap: { scale: 0.98 },
};

const ProductDetail = () => {
  const { categoryName, productSlug } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [country, setCountry] = useState(state?.country || "US");
  const [countries, setCountries] = useState([]);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { get } = useApi();

  // Fetch countries
  useEffect(() => {
    axios
      get("/countries")
      .then((res) => setCountries(res.data.data))
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  // Fetch product details
  useEffect(() => {
    if (!state?.productId) {
      setError("Invalid product ID.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    axios
      get(`/product/${state.productId}`, {
        params: { country },
      })
      .then((res) => {
        setProduct(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Failed to load product details.");
        setIsLoading(false);
        console.error("Error fetching product:", err);
      });
  }, [state?.productId, country]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-400">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-slate-700">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-400">
        <p className="text-xl font-semibold text-red-600">{error || "Product not found"}</p>
      </div>
    );
  }

  const currencySymbol = product.currencySymbol || "$";
  const discountPercent = Math.round(
    ((product.basePrice - product.yourPrice) / product.basePrice) * 100
  );

  // Helper function to parse JSON or return as array
  const parseField = (field) => {
    if (!field) return [];
    try {
      const parsed = JSON.parse(field);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [field];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-400">
      {/* Product Banners */}
      {product.productBanners && (
        <motion.section
          className="relative overflow-hidden mb-8"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          role="banner"
        >
          <div className="flex flex-col gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {product.productBanners.split(",").map((banner, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <img
                  src={banner.trim()}
                  alt={`${product.productName} banner ${index + 1}`}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <motion.h2
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-md"
                    variants={itemVariants}
                  >
                    {product.productName}
                  </motion.h2>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() =>
                navigate(`/products/${encodeURIComponent(categoryName)}`, {
                  state: { country },
                })
              }
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-full"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to {decodeURIComponent(categoryName)}
            </Button>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
                {product.productName}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                {product.categoryName} | {country}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Sticky Image and Pricing */}
          <motion.div
            className="lg:w-1/2 lg:sticky lg:top-24 self-start"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <div className="relative">
                {product.productImage ? (
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className="w-full h-64 sm:h-80 lg:h-96 object-contain rounded-2xl shadow-xl border border-slate-200 "
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center rounded-2xl shadow-xl border border-slate-200">
                    <div className="text-slate-400 text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-slate-200 rounded-full flex items-center justify-center">
                        <Eye className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-medium">No Image</p>
                    </div>
                  </div>
                )}
                {/* {discountPercent > 0 && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {discountPercent}% OFF
                  </div>
                )} */}
              </div>

              <div className=" p-6 ">
                <div className="space-y-3">
                  <p className="text-xl font-bold text-blue-950">
                    Your Price: {currencySymbol}{product.yourPrice.toFixed(2)}
                  </p>
                  {product.basePrice > product.yourPrice && (
                    <p className="text-base text-slate-500 line-through">
                      Base Price: {currencySymbol}{product.basePrice.toFixed(2)}
                    </p>
                  )}
                  <p className="text-base text-blue-950 font-medium">
                    Preferred Customer Price: <span className="text-green-600">{currencySymbol} {product.preferredCustomerPrice.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Scrollable Detailed Information */}
          <motion.div className="lg:w-1/2 space-y-6" variants={itemVariants}>
            <div className=" rounded-2xl  p-6 ">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Description</h3>
              <p className="text-base text-slate-600">{product.description}</p>
            </div>

            {product.fullDescription && (
              <div className="p-6 border-b-2 border-slate-200 ">
                <h3 className="text-xl font-bold text-blue-950 mb-3">Full Description</h3>
                <p className="text-base text-slate-600">{product.fullDescription}</p>
              </div>
            )}

            {product.keyIngredients && (
              <div className="border-b-2 border-slate-200 p-6 0">
                <h3 className="text-xl font-bold text-blue-950 mb-3">Key Ingredients</h3>
                <ul className="list-disc pl-5 space-y-2 text-base text-slate-600">
                  {parseField(product.keyIngredients).map((ingredient, index) => (
                    <li key={index}>{ingredient.title || ingredient}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.keyBenefits && (
              <div className=" p-6  border-b-2 border-slate-200">
                <h3 className="text-xl font-bold text-blue-950 mb-3">Key Benefits</h3>
                <ul className="list-disc pl-5 space-y-2 text-base text-slate-600">
                  {parseField(product.keyBenefits).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.patentsAndCertifications && (
              <div className="border-b-2 border-slate-200  p-6 ">
                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  Patents & Certifications
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-base text-slate-600">
                  {parseField(product.patentsAndCertifications).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.directionsForUse && (
              <div className="border-b-2 border-slate-200  p-6 ">
                <h3 className="text-xl font-bold text-blue-950 mb-3 flex items-center">
                  Directions for Use
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-base text-slate-600">
                  {parseField(product.directionsForUse).map((direction, index) => (
                    <li key={index}>{direction}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.cautions && (
              <div className="border-b-2 border-slate-200 p-6 ">
                <h3 className="text-xl font-bold text-blue-950 mb-3 flex items-center">
                  Cautions
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-base text-slate-600">
                  {parseField(product.cautions).map((caution, index) => (
                    <li key={index}>{caution}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.allergyInfo && (
              <div className="border-b-2 border-slate-200 p-6 ">
                <h3 className="text-xl font-bold text-blue-950 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
                  Allergy Information
                </h3>
                <p className="text-base text-slate-600">{product.allergyInfo}</p>
              </div>
            )}

            {product.freeOf && (
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-blue-950 mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Free Of
                </h3>
                <p className="text-base text-slate-600">{product.freeOf}</p>
              </div>
            )}

            {product.fdaDisclaimer && (
              <div className="border-b-2 border-slate-200 p-6 ">
                <h3 className="text-xl font-bold text-blue-950 mb-3">FDA Disclaimer</h3>
                <p className="text-base text-slate-600 italic">{product.fdaDisclaimer}</p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetail;