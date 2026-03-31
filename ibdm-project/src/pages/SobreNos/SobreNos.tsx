import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fachada from "../../assets/fachada.jpeg";
import silvio from "../../assets/silvio.png";
import diovana from "../../assets/diovana.png";
import lucas from "../../assets/lucas.png";

const SobreNos = () => {
  return (
    <>
      <Navbar />

      {/* ⚪ SECTION ORIGINAL */}
      <section className="bg-[#f5f6f7] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* 🔹 TEXTO */}
          <div>
          <div>
  <p className="text-gray-600 mb-6 leading-relaxed">
    O <span className="font-semibold">Instituto Brasileiro de Defesa dos Mutuários</span> reúne profissionais que há décadas atuam na análise e na orientação de contratos imobiliários no Brasil.
  </p>

  <p className="text-gray-600 mb-6 leading-relaxed">
    Nossa atuação nasce da experiência prática de quem acompanha, há muitos anos, os desafios enfrentados pelos mutuários. Ao longo dessa trajetória, estudos técnicos, atuação jurídica e contato direto com milhares de famílias ajudaram a construir um conhecimento profundo sobre as relações entre consumidores, bancos e construtoras.
  </p>

  <p className="text-gray-600 mb-6 leading-relaxed">
    Essa experiência consolidou uma forma de atuação baseada em três pilares:{" "}
    <span className="font-semibold">
      análise técnica, orientação responsável e defesa jurídica estruturada
    </span>.
  </p>

  <p className="text-gray-600 mb-6 leading-relaxed">
    O Instituto atua apoiando mutuários em diversas situações envolvendo contratos imobiliários, oferecendo caminhos jurídicos seguros e informação clara para que cada família possa compreender seus direitos e tomar decisões mais conscientes sobre sua moradia.
  </p>

  <p className="text-gray-600 leading-relaxed">
    Mais do que resolver conflitos, o Instituto trabalha para{" "}
    <span className="font-semibold">
      fortalecer a proteção do direito à casa própria e promover relações contratuais mais justas no mercado imobiliário brasileiro
    </span>.
  </p>
</div>
          </div>

          {/* 🔹 IMAGEM + CARD */}
          <div className="relative">
            <img
              src={fachada}
              alt="Advogado assinando documento"
              className="w-full h-[500px] object-cover object-[center_38%]"
            />

            <div className="absolute -bottom-10 -left-10 bg-[#1f3a5f] text-white p-10 shadow-xl">
              <h3 className="text-5xl font-bold text-green-700 mb-2">26+</h3>
              <p className="tracking-widest text-sm">ANOS DE EXCELÊNCIA</p>
            </div>
          </div>
        </div>
      </section>
                    {/* 🔷 MISSÃO E VISÃO */}
                  <section className="bg-[#f5f6f7] py-16 -mt-px">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row">

    {/* MISSÃO */}
    <div className="w-full md:w-1/5 bg-white p-8 shadow-md">
      <h3 className="text-[#1f3a5f] font-bold text-lg mb-4">
        MISSÃO
      </h3>
      <p className="text-gray-600 text-sm leading-7">
        Proteger o direito à moradia e orientar mutuários que enfrentam problemas com contratos imobiliários.
        Atuamos como um escudo para famílias que conquistaram a casa própria, oferecendo análise técnica, informação clara e caminhos jurídicos responsáveis para a defesa de seus direitos.
      </p>
    </div>

    {/* VISÃO */}
    <div className="w-full md:w-1/5 bg-white p-8 shadow-md md:-ml-2 mt-4 md:mt-0">
      <h3 className="text-[#1f3a5f] font-bold text-lg mb-4">
        VISÃO
      </h3>
      <p className="text-gray-600 text-sm leading-7">
        Tornar o Instituto uma referência nacional na orientação e defesa dos mutuários, ampliando o acesso à informação, fortalecendo a proteção do direito à moradia e contribuindo para um ambiente habitacional mais justo, transparente e equilibrado no Brasil.
      </p>
    </div>

    {/* VALORES */}
    <div className="w-full md:w-3/5 bg-white p-8 shadow-md md:-ml-2 mt-4 md:mt-0">
      <h3 className="text-[#1f3a5f] font-bold text-lg mb-6">
        VALORES
      </h3>

      <div className="space-y-5 text-sm text-gray-600 leading-6">

        <p>
          <span className="font-bold text-[#1f3a5f]">EXCELÊNCIA:</span>{" "}
          Atuar com qualidade, responsabilidade e preparo técnico em cada análise, orientação e estratégia, reunindo profissionais capacitados e comprometidos.
        </p>

        <p>
          <span className="font-bold text-[#1f3a5f]">PESSOAS:</span>{" "}
          Valorizar e desenvolver profissionais imbuídos na missão do Instituto, reconhecendo talentos e incentivando o crescimento.
        </p>

        <p>
          <span className="font-bold text-[#1f3a5f]">ÉTICA E TRANSPARÊNCIA:</span>{" "}
          Conduzir cada atuação com integridade, respeito às leis e clareza nas orientações, preservando a confiança de quem busca no Instituto apoio para defender seu lar.
        </p>

        <p>
          <span className="font-bold text-[#1f3a5f]">CONHECIMENTO E ORIENTAÇÃO:</span>{" "}
          Produzir e compartilhar informação de forma acessível, ajudando mutuários a compreender seus direitos e tomar decisões mais seguras.
        </p>

        <p>
          <span className="font-bold text-[#1f3a5f]">COMPROMISSO COM A MORADIA:</span>{" "}
          Trabalhar com dedicação para proteger famílias que conquistaram a casa própria, promovendo relações contratuais mais justas e equilibradas.
        </p>

      </div>
    </div>

  </div>
</section>
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 space-y-20">

    {/* 🔷 MEMBRO 1 */}
    <div className="flex flex-col md:flex-row items-center gap-12">

      {/* TEXTO */}
      <div className="md:w-1/2">
        <h3 className="text-3xl font-playfair text-[#1f3a5f] mb-2">
          Silvio Saldanha
        </h3>
        <p className="text-green-700 font-semibold mb-4">
          Presidente
        </p>

        <p className="text-gray-600 leading-7 mb-4">
          Com mais de 26 anos de experiência na análise de contratos e na defesa de mutuários, Silvio Saldanha dedicou sua trajetória à orientação de famílias que enfrentam desafios em questões imobiliárias e contratuais.
        </p>

        <p className="text-gray-600 leading-7 mb-6">
          Sua atuação é marcada pelo estudo constante das relações jurídicas no mercado habitacional e pela busca de soluções que protejam o direito à moradia com responsabilidade, estratégia e segurança técnica.
        </p>

        <blockquote className="border-l-4 border-green-700 pl-4 italic text-gray-700">
          “Minha trajetória reforçou a importância de proteger os mutuários e ampliar o acesso à informação. No Instituto, essa missão se fortalece com mais estrutura e responsabilidade. Quem lutou pela casa própria merece proteção à altura.”
        </blockquote>
      </div>

      {/* FOTO */}
      <div className="md:w-1/2">
              <img
                src={silvio}
                alt="Silvio"
                className="w-full h-[280px] md:h-[400px] object-cover object-[center_65%] rounded-xl shadow-lg"
              />
            </div>
    </div>

    {/* 🔷 MEMBRO 2 */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-12">

      {/* TEXTO */}
      <div className="md:w-1/2">
        <h3 className="text-3xl font-playfair text-[#1f3a5f] mb-2">
          Diovana Bastos
        </h3>
        <p className="text-green-700 font-semibold mb-4">
          Diretora Jurídica
        </p>

        <p className="text-gray-600 leading-7 mb-4">
          Advogada formada pela Unisinos, Dra. Diovana Bastos atua há mais de 20 anos no direito imobiliário, com experiência em mais de 6.500 processos judiciais envolvendo contratos habitacionais e disputas relacionadas.
        </p>

        <p className="text-gray-600 leading-7">
          Sua atuação é marcada pelo rigor técnico, análise cuidadosa de cada caso e busca por soluções jurídicas responsáveis para a defesa dos mutuários.
          Sempre atenta às inovações e mudanças no mercado imobiliário, Diovana coloca em prática seu talento, carisma e versatilidade.
        </p>
      </div>

      {/* FOTO */}
      <div className="md:w-1/2">
              <img
                src={diovana}
                alt="Diovana"
                className="w-full h-[280px] md:h-[400px] object-cover object-[center_50%] rounded-xl shadow-lg"
              />
            </div>
    </div>

    {/* 🔷 MEMBRO 3 */}
    <div className="flex flex-col md:flex-row items-center gap-12">

      {/* TEXTO */}
      <div className="md:w-1/2">
        <h3 className="text-3xl font-playfair text-[#1f3a5f] mb-2">
          Lucas Bastos
        </h3>
        <p className="text-green-700 font-semibold mb-4">
          Diretor de Negócios
        </p>

        <blockquote className="border-l-4 border-green-700 pl-4 italic text-gray-700">
          “Em um mercado de constante evolução, busco me manter sempre atento às atualizações e inovações.
          Acredito que é assim que se constrói um trabalho responsável e de excelência, sempre prezando pelos direitos dos mutuários”
        </blockquote>
      </div>

      {/* FOTO */}
      <div className="md:w-1/2">
              <img
                src={lucas}
                alt="Lucas"
                className="w-full h-[280px] md:h-[400px] object-cover object-[center_57%] rounded-xl shadow-lg"
              />
            </div>
    </div>

  </div>
</section>
      <Footer />
    </>
  );
};

export default SobreNos;