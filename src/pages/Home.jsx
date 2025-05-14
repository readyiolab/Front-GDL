import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Globe, ArrowRight, Users, Award, TrendingUp, ShoppingBag, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Section from './Section';

const Homes = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const hoverScale = {
        hover: { scale: 1.05, transition: { duration: 0.3 } },
        tap: { scale: 0.95 },
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Get Dream Life with NHT Global - Start Your Business Today</title>
                <meta
                    name="description"
                    content="Join Get Dream Life (GDL) and NHT Global to start your own business, achieve financial freedom, and live your dream life with our proven network marketing opportunity."
                />
                <meta
                    name="keywords"
                    content="network marketing, NHT Global, Get Dream Life, business opportunity, financial freedom, entrepreneurship"
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Get Dream Life with NHT Global - Start Your Business Today" />
                <meta
                    property="og:description"
                    content="Join Get Dream Life (GDL) and NHT Global to start your own business and achieve financial freedom."
                />
                <meta
                    property="og:image"
                    content="https://plus.unsplash.com/premium_photo-1685284067427-b9019667a008?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2xvYmFsJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D"
                />
                <meta property="og:url" content="https://www.getdreamlife.com" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Get Dream Life with NHT Global - Start Your Business Today" />
                <meta
                    name="twitter:description"
                    content="Join Get Dream Life (GDL) and NHT Global to start your own business and achieve financial freedom."
                />
                <meta
                    name="twitter:image"
                    content="https://plus.unsplash.com/premium_photo-1685284067427-b9019667a008?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2xvYmFsJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D"
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'Get Dream Life',
                        url: 'https://www.getdreamlife.com',
                        description:
                            'Get Dream Life partners with NHT Global to offer a network marketing opportunity that empowers individuals to achieve financial freedom and a balanced lifestyle.',
                        logo: '/logo.png',
                        sameAs: [
                            'https://www.facebook.com/getdreamlife',
                            'https://www.twitter.com/getdreamlife',
                            'https://www.linkedin.com/company/getdreamlife',
                        ],
                    })}
                </script>
            </Helmet>

            
            {/* Hero Section */}
           <Section/>
            <motion.section
                className="bg-cover bg-center text-white px-4 py-32 md:py-40 relative"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdsb2JhbCUyMG5ldHdvcmt8ZW58MHx8MHx8fDA%3D')`,
                }}
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
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Do You Know What It Means to Have a Dream Life?
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
                        Join Get Dream Life (GDL) and NHT Global to start your own business, achieve financial freedom, and live your dream life.
                    </p>
                    <motion.button
                        className="bg-orange-400 text-gray-900 hover:bg-orange-500 font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Join Get Dream Life Community"
                    >
                        Join Our Community
                    </motion.button>
                </motion.div>
            </motion.section>

            {/* Main Content */}
            <main className="py-16">
                {/* Section 1: Welcome to Get Dream Life */}
                <motion.section
                    className="mb-24 p-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Welcome to Get Dream Life</h2>
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
                            <ul className="space-y-5">
                                {[
                                    'Excellent Health',
                                    'Better Financial Potential',
                                    'Enriching Personal Relationships',
                                    'Freedom to spend your time enjoying what makes you happy',
                                    'Start your own business and be your own boss',
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Dream Life Awaits</h3>
                                <p className="text-lg text-gray-600">Partner with NHT Global for infinite potential</p>
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
                                    alt="Get Dream Life success team"
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

                {/* Section 2: About NHT Global (Dark) */}
                <motion.section
                    className="mb-24 bg-gray-900 text-white p-12 mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">About NHT Global</h2>
                        <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10 max-w-6xl mx-auto">
                        {[
                            'Proven company with a record-breaking 15+ years history',
                            'Revolutionary e-commerce business model',
                            'Operating in more than 38 countries',
                            'High impacting products for a healthy lifestyle',
                            'Balanced lifestyle through improved physical, emotional, and financial health',
                            'Training system to ensure your success',
                            'Committed to global wellness',
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

                {/* Section 3: History of NHT Global */}
                <motion.section
                    className="mb-24 bg-gray-50 p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">History of NHT Global</h2>
                        <p className="text-xl text-gray-600 mb-4">A global leader in network marketing</p>
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
                                <img
                                    src="https://images.unsplash.com/photo-1588458977838-bdf7b9d8700e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdsb2JhbCUyMG5ldHdvcmt8ZW58MHx8MHx8fDA%3D"
                                    alt="NHT Global's worldwide network"
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
                                    A Legacy of Success
                                </motion.h3>
                                <div className="space-y-5">
                                    {[
                                        'Started in 2001, headquartered in Los Angeles, California',
                                        'Global sales growing at a record pace',
                                        'Financially stable with a 15+ year legacy',
                                        'Contain Nobel Prize-winning research',
                                        'Proprietary formulas for high-impact products',
                                        'Seamless global compensation plan',
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
                                    aria-label="Learn About NHT Global"
                                >
                                    Learn About NHT Global
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Section 4: How Get Dream Life Can Help (Dark) */}
                <motion.section
                    className="mb-24 bg-gray-800 text-white p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How Get Dream Life Can Help</h2>
                        <p className="text-xl mb-4">Support for your success</p>
                        <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: 'Comprehensive Training',
                                description: 'Training to understand the business in detail, ensuring you have the knowledge to succeed.',
                            },
                            {
                                title: 'Marketing Tools',
                                description: 'Access to a marketing platform and tools to accelerate your success.',
                            },
                            {
                                title: 'Direct Support',
                                description: 'Direct contact with founding members and top leaders committed to your success.',
                            },
                            {
                                title: 'Global Opportunities',
                                description: 'Support to open new markets or countries where you can become a pioneer.',
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
                                <p className="text-gray-100 leading-relaxed text-sm flex-grow">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Section 5: NHT Global Core Strengths */}
                <motion.section
                    className="mb-24 p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NHT Global Core Strengths</h2>
                        <p className="text-xl text-gray-600 mb-4">Pillars of success</p>
                        <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                title: 'Product',
                                description: 'World-class unique, scientific, and patented product line.',
                                icon: <ShoppingBag className="h-8 w-8 text-white" />,
                            },
                            {
                                title: 'Opportunity',
                                description: 'Amazing opportunity to create wealth for you and your generations.',
                                icon: <TrendingUp className="h-8 w-8 text-white" />,
                            },
                            {
                                title: 'Leaders',
                                description: 'Industry top leaders available to help you at every step.',
                                icon: <Users className="h-8 w-8 text-white" />,
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="rounded-xl shadow-xl overflow-hidden bg-white flex flex-col h-full"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', transition: { duration: 0.2 } }}
                            >
                                <div className="bg-gradient-to-br from-orange-300 to-orange-400 px-6 pt-8 pb-6 text-white text-center">
                                    <div className="bg-white/20 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-gray-600 text-sm flex-grow">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Section 6: Join Our Team */}
                <motion.section
                    className="text-center bg-gradient-to-r from-gray-800 to-gray-900 p-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Team Today</h2>
                    <p className="text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
                        Sign up as a distributor today and receive a personalized website, management tools, and support to help build your business.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            className="bg-orange-300 text-gray-900 hover:bg-orange-400 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Become a Distributor Now"
                        >
                            Become a Distributor
                        </motion.button>
                        <motion.button
                            className="bg-transparent text-white border-2 border-orange-300 hover:bg-orange-300/10 font-semibold py-3 px-8 rounded-full transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Learn More About Get Dream Life"
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.section>
            </main>
        </div>
    );
};

export default Homes;