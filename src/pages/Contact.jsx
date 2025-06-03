import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000); // Reset confirmation after 5s
  };

  return (
    <section className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-teal-50 opacity-40 blur-3xl" />
        <div className="absolute bottom-16 -left-16 w-64 h-64 rounded-full bg-purple-50 opacity-40 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Hero Header */}
        <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-8 mb-10 animate-slide-in">
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-white/20 p-2 rounded-full mb-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Let's Connect</h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Have questions, ideas, or need support? Reach out, and our team will respond promptly to help you live healthier.
            </p>
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-lg p-8 animate-slide-in">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Send Us a Message</h3>
            <p className="text-base text-gray-600 mb-6">Fill out the form below, and we'll get back to you within 24 hours.</p>
            {submitted ? (
              <div className="flex items-center gap-2 text-black bg-teal-50 p-4 rounded-lg mb-6">
                <CheckCircle className="h-5 w-5" />
                <p className="text-base">Thank you for your message! We'll respond soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`h-10 text-base ${errors.name ? 'border-red-500' : ''}`}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`h-10 text-base ${errors.email ? 'border-red-500' : ''}`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`h-10 text-base ${errors.subject ? 'border-red-500' : ''}`}
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`h-32 text-base ${errors.message ? 'border-red-500' : ''}`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full  h-10 text-base transition-transform duration-300 hover:scale-105"
                >
                  Send Message <Send className="h-4 w-4 ml-2" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white border border-gray-100 rounded-lg p-8 animate-slide-in">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Contact Information</h3>
            <p className="text-base text-gray-600 mb-6">Reach us through any of these channels.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-black mt-1" />
                <div>
                  <h4 className="text-base font-medium text-gray-900">Email</h4>
                  <a href="mailto:support@healthwellness.com" className="text-sm text-black hover:underline">
                    support@healthwellness.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-black mt-1" />
                <div>
                  <h4 className="text-base font-medium text-gray-900">Phone</h4>
                  <a href="tel:+18001234567" className="text-sm text-black hover:underline">
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-black mt-1" />
                <div>
                  <h4 className="text-base font-medium text-gray-900">Address</h4>
                  <p className="text-sm text-gray-600">123 Wellness Way, Health City, HC 12345</p>
                </div>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-base font-medium text-gray-900 mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="text-black hover:text-teal-700">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482A13.944 13.944 0 011.671 3.149 4.916 4.916 0 003.192 9.723a4.877 4.877 0 01-2.229-.616v.062a4.916 4.916 0 003.946 4.827 4.898 4.898 0 01-2.224.084 4.92 4.92 0 004.604 3.417A9.867 9.867 0 010 19.54a13.906 13.906 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-teal-700">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332.013 7.052.072 5.766.132 4.326.418 3.055 1.689 1.784 2.96 1.498 4.4 1.438 5.686 1.379 6.966 1.366 7.369 1.366 12s.013 5.034.072 6.314c.06 1.286.346 2.726 1.617 3.997 1.271 1.271 2.711 1.557 3.997 1.617 1.28.059 1.683.072 6.314.072s5.034-.013 6.314-.072c1.286-.06 2.726-.346 3.997-1.617 1.271-1.271 1.557-2.711 1.617-3.997.059-1.28.072-1.683.072-6.314s-.013-5.034-.072-6.314c-.06-1.286-.346-2.726-1.617-3.997-1.271-1.271-2.711-1.557-3.997-1.617C15.668.013 15.265 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845a1.44 1.44 0 100-2.881 1.44 1.44 0 000 2.881z" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-teal-700">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.731 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}