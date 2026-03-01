import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/whatsapp";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30 hover:scale-110 hover:bg-accent-hover transition-all"
  >
    <MessageCircle className="text-accent-foreground" size={26} />
  </a>
);

export default WhatsAppFloat;
