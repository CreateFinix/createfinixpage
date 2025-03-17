import Link from "next/link";

export default function Header() {
    return (
      <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <div className="text-xl font-bold">CreateFinix</div>
        <nav>
          <ul className="flex gap-4">
            <li><Link href="#services">Serviços</Link></li>
            <li><Link href="#hero">Contato</Link></li>
            <li><Link href="#portifolios">Portifólio</Link></li>
            <li><Link href="#chatbot">Ajuda</Link></li>
          </ul>
        </nav>
      </header>
    );
  }