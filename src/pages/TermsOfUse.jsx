import React from "react";
import { Shield, Mail, FileText, AlertCircle } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gray-800 text-white px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-blue-300" />
            <h1 className="text-3xl md:text-4xl font-semibold">Terms of Use</h1>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your agreement to use our website under these terms and conditions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-gray-600" />
              Agreement to Terms
            </h2>
            <p className="text-gray-600">
              Thank you for visiting Get Dream Life. By using our website, you agree to be legally bound by these terms and conditions. If you disagree with any of these terms, please do not use our website.
            </p>
          </div>

          {/* Minors */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Minors</h2>
            <p className="text-gray-600">
              Our services and products are not intended for children. If you are under 18, you may use our website only with the permission and active involvement of a parent or legal guardian. Minors should not provide personal information to us or other website visitors.
            </p>
          </div>

          {/* Incorporated Policies */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Incorporated Policies</h2>
            <p className="text-gray-600">
              The following policies are part of these terms and conditions and can be viewed on our website:
            </p>
            <ul className="list-disc list-inside text-gray-600 my-4">
              <li>
                <a href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-blue-600 hover:underline">
                  Anti-Spam Policy
                </a>
              </li>
              <li>Compensation Disclosure Policy (if applicable)</li>
            </ul>
          </div>

          {/* Modifications and Terminations */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modifications and Terminations</h2>
            <p className="text-gray-600">
              These terms may change, and updates are effective immediately. We will notify you via a notice on our website. If you disagree with changes, do not use our website. We may terminate these terms at any time without notice. Review these terms each time you visit our website. For questions, contact us at{" "}
              <a href="mailto:info@getdreamlife.com" className="text-blue-600 hover:underline">
                info@getdreamlife.com
              </a>.
            </p>
          </div>

          {/* Licensee Status */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Licensee Status</h2>
            <p className="text-gray-600">
              Your use of our website is as a non-exclusive, non-transferable, revocable licensee. We may terminate your license to use our website at any time without notice.
            </p>
          </div>

          {/* Content Ownership */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Content Ownership</h2>
            <p className="text-gray-600">
              All content on our website is owned by us or our content suppliers. As Independent Distributors of NHT Global, we are authorized to promote and sell NHT Global products and opportunities. We claim all property rights, including intellectual property rights, for this content. Unauthorized copying or infringement will be prosecuted. To request use of our content, email{" "}
              <a href="mailto:info@getdreamlife.com" className="text-blue-600 hover:underline">
                info@getdreamlife.com
              </a>.
            </p>
            <p className="text-gray-600 mt-4">
              If you believe your intellectual property rights have been infringed by our content, notify us at{" "}
              <a href="mailto:info@getdreamlife.com" className="text-blue-600 hover:underline">
                info@getdreamlife.com
              </a>, providing details of the alleged infringement.
            </p>
          </div>

          {/* Disclaimers and Limitations of Liability */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimers and Limitations of Liability</h2>
            <p className="text-gray-600">
              Our website is provided “as is” and “as available.” Your use is at your sole risk. We disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee uninterrupted access, error-free operation, or that defects will be corrected.
            </p>
            <p className="text-gray-600 mt-4">
              Information on our website is not professional advice and may not be accurate or complete. We are not responsible for losses from reliance on this information. If your jurisdiction does not allow warranty limitations, this may not apply. Your sole remedy is to stop using the website.
            </p>
            <p className="text-gray-600 mt-4">
              We are not liable for any direct, indirect, incidental, consequential, or other damages arising from your use of our website or its content, even if advised of such damages.
            </p>
          </div>

          {/* Obscene and Offensive Content */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Obscene and Offensive Content</h2>
            <p className="text-gray-600">
              We are not responsible for obscene or offensive content from others. If you encounter such content, contact us at{" "}
              <a href="mailto:info@getdreamlife.com" className="text-blue-600 hover:underline">
                info@getdreamlife.com
              </a>. We reserve the right to monitor, investigate, and remove such content, though we are not obligated to do so.
            </p>
          </div>

          {/* Severability */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Severability</h2>
            <p className="text-gray-600">
              If any part of these terms is found invalid or unenforceable by a court, that part will be limited or eliminated to the minimum extent necessary, and the remaining terms will remain fully enforceable.
            </p>
          </div>

          {/* Entire Agreement */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Entire Agreement</h2>
            <p className="text-gray-600">
              These terms, including incorporated policies, constitute the entire agreement regarding your use of our website.
            </p>
          </div>

          {/* Disclaimers */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-gray-600" />
              Disclaimers
            </h2>
            <p className="text-gray-600 mb-4">
              <strong>Site Disclaimer:</strong> This is an Independent Distributor Website and not an NHT Global website.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Product Disclaimer:</strong> Product statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. Testimonials on this website reflect personal experiences and may vary. Consult a physician before use.
            </p>
            <p className="text-gray-600">
              <strong>Income Disclaimer:</strong> References to income in the NHT Global Compensation Plan are indicative. Earnings depend on individual effort, skill, and ability. No income is guaranteed.
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
            <p className="text-gray-600">
              Last updated: June 30, 2016
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;