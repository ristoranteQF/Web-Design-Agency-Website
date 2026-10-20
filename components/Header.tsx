"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/pachete/", label: "Pachete și prețuri" },
  { href: "/#cum-lucram", label: "Cum lucrăm" },
  { href: "/#blog", label: "Blog" },
  { href: "/#intrebari", label: "Întrebări" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header on-dark">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Velunix Studio, pagina principală" onClick={close}>
          <Logo variant="on-dark" height={62} />
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`menu-icon${open ? " active" : ""}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <nav className={`nav${open ? " open" : ""}`} id="nav" aria-label="Navigare principală">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link className="btn btn-bronze" href="/contact/" onClick={close}>
            Discuție gratuită
          </Link>
        </nav>
      </div>
    </header>
  );
}
