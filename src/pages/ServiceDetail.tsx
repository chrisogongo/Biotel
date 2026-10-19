import { useParams, Link } from 'react-router-dom';
import { ChevronRight, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { services } from '../data/services';

export function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-6">The DNA test you're looking for is not available.</p>
        <Link to="/services" className="text-primary font-medium hover:underline">
          View all DNA testing services
        </Link>
      </div>
    );
  }

  const relatedServices = services.filter(s => s.id !== service.id && s.category === service.category).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-200 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{service.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl">{service.shortDescription}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This DNA Test</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{service.fullDescription}</p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Needs to Participate?</h2>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <ul className="space-y-3">
                    {service.participants.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {service.keyFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 bg-primary/5 rounded-lg px-4 py-3">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Contact & Consultation</h3>
                      <p className="text-gray-600 text-sm">Reach out to Biotel DNA to discuss your testing needs. We'll explain the process and answer your questions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sample Collection</h3>
                      <p className="text-gray-600 text-sm">DNA samples are collected using a simple buccal (cheek) swab. The process is painless and takes only moments.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Laboratory Analysis</h3>
                      <p className="text-gray-600 text-sm">Samples are processed using advanced DNA analysis technology to produce accurate results.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Results</h3>
                      <p className="text-gray-600 text-sm">You receive a detailed, confidential results report with professional interpretation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Started</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Contact Biotel DNA to enquire about this test, request a quotation, or book a consultation.
                </p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20to%20enquire%20about%20the%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={18} /> Enquire on WhatsApp
                  </a>
                  <a
                    href="tel:+254711371092"
                    className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary px-4 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
                  >
                    <Phone size={18} /> Call +254 711 371092
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                  >
                    Request a Quotation
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Related Tests</h4>
                  <div className="space-y-2">
                    {relatedServices.map((rs) => (
                      <Link
                        key={rs.id}
                        to={`/services/${rs.slug}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        <span>{rs.icon}</span> {rs.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related DNA Tests</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rs) => (
                <Link
                  key={rs.id}
                  to={`/services/${rs.slug}`}
                  className="bg-white rounded-xl p-6 card-hover border border-gray-100"
                >
                  <div className="text-2xl mb-3">{rs.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{rs.title}</h3>
                  <p className="text-gray-600 text-sm">{rs.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3">
                    Learn more <ChevronRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
