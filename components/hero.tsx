import Image from "next/image"

export function Hero() {
  return (
    <section className="px-6 sm:px-8 pt-8 pb-24 lg:pb-32">
      <h1 className="font-display leading-none relative z-10 text-[clamp(1.75rem,8.5vw,9rem)]">
        KNOW
        <br />
        BEABADOOBEE
      </h1>

      <div className="relative mt-10 lg:-mt-12 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-16 lg:items-end">
        <div className="relative lg:col-span-5 lg:col-start-3 aspect-square w-full max-w-md md:max-w-lg lg:max-w-none mx-auto">
          <Image
            src="/images/bea-red.png"
            alt="Beabadoobee em foto vermelha"
            fill
            sizes="(min-width: 1024px) 42vw, (min-width: 768px) 512px, 100vw"
            className="object-cover object-top"
            priority
          />

          <div className="absolute -bottom-8 left-4 md:-left-8 lg:-left-12 w-24 md:w-28 lg:w-32 aspect-square z-20 shadow-xl">
            <Image
              src="/images/cover-loveworm.png"
              alt="Capa de Loveworm"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 right-4 md:-right-8 lg:-right-12 w-24 md:w-28 lg:w-32 aspect-square z-20 shadow-xl">
            <Image
              src="/images/cover-beatopia.png"
              alt="Capa de Beatopia"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 max-w-md mx-auto lg:mx-0 lg:pb-8">
          <p className="text-xs tracking-widest text-accent">FAN PAGE NÃO OFICIAL</p>
          <h2 className="font-display mt-3 text-2xl">BEDROOM POP BEYOND BORDERS</h2>
          <p className="mt-4 text-sm text-gray-800">
            De covers gravados no quarto em Camden aos palcos do Glastonbury: a trajetória de Beabadoobee reescreve o indie rock dos anos 90 na voz de uma geração inteira.
          </p>
          <a
            href="#discografia"
            className="mt-8 inline-block border-b border-ink pb-1 text-xs tracking-widest hover:text-accent hover:border-accent transition-colors"
          >
            VER A DISCOGRAFIA ↓
          </a>
        </div>
      </div>
    </section>
  )
}
