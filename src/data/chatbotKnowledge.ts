// Biotel DNA Chatbot Knowledge Base
// Contains ONLY verified information - no fabricated prices, timelines, or claims

export interface KnowledgeEntry {
  id: string;
  category: 'test-type' | 'process' | 'pricing' | 'legal' | 'results' | 'privacy' | 'escalation';
  keywords: string[];
  question: string;
  answer: string;
  followUp?: string[];
  requiresEscalation?: boolean;
}

export const knowledgeBase: KnowledgeEntry[] = [
  // TEST TYPES
  {
    id: 'paternity-test',
    category: 'test-type',
    keywords: ['paternity', 'father', 'dad', 'fatherhood', 'child father'],
    question: 'What is a paternity DNA test?',
    answer: 'A paternity DNA test determines whether a man is the biological father of a child. The test compares genetic markers between the child and the alleged father. Since a child inherits half their DNA from each biological parent, the test can establish the biological relationship with a high degree of confidence.\n\nThe test requires samples from the child and the alleged father. Including the mother\'s sample is optional but can strengthen the analysis.',
    followUp: ['Can it be done without the mother?', 'What samples are needed?', 'How much does it cost?']
  },
  {
    id: 'siblingship-test',
    category: 'test-type',
    keywords: ['sibling', 'brother', 'sister', 'siblingship'],
    question: 'What is a siblingship DNA test?',
    answer: 'A siblingship DNA test determines whether two or more people share a biological parent. It can establish whether individuals are full siblings (same mother and father) or half-siblings (sharing one parent).\n\nThis test is useful when parents are unavailable for testing. The analysis examines genetic markers to calculate the probability of a sibling relationship.',
    followUp: ['Who needs to participate?', 'How accurate is it?', 'What samples are needed?']
  },
  {
    id: 'grandparent-test',
    category: 'test-type',
    keywords: ['grandparent', 'grandfather', 'grandmother', 'grandchild'],
    question: 'What is a grandparent DNA test?',
    answer: 'A grandparent DNA test determines whether a child is biologically related to alleged grandparents. This test is particularly useful when the parent who would connect the child to the grandparents is unavailable for testing.\n\nTesting both grandparents (when possible) improves the accuracy of the results. The test compares genetic markers between the child and the grandparent(s).',
    followUp: ['What if only one grandparent is available?', 'Who needs to participate?', 'How does it work?']
  },
  {
    id: 'maternity-test',
    category: 'test-type',
    keywords: ['maternity', 'mother', 'mom', 'biological mother'],
    question: 'What is a maternity DNA test?',
    answer: 'A maternity DNA test confirms whether a woman is the biological mother of a child. While maternity is often assumed, this test may be required for immigration purposes, adoption verification, hospital mix-up concerns, or other legal and personal situations.\n\nThe test compares genetic markers between the child and the alleged mother.',
    followUp: ['When is this test needed?', 'What samples are required?', 'How long does it take?']
  },
  {
    id: 'avuncular-test',
    category: 'test-type',
    keywords: ['avuncular', 'aunt', 'uncle', 'niece', 'nephew'],
    question: 'What is an avuncular DNA test?',
    answer: 'An avuncular DNA test (aunt/uncle test) determines whether a child is biologically related to an alleged aunt or uncle — that is, a sibling of the alleged parent.\n\nThis test is useful when the alleged parent is unavailable but their sibling is willing to participate. The analysis compares genetic markers to establish the biological relationship.',
    followUp: ['When would I need this test?', 'Who participates?', 'How accurate is it?']
  },
  {
    id: 'ydna-test',
    category: 'test-type',
    keywords: ['y-dna', 'y dna', 'paternal lineage', 'male lineage', 'father line'],
    question: 'What is a Y-DNA paternal lineage test?',
    answer: 'A Y-DNA paternal lineage test analyses the Y chromosome, which is passed from father to son largely unchanged. This test can determine whether two or more males share a common paternal ancestor.\n\nThis test is only applicable to males (since only males have a Y chromosome) and is useful for confirming paternal lineage, genealogical research, and certain relationship questions involving males on the father\'s side.',
    followUp: ['Who can take this test?', 'What can it tell me?', 'How is it different from a paternity test?']
  },

  // PROCESS
  {
    id: 'test-process',
    category: 'process',
    keywords: ['process', 'how does it work', 'procedure', 'steps', 'how it works'],
    question: 'How does DNA testing work?',
    answer: 'The DNA testing process at Biotel DNA is straightforward:\n\n1. **Initial Consultation** — Contact us to discuss your needs. We\'ll help you understand which test is appropriate for your situation.\n\n2. **Scheduling** — We arrange a convenient time and location for sample collection.\n\n3. **Sample Collection** — DNA samples are collected using a buccal (cheek) swab. This is painless, non-invasive, and takes only moments per person.\n\n4. **Laboratory Analysis** — Samples are processed using established DNA analysis methods.\n\n5. **Results Delivery** — You receive a confidential results report with professional support to help you understand the findings.',
    followUp: ['What samples are needed?', 'Is it painful?', 'How long does it take?']
  },
  {
    id: 'sample-collection',
    category: 'process',
    keywords: ['sample', 'collection', 'swab', 'cheek', 'how to collect', 'buccal'],
    question: 'How are DNA samples collected?',
    answer: 'DNA samples are collected using a buccal (cheek) swab — a soft swab gently rubbed on the inside of the cheek. The process is:\n\n• **Painless and non-invasive** — no needles or blood required\n• **Quick** — takes only a few seconds per person\n• **Suitable for all ages** — including newborns\n\n**Before collection:**\n• Avoid eating, drinking (except water), chewing gum, or smoking for 30 minutes\n• Ensure hands are clean\n\nSample collection can be done at our facility, at your location (home testing), or at designated collection points.',
    followUp: ['Can I collect samples at home?', 'What if I need testing outside Nairobi?', 'Is it safe for children?']
  },
  {
    id: 'home-testing',
    category: 'process',
    keywords: ['home', 'house', 'office', 'convenient', 'mobile', 'location'],
    question: 'Can I have DNA testing done at my location?',
    answer: 'Yes. Biotel DNA offers home DNA testing in Nairobi. Our trained sample collectors can come to your preferred location — whether that\'s your home, office, or another convenient venue.\n\nThe service maintains the same professional standards as testing at our facility. For other areas of Kenya, we coordinate testing services in locations including Mombasa and Kisumu.\n\nContact us to discuss availability in your area and arrange home sample collection.',
    followUp: ['Where do you offer home testing?', 'How do I book home collection?', 'Is there an additional cost?']
  },

  // PRICING
  {
    id: 'pricing-general',
    category: 'pricing',
    keywords: ['cost', 'price', 'how much', 'expensive', 'affordable', 'fee', 'charges', 'pricing'],
    question: 'How much does a DNA test cost?',
    answer: 'The cost of a DNA test depends on several factors:\n\n• **Type of test** — Different tests (paternity, siblingship, grandparent, etc.) involve different levels of analysis\n• **Number of participants** — Tests involving more people may cost more\n• **Private vs legal test** — Legal tests with chain-of-custody procedures typically cost more than private tests\n• **Sample collection location** — Home collection or collection outside standard service areas may involve additional costs\n• **Urgency** — Expedited processing may be available at additional cost\n\n**For accurate pricing specific to your situation, please contact Biotel DNA directly.** We provide clear quotations with no hidden costs.',
    followUp: ['How do I get a quotation?', 'What affects the price?', 'Do you accept M-Pesa?'],
    requiresEscalation: true
  },
  {
    id: 'pricing-factors',
    category: 'pricing',
    keywords: ['price factors', 'what affects cost', 'why different prices'],
    question: 'What affects the price of a DNA test?',
    answer: 'Several factors influence DNA test pricing:\n\n1. **Test type** — Paternity, siblingship, grandparent, and other tests require different levels of analysis\n2. **Number of participants** — More participants mean more samples to process\n3. **Test category** — Legal tests require additional documentation and procedures\n4. **Collection method** — Home collection may cost more than facility-based collection\n5. **Location** — Testing outside major cities may involve coordination costs\n6. **Turnaround time** — Faster results may be available at additional cost\n\nContact us for a personalised quotation based on your specific needs.',
    followUp: ['How do I get a quote?', 'What payment methods do you accept?']
  },
  {
    id: 'payment-methods',
    category: 'pricing',
    keywords: ['payment', 'mpesa', 'cash', 'card', 'bank', 'pay'],
    question: 'What payment methods do you accept?',
    answer: 'For specific information about payment methods and options, please contact Biotel DNA directly. We can discuss the most convenient payment arrangement for your situation.\n\nContact us via:\n• WhatsApp: +254 711 371092\n• Phone: +254 711 371092\n• Online quotation request form',
    followUp: ['How do I contact you?', 'Can I pay after results?']
  },

  // LEGAL
  {
    id: 'private-vs-legal',
    category: 'legal',
    keywords: ['private', 'legal', 'court', 'difference', 'admissible', 'official'],
    question: 'What is the difference between private and legal DNA testing?',
    answer: '**Private DNA Test (Peace of Mind):**\n• For personal knowledge only\n• No formal identification required\n• Simple sample collection\n• Results NOT admissible in court\n• Generally more affordable\n• Faster to arrange\n\n**Legal DNA Test:**\n• Court-admissible results\n• Formal identification of all participants required\n• Chain-of-custody procedures followed\n• Authorised sample collection by trained personnel\n• Full documentation provided\n• Required for court, immigration, and official purposes\n\nBoth use the same scientific analysis. The difference lies in the procedures surrounding sample collection and documentation.\n\n**If you need results for any official purpose, you must arrange a legal test BEFORE samples are collected.**',
    followUp: ['Which test do I need?', 'What ID do I need for a legal test?', 'Can I upgrade a private test to legal?']
  },
  {
    id: 'legal-requirements',
    category: 'legal',
    keywords: ['legal requirements', 'id', 'identification', 'documents', 'court requirements'],
    question: 'What do I need for a legal DNA test?',
    answer: 'For a legal DNA test, all participants must provide:\n\n**For adults:**\n• Valid government-issued photo identification (national ID, passport, or other accepted ID)\n\n**For children:**\n• Birth certificate or other documentation\n• Consent from parent or legal guardian\n\n**Additional requirements:**\n• All participants must be formally identified by the sample collector\n• Photographs may be taken as part of chain-of-custody\n• Fingerprints may be required\n• All participants must voluntarily consent\n\n**Important:** If you need a legal test, inform us BEFORE sample collection so we can arrange the proper procedures.',
    followUp: ['What if I don\'t have ID?', 'Can children be tested?', 'How is chain of custody maintained?']
  },
  {
    id: 'court-usage',
    category: 'legal',
    keywords: ['court', 'legal proceedings', 'child support', 'custody', 'inheritance'],
    question: 'Can DNA test results be used in court?',
    answer: 'DNA test results from a **legal test** — conducted with proper chain-of-custody procedures and formal identification — can be used as evidence in Kenyan courts.\n\nThe test must follow specific legal protocols including:\n• Formal identification of all participants\n• Authorised sample collection\n• Complete chain-of-custody documentation\n• Proper certification\n\n**Private (peace of mind) tests are NOT admissible in court.**\n\nIf you need results for court proceedings, child custody matters, child support cases, or inheritance disputes, you must arrange a legal DNA test.\n\n**Important:** Biotel DNA provides DNA testing services but does not provide legal advice. For legal guidance, please consult a qualified legal professional.',
    followUp: ['How do I arrange a legal test?', 'What is chain of custody?', 'Do I need a lawyer?']
  },
  {
    id: 'immigration-test',
    category: 'legal',
    keywords: ['immigration', 'visa', 'embassy', 'citizenship'],
    question: 'What is an immigration DNA test?',
    answer: 'An immigration DNA test provides biological evidence of family relationships to support visa and immigration applications. These tests follow specific protocols required by immigration authorities.\n\n**Key points:**\n• Must be a legal test with chain-of-custody procedures\n• May involve testing participants in different countries\n• Results provided in format suitable for immigration offices\n• Different countries have specific accreditation requirements\n• Common for applications to USA, UK, Australia, Canada, and EU nations\n\nContact Biotel DNA to discuss your specific immigration testing requirements. We can coordinate testing even when participants are in different locations.',
    followUp: ['Which countries require DNA tests?', 'How do I start an immigration test?', 'What if the relative is abroad?']
  },

  // RESULTS
  {
    id: 'results-general',
    category: 'results',
    keywords: ['results', 'when', 'how long', 'turnaround', 'time', 'days', 'weeks'],
    question: 'How long does it take to get results?',
    answer: 'Turnaround times for DNA test results vary depending on:\n\n• The type of test being conducted\n• Number of participants\n• Current laboratory workload\n• Whether it\'s a private or legal test\n\n**For current estimated turnaround times for your specific test, please contact Biotel DNA directly.**\n\nWe will provide you with an up-to-date estimate when you book your test. Contact us via WhatsApp or phone for the most accurate information.',
    followUp: ['How do I contact you?', 'Can I get faster results?', 'How are results delivered?'],
    requiresEscalation: true
  },
  {
    id: 'results-delivery',
    category: 'results',
    keywords: ['receive results', 'get results', 'results delivery', 'how receive'],
    question: 'How will I receive my results?',
    answer: 'Results are delivered confidentially through secure channels. The specific delivery method will be discussed when you arrange your test.\n\n**Results typically include:**\n• The relationship conclusion\n• Statistical analysis supporting the conclusion\n• For legal tests: chain-of-custody documentation and certification\n\n**Confidentiality:**\n• Results shared only with authorised individuals\n• Never disclosed to third parties without consent\n• Secure delivery methods used\n\nWe provide support to help you understand your results. Contact us to discuss your specific situation.',
    followUp: ['Are results confidential?', 'Can someone else collect my results?', 'What if I don\'t understand the results?']
  },
  {
    id: 'results-understanding',
    category: 'results',
    keywords: ['understand results', 'what do results mean', 'interpret results', 'probability'],
    question: 'How do I understand my DNA test results?',
    answer: 'DNA test results can be complex, and we\'re here to help you understand them.\n\n**Your results report will typically include:**\n• Clear conclusion about the biological relationship\n• Statistical probability or index supporting the conclusion\n• Explanation of what the findings mean\n\n**Support available:**\n• We provide guidance to help you understand your results\n• You can ask questions about your report\n• For legal tests, the report includes formal documentation\n\nIf you have questions about understanding your results, please contact us. We\'ll ensure you have the support you need.',
    followUp: ['What does probability mean?', 'Can you explain the statistics?', 'Who can help me understand?']
  },

  // PRIVACY
  {
    id: 'confidentiality',
    category: 'privacy',
    keywords: ['confidential', 'privacy', 'secret', 'private', 'who knows'],
    question: 'Is DNA testing confidential?',
    answer: 'Yes. Biotel DNA takes confidentiality very seriously.\n\n**Our privacy commitments:**\n• All test information handled with strict privacy protocols\n• Results shared only with authorised individuals\n• Personal details never disclosed to third parties without consent\n• Secure storage of all information\n• Discreet communication channels\n\nWe understand that DNA testing involves sensitive matters and treat every case with the utmost discretion and respect.\n\nYour privacy is fundamental to our service.',
    followUp: ['Who will know about my test?', 'How is my information stored?', 'Can I remain anonymous?']
  },
  {
    id: 'data-protection',
    category: 'privacy',
    keywords: ['data', 'information', 'storage', 'security', 'protect'],
    question: 'How is my information protected?',
    answer: 'Biotel DNA implements strict data protection measures:\n\n**Information security:**\n• All personal data stored securely\n• Access limited to authorised personnel only\n• Encryption and secure systems used\n• Regular security protocols followed\n\n**Sample handling:**\n• Samples handled with strict chain-of-custody (for legal tests)\n• Secure transport and storage\n• Proper disposal procedures\n\n**Your rights:**\n• You control who receives your results\n• You can request information about how your data is handled\n• We comply with data protection requirements\n\nFor detailed information about our privacy practices, please contact us directly.',
    followUp: ['How long is data kept?', 'Can I delete my information?', 'Who has access?']
  },

  // WITHOUT MOTHER
  {
    id: 'without-mother',
    category: 'process',
    keywords: ['without mother', 'no mother', 'mother unavailable', 'mother refuses'],
    question: 'Can a paternity test be done without the mother?',
    answer: 'Yes. A paternity DNA test can be conducted with just the child and the alleged father.\n\n**Key points:**\n• The mother\'s participation is optional\n• Including the mother can strengthen the conclusiveness of results\n• If the mother is unavailable or unwilling, the test can still provide reliable findings\n• The test compares the child\'s DNA with the alleged father\'s DNA\n\nIf you have concerns about testing without the mother, contact us to discuss your specific situation. We can explain how this affects the analysis and what results you can expect.',
    followUp: ['How does it affect accuracy?', 'What if the mother refuses?', 'Are results still reliable?']
  },

  // LOCATIONS
  {
    id: 'locations',
    category: 'process',
    keywords: ['where', 'location', 'nairobi', 'mombasa', 'kisumu', 'near me'],
    question: 'Where can I get DNA testing?',
    answer: 'Biotel DNA provides DNA testing services across Kenya:\n\n**Nairobi** — Our primary service centre with full testing capabilities, including sample collection, consultation, and results delivery.\n\n**Mombasa** — DNA testing coordination available for clients in the Coastal region.\n\n**Kisumu** — DNA testing coordination available for clients in the Lake Region.\n\n**Home testing** — Available in Nairobi. Our trained collectors come to your preferred location.\n\n**Other areas** — Contact us to discuss availability in your location. We may be able to arrange testing in other parts of Kenya.\n\nFor specific information about services in your area, please contact us directly.',
    followUp: ['Do you serve my area?', 'How do I book in Nairobi?', 'What about home testing?']
  },

  // CONTACT
  {
    id: 'contact-info',
    category: 'escalation',
    keywords: ['contact', 'phone', 'call', 'whatsapp', 'reach', 'talk', 'speak'],
    question: 'How do I contact Biotel DNA?',
    answer: 'You can reach Biotel DNA through:\n\n**WhatsApp:** +254 711 371092\n💬 Quick responses, convenient for enquiries\n\n**Phone:** +254 711 371092\n📞 Speak directly with our team\n\n**Email:** info@bioteldna.co.ke\n📧 For detailed enquiries\n\n**Online:** Use our contact form on the website\n📝 Request a quotation or ask questions\n\n**Business Hours:**\nMonday - Saturday: 8:00 AM - 6:00 PM\n\nWe recommend WhatsApp for the fastest response. Our team is ready to help with your DNA testing needs.',
    followUp: []
  }
];

