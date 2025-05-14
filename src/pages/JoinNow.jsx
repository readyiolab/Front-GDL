// File: src/pages/OpportunityOverview.jsx
// Description: This file contains the Opportunity Overview component, which includes sections for the compensation plan, key terms, and earning types.
import React from 'react';
import { ArrowRight, UserPlus, Globe, Package, CreditCard, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Memoized Step Card to prevent unnecessary re-renders
const StepCard = React.memo(({ step, title, description, image, icon }) => (
  <Card className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 opacity-90"></div>
    <CardContent className="relative z-10 p-6 text-white">
      <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl sm:text-2xl font-bold mb-3">
        Step {step}: {title}
      </CardTitle>
      <p className="text-white/90 text-sm mb-4">{description}</p>
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={`Step ${step} illustration`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </CardContent>
  </Card>
));

export default function JoinNow() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center lazy-bg"
          style={{
            backgroundImage: `url('https://via.placeholder.com/1920x800')`, // Replace with actual hero image
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/85 to-gray-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Join NHT Global as an <span className="text-orange-400">Independent Distributor</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 font-light max-w-2xl mx-auto mb-8">
            Start your journey with Get Dream Life and build your own business with NHT Global.
          </p>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            aria-label="Sign Up Now"
            asChild
          >
            <a href="#signup">Sign Up Now <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>
      </section>

      {/* Registration Steps Section */}
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Become an NHT Global Independent Distributor
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Follow these simple steps to join the Get Dream Life (GDL) team and start your NHT Global journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: 'A',
                title: 'Visit the Sign-Up Page',
                description: 'Click the link to access the NHT Global sign-up page. Your sponsor will be the Get Dream Life (GDL) Team.',
                image: 'https://via.placeholder.com/600x400?text=Step+A', // Replace with actual image
                icon: <UserPlus className="h-10 w-10 text-white" aria-hidden="true" />,
              },
              {
                step: 'B',
                title: 'Select Your Country',
                description: 'Choose your country from the list. For pre-launch countries, see special notes below. Example: USA.',
                image: 'https://via.placeholder.com/600x400?text=Step+B', // Replace with actual image
                icon: <Globe className="h-10 w-10 text-white" aria-hidden="true" />,
              },
              {
                step: 'C',
                title: 'Choose Your Package',
                description: 'Select the distributorship package that suits your goals and level of commitment.',
                image: 'https://via.placeholder.com/600x400?text=Step+C', // Replace with actual image
                icon: <Package className="h-10 w-10 text-white" aria-hidden="true" />,
              },
              {
                step: 'D',
                title: 'Enter Personal & Billing Info',
                description: 'Provide your personal details and billing information to complete the registration process.',
                image: 'https://via.placeholder.com/600x400?text=Step+D', // Replace with actual image
                icon: <CreditCard className="h-10 w-10 text-white" aria-hidden="true" />,
              },
              {
                step: 'E',
                title: 'Make Payment',
                description: 'Complete the payment to activate your distributorship. You’ll receive a confirmation email.',
                image: 'https://via.placeholder.com/600x400?text=Step+E', // Replace with actual image
                icon: <CreditCard className="h-10 w-10 text-white" aria-hidden="true" />,
              },
            ].map((step) => (
              <StepCard key={step.step} {...step} />
            ))}
          </div>

          {/* Post-Registration Info */}
          <div className="mt-10 text-center">
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              After payment, you’ll become an NHT Global distributor. Log in to your back office with your distributor ID and password to track your package delivery and business growth.
            </p>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 mx-auto shadow-md hover:shadow-lg"
              aria-label="Sign Up Now"
              asChild
            >
              <a href="#signup">Sign Up Now <ArrowRight className="h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Notes Section */}
      <section className="py-12 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
            Special Notes for Registration
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="pre-launch">
              <AccordionTrigger className="text-lg font-semibold text-gray-800">
                Countries in Pre-Launch Phase (Australia, Dubai, Taiwan, Vietnam, New Zealand)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Select “Hong Kong” as the country on the sign-up page and proceed.</li>
                  <li>In the “Province for bonus checks” field, choose “Overseas.”</li>
                  <li>Select your actual country and follow steps B to E as outlined above.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="contact-countries">
              <AccordionTrigger className="text-lg font-semibold text-gray-800">
                Thailand, Brazil, Africa, Nigeria, Mongolia, Philippines
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                For these countries, please reach out to us for registration assistance.{' '}
                <a
                  href="/contact"
                  className="text-orange-500 hover:text-orange-600 font-medium"
                  aria-label="Contact Us"
                >
                  Contact Us
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="non-listed">
              <AccordionTrigger className="text-lg font-semibold text-gray-800">
                Non-Listed Countries (Pioneer Opportunity)
              </AccordionTrigger>
               <AccordionContent className="text-gray-600 text-sm">
                If your country is not listed, you have the opportunity to become a pioneer in your region. NHT Global supports opening new markets.{' '}
                <a
                  href="#pioneer-signup"
                  className="text-orange-500 hover:text-orange-600 font-medium"
                  aria-label="Sign Up for Non-Listed Countries"
                >
                  Click here for sign-up steps for non-listed countries
                </a>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-8 text-center">
            <p className="text-gray-700 text-sm">
              Need help? Reach out via our{' '}
              <a
                href="/contact"
                className="text-orange-500 hover:text-orange-600 font-medium"
                aria-label="Contact Page"
              >
                Contact Page
              </a>{' '}
              for assistance or queries. We’re here to support your growth!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your NHT Global Journey?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the Get Dream Life team and build your business with NHT Global’s industry-leading opportunity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg"
              aria-label="Join Now"
              asChild
            >
              <a href="#signup">Join Now</a>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-medium py-3 px-8 rounded-full"
              aria-label="Contact Us"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lazy Load Background Image Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', () => {
              const lazyBgs = document.querySelectorAll('.lazy-bg');
              lazyBgs.forEach(bg => {
                const img = new Image();
                img.src = bg.style.backgroundImage.slice(5, -2);
                img.onload = () => bg.classList.add('bg-loaded');
              });
            });
          `,
        }}
      />
      <style jsx>{`
        .lazy-bg {
          background-image: none !important;
          transition: opacity 0.5s ease-in;
          opacity: 0.5;
        }
        .lazy-bg.bg-loaded {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
