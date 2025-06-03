import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
const Layout = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for transparent header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
 useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}, [pathname]);


  return (
    <div>
      <Header isScrolled={isScrolled} />

      <motion.main className="flex-grow"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.3 }}>
        <div className="container mx-auto">
          <Outlet />
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
