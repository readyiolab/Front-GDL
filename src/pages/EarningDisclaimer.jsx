import React from "react";
import { Shield, Mail, AlertCircle, FileText } from "lucide-react";

const EarningDisclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gray-800 text-white px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-blue-300" />
            <h1 className="text-3xl md:text-4xl font-semibold">Earning Disclaimer</h1>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Understanding the potential and limitations of earnings with Get Dream Life and NHT Global.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Earning Disclaimer */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-gray-600" />
              Earning Disclaimer
            </h2>
            <p className="text-gray-600 mb-4">
              Get Dream Life strives to accurately represent all products and services offered on this website. As an Independent Distributor of NHT Global, we earn commissions based on the current NHT Global compensation plan. However, individual results may vary depending on your aptitude, business experience, knowledge, and level of aspiration.
            </p>
            <p className="text-gray-600 mb-4">
              There are no guarantees regarding the level of success you may achieve. Testimonials and examples provided may reflect exceptional results, which are not typical for the average purchaser or distributor and are not intended to guarantee similar outcomes. Success depends on your background, commitment, desire, and enthusiasm. Past earnings are not indicative of future results.
            </p>
            <p className="text-gray-600">
              NHT Global and Get Dream Life cannot guarantee your future results or success. Unknown risks in business and online activities may impact your outcomes. We are not responsible for your actions. Your use of our products, services, and information should be based on your own due diligence. You agree that Get Dream Life and NHT Global are not liable for the success or failure of your business related to the purchase or use of our products, services, or information.
            </p>
          </div>

          {/* Disclaimers */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-gray-600" />
              Additional Disclaimers
            </h2>
            <p className="text-gray-600 mb-4">
              <strong>Site Disclaimer:</strong> This is an Independent Distributor Website and not an NHT Global website.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Product Disclaimer:</strong> Product statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. Testimonials on this website reflect personal experiences and may vary. Consult a physician before use.
            </p>
            <p className="text-gray-600">
              <strong>Income Disclaimer:</strong> All references to income in the NHT Global Compensation Plan are indicative. NHT Global and our site do not guarantee any level of income. Earnings depend solely on individual effort, skill, and ability.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
              <Mail className="h-5 w-5 text-gray-600" />
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              Questions or concerns? Reach out to us at{" "}
              <a href="mailto:info@getdreamlife.com" className="text-blue-600 hover:underline">
                info@getdreamlife.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarningDisclaimer;