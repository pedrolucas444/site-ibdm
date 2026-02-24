import Navbar from "../../components/Navbar";

const SobreNos = () => {
  return (
    <>
      <Navbar />

      {/* 🔵 HERO SECTION */}
      <section className="relative h-[200px] flex items-center">
        {/* Imagem de fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c')",
          }}
        ></div>

        {/* Overlay azul */}
        <div className="absolute inset-0 bg-[#1f3a5f]/90"></div>

        {/* Conteúdo */}
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-green-700"></div>
            <span className="text-green-500 tracking-widest text-sm font-semibold">
              NOSSA HISTÓRIA
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-playfair leading-tight">
            Sobre Nós
          </h1>
        </div>
      </section>

      {/* ⚪ SECTION ORIGINAL */}
      <section className="bg-[#f5f6f7] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* 🔹 TEXTO */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-green-700"></div>
              <span className="text-green-700 tracking-widest text-sm font-semibold">
                DESDE 1998
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-playfair text-[#1f3a5f] leading-tight mb-6">
              Uma Tradição de Excelência Jurídica
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              O escritório foi fundado em 1998 com uma visão clara: oferecer
              serviços jurídicos excepcionais, construídos sobre uma base sólida
              de integridade, experiência e compromisso com o sucesso de nossos
              clientes.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Ao longo das últimas décadas, crescemos de uma pequena prática
              para um escritório completo, com advogados especializados em
              diversas áreas do Direito. Nosso crescimento sempre foi guiado por
              um princípio essencial: colocar nossos clientes em primeiro lugar.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Hoje, seguimos fortalecendo nosso legado, combinando estratégias
              jurídicas consolidadas com abordagens inovadoras para atender às
              necessidades de pessoas e empresas em um cenário jurídico cada vez
              mais complexo.
            </p>
          </div>

          {/* 🔹 IMAGEM + CARD */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
              alt="Advogado assinando documento"
              className="w-full h-[500px] object-cover"
            />

            <div className="absolute -bottom-10 -left-10 bg-[#1f3a5f] text-white p-10 shadow-xl">
              <h3 className="text-5xl font-bold text-green-700 mb-2">25+</h3>
              <p className="tracking-widest text-sm">ANOS DE EXCELÊNCIA</p>
            </div>
          </div>
        </div>
      </section>
                  {/* 🔷 MISSÃO E VISÃO */}
      <section className="bg-[#f5f6f7] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* MISSÃO */}
          <div className="bg-white p-12 shadow-xl hover:shadow-2xl transition duration-300">
            <div className="w-16 h-16 bg-green-700 flex items-center justify-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>

            <h3 className="text-3xl font-playfair text-[#1f3a5f] mb-6">
              Nossa Missão
            </h3>

            <p className="text-gray-600 leading-8">
              Oferecer representação jurídica de excelência, protegendo os
              interesses de nossos clientes, entregando resultados favoráveis
              e mantendo os mais altos padrões de ética profissional.
              Estamos comprometidos em tornar a justiça acessível e garantir
              atendimento personalizado e estratégico.
            </p>
          </div>

          {/* VISÃO */}
          <div className="bg-white p-12 shadow-xl hover:shadow-2xl transition duration-300">
            <div className="w-16 h-16 bg-[#1f3a5f] flex items-center justify-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            <h3 className="text-3xl font-playfair text-[#1f3a5f] mb-6">
              Nossa Visão
            </h3>

            <p className="text-gray-600 leading-8">
              Ser o escritório de advocacia mais confiável e respeitado da
              região, reconhecido pelo compromisso com a excelência,
              soluções jurídicas inovadoras e relações duradouras com
              nossos clientes. Buscamos uma prática onde cada cliente se
              sinta ouvido, apoiado e seguro.
            </p>
          </div>

        </div>
      </section>
            {/* 🔷 CORE VALUES */}
      <section className="bg-[#f5f6f7] py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Título da seção */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-16 h-[2px] bg-green-700"></div>
              <span className="text-green-700 tracking-[0.3em] text-sm font-semibold">
                NOSSA BASE
              </span>
              <div className="w-16 h-[2px] bg-green-700"></div>
            </div>

            <h2 className="text-5xl font-playfair text-[#1f3a5f]">
              Valores Fundamentais
            </h2>
          </div>

          {/* Grid de valores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* 1 */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition duration-300 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#1f3a5f] flex items-center justify-center mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 21C12 21 4 13.5 4 8.5A4.5 4.5 0 0 1 8.5 4C10.24 4 12 5.5 12 5.5S13.76 4 15.5 4A4.5 4.5 0 0 1 20 8.5C20 13.5 12 21 12 21Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-4">
                Integridade
              </h3>
              <p className="text-gray-600 leading-7">
                Mantemos os mais altos padrões éticos em todas as nossas relações.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition duration-300 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#1f3a5f] flex items-center justify-center mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-4">
                Excelência
              </h3>
              <p className="text-gray-600 leading-7">
                Buscamos resultados excepcionais em cada caso que assumimos.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition duration-300 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#1f3a5f] flex items-center justify-center mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M17 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M7 21v-2a4 4 0 0 1 3-3.87"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-4">
                Foco no Cliente
              </h3>
              <p className="text-gray-600 leading-7">
                Suas necessidades e objetivos estão no centro de tudo o que fazemos.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition duration-300 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#1f3a5f] flex items-center justify-center mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M2 7v13h20V7"/>
                  <path d="M2 7l10 6 10-6"/>
                  <path d="M12 13v7"/>
                </svg>
              </div>
              <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-4">
                Conhecimento
              </h3>
              <p className="text-gray-600 leading-7">
                O aprendizado contínuo nos mantém na vanguarda da prática jurídica.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SobreNos;