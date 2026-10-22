export type Item = string | { lead: string; text: string };

export const startItems: Item[] = [
  "Design personalizat, modern și 100% responsive (desktop, tabletă, telefon)",
  "Site de prezentare de până la 5 pagini",
  "Găzduire și domeniu incluse pe primul an",
  "Buton WhatsApp și configurare Gmail",
  "Certificat SSL și securitate",
  "Politică de confidențialitate și cookie banner GDPR standard",
  "Formular de contact simplu cu consimțământ GDPR",
  "SEO tehnic de bază: titluri, meta descrieri, structură, viteză, sitemap și Search Console",
  "CMS: modifici singur textele, prețurile și pozele, fără risc să strici designul",
  "Ghid de utilizare și 30 de zile de suport tehnic după lansare",
];

export const fullItems: Item[] = [
  "Site de prezentare de până la 8 pagini",
  "Cookie banner cu blocarea Analytics și Maps până la consimțământ",
  "Formular securizat Cloudflare (anti-spam și anti-boți), cu trimitere directă pe emailul afacerii",
  "SEO extins: structură extinsă a paginilor, viteză maximizată și date structurate locale",
  "Optimizare Google Business Profile",
  "Google Maps și Google Analytics",
  "Training de administrare CMS și 40 de zile de suport tehnic după lansare",
];

export const startHighlights = [
  "Până la 5 pagini",
  "Design personalizat, responsive pe toate dispozitivele",
  "Găzduire și domeniu incluse pe primul an",
  "WhatsApp, Gmail, SSL și securitate",
  "SEO tehnic de bază și CMS inclus",
];

export const fullHighlights = [
  "Până la 8 pagini",
  "Formular securizat Cloudflare și cookie consent avansat",
  "SEO local extins și Google Business Profile",
  "Google Maps și Google Analytics",
  "Training CMS și suport 40 de zile",
];

export type Cell = "yes" | "no" | string;
export const packageRows: { label: string; start: Cell; complet: Cell }[] = [
  { label: "Preț de lansare (primii 10 clienți)", start: "549 €", complet: "799 €" },
  { label: "Preț standard (după primii 10 clienți)", start: "790 €", complet: "1.099 €" },
  { label: "Design personalizat, modern și 100% responsive", start: "yes", complet: "yes" },
  { label: "Număr de pagini", start: "până la 5", complet: "până la 8" },
  { label: "Găzduire și domeniu incluse pe primul an", start: "yes", complet: "yes" },
  { label: "Buton WhatsApp și configurare Gmail", start: "yes", complet: "yes" },
  { label: "Certificat SSL și securitate", start: "yes", complet: "yes" },
  { label: "GDPR: politică de confidențialitate și cookie banner", start: "Standard", complet: "Analytics și Maps blocate până la consimțământ" },
  { label: "Formular de contact cu consimțământ GDPR", start: "Simplu", complet: "Cloudflare securizat, anti-spam și anti-boți, direct pe email" },
  { label: "SEO tehnic de bază: titluri, meta descrieri, structură, viteză, sitemap, Search Console", start: "yes", complet: "yes" },
  { label: "SEO extins: structură, viteză maximizată și date structurate locale", start: "no", complet: "yes" },
  { label: "Optimizare Google Business Profile", start: "no", complet: "yes" },
  { label: "Google Maps și Google Analytics", start: "no", complet: "yes" },
  { label: "CMS: modifici texte, prețuri și poze fără să strici designul", start: "yes", complet: "yes" },
  { label: "Instruire", start: "Ghid de utilizare", complet: "Training de administrare CMS" },
  { label: "Suport tehnic după lansare", start: "30 de zile", complet: "40 de zile" },
];

export const addOns: { service: string; price: string; includes: string }[] = [
  { service: "Pagină suplimentară", price: "50 € / pagină", includes: "Design și implementare în același stil, SEO de bază." },
  { service: "Versiune în engleză", price: "+40% din prețul site-ului", includes: "Structură duplicată și comutator de limbă. Traducerea o furnizezi tu sau o realizăm contra cost." },
  { service: "Redactare texte", price: "40 € / pagină", includes: "Texte orientate spre clienți și SEO, pe baza informațiilor tale." },
  { service: "Fotografii profesionale", price: "La cerere", includes: "Ședință foto la locația ta, în funcție de oraș și numărul de imagini." },
  { service: "Logo și branding de bază", price: "De la 200 €", includes: "Logo, paletă de culori și fonturi." },
  { service: "Email de afacere", price: "40 €", includes: "Configurare contact@domeniultău.ro. Abonamentul (de exemplu Google Workspace) îl plătești direct furnizorului." },
  { service: "Migrare site vechi", price: "150 €", includes: "Mutarea conținutului și redirecționări 301, ca să nu pierzi pozițiile obținute." },
  { service: "Configurare blog", price: "120 €", includes: "Secțiune de articole, categorii și șablon optimizat SEO." },
  { service: "Rezervări online", price: "La cerere", includes: "Sistem de programări integrat în site." },
  { service: "Livrare express (sub 10 zile)", price: "+35% din preț", includes: "Prioritizare în planificare, în funcție de disponibilitate." },
];

export const planRows: { label: string; esential: Cell; crestere: Cell }[] = [
  { label: "Angajament de 6 luni", esential: "no", crestere: "169 € / lună" },
  { label: "Hosting gestionat, certificat SSL, backup-uri și monitorizare uptime", esential: "yes", crestere: "yes" },
  { label: "Securitate și update-uri tehnice constante", esential: "yes", crestere: "yes" },
  { label: "Remedieri prioritare în 24h lucrătoare", esential: "yes", crestere: "yes" },
  { label: "2 ore de modificări de conținut pe lună", esential: "yes", crestere: "yes" },
  { label: "Google Business Profile: informații, program, 4 postări/lună, răspunsuri la întrebări și recenzii", esential: "no", crestere: "yes" },
  { label: "SEO continuu: până la 3 pagini optimizate/lună și verificare tehnică lunară", esential: "no", crestere: "yes" },
  { label: "1 articol SEO redactat de noi pe lună", esential: "no", crestere: "yes" },
  { label: "Raport lunar", esential: "Scurt", crestere: "Detaliat: cuvinte cheie, trafic, apeluri și direcții în Google, poziții urmărite" },
  { label: "Perioadă minimă", esential: "Fără", crestere: "3 luni; 169 €/lună cu angajament de 6 luni" },
];

export const pricingSteps = [
  { title: "Discuție gratuită", text: "30 de minute despre nevoile afacerii tale." },
  { title: "Pachet și contract", text: "Alegi pachetul, semnăm și plătești avansul." },
  { title: "Dezvoltare și livrare", text: "Primim textele și pozele (dacă le aveți), construim și livrăm site-ul." },
  { title: "Lansare", text: "Plata soldului, publicare, training și suport tehnic." },
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
