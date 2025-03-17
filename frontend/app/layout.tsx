import type { Metadata } from "next";
import "@/app/globals.css";
import Layout from "@/componentes/Layout";

export const metadata: Metadata = {
  title: "CreateFinix",
  description: "Inovação e tecnologia para o futuro da sua empresa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gray-100 text-gray-900">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}