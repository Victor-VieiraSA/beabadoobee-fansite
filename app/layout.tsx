import type { Metadata } from "next"
import { Archivo_Black, Inter } from "next/font/google"
import "./globals.css"

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Beabadoobee — Fan Page",
  description: "Página de fãs não oficial da Beabadoobee: sobre a artista, discografia completa e galeria.",
  openGraph: {
    title: "Beabadoobee — Fan Page",
    description: "Página de fãs não oficial da Beabadoobee.",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${archivoBlack.variable} ${inter.variable} antialiased`}>
        <div className="max-w-[1400px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}