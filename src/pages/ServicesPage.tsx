import { Link } from 'react-router-dom';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { services } from '../data/services';

export function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">DNA Testing Services in Kenya</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Biotel DNA offers a comprehensive range of professional DNA testing services. 
            Choose the test that answers your specific family relationship question.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-6 border border-gray-200 card-hover">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex-1">
                    <Link to={`/services/${service.slug}`} className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors">
                      {service.title}
                    </Link>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">{service.shortDescription}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.keyFeatures.slice(0, 3).map((feature) => (
                        <span key={feature} className="text-xs bg-primary/5 text-primary px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:underline"
                    >
                      Learn more <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Sure Which Test You Need?</h2>
          <p className="text-gray-600 mb-6">
            Contact us for a free consultation. We'll help you understand which DNA test is appropriate for your situation.
          </p>
          <a
            href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20need%20help%20choosing%20the%20right%20DNA%20test."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={18} /> Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
