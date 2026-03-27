import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SobreNos from './pages/SobreNos/SobreNos'
import NossosServicos from './pages/NossosServicos/NossosServicos'
import FaleConosco from './pages/FaleConosco/FaleConosco'
import Home from './pages/Home/Home'
import ScrollToTop from './components/ScrollToTop'

// Router simplificado — apenas a página Sobre Nós
const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/nossos-servicos" element={<NossosServicos />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
      </Routes>
    </div>
  </BrowserRouter>
)

export default App