export const SITE = {
  name: "Velunix Studio",
  url: "https://velunixstudio.ro",
  phoneDisplay: "0748 337 814",
  phoneTel: "+40748337814",
  email: "contact@velunixstudio.ro",
  tagline: "Digital presence. Elevated.",
  description:
    "Site-uri de prezentare premium · SEO local · Mentenanță web. Construim o prezență digitală care inspiră încredere și ajută afacerile locale să fie găsite.",
};

export const WHATSAPP = `https://wa.me/40748337814?text=${encodeURIComponent(
  "Bună ziua, aș dori o discuție despre un site de prezentare.",
)}`;

export const MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Discuție gratuită despre un site",
)}&body=${encodeURIComponent(
  "Bună ziua,\n\nMă numesc ... și am o afacere (...). Aș dori un site de prezentare.\n\nVă mulțumesc!",
)}`;
