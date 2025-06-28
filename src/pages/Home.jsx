import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Globe,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  ShoppingBag,
  Star,
  ChevronRight,
  Play,
  ExternalLink,
  Shield,
} from "lucide-react";

import Section from "./Section";
import LandingPage from "./LandingPage";





const Homes = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
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
        <meta
          property="og:title"
          content="Get Dream Life with NHT Global - Start Your Business Today"
        />
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
        <meta
          name="twitter:title"
          content="Get Dream Life with NHT Global - Start Your Business Today"
        />
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
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Get Dream Life",
            url: "https://www.getdreamlife.com",
            description:
              "Get Dream Life partners with NHT Global to offer a network marketing opportunity that empowers individuals to achieve financial freedom and a balanced lifestyle.",
            logo: "/logo.png",
            sameAs: [
              "https://www.facebook.com/getdreamlife",
              "https://www.twitter.com/getdreamlife",
              "https://www.linkedin.com/company/getdreamlife",
            ],
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
     <Section/>
     
     <LandingPage/>
      
    </div>
  );
};

export default Homes;