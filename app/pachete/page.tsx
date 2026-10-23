import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Pachete și prețuri",
  description:
    "Creare site de prezentare de la 549 € (plată unică), servicii suplimentare și planuri lunare de mentenanță și SEO local de la 49 €. Prețuri finale, fără costuri ascunse.",
  alternates: { canonical: "/pachete/" },
  openGraph: { url: "/pachete/", title: "Pachete și prețuri | Velunix Studio" },
};

/* true = Inclus, false = neinclus, string = text afișat */
type Cell = boolean | string;
type Row = [label: string, a: Cell, b: Cell];

/* Pune false când se termină oferta pentru primii 10 clienți: se afișează automat prețurile standard */
const LAUNCH = true;
const P = LAUNCH
  ? { start: "549 €", full: "799 €", startStd: "790 €", fullStd: "1.099 €" }
  : { start: "790 €", full: "1.099 €", startStd: "", fullStd: "" };

const brief = {
  primesti: [
    "Site web complet, optimizat pentru mobil și securizat (SSL)",
    "Acces la panoul CMS (sistem de gestiune al conținutului) pentru modificări rapide de texte și poze",
    "Domeniu .ro și găzduire incluse în preț pentru primul an",
    "Training de utilizare și suport tehnic după lansare",
  ],
  furnizezi: [
    "Logo-ul afacerii (sau îl putem realiza noi la cerere, ca serviciu suplimentar)",
    "Textele și pozele pentru pagini (sau le poți comanda ca serviciu suplimentar)",
    "Acces la domeniul existent, dacă deții deja unul",
  ],
  platesti: [
    `Pachet Start: ${P.start}${LAUNCH ? " (preț de lansare)" : ""}`,
    `Pachet Complet: ${P.full}${LAUNCH ? " (preț de lansare)" : ""}`,
    "Plată: 50% avans la semnarea contractului și 50% la finalizare, înainte de publicarea live",
  ],
};

const startHi = [
  "Design personalizat, modern, 100% responsive",
  "Până la 5 pagini",
  "Găzduire și domeniu incluse pe primul an",
  "WhatsApp, Gmail, SSL și securitate",
  "SEO tehnic de bază și CMS inclus",
  "Ghid de utilizare și 30 de zile de suport",
];
const fullHi = [
  "Tot ce include Start, plus:",
  "Până la 8 pagini",
  "Cookie banner cu blocarea Analytics și Maps până la consimțământ",
  "Formular securizat Cloudflare (anti-spam + anti-boți)",
  "SEO extins și Optimizare Google Business Profile",
  "Google Maps și Google Analytics",
  "Training de administrare CMS și 40 de zile de suport",
];

const siteRows: Row[] = [
  ["Design personalizat, modern, 100% responsive (desktop, tabletă, telefon)", true, true],
  ["Număr de pagini", "până la 5", "până la 8"],
  ["Găzduire și domeniu incluse pe primul an", true, true],
  ["Buton WhatsApp și configurare Gmail", true, true],
  ["Certificat SSL și securitate", true, true],
  ["GDPR: politică de confidențialitate și cookie banner", "Standard", "Cu blocarea Analytics și Maps până la consimțământ"],
  ["Formular de contact cu consimțământ GDPR", "Simplu", "Securizat Cloudflare (anti-spam + anti-boți), direct pe email-ul afacerii"],
  ["SEO tehnic de bază (titluri, meta descrieri, structură, viteză, sitemap, Search Console)", true, true],
  ["SEO extins (structură extinsă de pagini, viteză maximizată, date structurate locale)", false, true],
  ["Optimizare Google Business Profile", false, true],
  ["Google Maps (hartă și indicații) și Google Analytics", false, true],
  ["CMS: îți modifici singur textele, prețurile și pozele, fără risc să strici designul (Sistem de gestiune al conținutului)", true, true],
  ["Instruire", "Ghid de utilizare", "Training de administrare CMS"],
  ["Suport tehnic după lansare", "30 de zile", "40 de zile"],
];

