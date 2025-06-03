import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CreditCard, ExternalLink, Globe, Mail, ShoppingBag, UserPlus, X, ZoomIn } from "lucide-react";


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

export default function RegistrationStepsWithModal() {
  const [activeStep, setActiveStep] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image, title) => {
    setSelectedImage({ image, title });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
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
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <motion.div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
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
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
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

              {/* Image - Now clickable with full display */}
              <motion.div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500 cursor-pointer"
                  onClick={() =>
                    openImageModal(
                      stepData.image,
                      `Step ${stepData.step}: ${stepData.title}`
                    )
                  }
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${stepData.color} opacity-20 z-10`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Full image display with proper aspect ratio */}
                  <img
                    src={stepData.image}
                    alt={`Step ${stepData.step}: ${stepData.title}`}
                    className="w-full h-80 lg:h-96 object-contain bg-white transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Zoom indicator on hover */}
                  <motion.div className="absolute inset-0 bg-black/20 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <ZoomIn className="h-6 w-6 text-gray-700" />
                    </div>
                  </motion.div>

                  {/* Step Badge */}
                  <motion.div
                    className="absolute top-6 left-6 z-30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${stepData.color} flex items-center justify-center shadow-lg backdrop-blur-sm`}
                    >
                      {stepData.icon}
                    </div>
                  </motion.div>

                  {/* Progress Indicator */}
                  <div className="absolute bottom-6 left-6 right-6 z-30">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-700">
                          Step {index + 1} of {registrationSteps.length}
                        </span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${stepData.color}`}
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${
                                ((index + 1) / registrationSteps.length) * 100
                              }%`,
                            }}
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

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeImageModal}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors z-10"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Modal Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">
                  {selectedImage.title}
                </h3>
                
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
