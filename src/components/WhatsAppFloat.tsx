import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://api.whatsapp.com/send?phone=5567999636464&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle className="text-foreground" size={26} />
  </a>
);

export default WhatsAppFloat;
