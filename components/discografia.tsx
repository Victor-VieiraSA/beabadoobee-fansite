// components/discografia.tsx
"use client"

import { useRef } from "react"
import { discografia } from "@/lib/discografia"
import { AlbumCard } from "./album-card"

export function Discografia() {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direcao: "esquerda" | "direita") {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: direcao === "esquerda" ? -288 : 288,
      behavior: "smooth",
    })
  }

  return (
    <section id="discografia" className="px-6 sm:px-8 py-24 scroll-mt-8">
      <div className="flex items-end justify-between border-b border-gray-200 pb-6">
        <h2 className="font-display text-4xl md:text-6xl">DISCOGRAFIA</h2>
        <div className="flex items-center gap-6">
          <span className="hidden md:block text-xs tracking-widest text-gray-500">2017 — 2026 · DIRTY HIT</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll("esquerda")}
              aria-label="Rolar para a esquerda"
              className="h-10 w-10 border border-gray-300 hover:bg-ink hover:text-paper transition-colors"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll("direita")}
              aria-label="Rolar para a direita"
              className="h-10 w-10 border border-gray-300 hover:bg-ink hover:text-paper transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-12">
        <div ref={scrollRef} className="scrollbar-none flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
          {discografia.map((album, index) => (
            <div key={album.titulo} className="flex flex-col gap-6 snap-start">
              <div className="flex items-baseline justify-between border-t border-gray-200 pt-4 w-64">
                <span className="font-display text-2xl">{album.ano}</span>
                <span className="text-xs text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <AlbumCard album={album} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}