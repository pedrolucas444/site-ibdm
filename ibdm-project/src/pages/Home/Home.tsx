import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import videoInicio from "../../assets/videoInicio1.mp4";
import logo3 from "../../assets/logo3.jpg";

export default function Home() {

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(false);

  // 🔥 Carrega script do Elfsight
  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // 🎥 Tenta iniciar com som (com fallback)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    setMuted(false);

    video.play().catch(() => {
      // 🔁 Se navegador bloquear, volta mutado
      video.muted = true;
      setMuted(true);
      video.play();
    });
  }, []);

  // 🔊 Alternar som manual
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f8f8]">
      
      <Navbar />

      {/* 🔵 HERO SECTION */}
      <section className="bg-[#243c5a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* 🎥 VÍDEO */}
            <div className="relative">
              <div className="w-full h-75 md:h-100 overflow-hidden rounded-md">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={videoInicio}
                  style={{ objectPosition: "center 25%" }}
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>

              {/* 🔊 BOTÃO DE SOM */}
              <button
                onClick={toggleSound}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-md backdrop-blur transition"
              >
                {muted ? "🔇 Ativar som" : "🔊 Mutar"}
              </button>
            </div>

            {/* 📝 CONTEÚDO */}
            <div className="text-white">

              {/* LOGO */}
              <div className="mb-6">
                <img
                  src={logo3}
                  alt="Logo"
                  className="h-16 object-contain"
                />
              </div>

              {/* LINHA */}
              <div className="w-16 h-0.5 bg-green-600 mb-8"></div>

              {/* TÍTULO */}
              <h1 className="text-4xl md:text-5xl font-playfair leading-tight mb-6">
                Defendendo Seus Direitos com Excelência e Comprometimento
              </h1>

              {/* TEXTO */}
              <p className="text-gray-300 leading-8 mb-10 max-w-xl">
                Com mais de duas décadas de experiência, oferecemos soluções jurídicas estratégicas para proteger seus interesses e alcançar os melhores resultados.
              </p>

              {/* BOTÃO */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://wa.me/31996798513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 hover:bg-green-800 transition px-8 py-4 text-white font-semibold"
                >
                  Agendar Consultoria →
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 🔵 FEED INSTAGRAM (ELFSIGHT) */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-10 flex items-center justify-center gap-4 md:gap-6">
            <div className="h-0.5 w-14 md:w-24 bg-green-600"></div>
            <h2 className="text-4xl md:text-5xl font-playfair text-[#243c5a] text-center">
              Nosso Feed
            </h2>
            <div className="h-0.5 w-14 md:w-24 bg-green-600"></div>
          </div>

          {/* Widget */}
          <div className="min-h-100">
            <div
              className="elfsight-app-a2471e8c-5795-4ce5-a4b8-6008f3182e45"
              data-elfsight-app-lazy
            ></div>
          </div>

        </div>
      </section>

      <main className="grow"></main>

      <Footer />
    </div>
  );
}