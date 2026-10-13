import type { Metadata } from "next";
import { MAILTO, SITE, WHATSAPP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Programează o discuție gratuită de 30 de minute despre site-ul afacerii tale. Telefon, WhatsApp sau email.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "/contact/", title: "Contact | Velunix Studio" },
};

export default function Contact() {
  return (
    <>
      <section className="page-head on-dark">
        <div className="wrap">
          <h1>Hai să vorbim</h1>
          <p>
            Prima discuție durează 30 de minute, este gratuită și nu te obligă la nimic. Spune-ne ce afacere ai și ce ai
            vrea de la un site.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap two">
          <div>
            <ul className="contact-list">
              <li><span className="k">Telefon</span><a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></li>
              <li><span className="k">WhatsApp</span><a href={WHATSAPP} rel="noopener">Scrie-ne pe WhatsApp</a></li>
              <li><span className="k">Email</span><a href={MAILTO}>{SITE.email}</a></li>
            </ul>
            <p className="note">Revenim în maximum o zi lucrătoare.</p>
          </div>
          <div className="prose">
            <h2>Cum decurge discuția</h2>
            <p>
              Te întrebăm despre afacerea ta, despre clienții pe care vrei să-i atragi și despre ce site ai acum, dacă
              ai unul. La final îți recomandăm un pachet și îți spunem clar ce costă și cât durează.
            </p>
            <p>Dacă ne decidem să lucrăm împreună, semnăm contractul și începem. Dacă nu, nu ai pierdut nimic.</p>
            <p>
              Ca să folosești mai bine cele 30 de minute, gândește-te dacă ai deja logo, texte și poze pentru site.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
