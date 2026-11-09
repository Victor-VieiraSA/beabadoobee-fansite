import { Discografia } from "@/components/discografia"
import { Footer } from "@/components/footer"
import { Galeria } from "@/components/galeria"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MetaBar } from "@/components/meta-bar"
import { Sobre } from "@/components/sobre"

export default function Home() {
  return (
    <main id="topo">
      <Header />

      <div className="max-w-[1600px] mx-auto">
        <Hero />
      </div>

      <div className="max-w-[1600px] mx-auto">
        <MetaBar />
        <Sobre />
      </div>

      <div className="max-w-[1600px] mx-auto">
        <Discografia />
      </div>

      <div className="max-w-[1600px] mx-auto">
        <Galeria />
      </div>

      <div className="max-w-[1600px] mx-auto">
        <Footer />
      </div>
    </main>
  )
}
