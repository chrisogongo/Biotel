import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20to%20enquire%20about%20DNA%20testing%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
