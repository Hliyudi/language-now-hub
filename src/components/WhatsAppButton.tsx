import { Instagram } from "lucide-react";

const FloatingContactButton = () => (
  <a
    href="https://www.instagram.com/languagenow.pa"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all animate-float"
    style={{
      background:
        "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    }}
  >
    <Instagram size={28} />
  </a>
);

export default FloatingContactButton;
