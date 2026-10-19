import { useParams, Link } from 'react-router-dom';
import { MessageCircle, Phone, ChevronRight, CheckCircle } from 'lucide-react';
import { faqs } from '../data/services';

export function InfoPage() {
  const { topic } = useParams();
  const path = window.location.pathname;

  const getContent = () => {
    if (path === '/dna-test-cost' || topic === 'cost') {
      return {
        title: 'DNA Test Cost and Price in Kenya',
        breadcrumb: 'DNA Test Cost',
        content: (
          <>
            <p className="text-gray-700 leading-relaxed mb-6">
              The cost of a DNA test in Kenya varies depending on several factors. At Biotel DNA, we believe in transparent pricing and will always provide you with a clear quotation before proceeding.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Factors That Affect DNA Test Pricing</h2>
            <div className="space-y-4 mb-8">
              {[
                { title: 'Type of DNA Test', desc: 'Different tests (paternity, siblingship, grandparent, etc.) involve different levels of analysis and may have different costs.' },
                { title: 'Number of Participants', desc: 'Tests involving more participants may cost more due to additional sample processing.' },
                { title: 'Private vs Legal Test', desc: 'Legal DNA tests with chain-of-custody procedures typically cost more than private (peace of mind) tests due to additional documentation and identification requirements.' },
                { title: 'Sample Collection Location', desc: 'Home sample collection or collection at a location outside our standard service area may involve additional costs.' },
                { title: 'Urgency', desc: 'Expedited or faster turnaround may be available at an additional cost.' }
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get a Personalised Quotation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For accurate pricing specific to your situation, please contact us directly. We will provide a clear quotation with no hidden costs.
            </p>
            <div className="bg-primary/5 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Contact Biotel DNA for current DNA test prices in Kenya:
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+254711371092" className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors">
                  <Phone size={16} /> Call +254 711 371092
                </a>
                <a href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20to%20know%20the%20cost%20of%20a%20DNA%20test." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-600 transition-colors">
                  <MessageCircle size={16} /> WhatsApp for Pricing
                </a>
              </div>
            </div>
          </>
        )
      };
    }

    if (path === '/dna-test-process' || topic === 'process') {
      return {
        title: 'DNA Test Process in Kenya',
        breadcrumb: 'DNA Test Process',
        content: (
          <>
            <p className="text-gray-700 leading-relaxed mb-6">
              The DNA testing process at Biotel DNA is designed to be simple, professional, and as comfortable as possible for all participants. Here is what to expect from start to finish.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step DNA Test Process</h2>
            <div className="space-y-6 mb-8">
              {[
                { step: 1, title: 'Initial Enquiry', desc: 'Contact Biotel DNA via phone, WhatsApp, or our online form. We will discuss your needs and recommend the appropriate DNA test for your situation.' },
                { step: 2, title: 'Consultation & Quotation', desc: 'We explain the test process, requirements, and provide a clear quotation. For legal tests, we explain the chain-of-custody procedures and identification requirements.' },
                { step: 3, title: 'Scheduling', desc: 'We arrange a convenient time and location for sample collection. This can be at our facility, your home, office, or another agreed location.' },
                { step: 4, title: 'Sample Collection', desc: 'DNA samples are collected using a buccal (cheek) swab — a soft swab gently rubbed on the inside of the cheek. The process is painless, non-invasive, and takes only a few moments per person.' },
                { step: 5, title: 'Sample Processing', desc: 'Samples are securely transported to the laboratory where DNA is extracted and analysed using established scientific methods.' },
                { step: 6, title: 'Analysis & Results', desc: 'The DNA profiles are compared and analysed. A detailed report is prepared with the findings.' },
                { step: 7, title: 'Results Delivery', desc: 'Results are delivered confidentially to authorised individuals. We provide support to help you understand the results.' }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )
      };
    }

    if (path === '/dna-test-results' || topic === 'results') {
      return {
        title: 'DNA Test Results and Turnaround Time',
        breadcrumb: 'DNA Test Results',
        content: (
          <>
            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding your DNA test results is important. At Biotel DNA, we ensure results are delivered clearly and confidentially, with support to help you understand the findings.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Results</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DNA test results typically include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'The relationship conclusion (e.g., "the alleged father IS the biological father" or "the alleged father IS NOT the biological father")',
                'A probability percentage or statistical index supporting the conclusion',
                'Details of the genetic markers analysed',
                'For legal tests: chain-of-custody documentation and formal certification'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Turnaround Time</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The time taken to receive your DNA test results depends on the type of test and current laboratory workload. Contact Biotel DNA for current estimated turnaround times for your specific test.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality of Results</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All DNA test results are handled with strict confidentiality. Results are shared only with authorised individuals and are never disclosed to third parties without proper consent.
            </p>
          </>
        )
      };
    }

    if (path === '/dna-test-requirements' || topic === 'requirements') {
      return {
        title: 'DNA Test Requirements in Kenya',
        breadcrumb: 'DNA Test Requirements',
        content: (
          <>
            <p className="text-gray-700 leading-relaxed mb-6">
              The requirements for a DNA test depend on whether you are having a private (peace of mind) test or a legal test. Here is what you need to know.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Private DNA Test Requirements</h2>
            <ul className="space-y-2 mb-6">
              {[
                'All participants must consent to the test',
                'No formal identification is required',
                'Simple buccal swab sample collection',
                'No special preparation needed — avoid eating or drinking 30 minutes before sample collection'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal DNA Test Requirements</h2>
            <ul className="space-y-2 mb-6">
              {[
                'Valid government-issued photo ID for all adult participants (national ID, passport, etc.)',
                'Birth certificate or documentation for child participants',
                'All participants must be formally identified by the sample collector',
                'Photographs may be taken as part of the chain-of-custody process',
                'Fingerprints may be required',
                'All participants must consent to the test',
                'Samples must be collected by an authorised, independent collector'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Requirements</h2>
            <ul className="space-y-2 mb-6">
              {[
                'All tested parties must voluntarily consent',
                'For minors, consent from a parent or legal guardian is required',
                'Avoid eating, drinking, or chewing gum for 30 minutes before sample collection',
                'Inform us of any recent blood transfusions or bone marrow transplants'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </>
        )
      };
    }

    if (path === '/private-vs-legal' || topic === 'private-vs-legal') {
      return {
        title: 'Private vs Legal DNA Testing in Kenya',
        breadcrumb: 'Private vs Legal Testing',
        content: (
          <>
            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding the difference between private and legal DNA testing helps you choose the right option for your needs. Both types use the same scientific analysis — the difference lies in the procedures surrounding sample collection and documentation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">🔒 Private DNA Test</h2>
                <p className="text-sm text-gray-600 mb-4">Also called a "peace of mind" or "informational" test.</p>
                <ul className="space-y-2">
                  {[
                    'For personal knowledge only',
                    'Results not admissible in court',
                    'No formal ID required',
                    'Simple sample collection',
                    'Can use home collection kits',
                    'Generally more affordable',
                    'Faster to arrange'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">⚖️ Legal DNA Test</h2>
                <p className="text-sm text-gray-600 mb-4">For court, immigration, and official purposes.</p>
                <ul className="space-y-2">
                  {[
                    'Court-admissible results',
                    'Chain-of-custody procedures',
                    'Formal ID verification required',
                    'Authorised sample collection',
                    'Photographs and fingerprints',
                    'Full documentation provided',
                    'Required for legal proceedings'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Do You Need?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Choose a <strong>private test</strong> if you want personal knowledge of a biological relationship for your own peace of mind.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Choose a <strong>legal test</strong> if you need results for court proceedings, child custody cases, immigration applications, inheritance disputes, or any official purpose.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you're unsure which type of test you need, contact Biotel DNA for guidance. We can explain the differences and help you make the right choice for your situation.
            </p>
          </>
        )
      };
    }

    // Default: FAQs
    return {
      title: 'Frequently Asked Questions About DNA Testing in Kenya',
      breadcrumb: 'FAQs',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-8">
            Find answers to common questions about DNA testing in Kenya. If you don't find the answer you're looking for, please contact us directly.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-100 transition-colors">
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <ChevronRight size={18} className="text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </>
      )
    };
  };

  const pageContent = getContent();

  return (
    <div>
      <section className="gradient-hero text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-200 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{pageContent.breadcrumb}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold">{pageContent.title}</h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {pageContent.content}

          <div className="mt-10 bg-gray-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Still Have Questions?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Contact Biotel DNA for personalised answers to your DNA testing questions.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="tel:+254711371092" className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors">
                <Phone size={16} /> Call Us
              </a>
              <a href="https://wa.me/254711371092" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-600 transition-colors">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
