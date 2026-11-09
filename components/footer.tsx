const links = [
  { rotulo: "SITE OFICIAL", url: "https://www.beabadoobee.com" },
  { rotulo: "INSTAGRAM", url: "https://www.instagram.com/beabadoobee" },
  { rotulo: "YOUTUBE", url: "https://www.youtube.com/@beabadoobee" },
  { rotulo: "DIRTY HIT", url: "https://www.dirtyhit.co.uk" },
]

export function Footer() {
  return (
    <footer id="links" className="px-6 sm:px-8 pt-24 pb-12 scroll-mt-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 border-t border-gray-200 pt-12">
        <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-none">
          KEEP UP
          <br />
          WITH BEA
        </h2>

        <ul className="grid grid-cols-2 gap-x-12 gap-y-4">
          {links.map((link) => (
            <li key={link.rotulo}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest hover:text-accent transition-colors"
              >
                {link.rotulo} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-between gap-4 text-xs tracking-widest text-gray-500">
        <span>© {new Date().getFullYear()} · PÁGINA DE FÃS NÃO OFICIAL</span>
        <span>SEM FINS LUCRATIVOS · TODOS OS DIREITOS DAS IMAGENS PERTENCEM AOS RESPECTIVOS DONOS</span>
      </div>
    </footer>
  )
}
