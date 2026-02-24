import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SobreNos from './pages/SobreNos/SobreNos'
import ScrollToTop from './components/ScrollToTop'

// Router simplificado — apenas a página Sobre Nós
const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <Routes>
        <Route path="/" element={<SobreNos />} />
      </Routes>
    </div>
  </BrowserRouter>
)

export default App