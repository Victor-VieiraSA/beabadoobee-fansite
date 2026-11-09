import Image from "next/image"

export function Sobre() {
  return (
    <section id="sobre" className="px-6 sm:px-8 py-24 scroll-mt-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="w-full max-w-sm lg:max-w-none lg:w-96 shrink-0">
          <div className="relative w-full aspect-[4/5]">
            <Image
              src="/images/bea-puffer-bw.png"
              alt="Beabadoobee"
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 384px, 100vw"
              className="object-cover grayscale"
            />
          </div>
          <p className="mt-3 text-xs text-gray-500">FOTOGRAFIA — BEATOPIA ERA</p>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs tracking-widest text-accent">A ARTISTA</p>

          <h2 className="font-display mt-4 text-[clamp(1.5rem,7.5vw,4.5rem)] lg:text-[clamp(2rem,4.4vw,4.5rem)] leading-none">
            BEABADOOBEE IS
            <br />
            BEATRICE LAUS
          </h2>

          <p className="mt-8 max-w-xl text-base">
            Beatrice Kristi Laus gravou &ldquo;Coffee&rdquo; no quarto aos dezoito anos, com uma guitarra emprestada, e viu a música virar hino de uma geração inteira na internet.
          </p>

          <p className="mt-4 max-w-xl text-base text-gray-500">
            Assinada pela Dirty Hit, transformou a estética lo-fi do bedroom pop em discos de guitarra sujos e melódicos — de Fake It Flowers ao pop de câmera lenta de This Is How Tomorrow Moves. Hoje divide sua obra entre a nostalgia dos anos 90 e uma escrita íntima e sem filtro.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-8">
            <div>
              <p className="text-xs tracking-widest text-gray-500">ESTREIA</p>
              <p className="font-display mt-1 text-2xl">2017</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-500">ÁLBUNS</p>
              <p className="font-display mt-1 text-2xl">04</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-500">GRAVADORA</p>
              <p className="font-display mt-1 text-2xl">DIRTY HIT</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-500">BASE</p>
              <p className="font-display mt-1 text-2xl">LONDRES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}