# Velunix Studio, site public (Next.js)

Site de prezentare construit cu **Next.js (App Router) + TypeScript**, exportat **static**, pentru **Cloudflare Pages** (gratuit).
Fonturile sunt găzduite local (fără cereri către Google Fonts), iar site-ul nu folosește cookie-uri de analiză sau marketing.

## Rulare locală
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # generează folderul out/ (site-ul static)
npm run preview    # servește out/ local
```
Necesită Node.js 20.9 sau mai nou (recomandat 22, vezi `.nvmrc`).

## Publicare pe Cloudflare Pages

### Varianta A: din GitHub (recomandată, se actualizează automat)
1. Urcă acest proiect într-un repository GitHub.
2. Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → alege repository-ul.
3. Setări de build:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Variabilă de mediu:** `NODE_VERSION` = `22`
4. După primul deploy: **Custom domains** → adaugă `velunixstudio.ro`.

### Varianta B: încărcare directă (fără GitHub)
1. Rulează `npm install && npm run build` local.
2. Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Upload assets** → încarcă folderul `out/` (sau arhiva `velunixstudio-out.zip`).
3. Adaugă domeniul `velunixstudio.ro` la **Custom domains**.

După publicare activează **Always Use HTTPS** (SSL/TLS), apoi adaugă site-ul în Google Search Console și trimite `https://velunixstudio.ro/sitemap.xml`.

## Structura proiectului
```
app/                  paginile (/, /pachete, /contact, /confidentialitate), SEO (robots, sitemap, manifest), imagini de brand
components/           Header, Footer, Logo, Ticks, CtaBand
lib/site.ts           date de contact (telefon, email, WhatsApp)
lib/content.ts        pachete, planuri lunare, întrebări frecvente, pași
public/brand/         logo-urile oficiale (on-dark, on-light, icon)
public/fonts/         Jost și Instrument Sans (găzduite local)
public/_headers       antete de securitate și cache pentru Cloudflare
brand-source/         fișierele SVG originale primite (cu metadata C2PA)
```

## Ce se modifică cel mai des
- **Telefon, email, WhatsApp:** `lib/site.ts`
- **Prețuri, pachete, întrebări frecvente:** `lib/content.ts` (și textele din `app/page.tsx` și `app/pachete/page.tsx`)
- **Culori:** variabilele din `app/globals.css` (secțiunea „Paleta brandului")

## De completat înainte de lansare
În `app/confidentialitate/page.tsx` există câmpuri marcate cu galben (`Todo`): data, CUI, adresa și termenul de păstrare a datelor. Textul trebuie verificat o dată de un avocat sau de contabil.

## Note
- Dacă adaugi Google Analytics sau alte cookie-uri, adaugă și un cookie banner și actualizează politica de confidențialitate.
- Politica CSP din `public/_headers` permite scripturi și stiluri inline (necesare pentru Next.js). Dacă adaugi scripturi sau fonturi externe, actualizeaz-o.
