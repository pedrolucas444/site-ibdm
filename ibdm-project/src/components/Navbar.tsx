import { Phone, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full shadow-sm">

      {/* 🔹 TOP BAR */}
      <div className="bg-[#1f3a5f] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+55 (31) 99999-9999</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>contato@seuescritorio.com</span>
            </div>
          </div>

          <div>
            <span>Seg – Sex: 09:00 às 18:00</span>
          </div>

        </div>
      </div>

      {/* 🔹 MAIN NAVBAR */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          {/* Logo + Nome */}
          <div className="flex items-center gap-3">
            <div className="bg-[#1f3a5f] p-3 rounded">
              <span className="text-white text-xl font-bold">⚖</span>
            </div>

            <div>
              <h1 className="text-xl font-raleway-bold text-[#1f3a5f]">
                Silva & Associados
              </h1>
              <p className="text-xs tracking-widest text-gray-500">
                ADVOGADOS
              </p>
            </div>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-green-600 font-semibold" : "hover:text-[#1f3a5f] transition"
              }
            >
              Início
            </NavLink>
            
            <NavLink 
              to="/sobre-nos" 
              className={({ isActive }) => 
                isActive ? "text-green-600 font-semibold" : "hover:text-[#1f3a5f] transition"
              }
            >
              Quem Somos
            </NavLink>
            
            <NavLink 
              to="/servicos" 
              className={({ isActive }) => 
                isActive ? "text-green-600 font-semibold" : "hover:text-[#1f3a5f] transition"
              }
            >
              Nossos Serviços
            </NavLink>
            
            <NavLink 
              to="/fale-conosco" 
              className={({ isActive }) => 
                isActive ? "text-green-600 font-semibold" : "hover:text-[#1f3a5f] transition"
              }
            >
              Fale Conosco
            </NavLink>

            <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition shadow">
              Consulta Gratuita
            </button>
          </nav>

        </div>
      </div>

    </header>
  );
}