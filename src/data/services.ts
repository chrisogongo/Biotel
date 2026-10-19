export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  participants: string[];
  keyFeatures: string[];
  icon: string;
  category: 'paternity' | 'relationship' | 'legal' | 'specialised';
}

export const services: Service[] = [
  {
    id: 'paternity',
    title: 'Paternity DNA Test',
    slug: 'paternity-dna-test',
    shortDescription: 'Determine biological father-child relationship with high accuracy. Available as private or legal test.',
    fullDescription: 'A paternity DNA test determines whether a man is the biological father of a child. Our paternity tests use advanced DNA analysis to provide results with a high degree of accuracy. The test can be conducted as a private (peace of mind) test or as a legal test with chain-of-custody procedures for court or official purposes.',
    participants: ['Child', 'Alleged Father', 'Mother (optional but recommended)'],
    keyFeatures: ['High accuracy results', 'Private or legal options', 'Buccal swab sample collection', 'Confidential handling', 'Fast turnaround'],
    icon: '🧬',
    category: 'paternity'
  },
  {
    id: 'siblingship',
    title: 'Siblingship DNA Test',
    slug: 'siblingship-dna-test',
    shortDescription: 'Establish whether two or more individuals share a biological parent. Full or half sibling testing available.',
    fullDescription: 'A siblingship DNA test determines whether two or more individuals are biological siblings, sharing one or both parents. This test can establish full siblingship (same mother and father) or half-siblingship (sharing one parent). The analysis examines genetic markers to calculate the probability of a sibling relationship.',
    participants: ['Two or more alleged siblings'],
    keyFeatures: ['Full and half sibling analysis', 'No parent participation required', 'Statistical probability report', 'Confidential process', 'Professional interpretation'],
    icon: '👥',
    category: 'relationship'
  },
  {
    id: 'grandparent',
    title: 'Grandparent DNA Test',
    slug: 'grandparent-dna-test',
    shortDescription: 'Establish a biological grandparent-grandchild relationship when a parent is unavailable for testing.',
    fullDescription: 'A grandparent DNA test determines whether a child is biologically related to alleged grandparents. This test is useful when the parent who would connect the child to the grandparents is unavailable for testing. The analysis compares genetic markers between the child and the alleged grandparent(s) to establish the biological relationship.',
    participants: ['Child', 'Alleged Grandparent(s)'],
    keyFeatures: ['Maternal and paternal grandparent testing', 'Useful when parent is unavailable', 'Both grandparents improve accuracy', 'Professional sample collection', 'Detailed results report'],
    icon: '👴',
    category: 'relationship'
  },
  {
    id: 'maternity',
    title: 'Maternity DNA Test',
    slug: 'maternity-dna-test',
    shortDescription: 'Confirm the biological mother-child relationship. Used for immigration, legal, or personal reasons.',
    fullDescription: 'A maternity DNA test confirms whether a woman is the biological mother of a child. While maternity is often assumed, this test may be required for immigration purposes, adoption verification, hospital mix-up concerns, or other legal and personal situations where biological motherhood must be formally established.',
    participants: ['Child', 'Alleged Mother'],
    keyFeatures: ['High accuracy confirmation', 'Immigration purposes', 'Legal documentation support', 'Quick sample collection', 'Confidential results'],
    icon: '👩',
    category: 'paternity'
  },
  {
    id: 'avuncular',
    title: 'Avuncular DNA Test',
    slug: 'avuncular-dna-test',
    shortDescription: 'Determine whether a child is biologically related to an aunt or uncle (sibling of the alleged parent).',
    fullDescription: 'An avuncular DNA test (also called an aunt/uncle test) determines whether a child is biologically related to the alleged aunt or uncle — that is, a sibling of the alleged parent. This test is useful when the alleged parent is unavailable for testing but their sibling is willing to participate.',
    participants: ['Child', 'Alleged Aunt or Uncle'],
    keyFeatures: ['Aunt/uncle relationship testing', 'Useful when parent is unavailable', 'Statistical analysis', 'Professional interpretation', 'Confidential handling'],
    icon: '🤝',
    category: 'relationship'
  },
  {
    id: 'ydna',
    title: 'Y-DNA Paternal Lineage Test',
    slug: 'ydna-paternal-lineage-test',
    shortDescription: 'Trace paternal lineage and determine whether males share a common paternal ancestor.',
    fullDescription: 'A Y-DNA paternal lineage test analyses the Y chromosome, which is passed from father to son largely unchanged. This test can determine whether two or more males share a common paternal ancestor, making it useful for confirming paternal lineage, genealogical research, and certain relationship questions involving males on the father\'s side.',
    participants: ['Two or more males from alleged paternal line'],
    keyFeatures: ['Paternal lineage tracing', 'Male participants only', 'Common ancestor identification', 'Genealogical applications', 'Detailed haplogroup information'],
    icon: '🔬',
    category: 'specialised'
  },
  {
    id: 'court',
    title: 'DNA Test for Court',
    slug: 'dna-test-for-court',
    shortDescription: 'Court-admissible DNA testing with proper chain-of-custody procedures and legal documentation.',
    fullDescription: 'A legal DNA test follows strict chain-of-custody procedures to ensure results are admissible in court. All participants are formally identified, samples are collected by authorised personnel, and the entire process is documented. Legal DNA tests are used for child custody cases, inheritance disputes, immigration cases, and other legal proceedings.',
    participants: ['All tested parties (formally identified)'],
    keyFeatures: ['Chain-of-custody procedures', 'Formal identification required', 'Court-admissible results', 'Authorised sample collection', 'Legal documentation provided'],
    icon: '⚖️',
    category: 'legal'
  },
  {
    id: 'immigration',
    title: 'Immigration DNA Test',
    slug: 'immigration-dna-test',
    shortDescription: 'DNA testing to support immigration applications by proving biological family relationships.',
    fullDescription: 'An immigration DNA test provides biological evidence of family relationships to support visa and immigration applications. These tests follow specific protocols required by immigration authorities and may involve testing participants in different countries. Results are provided in a format suitable for submission to immigration offices.',
    participants: ['Applicant', 'Biological relative(s) in Kenya or abroad'],
    keyFeatures: ['Meets immigration requirements', 'International coordination available', 'Embassy-recognised format', 'Strict chain of custody', 'Direct result submission'],
    icon: '🌍',
    category: 'legal'
  },
  {
    id: 'home',
    title: 'Home DNA Testing',
    slug: 'home-dna-testing',
    shortDescription: 'Convenient DNA sample collection at your preferred location within Kenya.',
    fullDescription: 'Home DNA testing allows you to have your DNA samples collected at your preferred location in Kenya, whether at your home, office, or another convenient venue. Our trained sample collectors travel to you, ensuring a comfortable and private testing experience. This service is available in Nairobi and surrounding areas.',
    participants: ['All tested parties at chosen location'],
    keyFeatures: ['Convenient location of your choice', 'Trained sample collectors', 'Private and comfortable', 'Available in Nairobi area', 'Same professional standards'],
    icon: '🏠',
    category: 'specialised'
  }
];

