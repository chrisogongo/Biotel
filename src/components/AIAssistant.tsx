import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const knowledgeBase: { keywords: string[]; response: string }[] = [
  {
    keywords: ['paternity', 'father', 'dad', 'fatherhood'],
    response: 'A paternity DNA test determines whether a man is the biological father of a child. The test compares the child\'s DNA with the alleged father\'s DNA using a simple, painless cheek swab. The mother\'s participation is optional but can strengthen the results. You can have this as a private test (for personal knowledge) or a legal test (for court use). Would you like to know more about the process or pricing?'
  },
  {
    keywords: ['cost', 'price', 'how much', 'expensive', 'affordable', 'fee', 'charges'],
    response: 'The cost of a DNA test in Kenya depends on the type of test, number of participants, and whether you need a private or legal test. For accurate pricing specific to your situation, please contact Biotel DNA directly:\n\n📞 Phone: +254 711 371092\n💬 WhatsApp: Click the green WhatsApp button\n\nWe provide clear quotations with no hidden costs.'
  },
  {
    keywords: ['how long', 'time', 'turnaround', 'results', 'when', 'days', 'weeks'],
    response: 'Turnaround times for DNA test results vary depending on the type of test and current laboratory workload. Generally, results are available within a few working days after samples reach the laboratory. For current estimated turnaround times, please contact us directly at +254 711 371092.'
  },
  {
    keywords: ['sample', 'collection', 'swab', 'cheek', 'how', 'process', 'procedure'],
    response: 'DNA samples are collected using a buccal (cheek) swab — a soft swab gently rubbed on the inside of the cheek. The process is:\n\n• Painless and non-invasive\n• Takes only a few seconds per person\n• No needles or blood required\n• Can be done at our facility or your preferred location (home DNA testing)\n\nFor legal tests, samples are collected by authorised personnel with proper identification and chain-of-custody procedures.'
  },
  {
    keywords: ['private', 'legal', 'court', 'difference', 'admissible'],
    response: 'The key differences are:\n\n**Private DNA Test:**\n• For personal knowledge only\n• No formal ID required\n• Results NOT admissible in court\n• Generally more affordable\n\n**Legal DNA Test:**\n• Court-admissible results\n• Formal ID verification required\n• Chain-of-custody procedures\n• Authorised sample collection\n• Required for court, immigration, and official purposes\n\nBoth use the same scientific analysis. Contact us to discuss which type suits your needs.'
  },
  {
    keywords: ['sibling', 'brother', 'sister', 'siblingship'],
    response: 'A siblingship DNA test determines whether two or more people are biological siblings (sharing one or both parents). It can establish full siblingship (same mother and father) or half-siblingship (sharing one parent). No parent participation is required. The test provides a statistical probability of the sibling relationship.'
  },
  {
    keywords: ['grandparent', 'grandfather', 'grandmother'],
    response: 'A grandparent DNA test determines whether a child is biologically related to alleged grandparents. This is useful when the parent who connects the child to the grandparents is unavailable for testing. Having both grandparents participate improves accuracy. The test compares genetic markers between the child and grandparent(s).'
  },
  {
    keywords: ['immigration', 'visa', 'embassy'],
    response: 'An immigration DNA test provides biological evidence of family relationships to support visa and immigration applications. These tests follow specific protocols required by immigration authorities and may involve testing participants in different countries. Results are provided in a format suitable for submission to immigration offices. Contact us for specific immigration testing requirements.'
  },
  {
    keywords: ['mother', 'maternity', 'without mother'],
    response: 'Yes, a paternity DNA test can be done without the mother\'s participation — just the child and alleged father. However, including the mother\'s sample can strengthen the accuracy and conclusiveness of the results. If the mother is unavailable, the test can still provide reliable results.\n\nA maternity DNA test (confirming the biological mother) is also available for immigration, legal, or personal reasons.'
  },
  {
    keywords: ['confidential', 'privacy', 'secret', 'private'],
    response: 'Yes, DNA testing at Biotel DNA is completely confidential. We take your privacy very seriously:\n\n• All test information is handled with strict privacy protocols\n• Results are shared only with authorised individuals\n• Personal details are never disclosed to third parties\n• Your information is stored securely\n\nWe understand that DNA testing involves sensitive matters and treat every case with the utmost discretion.'
  },
  {
    keywords: ['location', 'where', 'nairobi', 'mombasa', 'kisumu', 'near me'],
    response: 'Biotel DNA provides DNA testing services across Kenya:\n\n📍 **Nairobi** — Our primary service centre with full testing capabilities\n📍 **Mombasa** — DNA testing coordination available\n📍 **Kisumu** — DNA testing coordination available\n\nWe also offer home DNA testing — sample collection at your preferred location in Nairobi. For other areas, contact us to discuss availability.'
  },
  {
    keywords: ['id', 'identification', 'documents', 'requirements', 'bring'],
    response: 'For a **private DNA test**: No formal ID is required. All participants simply need to consent.\n\nFor a **legal DNA test**: All adults must bring valid government-issued photo ID (national ID card, passport, etc.). Children may need a birth certificate. The sample collector will verify identities as part of the chain-of-custody process.\n\nGeneral requirements:\n• Avoid eating/drinking 30 minutes before sample collection\n• All participants must voluntarily consent\n• For minors, guardian consent is needed'
  },
  {
    keywords: ['contact', 'phone', 'call', 'whatsapp', 'reach', 'talk'],
    response: 'You can reach Biotel DNA through:\n\n📞 **Phone:** +254 711 371092\n💬 **WhatsApp:** Click the green WhatsApp button on this page\n📧 **Email:** info@bioteldna.co.ke\n📝 **Online Form:** Visit our Contact page\n\n**Business Hours:** Monday - Saturday, 8:00 AM - 6:00 PM\n\nWe\'re happy to answer your questions and help you understand your DNA testing options.'
  },
  {
    keywords: ['home', 'house', 'office', 'convenient'],
    response: 'Yes! We offer home DNA testing in Nairobi. Our trained sample collectors can come to your preferred location — whether that\'s your home, office, or another convenient venue. The service maintains the same professional standards as testing at our facility. Contact us to arrange home sample collection.'
  },
  {
    keywords: ['y-dna', 'lineage', 'paternal', 'ancestry'],
    response: 'A Y-DNA paternal lineage test analyses the Y chromosome, which is passed from father to son. This test can:\n\n• Determine whether males share a common paternal ancestor\n• Trace paternal lineage\n• Be used for genealogical research\n\nThis test is only applicable to males (since only males have a Y chromosome). Contact us for more details about Y-DNA testing.'
  }
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  
  // Check for greetings
  if (/^(hi|hello|hey|habari|jambo|good morning|good afternoon|good evening)/.test(lower)) {
    return 'Hello! Welcome to Biotel DNA. I\'m here to help answer your questions about DNA testing in Kenya. You can ask me about:\n\n• Types of DNA tests available\n• The testing process\n• Pricing information\n• Sample collection\n• Private vs legal testing\n• Results and turnaround times\n• Locations\n\nHow can I help you today?';
  }

  // Search knowledge base
  let bestMatch = '';
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lower.includes(keyword)) {
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry.response;
    }
  }

  if (bestMatch) {
    return bestMatch;
  }

  return 'Thank you for your question. I want to make sure you get accurate information, so I\'d recommend contacting Biotel DNA directly for a personalised answer:\n\n📞 Phone: +254 711 371092\n💬 WhatsApp: Click the green WhatsApp button\n📝 Contact Form: Visit our Contact page\n\nOur team can discuss your specific situation and provide detailed guidance. Is there anything else I can help with?';
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I\'m the Biotel DNA assistant. I can help answer questions about DNA testing in Kenya. How can I help you today?',
      isBot: true
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate thinking delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(input),
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const quickQuestions = [
    'How much does a DNA test cost?',
    'What is the testing process?',
    'Private vs legal test?',
    'How long for results?'
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-50 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors"
          aria-label="Open DNA testing assistant"
        >
          <Bot size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <div>
                <h3 className="font-semibold text-sm">Biotel DNA Assistant</h3>
                <p className="text-xs text-blue-200">DNA Testing Help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Close assistant"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.isBot ? '' : 'flex-row-reverse'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${msg.isBot ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                  {msg.isBot ? <Bot size={14} className="text-primary" /> : <User size={14} className="text-secondary" />}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.isBot ? 'bg-gray-100 text-gray-800' : 'bg-primary text-white'}`}>
                  {msg.text.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < msg.text.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => {
                        const userMsg: Message = { id: messages.length + 1, text: q, isBot: false };
                        setMessages(prev => [...prev, userMsg]);
                        setTimeout(() => {
                          const botMsg: Message = { id: messages.length + 2, text: getResponse(q), isBot: true };
                          setMessages(prev => [...prev, botMsg]);
                        }, 800);
                        setInput('');
                      }, 100);
                    }}
                    className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              For specific pricing or case details, please contact us directly.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
