import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CharacterPage from './pages/CharacterPage'
import Episodes from './pages/Episodes'
import Quotes from './pages/Quotes'
import Deaths from './pages/Deaths'
import Devs from './pages/Devs'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/deaths" element={<Deaths />} />
        <Route path="/devs" element={<Devs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App