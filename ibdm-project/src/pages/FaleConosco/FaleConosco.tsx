import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send } from "lucide-react";

const FaleConosco = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nomeLimpo = nome.trim();
    const telefoneLimpo = telefone.trim();
    const mensagemLimpa = mensagem.trim();

    if (!nomeLimpo || !mensagemLimpa) {
      alert("Preencha Nome e Mensagem para continuar.");
      return;
    }

    const subject = `Contato pelo site - ${nomeLimpo}`;
    const body = [
      "Novo contato pelo formulário do site:",
      "",
      `Nome: ${nomeLimpo}`,
      `Telefone: ${telefoneLimpo || "Não informado"}`,
      "",
      "Mensagem:",
      mensagemLimpa,
    ].join("\n");

    window.location.href = `mailto:ibdm@ibdmbrasil.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Navbar />

      {/* 🔵 HERO */}
      <section className="relative h-[160px] md:h-[200px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
          }}
        ></div>

        <div className="absolute inset-0 bg-[#1f3a5f]/90"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-white">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-[2px] bg-green-700"></div>
            <span className="text-green-500 tracking-widest text-xs md:text-sm font-semibold">
              ENTRE EM CONTATO
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair leading-tight">
            Fale Conosco
          </h1>
        </div>
      </section>

      {/* 🔵 CONTEÚDO */}
      <section className="bg-[#f8f8f8] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

          {/* FORMULÁRIO */}
          <div>
            <p className="text-green-700 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-4 flex items-center gap-3 md:gap-4">
              <span className="w-8 md:w-12 h-[1px] bg-green-700"></span>
              Envie uma mensagem
            </p>

            <h2 className="text-3xl md:text-5xl font-serif text-[#243b55] mb-4 md:mb-6">
              Agende uma Consulta
            </h2>

            <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
              Preencha o formulário abaixo e um de nossos consultores entrará em
              contato com você para discutir seu caso.
            </p>

            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 font-medium text-sm md:text-base">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-sm md:text-base">
                  Telefone
                </label>
                <input
                  type="text"
                  placeholder="(11) 99999-9999"
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-sm md:text-base">
                  Sua Mensagem *
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva seu caso..."
                  value={mensagem}
                  onChange={(event) => setMensagem(event.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-700"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 md:py-4 rounded-md flex items-center justify-center gap-2 text-base md:text-lg font-medium transition"
              >
                <Send size={18} />
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* CARD CONTATO */}
          <div className="bg-[#243b55] text-white p-6 md:p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-serif mb-8 md:mb-10">
              Informações de Contato
            </h3>

            <div className="space-y-6 md:space-y-8">

              <div className="flex items-start gap-4">
                <div className="bg-green-700 p-2 md:p-3 rounded-md">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-green-400 uppercase text-xs md:text-sm">
                    Telefone
                  </p>
                  <p className="text-lg md:text-xl font-semibold">
                    0800 332 3000
                  </p>
                  <p className="text-sm text-green-300 mb-2">Principal</p>
                  <p className="text-sm md:text-base">11 91943-7053</p>
                  <p className="text-sm md:text-base">31 99679-8513</p>
                  <p className="text-sm md:text-base">41 99178-0055</p>
                  <p className="text-sm md:text-base">51 99671-0812</p>
                  <p className="text-sm md:text-base">61 99658-9957</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-700 p-2 md:p-3 rounded-md">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-green-400 uppercase text-xs md:text-sm">
                    Email
                  </p>
                  <p className="text-sm md:text-base">
                    ibdm@ibdmbrasil.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-700 p-2 md:p-3 rounded-md">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-green-400 uppercase text-xs md:text-sm">
                    Endereço
                  </p>
                  <p className="text-sm md:text-base">
                    Rua Juiz Achilles Velloso, 160 - Estoril <br />
                    Belo Horizonte - MG
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2">
                <a
                  href="http://www.instagram.com/ibdmbrasil"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#C13584] hover:bg-[#E1306C] text-white py-3 md:py-4 rounded-md text-sm md:text-base flex items-center justify-center gap-2 transition"
                >
                  <Instagram size={18} />
                  Instagram
                </a>

                <a
                  href="https://wa.me/31996798513"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white py-3 md:py-4 rounded-md text-sm md:text-base flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAPA */}
        <div className="max-w-7xl mx-auto mt-12 md:mt-16 px-4 md:px-6">
          <iframe
            title="Mapa"
            src="https://www.google.com/maps?q=Rua+Juiz+Achilles+Velloso,+160+-+Estoril,+Belo+Horizonte+-+MG,+30494-180&output=embed"
            width="100%"
            height="300"
            className="rounded-2xl shadow-md"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FaleConosco;