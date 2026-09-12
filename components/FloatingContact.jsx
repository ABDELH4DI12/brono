import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContact() {
  return <div className="floating-contact"><a href="tel:+212606077094"><Phone size={18} /> Appeler</a><a href="https://wa.me/212606077094" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a></div>;
}