const extras: [string, string, string][] = [
  ["Pagină suplimentară", "50 € / pagină", "Design și implementare în același stil, SEO de bază."],
  ["Versiune în engleză", "+40% din prețul site-ului", "Structură duplicată și comutator de limbă. Traducerea o furnizezi tu sau o facem contra cost."],
  ["Redactare texte", "40 € / pagină", "Texte orientate spre clienți și SEO, pe baza informațiilor tale."],
  ["Fotografii profesionale", "La cerere", "Ședință foto la locația ta, în funcție de oraș și număr de imagini."],
  ["Logo și branding de bază", "de la 200 €", "Logo, paletă de culori și fonturi."],
  ["Email de afacere", "40 €", "Configurare contact@domeniultău.ro. Abonamentul (ex. Google Workspace) îl plătești direct furnizorului."],
  ["Migrare site vechi", "150 €", "Mutarea conținutului și redirecționări 301, ca să nu pierzi pozițiile obținute."],
  ["Configurare blog", "120 €", "Secțiune de articole, categorii și șablon optimizat SEO."],
  ["Rezervări online", "La cerere", "Sistem de programări integrat în site."],
  ["Livrare express (sub 10 zile)", "+35% din preț", "Prioritizare în planificare, în funcție de disponibilitate."],
];

const planRows: Row[] = [
  ["Cu angajament de 6 luni", false, "169 € / lună"],
  ["Hosting gestionat, Certificat SSL (HTTPS - Lacătușul de siguranță), backup-uri, monitorizare uptime", true, true],
  ["Securitate și update-uri tehnice constante", true, true],
  ["Remedieri prioritare în 24h lucrătoare", true, true],
  ["2 ore de modificări de conținut / lună", true, true],
  ["Google Business Profile administrat: informații, program, 4 postări/lună, răspunsuri la întrebări, flux pentru cereri de recenzii", false, true],
  ["SEO continuu: optimizare on-page pentru până la 3 pagini/lună (cuvinte cheie, titluri, text, linkuri interne, imagini), plus verificare tehnică lunară (viteză, erori, indexare)", false, true],
  ["1 articol SEO redactat de noi pe lună", false, true],
  ["Raport lunar", "Scurt", "Detaliat: cuvinte cheie, trafic, apeluri și direcții din Google, ce urmează"],
  ["Perioadă minimă", "Fără", "3 luni"],
];

const terms = [
  "Plată: 50% avans la semnarea contractului (nerambursabil, acoperă munca începută) și 50% la predare. Site-ul se publică după plata integrală.",
  "Livrare: 2–3 săptămâni de la primirea textelor și pozelor, pe care le furnizezi tu (sau le comanzi ca serviciu).",
  "Revizuiri: 2 runde incluse. Modificările ulterioare: 30 €/oră.",
  "Planuri lunare: facturare în avans, preaviz de anulare 30 de zile în scris. Orele incluse nu se reportează; orele în plus: 30 €/oră.",
  "Domeniu: înregistrat pe numele tău; după primul an, reînnoirea .ro se facturează la preț de cost. Emailul de afacere nu e inclus în pachete.",
  "Proprietate: după plata integrală deții designul și conținutul. Tehnologii standard, cu documentație pentru preluare de alt dezvoltator. Ne rezervăm dreptul de a-l prezenta în portofoliu.",
  "SEO și GDPR: nu garantăm poziții în Google, ci livrabile concrete și raportare transparentă. Implementarea GDPR nu înlocuiește consultanța juridică.",
];

const steps: [string, string][] = [
  ["Discuție gratuită", "30 de minute despre nevoile afacerii tale."],
  ["Pachet și contract", "Alegi pachetul, semnăm și plătești avansul."],
  ["Dezvoltare și livrare", "Primim textele și pozele (dacă le aveți), construim și livrăm site-ul."],
  ["Lansare", "Plata soldului, publicare, training și suport tehnic."],
];

