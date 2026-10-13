import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Ticks } from "@/components/Ticks";
import { fullItems, planRows, startItems, type Cell } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pachete și prețuri",
  description:
    "Creare site de prezentare de la 549 € (plată unică) și planuri lunare de mentenanță și SEO de la 49 €. Prețuri finale, fără costuri ascunse.",
  alternates: { canonical: "/pachete/" },
  openGraph: { url: "/pachete/", title: "Pachete și prețuri | Velunix Studio" },
};

function PlanCell({ v }: { v: Cell }) {
  if (v === "yes") return <td className="yes">Inclus</td>;
  if (v === "no")
    return (
      <td className="no">
        –<span className="sr">Neinclus</span>
      </td>
    );
  return <td>{v}</td>;
}

export default function Pachete() {
  return (
    <>
      <section className="page-head on-dark">
        <div className="wrap">
          <h1>Pachete și prețuri</h1>
          <p>
            Plată unică pentru crearea site-ului, apoi un plan lunar opțional. Prețurile sunt exprimate în euro și sunt
            finale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Creare site, plată unică</h2>
            <p>
              Nu folosim WordPress sau constructori generici. Fiecare site este programat manual și predat complet
              funcțional și bine finisat.
            </p>
          </div>
          <div className="packs">
            <article className="pack">
              <h3>Pachet Start</h3>
              <p className="price">549 €</p>
              <p className="for">
                Un site de prezentare optimizat și gata de utilizat, conceput special pentru ca afacerea ta să nu fie
                invizibilă pe Google.
              </p>
              <Ticks items={startItems} />
              <Link className="btn btn-ink" href="/contact/">Alege Start</Link>
            </article>
            <article className="pack featured on-dark">
              <h3>Pachet Complet</h3>
              <p className="price">749 €</p>
              <p className="for">
                Tot ce include pachetul Start, dus la nivelul următor pentru performanță maximă și conversii. În plus:
              </p>
              <Ticks items={fullItems} />
              <Link className="btn btn-bronze" href="/contact/">Alege Complet</Link>
            </article>
          </div>
          <p className="note">
            Pagini suplimentare, redactare de texte, logo și alte servicii se ofertează separat, la prețuri fixe, după o
            discuție scurtă.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Planuri lunare</h2>
            <p>După primul an, găzduirea este inclusă în planul lunar. Două opțiuni clare, fără angajament pe termen lung.</p>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col"><span className="sr">Serviciu</span></th>
                  <th scope="col">Pachet Esențial<br /><span className="th-sub">Mentenanță</span></th>
                  <th scope="col">Pachet Creștere<br /><span className="th-sub">Mentenanță + SEO și Local</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="pricerow"><td>Preț pe lună</td><td>49 €</td><td>179 €</td></tr>
                {planRows.map((r) => (
                  <tr key={r.label}>
                    <td>{r.label}</td>
                    <PlanCell v={r.esential} />
                    <PlanCell v={r.crestere} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">
            <strong>Recomandare SEO:</strong> pentru rezultate vizibile și tracțiune organică reală, recomandăm minimum
            6 luni de colaborare pe Pachetul Creștere. Primele luni construiesc fundația, iar rezultatele apar de obicei
            după 4-6 luni de muncă constantă. Nu este obligatoriu: planul poate fi oprit oricând, cu preaviz de 30 de
            zile.
          </p>
          <p className="note">
            Dacă după primul an vrei doar găzduire (hosting, SSL, backup-uri, monitorizare), există un plan separat, la
            12 € pe lună.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two">
          <div><h2>Ce trebuie să știi</h2></div>
          <ul className="ticks">
            <li>Domeniul se înregistrează pe numele tău.</li>
            <li>Designul include 2 runde de revizuiri.</li>
            <li>Planurile lunare se pot anula oricând, cu preaviz de 30 de zile.</li>
            <li>La încetarea colaborării, îți predăm fișierele și te ajutăm la mutarea pe altă găzduire.</li>
            <li>
              SEO nu are rezultate garantate matematic: ne angajăm la livrabile concrete, muncă constantă și raportare
              transparentă, nu la o poziție fixă garantată în Google.
            </li>
          </ul>
        </div>
      </section>

      <CtaBand
        title="Nu ești sigur ce pachet ți se potrivește?"
        text="Spune-ne în 30 de minute ce ai nevoie și îți recomandăm varianta potrivită, fără presiune."
      />
    </>
  );
}
