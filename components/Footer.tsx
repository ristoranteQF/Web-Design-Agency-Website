import Link from "next/link";
import { Logo } from "./Logo";
import { SITE, WHATSAPP } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer on-dark">
      <div className="wrap">
        <div className="top">
          <div>
            <Link href="/" aria-label="Velunix Studio, pagina principală">
              <Logo variant="on-dark" height={68} />
            </Link>
            <p className="tag">Digital presence. Elevated.</p>
          </div>
          <div>
            <h2>Pagini</h2>
            <ul>
              <li><Link href="/pachete/">Pachete și prețuri</Link></li>
              <li><Link href="/#cum-lucram">Cum lucrăm</Link></li>
              <li><Link href="/#intrebari">Întrebări frecvente</Link></li>
              <li><Link href="/confidentialitate/">Politica de confidențialitate</Link></li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={WHATSAPP} rel="noopener">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="legal-row">
          <p className="legal">© {new Date().getFullYear()} Velunix Studio. Toate drepturile rezervate.</p>
          <a className="sal-link" href="https://reclamatiisal.anpc.ro" target="_blank" rel="nofollow noopener">
            <img src="/icons/anpc-sal.svg" alt="Soluționarea Alternativă a Litigiilor" width="250" height="50" />
          </a>
        </div>
      </div>
    </footer>
  );
}
