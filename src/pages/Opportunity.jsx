import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, ArrowRight } from 'lucide-react';

const OpportunityPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>NHT Global Opportunity - Unleash Your Potential</title>
        <meta
          name="description"
          content="Join NHT Global for unlimited income, better health, and freedom. Explore our proven network marketing business model and compensation plan."
        />
        <meta
          name="keywords"
          content="NHT Global, network marketing, income opportunity, health and wellness, business opportunity"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="NHT Global Opportunity - Unleash Your Potential" />
        <meta
          property="og:description"
          content="Discover NHT Global's network marketing opportunity for financial freedom and wellness."
        />
        <meta property="og:image" content="https://igrowbig.com/images/nht-global.jpg" />
        <meta property="og:url" content="https://igrowbig.com/opportunity" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NHT Global Opportunity - Unleash Your Potential" />
        <meta
          name="twitter:description"
          content="Join NHT Global for a proven business model and unlimited earning potential."
        />
        <meta name="twitter:image" content="https://igrowbig.com/images/nht-global.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section (Dark) */}
        <motion.section
          className="bg-cover bg-center text-white px-4 py-32 md:py-40 relative"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdsb2JhbCUyMG5ldHdvcmt8ZW58MHx8MHx8fDA%3D')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          role="banner"
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70 z-0"></div>
          <motion.div
            className="relative z-10 max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Unleash Your Potential</h1>
            <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
              NHT Global offers better health, unlimited income, and freedom to live life on your terms.
            </p>
            <motion.button
              className="bg-orange-400 text-gray-900 hover:bg-orange-500 font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Join NHT Global Community"
            >
              Join Our Community
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Main Content */}
        <main className="   py-16">
          {/* Section 1: Door of Opportunity (Light) */}
          <motion.section
            className="mb-24  p-10 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open the Door of Opportunity</h2>
              <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ul className="space-y-5">
                  {[
                    'Take the next step to changing your destiny',
                    'Choose a proven formula to build your future',
                    'Focus on building a healthy lifestyle',
                    'Develop a wellness tradition globally',
                    'Share this opportunity with others',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="h-6 w-6 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-lg text-gray-700 font-medium">{item}</p>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="mt-10 bg-orange-50 p-8 rounded-lg border border-orange-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Open the Door to NHT Global</h3>
                  <p className="text-lg text-gray-600">Top Network Marketing Company Globally</p>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 bg-orange-200/50 rounded-full blur-xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
                  />
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Team celebrating NHT Global success"
                    className="rounded-xl shadow-xl relative z-10 w-full max-w-lg"
                    loading="lazy"
                  />
                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-orange-400 text-white p-5 rounded-lg shadow-lg z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <p className="font-bold text-lg">Join the Movement</p>
                    <p>Transform your life today</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Section 2: Why Network Marketing (Dark) */}
          <motion.section
            className="mb-24 bg-gray-900 text-white  p-12  mx-auto "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Network Marketing?</h2>
              <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">
              {[
                'Direct selling industry over 50 years old',
                '$110B+ global industry and growing',
                'Business in 172+ countries worldwide',
                'Involves people of all backgrounds',
                'Empowered millions globally',
                'High income potential',
                'Be your own boss',
                'No employees, low overhead',
                'Major tax advantages',
                'Best chance for the average person to succeed',
                'Global opportunity with no limits',
                'Create an extraordinary life',
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-100 text-lg">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section 3: NHT Global Opportunity (Light) */}
          <motion.section
            className="mb-24 bg-gray-50  p-12 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">World of Opportunity</h2>
              <p className="text-xl text-gray-600 mb-4">A global company with true potential</p>
              <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-6 rounded-xl bg-orange-200/30 blur-xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                  />
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1588458977838-bdf7b9d8700e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdsb2JhbCUyMG5ldHdvcmt8ZW58MHx8MHx8fDA%3D"
                      alt="NHT Global's worldwide business network"
                      className="rounded-xl shadow-xl relative z-10 w-full max-w-lg object-cover"
                      loading="lazy"
                    />
                    <motion.div
                      className="absolute -left-4 -bottom-4 bg-orange-400 p-3 rounded-lg shadow-lg z-30"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-white" />
                        <p className="text-white font-semibold text-sm">Global Presence</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-400 hover:shadow-xl transition-shadow duration-300">
                  <motion.h3
                    className="text-2xl font-bold text-orange-400 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    NHT Global has a PROVEN Business Model
                  </motion.h3>
                  <div className="space-y-5">
                    {[
                      'Offices worldwide and distribution within more than 50 countries',
                      'More than $1.5 billion in sales and growing',
                      'Member of the Direct Selling Association',
                      'Subsidiary of 23-year-old publicly traded company, Natural Health Trends Corp. (trading symbol: NHTC)',
                      'Experienced executive team and global leaders to support you at each step towards your success',
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="h-6 w-6 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-gray-700 text-base leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    className="mt-8 bg-orange-400 text-white py-3 px-6 rounded-full shadow-md hover:bg-orange-500 font-semibold text-base transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    aria-label="Learn about NHT Global Business Model"
                  >
                    Learn About Our Business Model
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.section>
          {/* Section 4: Compensation Plan (Dark) */}
          <motion.section
            className="mb-24 bg-gray-800 text-white  p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Compensation Plan</h2>
              <p className="text-xl mb-4">Understand your earning potential</p>
              <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
            </div>
            <motion.p
              className="text-xl mb-12 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              To maximize your earnings with <span className="font-bold text-orange-400">NHT Global</span>, familiarize
              yourself with these key terms:
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: 'Bonus Volume (BV)',
                  description:
                    'Each product is assigned a point value called <span class="font-bold text-orange-400">Bonus Volume (BV)</span>. The compensation plan is based on accumulating these points, ensuring <span class="font-bold text-orange-400">competitive retail pricing</span> and <span class="font-bold text-orange-400">profitable wholesale-to-retail margins</span> for distributors, balancing significant retail profits with substantial override income.',
                },
                {
                  title: 'Personal Volume (PV)',
                  description:
                    'Your <span class="font-bold text-orange-400">Personal Volume (PV)</span> is the purchase or sales volume processed through your <span class="font-bold text-orange-400">Distributor ID#</span>, reflecting your direct contribution to product orders.',
                },
                {
                  title: 'Personal Group Volume (PGV)',
                  description:
                    'The <span class="font-bold text-orange-400">Personal Group Volume (PGV)</span> includes products purchased by you and your <span class="font-bold text-orange-400">directly sponsored members</span>, regardless of their placement in the genealogy tree. It’s the combined total of all wholesale product orders in your Personal Group.',
                },
                {
                  title: 'Active Status',
                  description:
                    'Achieve <span class="font-bold text-orange-400">Active Status</span> to earn commissions by personally sponsoring <span class="font-bold text-orange-400">two people</span> in both legs of your network. Full details are available in the Compensation Plan.',
                },
                {
                  title: 'Distributor Levels',
                  description:
                    'There are three levels: <span class="font-bold text-orange-400">Bronze</span> (<span class="font-bold text-orange-400">3% discount</span>), <span class="font-bold text-orange-400">Silver</span> (<span class="font-bold text-orange-400">11% discount</span>), and <span class="font-bold text-orange-400">Gold</span> (<span class="font-bold text-orange-400">34% discount</span>). Become a Gold distributor instantly with a <span class="font-bold text-orange-400">Gold</span> or <span class="font-bold text-orange-400">Platinum</span> package for maximum discounts and commissions.',
                },
                {
                  title: 'Product Packages',
                  description:
                    'Packages include <span class="font-bold text-orange-400">Bronze</span>, <span class="font-bold text-orange-400">Silver</span>, <span class="font-bold text-orange-400">Gold</span>, and <span class="font-bold text-orange-400">Platinum</span>. The <span class="font-bold text-orange-400">Gold</span> package offers maximum discounts and commissions, while <span class="font-bold text-orange-400">Platinum</span> is a promotional package including all products, <span class="font-bold text-orange-400">lifetime back office access</span>, and an <span class="font-bold text-orange-400">e-commerce site</span>. <span class="font-bold text-orange-400">Silver</span> and <span class="font-bold text-orange-400">Bronze</span> packages require a <span class="font-bold text-orange-400">$50 annual back office fee</span>, while <span class="font-bold text-orange-400">Gold</span> provides <span class="font-bold text-orange-400">1-year free access</span>.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700/60 backdrop-blur-lg border border-orange-500/20 rounded-xl p-6 flex flex-col h-full transition-shadow hover:shadow-lg hover:border-orange-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-orange-400" />
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-100 leading-relaxed text-sm flex-grow"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section 5: Investment Options (Light) */}
          <motion.section
            className="mb-24   p-12 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Investment Options
              </h2>
              <p className="text-xl text-gray-600 mb-4">Choose the package that fits your goals</p>
              <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
            </div>
            <motion.div
              className="mb-12  p-8text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-gray-700">
                Start with any package, but we recommend{' '}
                <span className="font-bold text-orange-400">Platinum</span> or{' '}
                <span className="font-bold text-orange-400">Gold</span> for serious entrepreneurs to maximize{' '}
                <span className="font-bold text-orange-400">discounts</span> and{' '}
                <span className="font-bold text-orange-400">commissions</span> from day one.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: 'Platinum Package',
                  price: '$2,000',
                  description:
                    'Includes <span class="font-bold text-orange-400">all NHT Global products</span> and tools to kickstart your business with maximum benefits.',
                  features: [
                    'All NHT Global products',
                    '<span class="font-bold text-orange-400">Gold distributor level (34% discount)</span>',
                    '<span class="font-bold text-orange-400">Lifetime free back office access</span>',
                    '<span class="font-bold text-orange-400">E-commerce site access</span>',
                    'Maximum commission potential',
                  ],
                  recommended: true,
                  color: 'bg-gradient-to-br from-orange-300 to-orange-400',
                  textColor: 'text-white',
                },
                {
                  title: 'Gold Package',
                  price: '$1,000',
                  description:
                    'Flexible <span class="font-bold text-orange-400">product selections</span> for serious entrepreneurs.',
                  features: [
                    'Various product selections',
                    '<span class="font-bold text-orange-400">Gold distributor level (34% discount)</span>',
                    '<span class="font-bold text-orange-400">Free back office access for 1 year</span>',
                    'Maximum commission potential',
                  ],
                  recommended: true,
                  color: 'bg-gradient-to-br from-orange-200 to-orange-300',
                  textColor: 'text-gray-900',
                },
                {
                  title: 'Silver Package',
                  price: '$500',
                  description:
                    'Moderate investment with <span class="font-bold text-orange-400">selected products</span> for those starting their journey.',
                  features: [
                    'Selected products',
                    '<span class="font-bold text-orange-400">Silver distributor level (11% discount)</span>',
                    '<span class="font-bold text-orange-400">$50 annual back office fee</span>',
                    'Medium commission potential',
                  ],
                  recommended: false,
                  color: 'bg-gradient-to-br from-gray-200 to-gray-300',
                  textColor: 'text-gray-800',
                },
                {
                  title: 'Bronze Package',
                  price: '$300',
                  description:
                    'Entry-level package with <span class="font-bold text-orange-400">90 BV worth of products ($250)</span> and <span class="font-bold text-orange-400">Business Builder Package ($50)</span>.',
                  features: [
                    '<span class="font-bold text-orange-400">90 BV worth of products ($250)</span>',
                    '<span class="font-bold text-orange-400">Business Builder Package ($50)</span>',
                    '<span class="font-bold text-orange-400">Bronze distributor level (3% discount)</span>',
                    'Basic commission structure',
                  ],
                  recommended: false,
                  color: 'bg-gradient-to-br from-amber-200 to-amber-300',
                  textColor: 'text-gray-800',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`rounded-xl shadow-xl overflow-hidden bg-white flex flex-col h-full ${item.recommended ? 'ring-2 ring-orange-400' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', transition: { duration: 0.2 } }}
                >
                  {item.recommended && (
                    <div className="absolute top-0 right-0 bg-orange-400 text-white px-4 py-1 rounded-bl-lg font-semibold text-sm z-10">
                      Recommended
                    </div>
                  )}
                  <div className={`${item.color} px-6 pt-8 pb-6 ${item.textColor} text-center`}>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-3xl font-extrabold">{item.price}</p>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p
                      className="text-gray-600 mb-6 text-sm"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3 text-sm">
                          <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action (Dark) */}
          <motion.section
            className="text-center bg-gradient-to-r from-gray-800 to-gray-900 p-10 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Life?
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of successful entrepreneurs who have changed their lives with NHT Global's opportunity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="bg-orange-300 text-gray-900 hover:bg-orange-400 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Join NHT Global Now"
              >
                Join Now
              </motion.button>
              <motion.button
                className="bg-transparent text-white border-2 border-orange-300 hover:bg-orange-300/10 font-semibold py-3 px-8 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Learn More About NHT Global"
              >
                Learn More
              </motion.button>
            </div>
          </motion.section>
        </main>
      </div>
    </>
  );
};

export default OpportunityPage;