import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NossosServicos = () => {
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
              "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85')",
          }}
        ></div>

        {/* Overlay azul */}
        <div className="absolute inset-0 bg-[#1f3a5f]/90"></div>

        {/* Conteúdo */}
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-green-700"></div>
            <span className="text-green-700 tracking-widest text-sm font-semibold">
              ÁREAS DE ATUAÇÃO
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-playfair leading-tight">
            Nossos Serviços
          </h1>
        </div>
      </section>

      {/* 🔵 NOSSOS SERVIÇOS */}
<section className="bg-[#f5f6f7] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Título */}
    <div className="text-center mb-16">

      <h2 className="text-5xl font-playfair text-[#1f3a5f] mb-6">
        Serviços Jurídicos Especializados
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto leading-8">
       Cada situação exige uma estratégia diferente. Veja como o Instituto pode atuar.
      </p>
      <p className="text-gray-600 max-w-3xl mx-auto leading-8">
Análise técnica e na orientação jurídica responsável para sua defesa.
      </p>
    </div>

    {/* Grid */}
<div className="grid md:grid-cols-2 gap-10">

  {/* Redução de prestações */}
  <div id="reducao-de-prestacoes" className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group">
    <div className="flex gap-6">
      <div className="w-16 h-16 aspect-square bg-[#2f4a70] 
                      flex items-center justify-center 
                      transition-colors duration-300 
                      group-hover:bg-green-700">

        {/* Ícone dinheiro / redução */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 8c-2 0-3 1-3 2s1 2 3 2 3 1 3 2-1 2-3 2M12 6v2m0 8v2M4 12h16" />
        </svg>

      </div>

      <div>
        <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-4">
          Redução de Prestações
        </h3>
        <p className="text-gray-600 leading-7 mb-6">
          Análise contratual para identificar encargos indevidos, juros abusivos e distorções nos cálculos, buscando tornar o financiamento mais equilibrado.
        </p>
      </div>
    </div>
  </div>

  {/* Reavaliação do saldo devedor */}
  <div id="reavaliacao-do-saldo-devedor" className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group">
    <div className="flex gap-6">
      <div className="w-16 h-16 bg-[#2f4a70] flex items-center justify-center 
                      transition-colors duration-300 
                      group-hover:bg-green-700 aspect-square">

        {/* Ícone gráfico / análise */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 3v18h18M9 17V9M13 17V5M17 17v-7" />
        </svg>

      </div>

      <div>
        <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-4">
          Reavaliação do Saldo Devedor
        </h3>
        <p className="text-gray-600 leading-7 mb-6">
          Estudo técnico do contrato e da evolução da dívida para identificar inconsistências e cobranças indevidas que impactam o valor final.
        </p>
      </div>
    </div>
  </div>

  {/* Suspensão de leilões */}
  <div id="suspensao-e-anulacao-de-leiloes" className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group">
    <div className="flex gap-6">
      <div className="w-16 h-16 aspect-square bg-[#2f4a70] 
                      flex items-center justify-center 
                      transition-colors duration-300 
                      group-hover:bg-green-700">

        {/* Ícone martelo / leilão */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M14 7l3 3M5 12l7-7 7 7M5 12v7h14v-7" />
        </svg>

      </div>

      <div>
        <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-4">
          Suspensão e Anulação de Leilões
        </h3>
        <p className="text-gray-600 leading-7 mb-6">
          Atuação jurídica para identificar irregularidades em leilões e buscar medidas legais que protejam o imóvel e os direitos do mutuário.
        </p>
      </div>
    </div>
  </div>

  {/* Rescisão de contrato */}
  <div id="rescisao-de-contrato" className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group">
    <div className="flex gap-6">
      <div className="w-16 h-16 bg-[#2f4a70] flex items-center justify-center 
                      transition-colors duration-300 
                      group-hover:bg-green-700 aspect-square">

        {/* Ícone documento / cancelamento */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M9 12h6M9 16h6M9 8h6M6 4h12v16H6z" />
        </svg>

      </div>

      <div>
        <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-4">
          Rescisão de Contrato com Construtora
        </h3>
        <p className="text-gray-600 leading-7 mb-6">
          Assessoria para encerramento de contratos em casos de descumprimento contratual ou outras situações previstas na legislação.
        </p>
      </div>
    </div>
  </div>

  {/* Indenização por atraso */}
  <div id="indenizacao-por-atraso-na-obra" className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group md:col-span-2 md:max-w-2xl md:mx-auto w-full

">
    <div className="flex gap-6">
      <div className="w-16 h-16 bg-[#2f4a70] flex items-center justify-center 
                      transition-colors duration-300 
                      group-hover:bg-green-700 aspect-square">

        {/* Ícone relógio / atraso */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>

      </div>

      <div>
        <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-4">
          Indenização por Atraso na Obra
        </h3>
        <p className="text-gray-600 leading-7 mb-6">
          Atuação em casos de atraso na entrega de imóveis, garantindo reparação pelos prejuízos causados ao comprador.
        </p>
      </div>
    </div>
  </div>

</div>


</div>
</section>

{/* 🔵 COMO TRABALHAMOS */}
<section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-6">

    {/* Título */}
    <div className="text-center mb-20">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-12 h-[2px] bg-green-700"></div>
        <span className="text-green-700 tracking-widest text-sm font-semibold">
          NOSSA ABORDAGEM
        </span>
        <div className="w-12 h-[2px] bg-green-700"></div>
      </div>

      <h2 className="text-5xl font-playfair text-[#1f3a5f]">
        Como Trabalhamos
      </h2>
    </div>

    {/* Parte de cima (imagem + 01 e 02) */}
    <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

      {/* IMAGEM */}
      <div className="w-full h-[360px] md:h-[660px] overflow-hidden rounded-lg">
        <img
          src="/src/assets/lucasThayara.png"
          alt="Equipe"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* 01 e 02 */}
      <div className="flex flex-col gap-16 items-center text-center">

        {/* 01 */}
        <div>
          <div className="text-green-700 text-7xl font-playfair mb-4">
            01
          </div>

          <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-3">
            Análise técnica
          </h3>

          <p className="text-gray-600 leading-8 max-w-md">
            Iniciamos com uma avaliação detalhada da situação do imóvel e da documentação envolvida. Nosso objetivo é compreender o caso com profundidade e identificar possíveis caminhos jurídicos.
          </p>
        </div>

        {/* 02 */}
        <div>
          <div className="text-green-700 text-7xl font-playfair mb-4">
            02
          </div>

          <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-3">
            Estratégia jurídica
          </h3>

          <p className="text-gray-600 leading-8 max-w-md">
            A partir da análise, estruturamos a estratégia mais adequada e personalizada para sua defesa, sempre com responsabilidade, método e segurança jurídica.
          </p>
        </div>

      </div>
    </div>

    {/* Parte de baixo (03 e 04) */}
    <div className="grid md:grid-cols-2 gap-16 text-center">

      {/* 03 */}
      <div>
        <div className="text-green-700 text-7xl font-playfair mb-4">
          03
        </div>

        <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-3">
          Atuação especializada
        </h3>

        <p className="text-gray-600 leading-8 max-w-md mx-auto">
          Implementamos a estratégia atuando com técnica, experiência e acompanhamento em cada etapa do processo.
        </p>
      </div>

      {/* 04 */}
      <div>
        <div className="text-green-700 text-7xl font-playfair mb-4">
          04
        </div>

        <h3 className="text-2xl font-playfair text-[#1f3a5f] mb-3">
          Defesa da moradia
        </h3>

        <p className="text-gray-600 leading-8 max-w-md mx-auto">
          Atuamos com dedicação e excelência. Nosso propósito é alcançar o melhor resultado para quem tanto lutou por sua casa própria.
        </p>
      </div>

    </div>

  </div>
</section>

      <Footer />
    </>
  );
};

export default NossosServicos;