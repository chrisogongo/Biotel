import { Link } from 'react-router-dom';
import { Shield, Clock, Users, MapPin, ChevronRight, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { services, faqs } from '../data/services';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://image.qwenlm.ai/generated-images/04723c4b-7b07-4d91-b9b0-6d1c31df746b/_result.png" 
            alt="DNA testing laboratory with scientific equipment and DNA helix structure" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e4d92]/90 to-[#072a50]/80"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Trusted DNA Testing Services in Kenya
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              DNA Testing Services in Kenya
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 font-light">
              Paternity and Family Relationship DNA Testing
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl leading-relaxed">
              Biotel DNA provides professional, confidential DNA testing services across Kenya. 
              From paternity tests to legal DNA testing for court and immigration — we deliver accurate 
              results with care and discretion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20to%20enquire%20about%20DNA%20testing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
              >
                <MessageCircle size={20} /> Enquire on WhatsApp
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Explore DNA Tests <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="text-primary" size={28} />
              <span className="text-sm font-medium text-gray-700">Confidential & Secure</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="text-primary" size={28} />
              <span className="text-sm font-medium text-gray-700">Fast Results</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="text-primary" size={28} />
              <span className="text-sm font-medium text-gray-700">Professional Service</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="text-primary" size={28} />
              <span className="text-sm font-medium text-gray-700">Serving All Kenya</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-gray-50 dna-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our DNA Testing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of DNA testing services to answer your family relationship questions with accuracy and confidentiality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="bg-white rounded-xl p-6 card-hover border border-gray-100 group"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                  Learn more <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              View All DNA Tests <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* DNA Testing Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How DNA Testing Works
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our DNA testing process is simple, professional, and designed to be as convenient as possible for you. From initial consultation to results delivery, we guide you through every step.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://image.qwenlm.ai/generated-images/8c43d7ab-652c-4041-801f-35e6fa962565/_result.png" 
                alt="Professional DNA sample collection using buccal cheek swab in a clinical setting" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Enquiry & Consultation', desc: 'Contact us via WhatsApp, phone, or our enquiry form. We\'ll help you understand which test is right for your situation.' },
              { step: '2', title: 'Sample Collection', desc: 'DNA samples are collected using a simple, painless buccal (cheek) swab at our facility or your preferred location.' },
              { step: '3', title: 'Laboratory Analysis', desc: 'Samples are processed using advanced DNA analysis technology to produce accurate, reliable results.' },
              { step: '4', title: 'Results Delivery', desc: 'You receive your confidential results report, with professional support to help you understand the findings.' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/dna-test-process"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Learn more about the DNA test process <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Private vs Legal */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Private vs Legal DNA Testing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the difference between private and legal DNA tests helps you choose the right option for your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                🔒 Private DNA Test
              </h3>
              <p className="text-gray-600 mb-4">Also known as a "peace of mind" test — for personal knowledge only.</p>
              <ul className="space-y-3">
                {['For personal information only', 'Simple sample collection', 'No formal ID required', 'Results not for court use', 'Faster and more affordable'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 border-2 border-primary/20 relative">
              <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                For Official Use
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                ⚖️ Legal DNA Test
              </h3>
              <p className="text-gray-600 mb-4">Conducted with chain-of-custody procedures for court and official purposes.</p>
              <ul className="space-y-3">
                {['Court-admissible results', 'Formal identification required', 'Authorised sample collection', 'Chain-of-custody documentation', 'For legal and immigration cases'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/private-vs-legal"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Learn more about private vs legal testing <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            DNA Test Cost in Kenya
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The cost of a DNA test depends on the type of test, number of participants, and whether you need a private or legal test. Contact us for a personalised quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dna-test-cost"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              View Pricing Information
            </Link>
            <a
              href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20to%20request%20a%20DNA%20test%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              <MessageCircle size={18} /> Request a Quotation
            </a>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DNA Testing Locations in Kenya
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide DNA testing services across Kenya, with sample collection available in major cities and towns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: 'Nairobi', desc: 'Full DNA testing services with convenient sample collection across the city.', primary: true },
              { city: 'Mombasa', desc: 'DNA testing coordination and sample collection for clients in the Coastal region.', primary: false },
              { city: 'Kisumu', desc: 'DNA testing services for clients in Kisumu and the Lake Region.', primary: false }
            ].map((loc) => (
              <Link
                key={loc.city}
                to={`/locations/${loc.city.toLowerCase()}`}
                className="bg-white rounded-xl p-6 card-hover border border-gray-100 text-center"
              >
                <MapPin className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">DNA Test {loc.city}</h3>
                <p className="text-gray-600 text-sm">{loc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about DNA testing in Kenya
            </p>
          </div>
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View all FAQs <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your DNA Test?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact Biotel DNA today for professional, confidential DNA testing services in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20to%20enquire%20about%20DNA%20testing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors shadow-lg"
            >
              <MessageCircle size={22} /> Chat on WhatsApp
            </a>
            <a
              href="tel:+254711371092"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
            >
              <Phone size={22} /> Call +254 711 371092
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
      <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-100 transition-colors">
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <ChevronRight size={18} className="text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
      </summary>
      <div className="px-5 pb-5 text-gray-600 leading-relaxed">
        {answer}
      </div>
    </details>
  );
}
