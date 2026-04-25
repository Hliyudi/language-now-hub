import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/50766778280";

const FloatingContactButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-all animate-float cursor-pointer"
      style={{ touchAction: "manipulation" }}
    >
      <MessageCircle size={28} style={{ pointerEvents: "none" }} />
    </a>
  );
};

export default FloatingContactButton;
