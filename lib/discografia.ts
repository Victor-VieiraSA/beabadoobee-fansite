export type Album = {
  ano: string
  titulo: string
  tipo: string
  capa: string
  emBreve?: boolean
}

export const discografia: Album[] = [
  { ano: "2018", titulo: "Lice", tipo: "EP de estreia", capa: "/images/lice.jpg" },
  { ano: "2018", titulo: "Patched Up", tipo: "EP", capa: "/images/PatchedUp.jpg" },
  { ano: "2019", titulo: "Loveworm", tipo: "EP", capa: "/images/cover-loveworm.png" },
  { ano: "2019", titulo: "Space Cadet", tipo: "EP", capa: "/images/SpaceCadet.jpg" },
  { ano: "2020", titulo: "Fake It Flowers", tipo: "Álbum de estreia", capa: "/images/cover-fake-it-flowers.png" },
  { ano: "2021", titulo: "Our Extended Play", tipo: "EP", capa: "/images/OurExtendedPlay.jpg" },
  { ano: "2022", titulo: "Beatopia", tipo: "Álbum", capa: "/images/cover-beatopia.png" },
  { ano: "2024", titulo: "This Is How Tomorrow Moves", tipo: "Álbum", capa: "/images/ThisIsHowTomorrowMoves.jpg" },
  { ano: "2026", titulo: "All I Did Was Dream", tipo: "Single feat. The Marías", capa: "/images/cover-all-i-did-was-dream.png" },
  { ano: "2026", titulo: "pylon", tipo: "Álbum", capa: "/images/pylon.jpg" },
]
