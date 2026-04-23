import { MessageCircle } from "lucide-react";

const FloatingContactButton = () => (
  <a
    href="https://www.instagram.com/languagenow.pa"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-all animate-float"
  >
    <MessageCircle size={28} />
  </a>
);

export default FloatingContactButton;
