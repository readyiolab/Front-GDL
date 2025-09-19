import React, { useState } from "react";
import {
  Shield,
  Globe,
  ChevronRight,
  TrendingUp,
  Users,
  Award,
  Briefcase,
  Heart,
  DollarSign,
  Clock,
} from "lucide-react";

const LandingPage = () => {
  const dreamLifeFeatures = [
    {
      icon: Heart,
      title: "Excellent Health",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: DollarSign,
      title: "Better Financial Potential",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Enriching Personal Relationships",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Clock,
      title: "Freedom to Enjoy Your Time",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Briefcase,
      title: "Be Your Own Boss",
      color: "from-orange-500 to-amber-500",
    },
  ];

  const nhtGlobalFeatures = [
    { text: "Proven company with a record breaking 15+ years history" },
    {
      text: "Revolutionary e-commerce business model that is the envy of the industry",
    },
    { text: "Currently operating in more than 38 countries" },
    { text: "Shipping product into more than 50 countries" },
    { text: "High impacting products promoting a healthy lifestyle" },
    { text: "A balanced healthy lifestyle created through improved:" },
    { text: "Physical health", isSubBullet: true },
    { text: "Emotional health", isSubBullet: true },
    { text: "Financial health", isSubBullet: true },
    { text: "Training system in place to ensure your success" },
  ];

  const historyFeatures = [
    { text: "Started in 2001, global headquarters in Los Angeles, California" },
    {
      text: "To date, global sales are regularly increasing and growing at a record pace",
    },
    { text: "Financially stable and carrying a legacy of 15+ years" },
    { text: "Facts about the high impacting and high quality products:" },
    { text: "Contain Nobel Prize-winning research", isSubBullet: true },
    {
      text: "Proprietary formulas developed to satisfy your wants",
      isSubBullet: true,
    },
    {
      text: "Are consumable, highly marketable, and priced right",
      isSubBullet: true,
    },
    {
      text: "Developed loyal customers who know & love NHT Global",
      isSubBullet: true,
    },
    { text: "Seamless global compensation plan that has:" },
    { text: "Developed many successful individuals", isSubBullet: true },
    {
      text: "Allowed to become entrepreneurs with their efforts and company's support",
      isSubBullet: true,
    },
  ];

  const helpFeatures = [
    { text: "Team of professionals dedicated to your success" },
    { text: "Comprehensive training to understand the business in detail" },
    { text: "Marketing platform and tools to accelerate your success" },
    {
      text: "Direct contact with founding members and top leaders committed to your success",
    },
    {
      text: "Full support to open new markets or countries where you can become a pioneer",
    },
  ];

  return (
    <main className="pt-2 sm:pt-4 bg-white">
      {/* Bottom Section - Single Line */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10 bg-white/20 py-6 sm:py-8 px-4 sm:px-6">
        <img src="./gdl.png" alt="GDL Logo" className="h-12 sm:h-16 w-auto" />
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-blue-950" />
        <p className="text-base sm:text-lg lg:text-xl text-black font-medium text-center sm:text-left max-w-md">
          Proud to be an Independent Distributor of <br /> a world-class company
          with global presence
        </p>
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-blue-950" />
        <img
          src="./nht-logo.png"
          alt="NHT Global Logo"
          className="h-12 sm:h-16 w-auto"
        />
      </div>

      {/* Section 1: Welcome to Get Dream Life */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-blue-950" />
              <span className="text-blue-950 font-semibold text-xs uppercase tracking-wide">
                Start Your Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 text-blue-950">
              Welcome to Get Dream Life
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Unlock opportunities with NHT Global and Get Dream Life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {dreamLifeFeatures.slice(0, 5).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-3 sm:p-4 rounded-xl shadow-md bg-white hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <div
                      className={`w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-md`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-blue-950 text-center">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: About NHT Global */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-beige-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-blue-950" />
              <span className="text-blue-950 font-semibold text-xs uppercase tracking-wide">
                Company Overview
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 text-blue-950 flex items-center justify-center gap-2 sm:gap-3">
              About{" "}
              <span>
                <img
                  src="./nht-logo.png"
                  alt="NHT Global Logo"
                  className="h-12 sm:h-16 w-auto"
                />
              </span>
            </h2>
            <p className="text-base sm:text-lg text-black max-w-2xl mx-auto leading-relaxed">
              Pioneering the future of network marketing with innovation and
              global impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4">
              {nhtGlobalFeatures.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 sm:gap-3 ${
                    item.isSubBullet ? "ml-4 sm:ml-6" : ""
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-950 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base font-medium text-black leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJvdXR8ZW58MHx8MHx8fDA%3D"
                alt="NHT Global Wellness"
                className="w-full max-w-sm sm:max-w-md h-auto rounded-xl shadow-md"
              />
              <div className="mt-4 sm:mt-6 text-gray-700 text-sm sm:text-base leading-relaxed text-center border border-gray-100 p-3 sm:p-4 rounded-lg bg-white shadow-md italic">
                <p>
                  NHT Global mission is to improve the way you feel- about
                  yourself and about work. Providing effective, quality-of-life
                  products for our customers and possibly the most lucrative
                  compensation plan ever for the members and committed to the
                  wellness of people across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: History of NHT Global */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-950" />
              <span className="text-blue-950 font-semibold text-xs uppercase tracking-wide">
                Our Legacy
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 text-blue-950 flex items-center justify-center gap-2 sm:gap-5">
              History of{" "}
              <span>
                <img
                  src="./nht-logo.png"
                  alt="NHT Global Logo"
                  className="h-12 sm:h-16 w-auto"
                />
              </span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-950">
              A Legacy of Success
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="relative h-64 sm:h-80 shadow-xl flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1675044794037-9262cedb6d5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fEdsb2JhbCUyME5ldHdvcmt8ZW58MHx8MHx8fDA%3D"
                alt="Global Network"
                className="h-auto max-w-full object-contain rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              {historyFeatures.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 sm:gap-3 ${
                    item.isSubBullet ? "ml-4 sm:ml-6" : ""
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-950 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base font-medium text-black leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How Get Dream Life Can Help */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-200 border border-gray-300 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-gray-900" />
              <span className="text-gray-900 font-semibold text-xs uppercase tracking-wide">
                Our Support
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 text-gray-900">
              How Get Dream Life Can Help
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Support for your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4">
              {helpFeatures.map((item, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-1.5 sm:mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base font-medium text-black leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1698557133685-bd846d3ac15c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R2V0JTIwRHJlYW0lMjBMaWZlfGVufDB8fDB8fHww"
                alt="Get Dream Life Support"
                className="w-full max-w-sm sm:max-w-md h-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: NHT Global Core Strengths */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-gray-900" />
              <span className="text-gray-900 font-semibold text-xs uppercase tracking-wide">
                Core Strengths
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 text-gray-900">
              NHT Global Core Strengths
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
              Pillars of success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {[
              {
                icon: TrendingUp,
                title: "Innovative Products",
                description:
                  "High-quality, science-backed products designed to meet global demand.",
              },
              {
                icon: Users,
                title: "Global Community",
                description:
                  "Join a supportive network of distributors worldwide.",
              },
              {
                icon: DollarSign,
                title: "Lucrative Compensation",
                description:
                  "Industry-leading plan for maximum earning potential.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-xl p-4 sm:p-6 flex flex-col justify-between h-full"
              >
                <div className="p-2 sm:p-3 bg-gray-100 rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <item.icon
                    className="h-8 w-8 sm:h-10 sm:w-10 text-gray-900"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;