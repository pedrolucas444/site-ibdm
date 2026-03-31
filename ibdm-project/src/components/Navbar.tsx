import { Phone, Mail, Instagram, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo2 from "../assets/logo2.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm">

      {/* 🔹 TOP BAR */}
      <div className="bg-[#1f3a5f] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="hidden sm:inline">0800-332-3000</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="hidden sm:inline">ibdm@ibdmbrasil.com.br</span>
            </div>
          </div>

        </div>
      </div>

      {/* 🔹 MAIN NAVBAR */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center">
            <img src={logo2} alt="Logo IBDM" className="h-12 md:h-14 w-auto" />
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            
            <a
              href="http://www.instagram.com/ibdmbrasil"
              target="_blank"
              rel="noreferrer"
              className="text-[#C13584] hover:opacity-80 transition"
            >
              <Instagram size={20} />
            </a>

            <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "hover:text-[#1f3a5f]"
            }>
              Início
            </NavLink>

            <NavLink to="/sobre-nos" className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "hover:text-[#1f3a5f]"
            }>
              Quem Somos
            </NavLink>

            <NavLink to="/nossos-servicos" className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "hover:text-[#1f3a5f]"
            }>
              Serviços
            </NavLink>

            <NavLink to="/fale-conosco" className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "hover:text-[#1f3a5f]"
            }>
              Fale Conosco
            </NavLink>

            <a
              href="https://w.app/ibdmbrasil"
              target="_blank"
              rel="noreferrer"
              className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition shadow"
            >
              Consultoria
            </a>
          </nav>

          {/* BOTÃO MOBILE */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MENU MOBILE */}
        {open && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-700 font-medium">

            <a
              href="http://www.instagram.com/ibdmbrasil"
              target="_blank"
              rel="noreferrer"
              className="text-[#C13584]"
            >
              Instagram
            </a>

            <NavLink to="/" onClick={() => setOpen(false)}>Início</NavLink>
            <NavLink to="/sobre-nos" onClick={() => setOpen(false)}>Quem Somos</NavLink>
            <NavLink to="/nossos-servicos" onClick={() => setOpen(false)}>Serviços</NavLink>
            <NavLink to="/fale-conosco" onClick={() => setOpen(false)}>Fale Conosco</NavLink>

            <a
              href="https://w.app/ibdmbrasil"
              target="_blank"
              rel="noreferrer"
              className="bg-green-700 text-white px-4 py-3 rounded-md text-center"
            >
              Consultoria Gratuita
            </a>

          </div>
        )}

      </div>

    </header>
  );
}