import Link from "next/link";
import { SITE } from "@/lib/site";

type Props = { title: string; text: string };

export function CtaBand({ title, text }: Props) {
  return (
    <section className="cta on-dark">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="btn-row">
          <Link className="btn btn-bronze" href="/contact/">Programează discuția gratuită</Link>
        </div>
        <a className="tel" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
      </div>
    </section>
  );
}