// Conversation flow management
export interface ConversationState {
  stage: 'greeting' | 'test-type' | 'information' | 'escalation' | 'closing';
  testType?: string;
  questionsAsked: string[];
  lastResponse?: string;
}

export const greetingMessage = `Hello! I'm the Biotel DNA assistant. I'm here to help answer your questions about DNA testing in Kenya.\n\nI can provide information about:\n• Types of DNA tests available\n• The testing process\n• Sample collection\n• Private vs legal testing\n• Results and confidentiality\n\n**How can I help you today?**\n\nTo get started, what type of DNA test are you enquiring about? For example:\n• Paternity test\n• Siblingship test\n• Grandparent test\n• Or another type of test`;

export const escalationMessage = `Thank you for your question. To ensure you receive accurate information specific to your situation, I recommend speaking directly with our team.\n\n**Contact Biotel DNA:**\n📱 WhatsApp: +254 711 371092\n📞 Phone: +254 711 371092\n\nOur team can:\n• Provide personalised quotations\n• Discuss your specific requirements\n• Arrange testing at your convenience\n• Answer detailed questions\n\nWould you like me to help you with anything else, or shall I connect you with our team?`;

export const privacyNotice = `🔒 **Your Privacy Matters**\n\nPlease note:\n• Do not share sensitive personal details in this chat\n• For specific case details, contact us directly via WhatsApp or phone\n• All enquiries are treated confidentially\n• We never share your information without consent\n\nFor personalised assistance, please contact us directly at +254 711 371092.`;