export const locations = [
  {
    id: 'nairobi',
    name: 'Nairobi',
    slug: 'nairobi',
    description: 'Biotel DNA provides DNA testing services in Nairobi, Kenya\'s capital city. Our Nairobi services include paternity testing, relationship DNA tests, and legal DNA testing with convenient sample collection across the city.',
    services: ['Paternity DNA Test', 'Siblingship DNA Test', 'Grandparent DNA Test', 'Maternity DNA Test', 'DNA Test for Court', 'Immigration DNA Test', 'Home DNA Testing'],
    isPrimary: true
  },
  {
    id: 'mombasa',
    name: 'Mombasa',
    slug: 'mombasa',
    description: 'DNA testing services are available in Mombasa for clients on the Kenyan coast. We coordinate sample collection and testing for clients in Mombasa and the surrounding Coastal region.',
    services: ['Paternity DNA Test', 'Relationship DNA Tests', 'Legal DNA Testing'],
    isPrimary: false
  },
  {
    id: 'kisumu',
    name: 'Kisumu',
    slug: 'kisumu',
    description: 'Biotel DNA serves clients in Kisumu and the Lake Region of Kenya. DNA sample collection and testing coordination is available for clients in Kisumu and surrounding areas.',
    services: ['Paternity DNA Test', 'Relationship DNA Tests', 'Legal DNA Testing'],
    isPrimary: false
  }
];

