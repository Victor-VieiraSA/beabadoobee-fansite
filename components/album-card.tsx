import Image from "next/image"
import { Album } from "@/lib/discografia"

export function AlbumCard({ album }: { album: Album }) {
  return (
    <div className="w-64 shrink-0 group">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={album.capa}
          alt={`Capa de ${album.titulo}`}
          fill
          sizes="256px"
          className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
        />
        {album.emBreve && (
          <span className="absolute top-3 left-3 bg-accent px-2 py-1 text-[10px] tracking-widest text-paper">
            EM BREVE
          </span>
        )}
      </div>
      <p className="mt-3 font-display text-sm">{album.titulo}</p>
      <p className="text-xs text-gray-500">{album.tipo}</p>
    </div>
  )
}
