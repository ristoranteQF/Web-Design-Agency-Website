import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: "Cum prelucrează Velunix Studio datele personale ale vizitatorilor și clienților.",
  alternates: { canonical: "/confidentialitate/" },
  openGraph: { url: "/confidentialitate/", title: "Politica de confidențialitate | Velunix Studio" },
};

const Todo = ({ children }: { children: string }) => <span className="todo">[{children}]</span>;

export default function Confidentialitate() {
  return (
    <>
      <section className="page-head on-dark">
        <div className="wrap">
          <h1>Politica de confidențialitate</h1>
          <p>
            Cum folosim datele tale personale pe acest site. Ultima actualizare: <Todo>data</Todo>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="prose">
            <h2>Cine suntem</h2>
            <p>
              Operatorul datelor este <strong>Catalui Mihai PFA</strong>, care activează sub marca Velunix Studio, CUI{" "}
              <Todo>CUI</Todo>, cu sediul în <Todo>adresa</Todo>. Ne poți scrie la{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> sau suna la{" "}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>.
            </p>
            <h2>Ce date prelucrăm și de ce</h2>
            <ul>
              <li>
                <strong>Datele pe care ni le trimiți</strong> (nume, telefon, email, mesajul tău), dacă ne contactezi
                prin telefon, email sau WhatsApp. Le folosim ca să-ți răspundem și să-ți pregătim o ofertă. Temeiul este
                interesul tău de a primi răspuns și, după caz, pașii premergători încheierii unui contract.
              </li>
              <li>
                <strong>Datele necesare pentru colaborare</strong> (date de identificare și de facturare), dacă devii
                client. Le folosim pentru contract, facturare și obligații legale.
              </li>
            </ul>
            <h2>Cookie-uri și statistici</h2>
            <p>
              Acest site nu folosește cookie-uri de marketing și nu include instrumente de analiză a traficului.
              Infrastructura prin care este livrat site-ul (Cloudflare) poate folosi tehnic cookie-uri sau jurnale strict
              necesare pentru securitate și funcționare. Dacă vom adăuga statistici sau alte cookie-uri, vom cere acordul
              tău printr-un banner înainte de a le folosi.
            </p>
            <h2>Cât păstrăm datele</h2>
            <p>
              Păstrăm mesajele și datele de contact atât cât este necesar pentru a-ți răspunde și, dacă nu începem o
              colaborare, le ștergem într-un termen rezonabil (<Todo>de ex. 12 luni</Todo>). Datele din contracte și
              facturi se păstrează conform termenelor legale.
            </p>
            <h2>Cui transmitem datele</h2>
            <p>
              Nu vindem datele tale. Le pot accesa doar furnizori care ne ajută să funcționăm (de exemplu serviciul de
              email, de găzduire a site-ului și contabilul), în baza unor acorduri de prelucrare, și autoritățile, când
              legea o cere.
            </p>
            <h2>Drepturile tale</h2>
            <p>
              Ai dreptul de acces, rectificare, ștergere, restricționare, portabilitate și opoziție, precum și dreptul de
              a-ți retrage consimțământul oricând. Ne poți scrie la {SITE.email}. Ai și dreptul de a depune o plângere la
              Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP),
              dataprotection.ro.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
