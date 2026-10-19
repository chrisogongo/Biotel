# Biotel DNA AI Chatbot Design Document

## 📋 Overview

The Biotel DNA AI chatbot is a professional, confidential assistant designed to help visitors understand DNA testing services in Kenya. It provides general information while maintaining strict ethical boundaries and protecting user privacy.

---

## 🎯 Design Principles

### 1. **Professional & Healthcare-Appropriate**
- Clean, medical-style interface
- Calm, empathetic tone
- Professional language (Kenyan English)
- Trust-building design elements

### 2. **Privacy-First**
- No collection of sensitive personal data
- Clear privacy notices
- Encourages direct contact for case-specific details
- Secure, confidential interaction

### 3. **Ethical Boundaries**
The chatbot will **NEVER**:
- ❌ Fabricate specific prices
- ❌ Promise exact turnaround times
- ❌ Make legal determinations or provide legal advice
- ❌ Diagnose or make medical recommendations
- ❌ Guarantee specific results or accuracy percentages
- ❌ Make unverified accreditation claims
- ❌ Collect sensitive personal information
- ❌ Make assumptions about user circumstances

The chatbot **WILL**:
- ✅ Provide general information about test types
- ✅ Explain the testing process
- ✅ Describe sample collection methods
- ✅ Distinguish between private and legal testing
- ✅ Direct users to contact for specific pricing
- ✅ Offer WhatsApp and phone contact options
- ✅ Escalate complex questions to human representatives
- ✅ Protect user privacy and confidentiality

### 4. **Helpful & Actionable**
- Clear next steps
- Multiple contact options
- Quick reply suggestions
- Easy escalation path

---

## 🧠 Knowledge Base Architecture

### Structure
The knowledge base (`src/data/chatbotKnowledge.ts`) contains verified information organized by category:

#### Categories:
1. **test-type** — Information about different DNA tests
   - Paternity test
   - Siblingship test
   - Grandparent test
   - Maternity test
   - Avuncular test
   - Y-DNA paternal lineage test

2. **process** — How testing works
   - General process
   - Sample collection
   - Home testing options
   - Testing without mother
   - Locations

3. **pricing** — Cost information
   - General pricing guidance (no specific numbers)
   - Factors affecting price
   - Payment methods

4. **legal** — Legal testing information
   - Private vs legal distinction
   - Legal requirements
   - Court usage
   - Immigration testing

5. **results** — Results information
   - General turnaround guidance (no specific times)
   - Results delivery
   - Understanding results

6. **privacy** — Confidentiality and data protection
   - Confidentiality guarantees
   - Data protection measures

7. **escalation** — Contact information
   - Phone, WhatsApp, email details
   - Business hours

### Entry Structure
Each knowledge base entry contains:
```typescript
{
  id: string;              // Unique identifier
  category: string;        // Category type
  keywords: string[];      // Trigger keywords
  question: string;        // Sample question
  answer: string;          // Verified response
  followUp?: string[];     // Suggested follow-up questions
  requiresEscalation?: boolean;  // Flag for human handoff
}
```

---

## 💬 Conversation Flow

### 1. **Greeting Stage**
When the chatbot opens:
```
Hello! I'm the Biotel DNA assistant. I'm here to help answer your 
questions about DNA testing in Kenya.

I can provide information about:
• Types of DNA tests available
• The testing process
• Sample collection
• Private vs legal testing
• Results and confidentiality

**How can I help you today?**

To get started, what type of DNA test are you enquiring about? 
For example:
• Paternity test
• Siblingship test
• Grandparent test
• Or another type of test
```

### 2. **Information Stage**
User asks a question → Chatbot:
1. Detects intent using keyword matching
2. Retrieves appropriate response from knowledge base
3. Provides verified information
4. Offers follow-up questions
5. Adds disclaimers for pricing/results questions

### 3. **Escalation Stage**
When needed:
- User explicitly requests human assistance
- Question requires specific pricing/timelines
- Complex legal or medical questions
- User seems confused or frustrated

Escalation message:
```
Thank you for your question. To ensure you receive accurate 
information specific to your situation, I recommend speaking 
directly with our team.

**Contact Biotel DNA:**
📱 WhatsApp: +254 711 371092
📞 Phone: +254 711 371092

Our team can:
• Provide personalised quotations
• Discuss your specific requirements
• Arrange testing at your convenience
• Answer detailed questions

Would you like me to help you with anything else, or shall I 
connect you with our team?
```

---

## 🎨 User Interface Design

### Visual Elements

