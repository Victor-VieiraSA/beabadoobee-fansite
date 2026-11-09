"use client"

import { useEffect, useState } from "react"

const links = [
  { rotulo: "SOBRE", href: "#sobre" },
  { rotulo: "DISCOGRAFIA", href: "#discografia" },
  { rotulo: "GALERIA", href: "#galeria" },
  { rotulo: "LINKS", href: "#links" },
]

export function Header() {
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    function aoPressionar(e: KeyboardEvent) {
      if (e.key === "Escape") setAberto(false)
    }
    window.addEventListener("keydown", aoPressionar)
    return () => window.removeEventListener("keydown", aoPressionar)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur">
      <div className="flex items-center justify-between px-6 sm:px-8 py-5">
        <a href="#topo" onClick={() => setAberto(false)} className="font-display text-sm tracking-widest">
          BEABADOOBEE
        </a>

        <nav className="hidden md:flex gap-8" aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-xs tracking-widest hover:text-accent transition-colors">
              {link.rotulo}
            </a>
          ))}
        </nav>

        <a
          href="https://www.beabadoobee.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-xs tracking-widest text-accent"
        >
          SITE OFICIAL ↗
        </a>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="md:hidden relative h-10 w-10 -mr-2"
        >
          <span
            className={`absolute left-2 right-2 h-0.5 bg-ink transition-all duration-300 ${
              aberto ? "top-1/2 rotate-45" : "top-[14px]"
            }`}
          />
          <span
            className={`absolute left-2 right-2 top-1/2 h-0.5 bg-ink transition-opacity duration-300 ${
              aberto ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-2 right-2 h-0.5 bg-ink transition-all duration-300 ${
              aberto ? "top-1/2 -rotate-45" : "bottom-[14px]"
            }`}
          />
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`md:hidden absolute left-0 right-0 top-full bg-paper border-y border-gray-200 transition-all duration-300 ${
          aberto ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <nav className="flex flex-col px-6 sm:px-8 py-4" aria-label="Menu mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setAberto(false)}
              className="py-4 text-sm tracking-widest border-b border-gray-100 hover:text-accent transition-colors"
            >
              {link.rotulo}
            </a>
          ))}
          <a
            href="https://www.beabadoobee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 text-sm tracking-widest text-accent"
          >
            SITE OFICIAL ↗
          </a>
        </nav>
      </div>
    </header>
  )
}
