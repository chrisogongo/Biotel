import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, ChevronRight, CheckCircle, Clock, Mail } from 'lucide-react';

interface LocationData {
  id: string;
  name: string;
  slug: string;
  serviceType: 'primary' | 'coordinated';
  description: string;
  services: string[];
  howItWorks: string[];
  faqs: { question: string; answer: string }[];
  collectionInfo: string;
  contactNote: string;
}

const locations: LocationData[] = [
  {
    id: 'nairobi',
    name: 'Nairobi',
    slug: 'nairobi',
    serviceType: 'primary',
    description: 'Nairobi is our primary service centre where we provide comprehensive DNA testing services. Our Nairobi facility offers full consultations, sample collection, and results delivery for all types of DNA tests.',
    services: [
      'Paternity DNA testing (private and legal)',
      'Siblingship DNA testing',
      'Grandparent DNA testing',
      'Maternity DNA testing',
      'Avuncular DNA testing',
      'Y-DNA paternal lineage testing',
      'Legal DNA testing for court proceedings',
      'Immigration DNA testing',
      'Home DNA sample collection (within Nairobi)',
      'DNA test consultations'
    ],
    howItWorks: [
      'Contact us via WhatsApp, phone, or our online form',
      'Initial consultation to understand your needs and recommend the appropriate test',
      'Schedule an appointment at our Nairobi facility or arrange home collection',
      'Attend your appointment — sample collection takes only a few minutes',
      'Samples are processed and analysed',
      'Receive your confidential results report'
    ],
    faqs: [
      {
        question: 'Where is your Nairobi facility located?',
        answer: 'Our Nairobi service centre is located in Nairobi. Contact us for specific location details and directions. We are accessible by public transport and private vehicle.'
      },
      {
        question: 'Do you offer home sample collection in Nairobi?',
        answer: 'Yes. We offer home DNA sample collection within Nairobi. Our trained sample collectors can come to your home, office, or another convenient location within the city. Please contact us to arrange home collection and discuss availability in your specific area.'
      },
      {
        question: 'What areas of Nairobi do you serve?',
        answer: 'We serve clients across Nairobi for both facility-based and home sample collection services. Contact us to confirm availability in your specific area and arrange the most convenient option for you.'
      },
      {
        question: 'Can I walk in or do I need an appointment?',
        answer: 'We recommend scheduling an appointment to ensure we can provide you with dedicated time and proper consultation. However, contact us to discuss your needs and we will advise on the best arrangement for your situation.'
      },
      {
        question: 'What are your Nairobi business hours?',
        answer: 'Our Nairobi service centre is open Monday to Saturday, 8:00 AM to 6:00 PM. For consultations outside these hours, please contact us to discuss arrangements.'
      },
      {
        question: 'What should I bring to my appointment?',
        answer: 'For a private DNA test, no formal identification is required. For a legal DNA test, all participants must bring valid government-issued photo identification (national ID, passport, or other accepted ID). Children may require a birth certificate. We will provide specific guidance when you book your appointment.'
      },
      {
        question: 'Is parking available at your Nairobi facility?',
        answer: 'Please contact us for specific information about parking and accessibility at our Nairobi location. We will provide detailed directions and parking information when you schedule your appointment.'
      }
    ],
    collectionInfo: 'Sample collection at our Nairobi facility is conducted by trained professionals in a comfortable, private environment. The process uses buccal (cheek) swabs — a soft swab gently rubbed on the inside of the cheek. This is painless, non-invasive, and takes only a few moments per person.',
    contactNote: 'Contact Biotel DNA Nairobi to arrange your DNA test, request a quotation, or ask questions about our services.'
  },
  {
    id: 'mombasa',
    name: 'Mombasa',
    slug: 'mombasa',
    serviceType: 'coordinated',
    description: 'Biotel DNA coordinates DNA testing services for clients in Mombasa and the Coastal region of Kenya. While our primary laboratory operations are based in Nairobi, we arrange sample collection and testing coordination for clients in Mombasa.',
    services: [
      'Paternity DNA testing coordination',
      'Relationship DNA testing coordination',
      'Legal DNA testing coordination',
      'Sample collection arrangement in Mombasa'
    ],
    howItWorks: [
      'Contact Biotel DNA via WhatsApp, phone, or online form',
      'Initial consultation to understand your needs',
      'We arrange sample collection in Mombasa at a designated location or through mobile collection',
      'Samples are securely transported to our laboratory',
      'Laboratory analysis is conducted',
      'Results are delivered confidentially to you'
    ],
    faqs: [
      {
        question: 'How do I arrange DNA testing in Mombasa?',
        answer: 'Contact Biotel DNA via WhatsApp (+254 711 371092) or phone. We will discuss your needs, explain the process, and arrange sample collection in Mombasa. You do not need to travel to Nairobi for testing.'
      },
      {
        question: 'Where can I provide my sample in Mombasa?',
        answer: 'We arrange sample collection at designated locations in Mombasa or through mobile collection services. Contact us to discuss the most convenient option for your situation and confirm current availability in your specific area.'
      },
      {
        question: 'Do I need to travel to Nairobi for testing?',
        answer: 'No. We coordinate sample collection in Mombasa so you do not need to travel to Nairobi. Samples are securely transported to our laboratory for analysis, and results are delivered to you confidentially.'
      },
      {
        question: 'How long does the process take from Mombasa?',
        answer: 'The process includes additional time for sample transport from Mombasa to our laboratory. Contact us for current estimated turnaround times for tests coordinated from Mombasa. We will provide specific timelines when you book your test.'
      },
      {
        question: 'Are results the same as Nairobi testing?',
        answer: 'Yes. All samples are processed at the same laboratory using the same established methods, regardless of where sample collection takes place. The quality and accuracy of results are the same.'
      },
      {
        question: 'Can I get home collection in Mombasa?',
        answer: 'Mobile sample collection may be available in Mombasa. Contact us to discuss your specific location and arrange the most convenient option for you.'
      },
      {
        question: 'What types of DNA tests are available in Mombasa?',
        answer: 'We coordinate paternity testing, relationship DNA tests, and legal DNA testing for clients in Mombasa. Contact us to discuss your specific testing needs and confirm availability.'
      }
    ],
    collectionInfo: 'Sample collection in Mombasa is arranged through our coordination service. Samples are collected by trained personnel and securely transported to our laboratory for analysis. The same professional standards and confidentiality protocols apply as with our Nairobi services.',
    contactNote: 'Contact Biotel DNA to arrange DNA testing in Mombasa. We will coordinate sample collection and testing for clients in the Coastal region.'
  },
  {
    id: 'kisumu',
    name: 'Kisumu',
    slug: 'kisumu',
    serviceType: 'coordinated',
    description: 'Biotel DNA coordinates DNA testing services for clients in Kisumu and the Lake Region of Kenya. Our coordination service arranges sample collection and testing for clients in Kisumu and surrounding areas.',
    services: [
      'Paternity DNA testing coordination',
      'Relationship DNA testing coordination',
      'Legal DNA testing coordination',
      'Sample collection arrangement in Kisumu'
    ],
    howItWorks: [
      'Contact Biotel DNA via WhatsApp, phone, or online form',
      'Initial consultation to understand your needs',
      'We arrange sample collection in Kisumu at a designated location or through mobile collection',
      'Samples are securely transported to our laboratory',
      'Laboratory analysis is conducted',
      'Results are delivered confidentially to you'
    ],
    faqs: [
      {
        question: 'How do I arrange DNA testing in Kisumu?',
        answer: 'Contact Biotel DNA via WhatsApp (+254 711 371092) or phone. We will discuss your needs, explain the process, and arrange sample collection in Kisumu. You do not need to travel to Nairobi for testing.'
      },
      {
        question: 'Where can I provide my sample in Kisumu?',
        answer: 'We arrange sample collection at designated locations in Kisumu or through mobile collection services. Contact us to discuss the most convenient option for your situation and confirm current availability in your specific area.'
      },
      {
        question: 'Do you serve other areas in Western Kenya?',
        answer: 'We coordinate DNA testing services for clients in Kisumu and the Lake Region. If you are in a nearby area, contact us to discuss whether we can arrange testing in your location.'
      },
      {
        question: 'How are samples transported from Kisumu?',
        answer: 'Samples collected in Kisumu are securely transported to our laboratory using appropriate methods to maintain sample integrity. The same professional standards apply as with all our services.'
      },
      {
        question: 'Can I get results in Kisumu?',
        answer: 'Yes. Results are delivered confidentially to you regardless of where sample collection took place. We will discuss the most secure and convenient delivery method when you arrange your test.'
      },
      {
        question: 'What if I\'m in a town near Kisumu?',
        answer: 'We may be able to arrange sample collection in towns near Kisumu. Contact us to discuss your specific location and we will advise on availability and options.'
      },
      {
        question: 'What types of DNA tests are available in Kisumu?',
        answer: 'We coordinate paternity testing, relationship DNA tests, and legal DNA testing for clients in Kisumu. Contact us to discuss your specific testing needs and confirm availability.'
      }
    ],
    collectionInfo: 'Sample collection in Kisumu is arranged through our coordination service. Samples are collected by trained personnel and securely transported to our laboratory for analysis. The same professional standards and confidentiality protocols apply as with our Nairobi services.',
    contactNote: 'Contact Biotel DNA to arrange DNA testing in Kisumu. We will coordinate sample collection and testing for clients in the Lake Region.'
  }
];

