export type Item = string | { lead: string; text: string };

export const startItems: Item[] = [
  "Design personalizat, modern, 100% responsive și optimizat pentru toate dispozitivele (desktop, laptop, tabletă, telefon)",
  "Site de prezentare de până la 8 pagini",
  "Găzduire și domeniu incluse pe primul an",
  {
    lead: "SEO de bază inclus din prima zi:",
    text: "optimizare tehnică inițială (titluri, meta etichete, structură corectă în pagină și viteză de încărcare optimizată), ca site-ul tău să aibă o fundație corectă și să nu fie un „site-fantomă”",
  },
  "Certificat SSL și securitate configurate",
  "Formular de contact simplu, dacă este necesar, cu bifă de consimțământ GDPR (fără protecția Cloudflare, disponibilă în pachetul Complet)",
  "Politică de confidențialitate și cookie banner, implementate pentru conformitate cu legislația în vigoare (GDPR)",
  "Training de administrare",
  "30 de zile de suport tehnic după lansare",
];

export const fullItems: Item[] = [
  "Site de prezentare de până la 12 pagini",
  "Formular de contact securizat cu Cloudflare (protecție anti-spam și anti-boți), cu bifă de consimțământ GDPR, cu datele trimise direct pe emailul afacerii tale",
  "Integrare WhatsApp (buton de contact direct) și Google Maps (hartă și indicații către locația ta)",
  "Conectare Google Analytics",
  {
    lead: "Îmbunătățire SEO avansată:",
    text: "optimizare Google Business Profile, structură extinsă și viteză maximizată",
  },
  "CMS headless: îți poți modifica singur textele, prețurile și pozele, fără risc să strici designul",
];

export const startHighlights = [
  "Până la 8 pagini",
  "Design personalizat, responsive pe toate dispozitivele",
  "Găzduire și domeniu incluse pe primul an",
  "SEO de bază, viteză optimizată, SSL",
  "Politică de confidențialitate și cookie banner (GDPR)",
];

export const fullHighlights = [
  "Până la 12 pagini",
  "Formular de contact securizat cu Cloudflare",
  "Integrare WhatsApp și Google Maps",
  "Google Analytics și SEO avansat",
  "CMS: îți modifici singur textele, prețurile și pozele",
];

export type Cell = "yes" | "no" | string;
export const planRows: { label: string; esential: Cell; crestere: Cell }[] = [
  { label: "Hosting gestionat, SSL, backup-uri, monitorizare uptime", esential: "yes", crestere: "yes" },
  { label: "Securitate, update-uri tehnice constante", esential: "yes", crestere: "yes" },
  { label: "Remedieri prioritare în 24h lucrătoare", esential: "yes", crestere: "yes" },
  { label: "2 ore de modificări de conținut pe lună", esential: "yes", crestere: "yes" },
  { label: "Administrare și optimizare Google Business Profile", esential: "no", crestere: "yes" },
  { label: "Optimizare SEO continuă, pe pagină și tehnică", esential: "no", crestere: "yes" },
  { label: "2 articole SEO redactate pe lună, pentru atragerea clienților", esential: "no", crestere: "yes" },
  { label: "Raport lunar de activitate și performanță", esential: "scurt", crestere: "detaliat" },
];

export const shiftLog = [
  { t: "07:42", text: "Cineva caută serviciile tale pe Google și ajunge pe site-ul tău." },
  { t: "09:15", text: "Pagina se deschide instant pe telefon, fără să aștepte." },
  { t: "12:30", text: "Un client apasă butonul de apel și te sună direct." },
  { t: "18:05", text: "Altcineva îți scrie pe WhatsApp, fără formulare lungi." },
  { t: "21:48", text: "Un client verifică programul și harta pentru mâine." },
  { t: "23:10", text: "Site-ul rămâne online și securizat. Tu dormi.", last: true },
];

export const steps = [
  { title: "Discutăm 30 de minute", text: "Gratuit, despre afacerea și nevoile tale." },
  { title: "Alegi pachetul", text: "Semnăm contractul și stabilim termenele." },
  { title: "Construim site-ul", text: "Cu 2 runde de revizuiri incluse." },
  { title: "Lansăm și te instruim", text: "Rămânem alături de tine 30 de zile după lansare." },
];

export const faq = [
  {
    q: "Site-ul rămâne al meu?",
    a: "Da. Domeniul este înregistrat pe numele tău, iar după achitarea integrală deții conținutul și design-ul site-ului. La nevoie, îți predăm fișierele și te ajutăm să muți site-ul pe altă găzduire.",
  },
  {
    q: "Sunt obligat să plătesc un abonament lunar?",
    a: "Nu. Planurile lunare nu au contract minim, iar tu poți renunța oricând, cu preaviz de 30 de zile. Dacă vrei doar găzduire după primul an, avem și un plan separat, mai mic.",
  },
  {
    q: "Pot să schimb singur textele și pozele?",
    a: "Da, prin CMS (sistemul de gestiune al conținutului), fără risc să strici design-ul. Altfel, ne ocupăm noi de modificări, în orele incluse în planul lunar.",
  },
  {
    q: "Cât durează să am site-ul gata?",
    a: "De obicei 2-3 săptămâni de la momentul în care primim textele și pozele de la tine.",
  },
  {
    q: "Ce trebuie să îți dau ca să încep?",
    a: "Textele pentru pagini, pozele și logo-ul tău, dacă ai unul. Dacă nu ai texte sau logo, le putem realiza separat, contra cost.",
  },
  {
    q: "Ce se întâmplă dacă am deja un site?",
    a: "Nu pornim automat de la zero. Dacă site-ul tău actual e lent, greu de administrat sau nu se vede bine pe telefon, îți spunem sincer dacă merită reparat sau refăcut. Prima discuție este despre ce ai deja.",
  },
  {
    q: "Garantați poziții în Google?",
    a: "Nu, și nimeni nu poate garanta asta cinstit. Ne angajăm la livrabile concrete, la un site rapid și corect optimizat și la rapoarte transparente.",
  },
];
