import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, Shield, AlertCircle } from 'lucide-react';
import {
  knowledgeBase,
  greetingMessage,
  escalationMessage,
  privacyNotice,
  getResponse,
  type ConversationState
} from '../data/chatbotKnowledge';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  followUp?: string[];
  requiresEscalation?: boolean;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [state, setState] = useState<ConversationState>({
    stage: 'greeting',
    questionsAsked: []
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setTimeout(() => {
        addBotMessage(greetingMessage);
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string, followUp?: string[], requiresEscalation?: boolean) => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text,
      isBot: true,
      timestamp: new Date(),
      followUp,
      requiresEscalation
    }]);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text,
      isBot: false,
      timestamp: new Date()
    }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    addUserMessage(userMessage);
    setInput('');
    setIsTyping(true);

    // Update state
    setState(prev => ({
      ...prev,
      stage: 'information',
      questionsAsked: [...prev.questionsAsked, userMessage]
    }));

    // Simulate thinking delay (800-1500ms for realistic feel)
    const delay = 800 + Math.random() * 700;
    setTimeout(() => {
      setIsTyping(false);
      const response = getResponse(userMessage, state);
      addBotMessage(response.response, response.followUp, response.requiresEscalation);
    }, delay);
  };

  const handleQuickReply = (reply: string) => {
    addUserMessage(reply);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const response = getResponse(reply, state);
      addBotMessage(response.response, response.followUp, response.requiresEscalation);
    }, 800 + Math.random() * 700);
  };

  const handleEscalate = () => {
    addUserMessage('I would like to speak with a human representative');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      addBotMessage(escalationMessage, [], true);
    }, 1000);
  };

  // Get the latest follow-up options from the most recent bot message
  const getLatestFollowUp = (): string[] | undefined => {
    for (let i = messages.length - 1; i >= 0; i--) {
      const msg = messages[i];
      if (msg && msg.isBot && msg.followUp && msg.followUp.length > 0) {
        return msg.followUp;
      }
    }
    return undefined;
  };

  const latestFollowUp = getLatestFollowUp();
  const showFollowUp = latestFollowUp && !isTyping && messages.length > 0;

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-50 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-all hover:scale-105 group"
          aria-label="Open DNA testing assistant"
        >
          <Bot size={24} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse"></span>
          <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            DNA Testing Help
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Biotel DNA Assistant</h3>
                <div className="flex items-center gap-1.5 text-xs text-blue-100">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Confidential & Professional
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close assistant"
            >
              <X size={18} />
            </button>
          </div>

          {/* Privacy Notice Banner */}
          <div className="bg-blue-50 border-b border-blue-100 px-4 py-2 flex items-start gap-2 text-xs text-blue-800 flex-shrink-0">
            <Shield size={14} className="mt-0.5 flex-shrink-0 text-primary" />
            <span>This is an informational assistant. For specific pricing, case details, or legal advice, please contact us directly.</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.isBot ? '' : 'flex-row-reverse'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.isBot ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                  {msg.isBot ? <Bot size={16} className="text-primary" /> : <User size={16} className="text-secondary" />}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.isBot
                    ? 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                    : 'bg-primary text-white'
                }`}>
                  {msg.text.split('\n').map((line, i) => {
                    // Handle bold text (**text**)
                    const parts = line.split(/(\*\*[^*]+\*\*)/g);
                    return (
                      <span key={i} className="block">
                        {parts.map((part, j) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={j}>{part.slice(2, -2)}</strong>;
                          }
                          // Handle bullet points
                          if (part.startsWith('•')) {
                            return <span key={j} className="block pl-2">{part}</span>;
                          }
                          return <span key={j}>{part}</span>;
                        })}
                        {i < msg.text.split('\n').length - 1 && <br />}
                      </span>
                    );
                  })}
                  {msg.requiresEscalation && (
                    <div className="mt-3 pt-3 border-t border-gray-200 flex items-center gap-2 text-xs text-amber-700">
                      <AlertCircle size={14} />
                      <span>Human assistance recommended</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-primary" />
                </div>
                <div className="bg-white rounded-2xl px-4 py-3 border border-gray-200 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Buttons */}
          {showFollowUp && (
            <div className="px-4 py-2 bg-white border-t border-gray-100 flex-shrink-0">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {latestFollowUp!.slice(0, 4).map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuickReply(q)}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors border border-gray-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Escalation Button */}
          {messages.length > 3 && !messages[messages.length - 1]?.requiresEscalation && (
            <div className="px-4 py-2 bg-white border-t border-gray-100 flex-shrink-0">
              <button
                onClick={handleEscalate}
                className="text-xs text-primary hover:text-primary-dark flex items-center gap-1.5 font-medium"
              >
                <Phone size={12} /> Speak with a human representative
              </button>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white flex-shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 px-2">
              <p className="text-xs text-gray-400">
                For specific pricing or case details, contact us directly.
              </p>
              <a
                href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20to%20enquire%20about%20DNA%20testing."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
