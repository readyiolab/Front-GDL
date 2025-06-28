import React, { useState, useEffect } from "react";
import { 
  ChevronRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Award, 
  Target,
  Rocket,
  Star,
  ArrowRight,
  Play,
  Shield,
  Globe
} from "lucide-react";

// Process Roadmap Section
const ProcessRoadmapSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const roadmapSteps = [
    {
      id: 1,
      title: "Join the Network",
      description: "Sign up as a distributor and get your personalized business kit",
      icon: <Users className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
      details: ["Personal website setup", "Business tools access", "Welcome training"]
    },
    {
      id: 2,
      title: "Learn & Train",
      description: "Master the products and business model with our comprehensive training",
      icon: <Target className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      details: ["Product knowledge", "Sales techniques", "Leadership development"]
    },
    {
      id: 3,
      title: "Build Network",
      description: "Start building your team and expanding your reach globally",
      icon: <Globe className="h-6 w-6" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-600",
      details: ["Team recruitment", "Market expansion", "Relationship building"]
    },
    {
      id: 4,
      title: "Generate Income",
      description: "Start earning through sales commissions and team bonuses",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-600",
      details: ["Direct sales income", "Team commissions", "Performance bonuses"]
    },
    {
      id: 5,
      title: "Achieve Success",
      description: "Reach leadership levels and enjoy financial freedom",
      icon: <Award className="h-6 w-6" />,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-600",
      details: ["Leadership recognition", "Passive income", "Global opportunities"]
    }
  ];

  const successMetrics = [
    { label: "Success Rate", value: "87%", description: "Active distributors achieving their goals" },
    { label: "Countries", value: "38+", description: "Global presence and opportunities" },
    { label: "Years", value: "20+", description: "Proven track record since 2001" },
    { label: "Growth", value: "250%", description: "Average income increase in first year" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Rocket className="h-4 w-4 text-blue-500" />
            <span className="text-blue-600 font-medium text-sm">Your Success Journey</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Your Path to Success
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Follow our proven 5-step roadmap to build your dream business with NHT Global
          </p>
        </div>

        {/* Roadmap Visualization */}
        <div className="mb-20">
          {/* Desktop Roadmap */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 via-orange-200 to-red-200 rounded-full"></div>
              
              {/* Steps */}
              <div className="grid grid-cols-5 gap-4">
                {roadmapSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`relative flex flex-col items-center transition-all duration-500 ${
                      activeStep === index ? 'scale-110' : 'scale-100'
                    }`}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Icon Circle */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg mb-4 transition-all duration-300 ${
                      activeStep === index ? 'shadow-2xl ring-4 ring-white ring-opacity-50' : ''
                    }`}>
                      {step.icon}
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-700 shadow-md">
                      {step.id}
                    </div>
                    
                    {/* Content Card */}
                    <div className={`${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-6 max-w-xs transition-all duration-300 ${
                      activeStep === index ? 'shadow-xl -translate-y-2' : 'shadow-lg'
                    }`}>
                      <h3 className={`font-bold text-lg ${step.textColor} mb-2`}>{step.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                      
                      {/* Details */}
                      <ul className="space-y-1">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`}></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Roadmap */}
          <div className="lg:hidden space-y-6">
            {roadmapSteps.map((step, index) => (
              <div
                key={step.id}
                className={`${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-6 transition-all duration-500`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-gray-500">STEP {step.id}</span>
                      <div className="flex-1 h-px bg-gray-200"></div>
                    </div>
                    <h3 className={`font-bold text-lg ${step.textColor} mb-2`}>{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < roadmapSteps.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Proven Track Record</h3>
            <p className="text-gray-300">Real numbers from real success stories</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-gray-300 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-400">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Join thousands of successful distributors who have transformed their lives with NHT Global
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95">
                  <Play className="mr-2 h-5 w-5" />
                  START YOUR BUSINESS
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="bg-gray-100 text-gray-700 border border-gray-200 font-semibold py-4 px-8 rounded-2xl hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95">
                  DOWNLOAD GUIDE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessRoadmapSection;