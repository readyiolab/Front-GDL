import React from "react";
import { Shield, Mail, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gray-800 text-white px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-blue-300" />
            <h1 className="text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information.
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
              Our Commitment to Your Privacy
            </h2>
            <p className="text-gray-600">
              This privacy policy explains how we collect, use, and protect your personal information. By visiting our website, you agree to the terms outlined in this policy, including our collection and use of your personal information as described.
            </p>
          </div>

          {/* Children */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Children</h2>
            <p className="text-gray-600">
              Our services and products are not intended for children. If you are under 18, you may use our website only with the permission and active involvement of a parent or legal guardian. Minors should not provide personal information to us or other website visitors.
            </p>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Part of Our Terms</h2>
            <p className="text-gray-600">
              This privacy policy is part of, and subject to, our website’s terms and conditions of use.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              When you visit our website, we automatically collect certain information, such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Your IP address</li>
              <li>Visit timestamps</li>
              <li>Referring and exit websites</li>
              <li>Your computer’s operating system and browser type</li>
            </ul>
            <p className="text-gray-600">
              We may use cookies to track your session or customize content. You can configure your browser to notify you of cookies or block them. We also collect information you voluntarily provide via posts or emails. For transactions, we collect billing details like your address and phone number. You may choose not to provide certain information, but this could limit access to some website features or services.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">
              We use your information to operate our website, including contacting you about updates, new services, or offers, resolving disputes, troubleshooting, and enforcing our terms. We do not share your data with third parties without your permission, except in cases like:
            </p>
            <ul className="list-disc list-inside text-gray-600 my-4">
              <li>Legal requirements (e.g., fraud investigations, intellectual property issues)</li>
              <li>Aggregate data shared with advertisers for marketing</li>
              <li>Third-party suppliers providing services (with restrictions on their use of your data)</li>
            </ul>
          </div>

          {/* User Names and Passwords */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Names and Passwords</h2>
            <p className="text-gray-600">
              If applicable, protect your username and password. Do not share them with others. Log out after using password-protected sections and close your browser for safety.
            </p>
          </div>

          {/* Unsolicited Communications */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Unsolicited Communications</h2>
            <p className="text-gray-600">
              You may not use information obtained from our website to disclose another user’s personal information without their consent and ours. We prohibit using our website or user data for unsolicited commercial emails or communications.
            </p>
          </div>

          {/* Voluntary Disclosure */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Voluntary Disclosure to Third Parties</h2>
            <p className="text-gray-600">
              If you share personal information with third parties who are not our suppliers, their privacy policies apply. Exercise caution when sharing information with others.
            </p>
          </div>

          {/* Autoresponders */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Autoresponders</h2>
            <p className="text-gray-600">
              We may use autoresponders for email communication. We use a verified opt-in system, and you can opt out using links in each message. Contact us if you have trouble opting out.
            </p>
          </div>

          {/* Policy Changes */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Policy Changes</h2>
            <p className="text-gray-600">
              We may update this policy and will notify you via a notice on our homepage. If you disagree with changes, contact us by email or mail. Changes will not apply to information collected before the update. Review this policy regularly.
            </p>
          </div>

          {/* Disclaimers */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimers</h2>
            <p className="text-gray-600 mb-4">
              <strong>Site Disclaimer:</strong> This is an Independent Distributor Website, not an NHT Global website.
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
              Last updated: June 10, 2016
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;