function C({ v }: { v: Cell }) {
  if (v === true) return <td className="yes">Inclus</td>;
  if (v === false)
    return (
      <td className="no">
        –<span className="sr">Neinclus</span>
      </td>
    );
  return <td>{v}</td>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="ticks">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Compare({ rows }: { rows: Row[] }) {
  return (
    <>
      {rows.map(([l, a, b]) => (
        <tr key={l}>
          <td>{l}</td>
          <C v={a} />
          <C v={b} />
        </tr>
      ))}
    </>
  );
}

export default function Pachete() {
  return (
    <>
      <section className="page-head on-dark">
        <div className="wrap">
          <h1>Pachete și prețuri</h1>
          <p>
            Site-uri de prezentare, mentenanță și SEO local. Plată unică pentru crearea site-ului, apoi un plan lunar
            opțional. Prețurile sunt exprimate în euro și sunt finale.
          </p>
        </div>
      </section>

      <section className="section" id="pe-scurt">
        <div className="wrap">
          <div className="section-head">
            <h2>Pe scurt: scopul proiectului și livrabile</h2>
            <p>Ce primești, ce ne furnizezi, cât costă și când este gata site-ul tău.</p>
          </div>
          <div className="brief">
            <div>
              <h3>Ce primești (livrabile)</h3>
              <List items={brief.primesti} />
            </div>
            <div>
              <h3>Ce furnizezi tu (clientul)</h3>
              <List items={brief.furnizezi} />
            </div>
            <div>
              <h3>Cât plătești și cum</h3>
              <List items={brief.platesti} />
            </div>
            <div>
              <h3>Când este gata (termen de livrare)</h3>
              <p>2–3 săptămâni de la primirea tuturor materialelor (texte și poze, dacă este cazul) de la tine.</p>
            </div>
          </div>
          <p className="note">
            Prețurile sunt în euro și finale. Velunix Studio nu este plătitor de TVA. Oferta este valabilă 90 de zile de
            la data transmiterii.
          </p>
        </div>
      </section>

      <section className="section" id="site-prezentare">
        <div className="wrap">
          <div className="section-head">
            <h2>Site de prezentare, plată unică</h2>
            <p>
              Fiecare site este programat de la zero, fără WordPress, fără șabloane sau constructori generici: este
              proiectat custom pentru viteză și securitate, iar panoul CMS (sistem de gestiune al conținutului) îți
              permite să modifici ușor textele, prețurile și pozele, fără să strici design-ul. Primești un site complet,
              gata de folosit din prima zi.
            </p>
          </div>

          {LAUNCH && (
            <div className="banner">
              <span className="eyebrow">Preț de lansare · primii 10 clienți</span>
              <p>
                Prețurile promoționale sunt valabile pentru primii 10 clienți. În schimb, ne dorim doar acordul tău
                pentru a include proiectul în portofoliul nostru și o scurtă recenzie după lansare,{" "}
                <strong>dacă ești 100% mulțumit.</strong>
              </p>
            </div>
          )}

          <div className="packs">
            <article className="pack">
              <h3>Pachet Start</h3>
              <p className="price">{P.start}</p>
              {LAUNCH && <p className="was">Preț standard: {P.startStd}</p>}
              <p className="for">Un site de prezentare optimizat și gata de utilizat, conceput special pentru ca afacerea ta să nu fie invizibilă pe Google.</p>
              <List items={startHi} />
              <Link className="btn btn-ink" href="/contact/">Alege Start</Link>
            </article>
            <article className="pack featured on-dark">
              <h3>Pachet Complet</h3>
              <p className="price">{P.full}</p>
              {LAUNCH && <p className="was">Preț standard: {P.fullStd}</p>}
              <p className="for">Dus la nivelul următor pentru performanță maximă și conversii.</p>
              <List items={fullHi} />
              <Link className="btn btn-bronze" href="/contact/">Alege Complet</Link>
            </article>
          </div>

          <h3 className="sub-h" id="comparatie">Comparație detaliată</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col"><span className="sr">Caracteristică</span></th>
                  <th scope="col">Pachet Start</th>
                  <th scope="col">Pachet Complet</th>
                </tr>
              </thead>
              <tbody>
                <tr className="pricerow">
                  <td>{LAUNCH ? "Preț de lansare (primii 10 clienți)" : "Preț"}</td>
                  <td>{P.start}</td>
                  <td>{P.full}</td>
                </tr>
                {LAUNCH && (
                  <tr>
                    <td>Preț standard (după primii 10 clienți)</td>
                    <td>{P.startStd}</td>
                    <td>{P.fullStd}</td>
                  </tr>
                )}
                <Compare rows={siteRows} />
              </tbody>
            </table>
          </div>
          <p className="note">
            SEO-ul din pachete este fundația tehnică și nu garantează poziții în Google. Pentru creștere constantă există
            Pachetul Creștere (vezi planurile lunare).
          </p>
        </div>
      </section>

      <section className="section" id="servicii-suplimentare">
        <div className="wrap">
          <div className="section-head">
            <h2>Servicii suplimentare</h2>
            <p>
              Se pot adăuga oricând la orice pachet. Prețurile sunt orientative pentru proiecte standard; pentru cele „la
              cerere” primești ofertă după o scurtă discuție.
            </p>
          </div>
          <div className="table-wrap">
            <table className="left">
              <thead>
                <tr>
                  <th scope="col">Serviciu</th>
                  <th scope="col">Preț</th>
                  <th scope="col">Ce include</th>
                </tr>
              </thead>
              <tbody>
                {extras.map(([s, p, d]) => (
                  <tr key={s}>
                    <td><strong>{s}</strong></td>
                    <td className="yes">{p}</td>
                    <td>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="planuri-lunare">
        <div className="wrap">
          <div className="section-head">
            <h2>Planuri lunare: mentenanță și creștere</h2>
            <p>
              Găzduirea este inclusă în prețul site-ului pe primul an, apoi în planul lunar. Pachetul Creștere poate
              începe imediat după lansare.
            </p>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col"><span className="sr">Serviciu</span></th>
                  <th scope="col">Pachet Esențial<br /><span className="th-sub">Mentenanță</span></th>
                  <th scope="col">Pachet Creștere<br /><span className="th-sub">Mentenanță + SEO local</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="pricerow"><td>Preț / lună</td><td>49 €</td><td>199 €</td></tr>
                <Compare rows={planRows} />
              </tbody>
            </table>
          </div>

          <div className="callout">
            <h3>Doar Găzduire Administrată</h3>
            <p className="price-sm">15 € / lună <span>(facturat anual: 180 € / an)</span></p>
            <p>
              Include hosting performant (găzduire site), SSL (conexiune securizată cu lăcătuș în browser), backup-uri
              automate, monitorizare uptime 24/7 și administrarea infrastructurii, pentru cei care vor doar găzduire după
              primul an. Fără ore de modificări sau remedieri prioritare; accesul la CMS (sistemul de gestiune al
              conținutului) rămâne activ.
            </p>
          </div>

          <p className="note">
            <strong>Recomandare:</strong> pentru rezultate SEO vizibile recomandăm minimum 6 luni pe Pachetul Creștere;
            primele luni construiesc fundația, iar efectele apar de obicei după 4–6 luni. Pachetul Esențial poate fi
            oprit oricând, cu preaviz de 30 de zile.
          </p>
        </div>
      </section>

      <section className="section" id="conditii">
        <div className="wrap two">
          <div>
            <h2>Condiții esențiale</h2>
            <p className="note">
              Oferta nu este un contract. Condițiile complete se stabilesc în contractul scris, semnat de ambele părți,
              care prevalează asupra acestui document.
            </p>
          </div>
          <List items={terms} />
        </div>
      </section>

      <section className="section" id="cum-incepem">
        <div className="wrap">
          <div className="section-head">
            <h2>Cum începem</h2>
          </div>
          <ol className="steps">
            {steps.map(([t, d]) => (
              <li key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Hai să vorbim despre site-ul tău"
        text="Spune-ne în 30 de minute ce ai nevoie și îți recomandăm varianta potrivită, fără presiune."
      />
    </>
  );
}