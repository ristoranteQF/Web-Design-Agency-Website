import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { faq, fullHighlights, startHighlights, steps } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero on-dark">
        <div className="wrap">
          <div>
            <h1>Site-ul care lucrează pentru afacerea ta.</h1>
            <p className="lead">
              Site-uri de prezentare premium · SEO local · Mentenanță web.
Construim o prezență digitală care inspiră încredere și ajută afacerile locale să fie găsite.
            </p>
            <div className="btn-row">
              <Link className="btn btn-bronze" href="/contact/">Programează o discuție gratuită</Link>
              <Link className="btn btn-outline" href="/pachete/">Vezi pachetele și prețurile</Link>
            </div>
            <p className="fine">Discuția durează 30 de minute și nu te obligă la nimic.</p>
          </div>
          <aside className="site-preview" aria-label="Exemplu de site realizat pentru OMVG Regional Onest Consulting">
            <div className="browser-bar" aria-hidden="true">
              <span className="browser-dots"><i /><i /><i /></span>
              <span className="browser-address">omvg.ro</span>
              <span className="browser-lock">https</span>
            </div>
            <div className="preview-site">
              <a className="preview-image-link" href="https://omvg.ro/" target="_blank" rel="noopener noreferrer" aria-label="Vizitează site-ul omvg.ro">
                <img src="/omvg-homepage.png" alt="Pagina principală a site-ului OMVG Regional Onest Consulting" width="1280" height="900" />
              </a>
            </div>
            <span className="preview-caption">Un site construit în jurul afacerii tale</span>
          </aside>
        </div>
      </section>

      <section className="section" id="ce-primesti">
        <div className="wrap">
          <div className="section-head">
            <h2>Un site bun trebuie să aducă oameni și să-i transforme în clienți</h2>
          </div>
          <div className="trio">
            <div>
              <h3>Te găsesc</h3>
              <p>
                Fiecare site vine cu SEO de bază și viteză de încărcare optimizată, ca să apari mai ușor când clienții
                din zona ta caută ce oferi.
              </p>
            </div>
            <div>
              <h3>Te contactează ușor</h3>
              <p>
                Telefon, formular de contact și, în pachetul Complet, hartă Google și Google Business Profile. Pe telefon arată la fel de bine ca pe calculator.
              </p>
            </div>
            <div>
              <h3>Rămâne al tău, fără bătăi de cap</h3>
              <p>
                Hosting, securitate, backup-uri și remedieri sunt în grija noastră. Cu un CMS (sistem de gestiune al conținutului) ușor de folosit, îți schimbi
                singur textele, prețurile și pozele, fără risc să strici design-ul.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section statement">
        <div className="wrap cols">
          <h2>Fără șabloane. Fără compromisuri.</h2>
          <div>
            <p>
              Nu folosim WordPress și nici constructori de site-uri generici. Fiecare proiect este programat manual, cu
              tehnologii moderne, pentru viteză, securitate și SEO mai bune, fără plugin-uri care încetinesc sau expun
              site-ul.
            </p>
            <p>Primești un produs final complet funcțional și bine finisat, gata de utilizat din prima zi.</p>
          </div>
        </div>
      </section>

      <section className="section" id="cum-lucram">
        <div className="wrap">
          <div className="section-head"><h2>Cum lucrăm</h2></div>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="pachete">
        <div className="wrap">
          <div className="section-head">
            <h2>Pachete simple, prețuri clare</h2>
            <p>Plată unică pentru crearea site-ului. Prețurile sunt exprimate în euro și sunt finale.</p>
          </div>
          <div className="packs">
            <article className="pack">
              <h3>Start</h3>
              <p className="price">549 €</p>
              <p className="for">
                Un site de prezentare optimizat și gata de utilizat, conceput special pentru ca afacerea ta să nu fie
                invizibilă pe Google.
              </p>
              <ul className="ticks">{startHighlights.map((t) => <li key={t}>{t}</li>)}</ul>
              <Link className="btn btn-outline btn-outline-ink" href="/pachete/">Vezi tot ce include</Link>
            </article>
            <article className="pack featured on-dark">
              <h3>Complet</h3>
              <p className="price">749 €</p>
              <p className="for">
                Dus la nivelul următor pentru performanță maximă si conversii.
              </p>
              <ul className="ticks">{fullHighlights.map((t) => <li key={t}>{t}</li>)}</ul>
              <Link className="btn btn-bronze" href="/pachete/">Vezi tot ce include</Link>
            </article>
          </div>
          <p className="note">
            După primul an, un plan lunar de la 49 € se ocupă de găzduire, securitate, backup-uri și modificări de
            conținut. Fără contract minim, cu preaviz de 30 de zile.
          </p>
        </div>
      </section>

      <section className="section" id="potrivit">
        <div className="wrap two">
          <div>
            <h2>Când lucrăm bine împreună</h2>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Preferăm să fim sinceri de la început, ca să nu pierdem timpul niciunul.
            </p>
          </div>
          <div className="fit">
            <h3>Suntem potriviți dacă</h3>
            <ul className="ticks">
              <li>Ai o afacere locală și vrei un site care arată bine și funcționează fără probleme.</li>
              <li>Vrei să vorbești direct cu omul care îți construiește site-ul, fără intermediari.</li>
              <li>Preferi un site făcut special pentru tine, nu un șablon adaptat.</li>
            </ul>
            <h3>Probabil nu suntem potriviți dacă</h3>
            <ul className="crosses">
              <li>Cauți cel mai ieftin site posibil, indiferent de calitate.</li>
              <li>Ai nevoie de un magazin online mare sau de o platformă cu conturi de utilizator.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="intrebari">
        <div className="wrap">
          <div className="section-head"><h2>Întrebări frecvente</h2></div>
          <div className="faq">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section blog-section" id="blog">
        <div className="wrap">
          <div className="section-head">
            <p className="blog-eyebrow">DIN JURNALUL NOSTRU</p>
            <h2>Idei clare pentru o prezență online mai bună.</h2>
          </div>
          <div className="blog-grid">
            <article className="blog-item">
              <span className="blog-tag">ÎN CURÂND · DESIGN</span>
              <h3>Ce face un site să pară de încredere din prima secundă?</h3>
              <p>Pregătim un ghid despre detaliile care îi ajută pe vizitatori să aleagă cu încredere.</p>
              <span className="blog-read">Articol în pregătire</span>
            </article>
            <article className="blog-item">
              <span className="blog-tag">ÎN CURÂND · SEO</span>
              <h3>SEO local: cum te găsesc clienții din apropiere</h3>
              <p>Note practice despre căutările locale, profilul Google și paginile care răspund întrebărilor reale.</p>
              <span className="blog-read">Articol în pregătire</span>
            </article>
            <article className="blog-item">
              <span className="blog-tag">ÎN CURÂND · PERFORMANȚĂ</span>
              <h3>De ce contează fiecare secundă la încărcarea unui site</h3>
              <p>O explicație simplă despre viteză, experiența pe telefon și lucrurile care încetinesc paginile.</p>
              <span className="blog-read">Articol în pregătire</span>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        title="Hai să-ți facem un site care chiar lucrează pentru tine."
        text="Spune-ne în 30 de minute ce ai nevoie. Fără costuri și fără obligații."
      />
    </>
  );
}
