import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import lucasThayara from "../../assets/lucasThayara.png";

const NossosServicos = () => {
  return (
    <>
      <Navbar />

      {/* 🔵 HERO */}
      <section className="relative h-[160px] md:h-[200px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85')",
          }}
        ></div>

        <div className="absolute inset-0 bg-[#1f3a5f]/90"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-white">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-[2px] bg-green-700"></div>
            <span className="text-green-700 tracking-widest text-xs md:text-sm font-semibold">
              ÁREAS DE ATUAÇÃO
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair leading-tight">
            Nossos Serviços
          </h1>
        </div>
      </section>

      {/* 🔵 SERVIÇOS */}
      <section className="bg-[#f5f6f7] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair text-[#1f3a5f] mb-4 md:mb-6">
              Serviços Jurídicos Especializados
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-7 md:leading-8">
              Cada situação exige uma estratégia diferente. Veja como o Instituto pode atuar.
            </p>

            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-7 md:leading-8">
              Análise técnica e orientação jurídica responsável para sua defesa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

            {/* CARD */}
            {[
              {
                title: "Redução de Prestações",
                text: "Análise contratual para identificar encargos indevidos, distorções nos cálculos, juros abusivos e possibilidades jurídicas de revisão que possam tornar o financiamento mais equilibrado.",
                icon: "M12 8c-2 0-3 1-3 2s1 2 3 2 3 1 3 2-1 2-3 2M12 6v2m0 8v2M4 12h16",
              },
              {
                title: "Reavaliação do Saldo Devedor",
                text: "Estudo técnico do contrato e da evolução da dívida para verificar inconsistências, cobranças indevidas ou distorções que possam impactar o valor final do financiamento.",
                icon: "M3 3v18h18M9 17V9M13 17V5M17 17v-7",
              },
              {
                title: "Suspensão e Anulação de Leilões",
                text: "Atuação jurídica em casos onde o imóvel foi levado ou está prestes a ser levado a leilão, avaliando irregularidades no processo e buscando medidas legais para proteção do mutuário.",
                icon: "M14 7l3 3M5 12l7-7 7 7M5 12v7h14v-7",
              },
              {
                title: "Rescisão de Contrato com Construtora",
                text: "Assessoria em situações onde o comprador precisa encerrar o contrato por descumprimento contratual ou outras circunstâncias previstas na legislação.",
                icon: "M9 12h6M9 16h6M9 8h6M6 4h12v16H6z",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transition group"
              >
                <div className="flex gap-4 md:gap-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#2f4a70] flex items-center justify-center rounded-md group-hover:bg-green-700 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 md:w-8 md:h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-playfair text-[#1f3a5f] mb-3 md:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-6 md:leading-7">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* CARD GRANDE */}
            <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transition group md:col-span-2 md:max-w-2xl md:mx-auto">
              <div className="flex gap-4 md:gap-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#2f4a70] flex items-center justify-center rounded-md group-hover:bg-green-700 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 md:w-8 md:h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-playfair text-[#1f3a5f] mb-3 md:mb-4">
                    Indenização por Atraso na Obra
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-6 md:leading-7">
                   Atuação em casos em que construtoras descumprem prazos contratuais, garantindo que os direitos do comprador sejam respeitados e reparados.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔵 COMO TRABALHAMOS */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-playfair text-[#1f3a5f]">
              Como Trabalhamos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-20">

            <div className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg">
  <img
    src={lucasThayara}
    alt="Equipe"
className="w-full h-full object-cover object-[center_60%] md:object-[center_75%]"  />
</div>

            <div className="flex flex-col gap-12 text-center">
              {[
                ["01", "Análise técnica", "Iniciamos com uma avaliação detalhada da situação do imóvel e da documentação envolvida. Nosso objetivo é compreender o caso com profundidade e identificar possíveis caminhos jurídicos."],
                ["02", "Estratégia jurídica", "A partir da análise, estruturamos a estratégia mais adequada e personalizada para sua defesa, sempre com responsabilidade, método e segurança jurídica."],
              ].map(([n, t, d], i) => (
                <div key={i}>
                  <div className="text-green-700 text-5xl md:text-7xl font-playfair mb-3">
                    {n}
                  </div>
                  <h3 className="text-xl md:text-2xl text-[#1f3a5f] mb-2">{t}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{d}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
            {[
              ["03", "Atuação especializada", "Implementamos a estratégia atuando com técnica, experiência e acompanhamento em cada etapa do processo."],
              ["04", "Defesa da moradia", "Atuamos com dedicação e exelencia. Nosso propósito é alcançar o melhor resultado para quem tanto lutou por sua casa própria."],
            ].map(([n, t, d], i) => (
              <div key={i}>
                <div className="text-green-700 text-5xl md:text-7xl font-playfair mb-3">
                  {n}
                </div>
                <h3 className="text-xl md:text-2xl text-[#1f3a5f] mb-2">{t}</h3>
                <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
                  {d}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default NossosServicos;