export const disclaimerMessage = `**Important:** I can provide general information about DNA testing, but I cannot:\n• Provide specific pricing without knowing your requirements\n• Give exact turnaround times (these vary)\n• Make legal determinations or provide legal advice\n• Diagnose or make medical recommendations\n• Guarantee specific results\n\nFor specific information about your situation, please contact our team directly.`;

// Intent detection
export function detectIntent(message: string): string[] {
  const lower = message.toLowerCase();
  const matchedCategories: string[] = [];
  
  for (const entry of knowledgeBase) {
    for (const keyword of entry.keywords) {
      if (lower.includes(keyword)) {
        matchedCategories.push(entry.id);
        break;
      }
    }
  }
  
  return matchedCategories;
}

// Get best matching response
export function getResponse(message: string, state: ConversationState): { response: string; followUp?: string[]; requiresEscalation?: boolean } {
  const lower = message.toLowerCase();
  
  // Check for greetings
  if (/^(hi|hello|hey|habari|jambo|good morning|good afternoon|good evening|howdy)/.test(lower)) {
    return { response: greetingMessage };
  }
  
  // Check for escalation requests
  if (/(speak to human|talk to person|contact someone|need help|escalate|complaint)/.test(lower)) {
    return { response: escalationMessage, requiresEscalation: true };
  }
  
  // Check for privacy concerns
  if (/(privacy|confidential|who sees|safe|secure)/.test(lower)) {
    const privacyEntry = knowledgeBase.find(e => e.id === 'confidentiality');
    if (privacyEntry) {
      return { 
        response: privacyEntry.answer + '\n\n' + privacyNotice,
        followUp: privacyEntry.followUp
      };
    }
  }
  
  // Detect intent and find best match
  const matches = detectIntent(message);
  
  if (matches.length > 0) {
    // Get the first (best) match
    const entry = knowledgeBase.find(e => e.id === matches[0]);
    if (entry) {
      let response = entry.answer;
      
      // Add disclaimer for pricing and results questions
      if (entry.category === 'pricing' || entry.category === 'results') {
        response += '\n\n' + disclaimerMessage;
      }
      
      return {
        response,
        followUp: entry.followUp,
        requiresEscalation: entry.requiresEscalation
      };
    }
  }
  
  // Default response - escalate to human
  return {
    response: escalationMessage,
    requiresEscalation: true
  };
}
