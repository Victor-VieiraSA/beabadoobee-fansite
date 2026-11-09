import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite abrir o servidor de desenvolvimento por outros dispositivos da rede local (ex.: celular)
  allowedDevOrigins: ["192.168.4.8", "192.168.*.*"],
  // Esconde o botão "N" das ferramentas de desenvolvimento do Next.js
  devIndicators: false,
};

export default nextConfig;
