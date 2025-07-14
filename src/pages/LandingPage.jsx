import React, { useState } from "react";
import { 
  Shield, 
  CheckCircle, 
  Star, 
  Globe, 
  ExternalLink, 
  ChevronRight, 
  ArrowRight, 
  ShoppingBag, 
  TrendingUp, 
  Users, 
  Play,
  Target,
  Award,
  Briefcase,
  Heart,
  DollarSign,
  Clock,
  Zap
} from "lucide-react";

const LandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const dreamLifeFeatures = [
    { icon: Heart, title: "Excellent Health", color: "from-red-500 to-pink-500" },
    { icon: DollarSign, title: "Better Financial Potential", color: "from-green-500 to-emerald-500" },
    { icon: Users, title: "Enriching Personal Relationships", color: "from-purple-500 to-violet-500" },
    { icon: Clock, title: "Freedom to Enjoy Your Time", color: "from-blue-500 to-cyan-500" },
    { icon: Briefcase, title: "Be Your Own Boss", color: "from-orange-500 to-amber-500" }
  ];

  const nhtGlobalFeatures = [
    "Proven company with 15+ years history",
    "Revolutionary e-commerce model", 
    "Operating in 38+ countries",
    "High-impact health products",
    "Balanced lifestyle approach",
    "Comprehensive training system",
    "Committed to global wellness"
  ];

  const historyFeatures = [
    "Founded in 2001, Los Angeles",
    "Rapid global sales growth",
    "Financially stable 15+ year legacy",
    "Nobel Prize-winning research",
    "Proprietary high-impact formulas",
    "Global compensation plan"
  ];

  const helpFeatures = [
    {
      title: "Comprehensive Training",
      description: "In-depth training to ensure your business success.",
      icon: Target
    },
    {
      title: "Marketing Tools", 
      description: "Access to platforms and tools to boost your growth.",
      icon: Zap
    },
    {
      title: "Direct Support",
      description: "Guidance from founders and top leaders.",
      icon: Users
    },
    {
      title: "Global Opportunities",
      description: "Pioneer new markets worldwide.",
      icon: Globe
    }
  ];

  const coreStrengths = [
    {
      title: "Product",
      description: "Unique, scientific, patented product line.",
      icon: ShoppingBag,
      gradient: "from-[#3195bd] to-[#1e666e]"
    },
    {
      title: "Opportunity", 
      description: "Wealth creation for you and your family.",
      icon: TrendingUp,
      gradient: "from-[#4eb7d3] to-[#2e7a92]"
    },
    {
      title: "Leaders",
      description: "Top industry leaders supporting you.",
      icon: Award,
      gradient: "from-[#4eb7d3] to-[#2e7a92]"
    }
  ];

  return (
    <main className="pt-4 sm:pt-6 bg-white">
      {/* Section 1: Welcome to Get Dream Life */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4 text-blue-950" />
              <span className="text-blue-950 font-semibold text-xs uppercase tracking-wide">
               Start Your Journey
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-950">
              Welcome to Get Dream Life
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Unlock opportunities with NHT Global and Get Dream Life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {dreamLifeFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`group relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        activeFeature === index 
                          ? 'border-blue-950 bg-blue-950 text-white shadow-lg' 
                          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                      }`}
                      onMouseEnter={() => setActiveFeature(index)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-md`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-base font-semibold ${activeFeature === index ? 'text-white' : 'text-blue-950'}`}>
                            {feature.title}
                          </h3>
                        </div>
                        <ChevronRight className={`h-4 w-4 transition-transform ${activeFeature === index ? 'rotate-90 text-white' : 'text-gray-400'}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              
            </div>

            <div className="relative h-80 rounded-2xl bg-gradient-to-r from-blue-950 to-purple-900 shadow-xl flex items-center justify-center">
              <div className="text-center text-white">
                <Star className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-semibold">Success with Get Dream Life</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About NHT Global */}
      <section className="py-20 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8 shadow-sm">
            <Globe className="h-5 w-5 text-blue-300" />
            <span className="text-blue-200 font-medium text-sm uppercase tracking-wider">
              Company Overview
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white tracking-tight">
            About NHT Global
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of network marketing with innovation and global impact.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nhtGlobalFeatures.map((text, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center mb-4 shadow-md">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="text-blue-100 text-base font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Section 3: History of NHT Global */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-6">
              <Clock className="h-4 w-4 text-blue-950" />
              <span className="text-blue-950 font-semibold text-xs uppercase tracking-wide">
                 Our Legacy
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-950">
              History of NHT Global
            </h2>
            
            <h3 className="text-2xl font-bold text-blue-950">A Legacy of Success</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-2xl bg-blue-950 shadow-xl flex items-center justify-center">
              <div className="text-center text-white">
                <Globe className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-semibold">Global Network</p>
              </div>
            </div>

            <div className="space-y-4">
              
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-950 to-purple-900"></div>
                <div className="space-y-4">
                  {historyFeatures.map((item, index) => (
                    <div key={index} className="relative flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center shadow-md z-10">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1   p-4  ">
                        <p className="text-base text-gray-700 font-medium">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="group bg-blue-950 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                
                Learn About NHT Global
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How Get Dream Life Can Help */}
      <section className="py-16 bg-blue-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              <Users className="h-4 w-4 text-white" />
              <span className="text-white font-semibold text-xs uppercase tracking-wide">
                 Our Support
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              How Get Dream Life Can Help
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Support for your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {helpFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-md">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-orange-400 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-100 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ArrowRight className="h-5 w-5 text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: NHT Global Core Strengths */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4 text-blue-950" />
              <span className="text-blue-950 font-semibold text-xs uppercase tracking-wide">
                 Core Strengths
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-950">
              NHT Global Core Strengths
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pillars of success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {coreStrengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-r ${item.gradient} px-4 pt-8 pb-6 text-white text-center relative`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 shadow-md">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-base leading-relaxed text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Join Our Team */}
      <section className="py-16
       bg-blue-950 text-white relative">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
            <Play className="h-4 w-4 text-white" />
            <span className="text-white font-semibold text-xs uppercase tracking-wide">
            Join Us
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Join Our Team Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Become a distributor and get a personalized website, tools, and support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-blue-950 px-8 py-4 rounded-xl font-bold text-lg shadow-lg  transition-all duration-300 flex items-center gap-3 hover:scale-105">
            
              Become a Distributor
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3 hover:scale-105">
             
              Learn More
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;