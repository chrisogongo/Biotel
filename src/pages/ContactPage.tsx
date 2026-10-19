import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, MessageCircle, Send, CheckCircle, Navigation } from 'lucide-react';
import { services } from '../data/services';

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', message: '', testType: 'private', location: 'nairobi'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="py-20 text-center max-w-2xl mx-auto px-4">
        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-secondary" size={32} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Enquiry</h1>
        <p className="text-lg text-gray-600 mb-6">
          We have received your message and will get back to you as soon as possible. For urgent enquiries, please call us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+254711371092" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors">
            <Phone size={18} /> Call +254 711 371092
          </a>
          <a
            href="https://wa.me/254711371092"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Biotel DNA</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Get in touch with us for DNA testing enquiries, quotations, or consultations. We're here to help.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Details</h2>
                <div className="space-y-4">
                  <a href="tel:+254711371092" className="flex items-start gap-3 text-gray-700 hover:text-primary transition-colors">
                    <Phone size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm">+254 711 371092</p>
                    </div>
                  </a>
                  <a href="mailto:info@bioteldna.co.ke" className="flex items-start gap-3 text-gray-700 hover:text-primary transition-colors">
                    <Mail size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm">info@bioteldna.co.ke</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-gray-700">
                    <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm">Nairobi, Kenya</p>
                      <p className="text-xs text-gray-500 mt-1">Primary service centre</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <Clock size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-sm">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Quick Contact</h3>
                <p className="text-gray-600 text-sm mb-4">For the fastest response, reach us on WhatsApp:</p>
                <a
                  href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20to%20enquire%20about%20DNA%20testing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>

              {/* Service Areas */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Service Areas</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Nairobi</p>
                      <p className="text-gray-600 text-xs">Primary service centre</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Mombasa</p>
                      <p className="text-gray-600 text-xs">Coordinated services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Kisumu</p>
                      <p className="text-gray-600 text-xs">Coordinated services</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Contact us to discuss availability in other areas of Kenya.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a DNA Test Quotation</h2>
                <p className="text-gray-600 mb-6">
                  Fill in the form below and we'll get back to you with pricing and information for your specific needs. Your information is kept strictly confidential.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="+254..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="your@email.com (optional)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Location</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    >
                      <option value="nairobi">Nairobi</option>
                      <option value="mombasa">Mombasa</option>
                      <option value="kisumu">Kisumu</option>
                      <option value="other">Other area in Kenya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">DNA Test Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    >
                      <option value="">Select a test type</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="other">Other / Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Test Type</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="testType"
                          value="private"
                          checked={formData.testType === 'private'}
                          onChange={(e) => setFormData({...formData, testType: e.target.value})}
                          className="text-primary"
                        />
                        <span className="text-sm text-gray-700">Private (Peace of Mind)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="testType"
                          value="legal"
                          checked={formData.testType === 'legal'}
                          onChange={(e) => setFormData({...formData, testType: e.target.value})}
                          className="text-primary"
                        />
                        <span className="text-sm text-gray-700">Legal (For Court/Official Use)</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Any additional details about your enquiry (optional). Please do not include sensitive personal allegations — we will discuss details privately."
                    ></textarea>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                    <p>🔒 Your information is kept strictly confidential. We will only use it to respond to your enquiry.</p>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> Submit Enquiry
                  </button>
                </form>
              </div>

              {/* Map Section */}
              <div className="mt-8 bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Us in Nairobi</h3>
                  <p className="text-gray-600 text-sm">Our primary service centre is located in Nairobi, Kenya.</p>
                </div>
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19038099854!2d36.6821868!3d-1.3028618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf02c4b7!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1704067200000!5m2!1sen!2ske"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Biotel DNA Nairobi Location"
                    className="w-full"
                  ></iframe>
                </div>
                <div className="p-6 bg-gray-50">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.google.com/maps/dir//Nairobi,+Kenya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                    >
                      <Navigation size={16} /> Get Directions
                    </a>
                    <a
                      href="tel:+254711371092"
                      className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-medium hover:bg-primary/5 transition-colors"
                    >
                      <Phone size={16} /> Call for Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
