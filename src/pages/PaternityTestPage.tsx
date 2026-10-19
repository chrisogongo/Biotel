import { Link } from 'react-router-dom';
import { MessageCircle, Phone, CheckCircle, ChevronRight, Lock, User, Shield, MessageSquare } from 'lucide-react';
import { services } from '../data/services';

export function PaternityTestPage() {
  const relatedServices = services.filter(s => s.id !== 'paternity' && (s.category === 'relationship' || s.category === 'legal')).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://image.qwenlm.ai/generated-images/04723c4b-7b07-4d91-b9b0-6d1c31df746b/_result.png"
            alt="DNA paternity test laboratory with scientific equipment and DNA analysis technology in Kenya"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e4d92]/90 to-[#072a50]/85"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <nav className="text-sm text-blue-200 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-white">DNA Testing Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">DNA Paternity Test</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">DNA Paternity Test in Kenya</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-6">
            Professional, confidential paternity DNA testing to help you establish the biological father-child relationship. Available as a private or legal test across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20to%20enquire%20about%20a%20DNA%20paternity%20test."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
            >
              <MessageCircle size={20} /> Enquire on WhatsApp
            </a>
            <a href="tel:+254711371092" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
              <Phone size={20} /> Call +254 711 371092
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A <strong>DNA paternity test in Kenya</strong> is the most reliable way to determine whether a man is the biological father of a child. At Biotel DNA, we provide professional paternity testing services that are accurate, confidential, and conducted with care for everyone involved.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you need answers for personal peace of mind or require a test that can be used for legal purposes such as court proceedings, child support matters, or immigration applications, Biotel DNA can guide you through the process from start to finish.
          </p>
          <div className="bg-secondary/5 border-l-4 border-secondary rounded-r-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">Why choose Biotel DNA for your paternity test?</p>
            <p className="text-gray-700 text-sm">
              We understand that paternity testing often involves sensitive family matters. Our team approaches every case with empathy, professionalism, and strict confidentiality. We are based in Nairobi and serve clients across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How a DNA Paternity Test Works</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A DNA paternity test works by comparing specific genetic markers between a child and the alleged father. Every child inherits half of their DNA from their biological mother and half from their biological father. By analysing these genetic markers, the test can determine whether the man tested is the biological father.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The paternity testing process at Biotel DNA</h3>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: 'Initial consultation', desc: 'Contact us to discuss your situation. We will help you understand which type of paternity test is appropriate for your needs (private or legal).' },
              { step: 2, title: 'Scheduling and preparation', desc: 'We arrange a convenient time and location for sample collection. You will receive guidance on how to prepare.' },
              { step: 3, title: 'Sample collection', desc: 'DNA samples are collected using a buccal (cheek) swab. This is a soft swab gently rubbed on the inside of the cheek. The process is painless, non-invasive, and takes only a few moments per person.' },
              { step: 4, title: 'Laboratory analysis', desc: 'Samples are processed using established DNA analysis methods to compare the genetic profiles of the child and alleged father.' },
              { step: 5, title: 'Results delivery', desc: 'You receive a detailed, confidential results report. We provide support to help you understand the findings.' }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden shadow-md mb-6">
            <img
              src="https://image.qwenlm.ai/generated-images/8c43d7ab-652c-4041-801f-35e6fa962565/_result.png"
              alt="Buccal cheek swab DNA sample collection for paternity testing in Kenya"
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who May Need It */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Who May Need a DNA Paternity Test in Kenya?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">There are many reasons why individuals and families in Kenya seek a paternity DNA test. Common situations include:</p>
          <ul className="space-y-3 mb-6">
            {[
              { title: 'Personal peace of mind', desc: 'A father or mother who wants certainty about the biological relationship between a man and a child.' },
              { title: 'Child support matters', desc: 'Where financial responsibility for a child needs to be formally established.' },
              { title: 'Child custody cases', desc: 'Where biological parentage is relevant to custody or access arrangements.' },
              { title: 'Immigration applications', desc: 'Where proof of a biological father-child relationship is required to support a visa or citizenship application.' },
              { title: 'Inheritance and succession matters', desc: 'Where biological parentage needs to be established for estate or inheritance purposes.' },
              { title: 'Birth certificate amendments', desc: 'Where the father\'s details need to be added or corrected on official documents.' },
              { title: 'Family reunification', desc: 'Where a father and child have been separated and need to confirm their biological relationship.' }
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-2 text-gray-700">
                <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <span><strong>{item.title}:</strong> {item.desc}</span>
              </li>
            ))}
          </ul>
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5">
            <p className="text-gray-700 text-sm">
              <strong>Please note:</strong> Whatever your reason for seeking a paternity test, Biotel DNA treats every case with respect and discretion. We do not make assumptions about your circumstances and we are here to provide information and support.
            </p>
          </div>
        </div>
      </section>

      {/* Participants */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Who Needs to Participate in a Paternity DNA Test?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A standard paternity DNA test requires samples from the child and the alleged father. The mother's participation is optional but can strengthen the conclusiveness of the results.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-lg overflow-hidden border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Participant</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Required?</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-900">Child</td>
                  <td className="px-4 py-3 text-gray-700">Yes</td>
                  <td className="px-4 py-3 text-gray-600 text-sm">Testing can be done for children of any age, including newborns.</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Alleged Father</td>
                  <td className="px-4 py-3 text-gray-700">Yes</td>
                  <td className="px-4 py-3 text-gray-600 text-sm">He must consent to the test.</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-900">Mother</td>
                  <td className="px-4 py-3 text-gray-700">Optional (recommended)</td>
                  <td className="px-4 py-3 text-gray-600 text-sm">Including the mother's sample can strengthen the results, but the test can be conducted without her participation.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">What if the alleged father is unavailable?</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            If the alleged father is unavailable, unwilling, or deceased, alternative <Link to="/services" className="text-primary font-medium hover:underline">DNA relationship tests</Link> may be able to help:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-gray-700">
              <ChevronRight size={16} className="text-primary flex-shrink-0" />
              <Link to="/services/grandparent-dna-test" className="text-primary hover:underline">Grandparent DNA test</Link> — if the father's parents are available
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <ChevronRight size={16} className="text-primary flex-shrink-0" />
              <Link to="/services/siblingship-dna-test" className="text-primary hover:underline">Siblingship DNA test</Link> — if the father has other known children
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <ChevronRight size={16} className="text-primary flex-shrink-0" />
              <Link to="/services/avuncular-dna-test" className="text-primary hover:underline">Avuncular DNA test</Link> — if the father's brother or sister is available
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <ChevronRight size={16} className="text-primary flex-shrink-0" />
              <Link to="/services/ydna-paternal-lineage-test" className="text-primary hover:underline">Y-DNA paternal lineage test</Link> — for male-line testing where appropriate
            </li>
          </ul>
        </div>
      </section>

      {/* Sample Requirements */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Sample Requirements for a Paternity DNA Test</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            DNA samples for paternity testing are collected using a <strong>buccal (cheek) swab</strong>. This is the standard and most widely used method for DNA testing in Kenya.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">How buccal swab collection works</h3>
          <ul className="space-y-2 mb-6">
            {[
              'A soft, cotton-tipped swab is gently rubbed on the inside of the cheek for a few seconds.',
              'The process is completely painless and non-invasive — no needles or blood are involved.',
              'Collection takes only a few moments per person.',
              'The method is suitable for participants of all ages, including newborn babies.'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Preparing for sample collection</h3>
          <ul className="space-y-2 mb-6">
            {[
              'Avoid eating, drinking (except water), chewing gum, or smoking for at least 30 minutes before sample collection.',
              'Ensure hands are clean before handling any collection materials.',
              'For legal tests, all participants must bring valid government-issued photo identification.'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Sample collection options</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-gray-700">
              <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm"><strong>At our facility</strong> — Sample collection at Biotel DNA in Nairobi.</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm"><strong>Home DNA testing</strong> — Our trained sample collectors can come to your preferred location in Nairobi.</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm"><strong>Other locations</strong> — We coordinate testing services in other parts of Kenya including <Link to="/locations/mombasa" className="text-primary hover:underline">Mombasa</Link> and <Link to="/locations/kisumu" className="text-primary hover:underline">Kisumu</Link>.</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-5">
            <p className="text-gray-700 text-sm">
              <strong>Important for legal tests:</strong> If you need your paternity test results for court, immigration, or any official purpose, you must arrange a <Link to="/private-vs-legal" className="text-primary font-medium hover:underline">legal DNA test</Link> before samples are collected. Legal tests require formal identification, authorised sample collection, and chain-of-custody procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Price Enquiry */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">DNA Paternity Test Cost in Kenya</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The cost of a DNA paternity test in Kenya depends on several factors, including:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              { title: 'Type of test', desc: 'A private (peace of mind) paternity test typically costs less than a legal paternity test due to the additional documentation and procedures required for legal tests.' },
              { title: 'Number of participants', desc: 'Tests involving the mother as well as the child and alleged father may have different pricing than tests with just two participants.' },
              { title: 'Sample collection location', desc: 'Home sample collection or collection outside our standard service area may involve additional costs.' },
              { title: 'Urgency', desc: 'Expedited processing may be available at an additional cost.' }
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-2 text-gray-700">
                <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm"><strong>{item.title}:</strong> {item.desc}</span>
              </li>
            ))}
          </ul>

          <div className="bg-secondary/5 border-2 border-secondary/20 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Get a personalised quotation</h3>
            <p className="text-gray-700 text-sm mb-4">
              For accurate, up-to-date pricing specific to your situation, please contact Biotel DNA directly. We provide clear quotations with no hidden costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+254711371092" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors">
                <Phone size={16} /> Call: +254 711 371092
              </a>
              <a
                href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20a%20quotation%20for%20a%20DNA%20paternity%20test."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp for pricing
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                Request a quotation online
              </Link>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-4">
            For general information about DNA test pricing in Kenya, visit our <Link to="/dna-test-cost" className="text-primary hover:underline">DNA test cost and price guide</Link>.
          </p>
        </div>
      </section>

      {/* Turnaround Time */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Expected Turnaround Time for Paternity DNA Test Results</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The time it takes to receive your paternity DNA test results depends on the type of test, the number of participants, and current laboratory workload.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For current estimated turnaround times for your specific paternity test, please contact Biotel DNA directly. We will provide you with an up-to-date estimate when you book your test.
          </p>
          <div className="bg-primary/5 rounded-lg p-5">
            <p className="text-gray-700 text-sm">
              <strong>Contact us for turnaround information:</strong><br />
              📞 Phone: <a href="tel:+254711371092" className="text-primary font-medium hover:underline">+254 711 371092</a><br />
              💬 WhatsApp: <a href="https://wa.me/254711371092" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Chat with us</a>
            </p>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            For more information about DNA test results and what to expect, visit our <Link to="/dna-test-results" className="text-primary hover:underline">DNA test results guide</Link>.
          </p>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Confidentiality of Your Paternity DNA Test</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We understand that a paternity DNA test can involve deeply personal and sensitive family matters. At Biotel DNA, confidentiality is a fundamental part of our service.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { icon: Lock, title: 'Private Handling', desc: 'All test information and personal details are handled with strict privacy protocols.' },
              { icon: User, title: 'Authorised Access Only', desc: 'Results are shared only with individuals you authorise.' },
              { icon: Shield, title: 'Secure Storage', desc: 'Your personal information and test data are stored securely.' },
              { icon: MessageSquare, title: 'Discreet Communication', desc: 'We communicate results through secure, private channels.' }
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-200">
                <item.icon className="text-primary mb-2" size={28} />
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h4>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm">
            For more details about how we protect your privacy, visit our <Link to="/about" className="text-primary hover:underline">quality and confidentiality page</Link>.
          </p>
        </div>
      </section>

      {/* Private vs Legal */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Private vs Legal Paternity DNA Testing in Kenya</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When arranging a paternity DNA test in Kenya, it is important to choose the right type of test for your needs:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🔒 Private Paternity Test</h3>
              <p className="text-sm text-gray-600 mb-3">Also called a "peace of mind" test.</p>
              <ul className="space-y-2">
                {['For personal knowledge only', 'No formal identification required', 'Simple sample collection process', 'Results not admissible in court', 'Generally more affordable'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Legal Paternity Test</h3>
              <p className="text-sm text-gray-600 mb-3">For court, immigration, and official purposes.</p>
              <ul className="space-y-2">
                {['Results can be used in court', 'Formal identification required', 'Chain-of-custody procedures', 'Authorised sample collection', 'Full documentation provided'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Not sure which type you need? Read our detailed guide on <Link to="/private-vs-legal" className="text-primary font-medium hover:underline">private vs legal DNA testing</Link> or contact us for advice.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions: DNA Paternity Test in Kenya</h2>
          <div className="space-y-3">
            {[
              { q: 'How does a DNA paternity test work in Kenya?', a: 'A DNA paternity test compares the genetic markers of a child with those of the alleged father. Since a child inherits half of their DNA from each biological parent, the test can determine whether the tested man is the biological father. Samples are collected using a simple buccal (cheek) swab, which is painless and non-invasive.' },
              { q: 'How much does a DNA paternity test cost in Kenya?', a: 'The cost of a DNA paternity test in Kenya depends on the type of test (private or legal), the number of participants, and whether additional services such as home sample collection are required. Contact Biotel DNA on +254 711 371092 for a personalised quotation based on your specific needs.' },
              { q: 'Can a paternity DNA test be done without the mother in Kenya?', a: 'Yes. A paternity DNA test can be conducted with just the child and the alleged father. The mother\'s participation is optional, though including her sample can strengthen the conclusiveness of the results. If the mother is unavailable or unwilling to participate, the test can still provide reliable findings.' },
              { q: 'How long does it take to get paternity DNA test results in Kenya?', a: 'Turnaround times for paternity DNA test results vary depending on the type of test and current laboratory workload. Contact Biotel DNA on +254 711 371092 or via WhatsApp for current estimated turnaround times for your specific test.' },
              { q: 'What is the difference between a private and legal paternity test in Kenya?', a: 'A private paternity test (also called a peace of mind test) is for personal knowledge only and does not follow formal identification procedures. A legal paternity test follows strict chain-of-custody procedures with formal identification of all participants and authorised sample collection, making the results suitable for court or official purposes in Kenya.' },
              { q: 'Are paternity DNA test results confidential in Kenya?', a: 'Yes. Biotel DNA handles all paternity test information and results with strict confidentiality. Results are shared only with authorised individuals and are never disclosed to third parties without proper consent.' },
              { q: 'What samples are needed for a paternity DNA test in Kenya?', a: 'Paternity DNA tests in Kenya typically use buccal (cheek) swabs, which are collected by gently rubbing a soft swab on the inside of the cheek. This method is painless, non-invasive, and suitable for participants of all ages, including newborns. Avoid eating, drinking, or chewing gum for 30 minutes before sample collection.' },
              { q: 'Can paternity DNA test results be used in court in Kenya?', a: 'Paternity DNA test results from a legal test, conducted with proper chain-of-custody procedures and formal identification, can be used as evidence in Kenyan courts. The test must follow specific legal protocols. Contact Biotel DNA to discuss your specific legal requirements.' },
              { q: 'Do you offer paternity DNA testing outside Nairobi?', a: 'Yes. Biotel DNA coordinates DNA testing services in various locations across Kenya, including Mombasa and Kisumu. We also offer home DNA testing in Nairobi. Contact us to discuss availability in your area.' }
            ].map((faq, index) => (
              <details key={index} className="group bg-white rounded-lg border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900 pr-4 text-sm md:text-base">{faq.q}</span>
                  <ChevronRight size={18} className="text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-4 pb-4 text-gray-600 leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4">
            View all questions on our <Link to="/faqs" className="text-primary hover:underline">FAQs page</Link>.
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related DNA Tests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedServices.map((rs) => (
              <Link key={rs.id} to={`/services/${rs.slug}`} className="bg-gray-50 rounded-xl p-5 card-hover border border-gray-100">
                <div className="text-2xl mb-2">{rs.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{rs.title}</h3>
                <p className="text-gray-600 text-sm">{rs.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Pages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { to: '/services', label: 'View all DNA testing services in Kenya' },
                { to: '/dna-test-cost', label: 'DNA test cost and price information' },
                { to: '/dna-test-process', label: 'How the DNA test process works' },
                { to: '/dna-test-results', label: 'Understanding your DNA test results' },
                { to: '/dna-test-requirements', label: 'DNA test requirements in Kenya' },
                { to: '/private-vs-legal', label: 'Private vs legal DNA testing explained' },
                { to: '/services/dna-test-for-court', label: 'DNA test for court in Kenya' },
                { to: '/services/immigration-dna-test', label: 'Immigration DNA test in Kenya' },
                { to: '/services/home-dna-testing', label: 'Home DNA testing in Kenya' },
                { to: '/locations/nairobi', label: 'DNA testing in Nairobi' },
                { to: '/faqs', label: 'All frequently asked questions' },
                { to: '/contact', label: 'Contact Biotel DNA' }
              ].map((link) => (
                <Link key={link.to} to={link.to} className="flex items-center gap-2 text-sm text-primary hover:underline py-1">
                  <ChevronRight size={14} /> {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Arrange Your DNA Paternity Test?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact Biotel DNA today for professional, confidential paternity testing in Kenya. We are here to help you get the answers you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20to%20arrange%20a%20DNA%20paternity%20test."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors shadow-lg"
            >
              <MessageCircle size={22} /> Enquire on WhatsApp
            </a>
            <a href="tel:+254711371092" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors">
              <Phone size={22} /> Call +254 711 371092
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> This page provides general information about DNA paternity testing in Kenya. It does not constitute medical or legal advice. For specific guidance on your situation, please contact Biotel DNA directly. Biotel DNA provides DNA testing services and does not provide legal advice. If you require legal advice regarding court proceedings, please consult a qualified legal professional.
          </p>
        </div>
      </section>
    </div>
  );
}