#### Chat Window
- **Size:** 420px wide × 600px tall (responsive on mobile)
- **Position:** Bottom-right corner
- **Style:** Clean, rounded corners, subtle shadow
- **Colors:** Professional blue (#0e4d92) with white background

#### Header
- Gradient background (primary to primary-dark)
- Bot avatar with green "online" indicator
- "Confidential & Professional" subtitle
- Close button

#### Privacy Notice Banner
- Blue background below header
- Shield icon
- Brief disclaimer about informational nature
- Encourages direct contact for specifics

#### Message Bubbles
- **Bot messages:** White background, left-aligned, with bot avatar
- **User messages:** Primary blue background, right-aligned, with user avatar
- **Formatting:** Supports bold text, bullet points, line breaks
- **Escalation indicator:** Amber alert icon for messages requiring human assistance

#### Quick Reply Buttons
- Appear below recent bot messages
- Rounded pill buttons
- Gray background with hover effect
- Limited to 4 most relevant follow-ups

#### Input Area
- Rounded input field
- Send button with primary color
- Placeholder text: "Type your question..."
- Footer with privacy reminder and WhatsApp link

#### Typing Indicator
- Three animated dots
- Appears while bot is "thinking"
- 800-1500ms delay for realistic feel

### Toggle Button
- **Size:** 56px × 56px circle
- **Position:** Fixed bottom-right, 24px from edges
- **Color:** Primary blue
- **Icon:** Bot icon
- **Badge:** Green pulsing dot (indicates availability)
- **Tooltip:** "DNA Testing Help" on hover

---

## 🔒 Privacy & Security Features

### 1. **No Data Collection**
- Chatbot does not store conversation history
- No personal information is collected
- No cookies or tracking
- All interactions are session-based only

### 2. **Privacy Notices**
- Banner at top of chat window
- Reminder in input footer
- Privacy notice available in knowledge base
- Encourages direct contact for sensitive details

### 3. **Secure Escalation**
- Directs users to verified contact methods
- WhatsApp link with pre-filled message
- Click-to-call phone links
- No intermediary data collection

### 4. **Content Safety**
- No collection of:
  - Names or identities
  - Contact details
  - Family circumstances
  - Legal case details
  - Medical information
  - Financial information

---

## 🎯 Intent Detection

### Keyword Matching Algorithm
The chatbot uses a simple but effective keyword matching system:

1. **Input Processing:**
   - Convert message to lowercase
   - Remove extra whitespace
   - Check against keyword lists

2. **Matching Logic:**
   - Iterate through knowledge base entries
   - For each entry, check if any keyword appears in message
   - Return all matching entry IDs
   - Select first (best) match

3. **Priority Handling:**
   - Greetings detected first (regex pattern)
   - Escalation requests detected second
   - Privacy concerns detected third
   - General intent detection last

### Example Intent Detection
```
User: "How much does a paternity test cost?"
↓
Keywords matched: ['cost', 'paternity']
↓
Best match: 'pricing-general' entry
↓
Response: General pricing information + disclaimer + escalation offer
```

---

## 📱 Responsive Design

### Desktop (> 640px)
- Full 420px width chat window
- All features visible
- Comfortable spacing

### Mobile (< 640px)
- Chat window: calc(100vw - 2rem)
- Reduced padding
- Stacked quick reply buttons
- Optimized for touch interaction

---

## 🔄 State Management

### Conversation State
```typescript
interface ConversationState {
  stage: 'greeting' | 'test-type' | 'information' | 'escalation' | 'closing';
  testType?: string;
  questionsAsked: string[];
  lastResponse?: string;
}
```

### State Transitions
1. **Greeting** → User asks question → **Information**
2. **Information** → User requests escalation → **Escalation**
3. **Escalation** → User continues → **Information** or **Closing**

---

## 🎨 Accessibility Features

### Visual Accessibility
- High contrast text (WCAG AA compliant)
- Clear focus indicators
- Readable font sizes (14-16px)
- Sufficient color contrast ratios

### Interaction Accessibility
- Keyboard navigation support
- Enter key to send messages
- Clear button labels
- ARIA labels for icons
- Screen reader friendly structure

### Cognitive Accessibility
- Simple, clear language
- Consistent interface patterns
- Helpful suggestions (quick replies)
- Clear escalation path
- No time pressure

---

## 📊 Performance Considerations

### Load Time
- Knowledge base loaded on-demand
- No external API calls
- Minimal JavaScript bundle
- Lazy-loaded component

### Response Time
- Typing indicator provides feedback
- 800-1500ms simulated delay (realistic)
- Instant quick reply buttons
- Smooth scrolling to new messages

### Memory Usage
- Session-based only (no persistence)
- Messages cleared on close
- No local storage usage
- Minimal memory footprint

---

## 🧪 Testing Scenarios

### Test Case 1: Paternity Test Enquiry
```
User: "I want to know about paternity testing"
Expected: Information about paternity test + follow-up questions
```

### Test Case 2: Pricing Question
```
User: "How much does it cost?"
Expected: General pricing factors + disclaimer + escalation offer
```

### Test Case 3: Legal Test Question
```
User: "Can I use this for court?"
Expected: Private vs legal explanation + requirements + escalation
```

### Test Case 4: Escalation Request
```
User: "I need to speak to someone"
Expected: Full contact information + WhatsApp/phone links
```

### Test Case 5: Privacy Concern
```
User: "Is this confidential?"
Expected: Confidentiality information + privacy notice
```

### Test Case 6: Unknown Question
```
User: "What's the weather like?"
Expected: Polite escalation to human representative
```

---

## 🚀 Deployment Checklist

### Pre-Launch
- [ ] Test all knowledge base entries
- [ ] Verify all contact information
- [ ] Test on mobile devices
- [ ] Check accessibility compliance
- [ ] Review privacy notices
- [ ] Test escalation paths
- [ ] Verify quick reply functionality
- [ ] Check typing indicator timing
- [ ] Test in different browsers

### Post-Launch Monitoring
- [ ] Monitor user satisfaction
- [ ] Track escalation requests
- [ ] Identify knowledge gaps
- [ ] Collect feedback
- [ ] Update knowledge base as needed
- [ ] Monitor response accuracy

---

## 📈 Future Enhancements

### Phase 2 (Potential)
- Multi-language support (Swahili)
- Integration with CRM for lead tracking
- Appointment scheduling
- Document upload for legal tests
- Video consultation booking

### Phase 3 (Potential)
- AI-powered intent classification (ML-based)
- Sentiment analysis for user frustration
- Automated FAQ suggestions
- Integration with Google Calendar
- SMS follow-up system

---

## 📞 Support & Maintenance

### Knowledge Base Updates
- Review monthly based on user questions
- Add new entries for emerging topics
- Update contact information as needed
- Remove outdated information
- Verify all links and phone numbers

### Bug Fixes
- Monitor for TypeScript errors
- Test after dependency updates
- Check mobile responsiveness
- Verify accessibility compliance

### User Feedback
- Collect feedback via WhatsApp
- Monitor escalation reasons
- Track common questions
- Identify knowledge gaps
- Improve response quality

---

## 🎓 Training & Documentation

### For Content Team
- How to add new knowledge base entries
- Guidelines for writing responses
- Privacy and ethical boundaries
- Tone and language guidelines
- Escalation criteria

### For Developers
- Code structure overview
- Adding new features
- Testing procedures
- Deployment process
- Monitoring and maintenance

---

## 📋 Compliance & Legal

### Data Protection
- No personal data collected
- No data storage
- No third-party sharing
- Session-based only
- Compliant with Kenya Data Protection Act

### Medical Disclaimer
- Chatbot provides general information only
- Not a substitute for professional advice
- Users directed to qualified professionals
- No medical diagnoses or recommendations

### Legal Disclaimer
- Chatbot provides general information only
- Not a substitute for legal advice
- Users directed to qualified legal professionals
- No legal determinations or guarantees

---

## ✅ Success Metrics

### Engagement Metrics
- Chat open rate
- Average conversation length
- Number of messages per session
- Quick reply usage rate
- Escalation rate

### Quality Metrics
- Response accuracy
- User satisfaction (if measured)
- Escalation reasons
- Knowledge base coverage
- Response time

### Business Metrics
- WhatsApp enquiries generated
- Phone calls generated
- Quotation requests
- Conversion rate
- Customer satisfaction

---

## 🎉 Conclusion

The Biotel DNA AI chatbot is designed to be a helpful, professional, and ethical assistant that provides valuable information while maintaining strict boundaries. It prioritizes user privacy, directs complex questions to human representatives, and ensures all information is accurate and verified.

**Key Achievements:**
✅ Professional healthcare-style interface
✅ Comprehensive knowledge base with verified information
✅ Strict ethical boundaries (no fabrication)
✅ Privacy-first design
✅ Easy escalation to human representatives
✅ Mobile-responsive and accessible
✅ Fast and reliable performance

**Ready for deployment and continuous improvement.**

---

*Document Version: 1.0*
*Last Updated: 2026*
*For: Biotel DNA Kenya*
