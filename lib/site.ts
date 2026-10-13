export const SITE = {
  name: "Velunix Studio",
  url: "https://velunixstudio.ro",
  phoneDisplay: "0748 337 814",
  phoneTel: "+40748337814",
  email: "contact@velunixstudio.ro",
  tagline: "Mic studio, standarde mari.",
  description:
    "Site-uri de prezentare programate manual, rapide și sigure, pentru afaceri locale din România. Calitate premium, prețuri corecte. Discuție gratuită de 30 de minute.",
};

export const WHATSAPP = `https://wa.me/40748337814?text=${encodeURIComponent(
  "Bună ziua, aș dori o discuție despre un site de prezentare.",
)}`;

export const MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Discuție gratuită despre un site",
)}&body=${encodeURIComponent(
  "Bună ziua,\n\nMă numesc ... și am o afacere (...). Aș dori un site de prezentare.\n\nVă mulțumesc!",
)}`;