export function LocationsPage() {
  const { slug } = useParams();
  const currentLocation = slug ? locations.find(l => l.slug === slug) : null;

  if (currentLocation) {
    return (
      <div>
        {/* Hero */}
        <section className="gradient-hero text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="text-sm text-blue-200 mb-4" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/locations" className="hover:text-white">Locations</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{currentLocation.name}</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              DNA Testing Services in {currentLocation.name}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              {currentLocation.description}
            </p>
            {currentLocation.serviceType === 'coordinated' && (
              <div className="mt-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <MapPin size={16} />
                <span>Coordinated service — contact us to arrange testing in {currentLocation.name}</span>
              </div>
            )}
          </div>
        </section>

        {/* Services Available */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Services Available in {currentLocation.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {currentLocation.services.map((service) => (
                <div key={service} className="flex items-start gap-2 bg-gray-50 rounded-lg px-4 py-3">
                  <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* How It Works */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How DNA Testing Works in {currentLocation.name}
            </h2>
            <div className="space-y-3 mb-8">
              {currentLocation.howItWorks.map((step, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-sm pt-1">{step}</p>
                </div>
              ))}
            </div>

            {/* Sample Collection Info */}
            <div className="bg-primary/5 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">About Sample Collection</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{currentLocation.collectionInfo}</p>
            </div>

            {/* FAQs */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions: DNA Testing in {currentLocation.name}
            </h2>
            <div className="space-y-3 mb-8">
              {currentLocation.faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-900 pr-4 text-sm">{faq.question}</span>
                    <ChevronRight size={18} className="text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-4 pb-4 text-gray-600 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-6 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">Contact Biotel DNA {currentLocation.name}</h3>
              <p className="text-blue-100 text-sm mb-4">{currentLocation.contactNote}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20am%20in%20${encodeURIComponent(currentLocation.name)}%20and%20would%20like%20to%20enquire%20about%20DNA%20testing.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
                <a href="tel:+254711371092" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors">
                  <Phone size={18} /> Call +254 711 371092
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Locations */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Locations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.filter(l => l.id !== currentLocation.id).map((loc) => (
                <Link
                  key={loc.id}
                  to={`/locations/${loc.slug}`}
                  className="bg-white rounded-xl p-5 card-hover border border-gray-200"
                >
                  <MapPin className="text-primary mb-2" size={24} />
                  <h3 className="font-semibold text-gray-900 mb-1">DNA Testing in {loc.name}</h3>
                  <p className="text-gray-600 text-sm">{loc.serviceType === 'primary' ? 'Primary service centre' : 'Coordinated services'}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Locations Index Page
  return (
    <div>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">DNA Testing Locations in Kenya</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Biotel DNA provides DNA testing services across Kenya. Our primary service centre is in Nairobi, with coordinated testing services available in Mombasa and Kisumu.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {locations.map((loc) => (
              <Link
                key={loc.id}
                to={`/locations/${loc.slug}`}
                className="bg-white rounded-xl p-6 card-hover border border-gray-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <MapPin className="text-primary" size={32} />
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    loc.serviceType === 'primary' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {loc.serviceType === 'primary' ? 'Primary Centre' : 'Coordinated Service'}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">DNA Test {loc.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{loc.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {loc.services.slice(0, 3).map((s) => (
                    <span key={s} className="text-xs bg-primary/5 text-primary px-2 py-1 rounded-full">{s.split(' ')[0]} {s.split(' ')[1]}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                  View details <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          {/* Service Availability Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">About Our Service Areas</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              <strong>Nairobi</strong> is our primary service centre where we provide comprehensive DNA testing services including consultations, sample collection, and results delivery.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              <strong>Mombasa and Kisumu</strong> are served through our coordination service. We arrange sample collection in these locations and coordinate testing with our laboratory. This allows clients in these regions to access our services without travelling to Nairobi.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              If you are in another area of Kenya, please contact us to discuss whether we can arrange testing services in your location.
            </p>
          </div>

          {/* Don't See Your Location */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
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
