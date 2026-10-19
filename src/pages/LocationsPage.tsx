import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { locations } from '../data/services';

export function LocationsPage() {
  const { slug } = useParams();
  const currentLocation = slug ? locations.find(l => l.slug === slug) : null;

  if (currentLocation) {
    return (
      <div>
        <section className="gradient-hero text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="text-sm text-blue-200 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/locations" className="hover:text-white">Locations</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{currentLocation.name}</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">DNA Test {currentLocation.name}</h1>
            <p className="text-xl text-blue-100 max-w-2xl">{currentLocation.description}</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Services in {currentLocation.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {currentLocation.services.map((service) => (
                <div key={service} className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3">
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {currentLocation.isPrimary && (
              <div className="bg-primary/5 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">Primary Service Centre</h3>
                <p className="text-gray-700 text-sm">
                  {currentLocation.name} is our primary service centre with full DNA testing capabilities, 
                  including sample collection, consultation, and results delivery.
                </p>
              </div>
            )}

            {!currentLocation.isPrimary && (
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">Service Coordination</h3>
                <p className="text-gray-700 text-sm">
                  DNA testing services in {currentLocation.name} are coordinated through our main operations. 
                  Contact us to arrange sample collection and testing in your area.
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20am%20in%20${encodeURIComponent(currentLocation.name)}%20and%20would%20like%20to%20enquire%20about%20DNA%20testing.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={18} /> Enquire on WhatsApp
              </a>
              <a href="tel:+254711371092" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                <Phone size={18} /> Call +254 711 371092
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">DNA Testing Locations in Kenya</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Biotel DNA provides DNA testing services across Kenya. Find testing options in your area.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.id}
                to={`/locations/${loc.slug}`}
                className="bg-white rounded-xl p-6 card-hover border border-gray-200"
              >
                <MapPin className="text-primary mb-4" size={32} />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">DNA Test {loc.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{loc.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {loc.services.slice(0, 3).map((s) => (
                    <span key={s} className="text-xs bg-primary/5 text-primary px-2 py-1 rounded-full">{s}</span>
                  ))}
                  {loc.services.length > 3 && (
                    <span className="text-xs text-gray-500 px-2 py-1">+{loc.services.length - 3} more</span>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                  View details <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Don't See Your Location?</h2>
            <p className="text-gray-600 mb-4">
              We may be able to arrange DNA testing services in other areas of Kenya. Contact us to discuss your location.
            </p>
            <a
              href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20to%20check%20if%20DNA%20testing%20is%20available%20in%20my%20area."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={16} /> Ask About Your Area
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
