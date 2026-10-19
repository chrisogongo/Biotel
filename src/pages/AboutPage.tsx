import { Link } from 'react-router-dom';
import { Shield, Eye, Heart, CheckCircle } from 'lucide-react';

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Biotel DNA</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Professional DNA testing services in Kenya, committed to accuracy, confidentiality, and compassionate care.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Biotel DNA is a professional DNA testing service provider based in Nairobi, Kenya. We specialise in paternity testing, family relationship DNA testing, and legal DNA testing for court and immigration purposes. Our mission is to provide accurate, reliable, and confidential DNA testing services to individuals and families across Kenya.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We understand that DNA testing often involves sensitive personal and family matters. That's why we approach every case with empathy, professionalism, and strict confidentiality. Whether you need a private test for personal peace of mind or a legal test for official proceedings, we are here to guide you through the process.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Shield className="text-primary mx-auto mb-3" size={36} />
                <h3 className="font-semibold text-gray-900 mb-2">Confidentiality</h3>
                <p className="text-gray-600 text-sm">Your privacy is paramount. All test information and results are handled with the strictest confidentiality protocols.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Eye className="text-primary mx-auto mb-3" size={36} />
                <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600 text-sm">We provide clear information about our processes, what to expect, and how results are delivered.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Heart className="text-primary mx-auto mb-3" size={36} />
                <h3 className="font-semibold text-gray-900 mb-2">Compassion</h3>
                <p className="text-gray-600 text-sm">We treat every client with empathy and respect, understanding the sensitive nature of DNA testing.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Testing Process</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our DNA testing process is designed to be straightforward and comfortable for all participants:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Initial consultation to understand your needs and recommend the appropriate test',
                'Professional sample collection using painless buccal (cheek) swabs',
                'Careful handling and secure transport of samples',
                'Advanced DNA analysis using established scientific methods',
                'Confidential delivery of detailed results with professional interpretation',
                'Ongoing support and guidance throughout the process'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality and Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We maintain high standards in every aspect of our service:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Samples are handled with strict chain-of-custody procedures for legal tests',
                'All personal information is stored securely and accessed only by authorised personnel',
                'Results are shared only with authorised individuals',
                'We use established DNA analysis methods for reliable results',
                'Our staff are trained in professional, empathetic client service'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-primary/5 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get in Touch</h3>
              <p className="text-gray-700 mb-4">
                If you have questions about our services or would like to discuss your DNA testing needs, please don't hesitate to contact us.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">
                  Contact Us
                </Link>
                <a
                  href="https://wa.me/254711371092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
