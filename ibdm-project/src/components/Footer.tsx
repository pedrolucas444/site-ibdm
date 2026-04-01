import { MapPin } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo3 from "../assets/logo3.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#243b5a] text-gray-300 pt-20">

      <div className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* 🔹 LOGO + DESCRIÇÃO */}
        <div>
          <div className="mb-6">
            <img src={logo3} alt="Logo IBDM" className="h-24 w-auto" />
          </div>

          <p className="text-gray-400 leading-7 mb-8">
            O Instituto Brasileiro de Defesa dos Mutuários atua com análise técnica,
            orientação jurídica responsável e defesa estruturada para proteger o
            direito à moradia de famílias em todo o Brasil.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              {
                name: "Email",
                href: "mailto:ibdm@ibdmbrasil.com.br",
                bgClass: "bg-[#38BDF8] hover:bg-[#0EA5E9]",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 6h16v12H4z" />
                    <path d="M4 7l8 6 8-6" />
                  </svg>
                ),
              },
              {
                name: "Instagram",
                href: "http://www.instagram.com/ibdmbrasil",
                bgClass: "bg-[#C13584] hover:bg-[#E1306C]",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                ),
              },
              {
                name: "WhatsApp",
                href: "https://wa.me/31996798513",
                bgClass: "bg-[#25D366] hover:bg-[#1EBE5D]",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.03 0C5.4 0 .02 5.38 .02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.95 11.95 0 0 0 12.03 24h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.52-8.52ZM12.04 21.98h-.01a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.67.96.98-3.58-.24-.37A9.9 9.9 0 0 1 2.04 12c0-5.51 4.48-9.99 10-9.99 2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22.04 12c0 5.51-4.49 9.98-10 9.98Zm5.48-7.48c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.27.3-1.03 1-1.03 2.45 0 1.45 1.05 2.85 1.2 3.05.15.2 2.06 3.14 5 4.4.7.3 1.25.49 1.68.63.7.22 1.34.19 1.84.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`w-12 h-12 flex items-center justify-center transition cursor-pointer ${social.bgClass}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 🔹 NAVEGACAO */}
        <div>
          <h4 className="text-xl font-playfair text-white mb-6">Navegação</h4>

          <ul className="space-y-4">
            {[
              { label: "Início", to: "/" },
              { label: "Quem Somos", to: "/sobre-nos" },
              { label: "Serviços", to: "/nossos-servicos" },
              { label: "Fale Conosco", to: "/fale-conosco" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-700 font-semibold"
                      : "hover:text-green-700 transition"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 AREAS DE ATUACAO */}
        <div>
          <h4 className="text-xl font-playfair text-white mb-6">Áreas de Atuação</h4>

          <ul className="space-y-4">
            {[
              { label: "Redução de Prestações", to: "/nossos-servicos#reducao-de-prestacoes" },
              { label: "Reavaliação do Saldo Devedor", to: "/nossos-servicos#reavaliacao-do-saldo-devedor" },
              { label: "Suspensão e Anulação de Leilões", to: "/nossos-servicos#suspensao-e-anulacao-de-leiloes" },
              { label: "Rescisão de Contrato", to: "/nossos-servicos#rescisao-de-contrato" },
              { label: "Indenização por Atraso na Obra", to: "/nossos-servicos#indenizacao-por-atraso-na-obra" },
            ].map((area) => (
              <li key={area.to}>
                <Link
                  to={area.to}
                  className="hover:text-green-700 transition cursor-pointer"
                >
                  {area.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 CONTATO */}
        <div>
          <h4 className="text-xl font-playfair text-white mb-6">Contato</h4>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <span className="text-green-700 text-xl">📞</span>
              <span>0800 332 3000</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-green-700 text-xl">✉️</span>
              <span>ibdm@ibdmbrasil.com.br</span>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-white">
                <MapPin size={20} />
              </span>
              <div>
                <p>Rua Juiz Achilles Velloso, 160 - Estoril</p>
                <p>Belo Horizonte - MG, 30494-180</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 🔹 BOTTOM BAR */}
      <div className="border-t border-[#2f4a70] py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
          <p className="text-gray-400 text-sm text-center flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <span>© 2026 IBDM Brasil. Todos os direitos reservados.</span>
            <span>| CNPJ: 65.572.409/0001-28</span>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;