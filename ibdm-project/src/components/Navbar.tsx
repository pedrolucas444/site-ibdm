import { Phone, Mail, Instagram } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo2 from "../assets/logo2.png";

export default function Navbar() {
  return (
    <header className="w-full shadow-sm">

      {/* 🔹 TOP BAR */}
      <div className="bg-[#1f3a5f] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>0800-332-3000</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>ibdm@ibdmbrasil.com.br</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 MAIN NAVBAR */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          {/* Logo + Nome */}
          <div className="flex items-center">
            <img src={logo2} alt="Logo IBDM" className="h-14 w-auto" />
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a
              href="http://www.instagram.com/ibdmbrasil"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram IBDM"
              className="text-[#C13584] hover:opacity-80 transition-opacity"
            >
              <Instagram size={20} />
            </a>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-green-700 font-semibold" : "hover:text-[#1f3a5f] transition"
              }
            >
              Início
            </NavLink>
            
            <NavLink 
              to="/sobre-nos" 
              className={({ isActive }) => 
                isActive ? "text-green-700 font-semibold" : "hover:text-[#1f3a5f] transition"
              }
            >
              Quem Somos
            </NavLink>
            
            <NavLink 
              to="/nossos-servicos" 
              className={({ isActive }) => 
                isActive ? "text-green-700 font-semibold" : "hover:text-[#1f3a5f] transition"
              }
            >
              Serviços
            </NavLink>
            
            <NavLink 
              to="/fale-conosco" 
              className={({ isActive }) => 
                isActive ? "text-green-700 font-semibold" : "hover:text-[#1f3a5f] transition"
              }
            >
              Fale Conosco
            </NavLink>

            <a
              href="https://w.app/ibdmbrasil"
              target="_blank"
              rel="noreferrer"
              className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition shadow"
            >
              Consultoria Gratuita
            </a>
          </nav>

        </div>
      </div>

    </header>
  );
}