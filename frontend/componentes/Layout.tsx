import { ReactNode } from "react";
import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-100 text-gray-900">
      <Header />
      <main className="flex-grow p-6">{children}</main>
      <Footer />
    </div>
  );
}