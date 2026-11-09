import Image from "next/image"

// Cada foto ocupa um bloco fixo da grade (colunas x linhas), então não sobram espaços em branco.
// Mobile: 2 colunas | Desktop: 12 colunas. Cada faixa de fotos soma exatamente 12 colunas.
const fotos = [
  // Faixa 1: 6 + 3 + 3
  { src: "/images/bea-duo-bw.png", alt: "Beabadoobee e outra pessoa em foto preto e branco", classe: "col-span-2 row-span-2 md:col-span-6 md:row-span-3", posicao: "object-center" },
  { src: "/images/bea-golden.png", alt: "Beabadoobee em tons dourados", classe: "col-span-1 row-span-2 md:col-span-3 md:row-span-3", posicao: "object-top" },
  { src: "/images/bea-green-field.png", alt: "Beabadoobee deitada em um campo", classe: "col-span-1 row-span-2 md:col-span-3 md:row-span-3", posicao: "object-center" },

  // Faixa 2: 4 + 3 + 5
  { src: "/images/beabadoobee.jpg", alt: "Retrato de Beabadoobee apoiando o rosto na mão", classe: "col-span-1 row-span-2 md:col-span-4 md:row-span-3", posicao: "object-[50%_30%]" },
  { src: "/images/beabadoobee2.jpg", alt: "Beabadoobee deitada com uma guitarra", classe: "col-span-1 row-span-2 md:col-span-3 md:row-span-3", posicao: "object-[50%_35%]" },
  { src: "/images/beabadoobee_flowers.jpg", alt: "Beabadoobee diante de um arbusto de flores rosas", classe: "col-span-2 row-span-2 md:col-span-5 md:row-span-3", posicao: "object-[60%_40%]" },

  // Faixa 3: 6 + 6
  { src: "/images/beabadoobee_pylonEra.jpg", alt: "Beabadoobee na era do álbum pylon", classe: "col-span-1 row-span-2 md:col-span-6 md:row-span-3", posicao: "object-[50%_25%]" },
  { src: "/images/beabadoobee_red.jpg", alt: "Beabadoobee diante de um fundo vermelho", classe: "col-span-1 row-span-2 md:col-span-6 md:row-span-3", posicao: "object-[50%_30%]" },
]

export function Galeria() {
  return (
    <section id="galeria" className="px-6 sm:px-8 py-24 scroll-mt-8">
      <div className="flex items-end justify-between border-b border-gray-200 pb-6">
        <h2 className="font-display text-4xl md:text-6xl">GALERIA</h2>
        <span className="text-xs tracking-widest text-gray-500">
          {String(fotos.length).padStart(2, "0")} FOTOS
        </span>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-12 auto-rows-[9rem] md:auto-rows-[9rem] gap-3 md:gap-4">
        {fotos.map((foto) => (
          <div key={foto.src} className={`group relative overflow-hidden bg-gray-200 ${foto.classe}`}>
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`object-cover ${foto.posicao} grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
