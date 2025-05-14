import { useState } from 'react';
import { Award, Heart, Globe, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cards = [
    {
      id: 'products',
      icon: <Heart className="h-6 w-6 text-orange-500" />,
      title: 'Our Products',
      description: 'NHT Global offers high-quality wellness and lifestyle products to enhance health and wellbeing.'
    },
    {
      id: 'compensation',
      icon: <Globe className="h-6 w-6 text-orange-500" />,
      title: 'Compensation Plan',
      description: 'Earn commissions through our generous compensation plan and achieve your financial goals.'
    },
    {
      id: 'join',
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: 'Join Our Team',
      description: 'Get access to this exclusive platform for only $99/Year and start your journey.'
    },
    {
      id: 'howItWorks',
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: 'How It Works',
      description: 'Join our team, share the products, and grow your business by leveraging our global network.'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-orange-100 opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-orange-100 opacity-30" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-block rounded-full bg-orange-100 p-3 mb-6"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Award className="h-8 w-8 text-orange-500" />
          </motion.div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About NHT Global</h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Founded in 2001, NHT Global has established itself as a leader in the wellness and lifestyle industry.
            Join our team of passionate individuals and discover the opportunities that await.
          </p>
          
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About The Business
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${hoveredCard === card.id ? 'shadow-xl ring-2 ring-orange-300' : ''}`}
              variants={fadeIn}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover="hover"
            >
              <div className="p-5 flex flex-col items-center text-center h-62">
                <div className={`bg-orange-100 rounded-full p-4 mb-6 transition-all duration-300 ${hoveredCard === card.id ? 'bg-orange-200 scale-110' : ''}`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {card.description}
                </p>
                <motion.div
                  className={`text-orange-500 font-medium flex items-center gap-1 ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === card.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}