export const faqs = [
  {
    question: 'How does a DNA paternity test work?',
    answer: 'A DNA paternity test compares the genetic markers of a child with those of the alleged father. Since a child inherits half of their DNA from each parent, the test can determine with a very high degree of accuracy whether the tested man is the biological father. Sample collection is simple — usually a buccal (cheek) swab — and the process is painless and non-invasive.'
  },
  {
    question: 'How much does a DNA test cost in Kenya?',
    answer: 'The cost of a DNA test in Kenya depends on the type of test, the number of participants, and whether you need a private (peace of mind) test or a legal test with chain-of-custody procedures. Contact Biotel DNA for current pricing and a personalised quotation based on your specific needs.'
  },
  {
    question: 'How long does it take to get DNA test results?',
    answer: 'Turnaround times vary depending on the type of test and current laboratory workload. Generally, results are available within a few working days after samples are received at the laboratory. Contact us for current estimated turnaround times for your specific test.'
  },
  {
    question: 'Is DNA testing confidential?',
    answer: 'Yes. Biotel DNA takes confidentiality very seriously. All test information, results, and personal details are handled with strict privacy protocols. Results are shared only with authorised individuals and are never disclosed to third parties without consent.'
  },
  {
    question: 'What is the difference between a private and a legal DNA test?',
    answer: 'A private DNA test (also called a peace of mind test) is for personal knowledge only and does not follow formal identification procedures. A legal DNA test follows strict chain-of-custody procedures, with formal identification of all participants and authorised sample collection, making the results suitable for court or official purposes.'
  },
  {
    question: 'Can a DNA test be done without the mother\'s participation?',
    answer: 'Yes. A paternity DNA test can be conducted with just the child and the alleged father. However, including the mother\'s sample can strengthen the accuracy and conclusiveness of the results. If the mother is unavailable, the test can still provide reliable results.'
  },
  {
    question: 'How are DNA samples collected?',
    answer: 'DNA samples are typically collected using a buccal swab — a soft swab rubbed gently on the inside of the cheek. This is painless, non-invasive, and takes only a few seconds. Sample collection can be done at our facility, at your location (home DNA testing), or at a designated collection point.'
  },
  {
    question: 'What do I need to bring for a legal DNA test?',
    answer: 'For a legal DNA test, all participants must bring valid government-issued photo identification (such as a national ID, passport, or other accepted identification). Children may require a birth certificate or other documentation. The sample collector will verify identities as part of the chain-of-custody process.'
  },
  {
    question: 'Can DNA test results be used in court in Kenya?',
    answer: 'DNA test results from a legal test — conducted with proper chain-of-custody procedures and formal identification — can be used as evidence in Kenyan courts. The test must follow specific legal protocols. Contact Biotel DNA to discuss your specific legal requirements.'
  },
  {
    question: 'Do you offer DNA testing outside Nairobi?',
    answer: 'Yes. Biotel DNA coordinates DNA testing services in various locations across Kenya, including Mombasa, Kisumu, and other regions. Sample collection can be arranged at designated points or through our mobile collection services. Contact us to discuss availability in your area.'
  }
];
