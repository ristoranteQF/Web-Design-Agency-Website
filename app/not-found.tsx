import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina nu există",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="page-head on-dark">
      <div className="wrap">
        <h1>Pagina nu există</h1>
        <p>
          Adresa pe care ai deschis-o nu mai există sau a fost scrisă greșit. Te poți întoarce la pagina principală sau
          poți vedea pachetele.
        </p>
        <div className="btn-row">
          <Link className="btn btn-bronze" href="/">Pagina principală</Link>
          <Link className="btn btn-outline" href="/pachete/">Pachete și prețuri</Link>
        </div>
      </div>
    </section>
  );
}
