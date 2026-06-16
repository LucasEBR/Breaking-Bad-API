import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Episodes from './pages/Episodes'
import Quotes from './pages/Quotes'
import Deaths from './pages/Deaths'
import Devs from './pages/Devs'
import NotFound from './pages/NotFound'

//https://github.com/LucasEBR/Breaking-Bad-API

//cd C:/Users/Usuario/Breaking-Bad-API
//cd C:/Users/labunivas/Documents/breakingbad-api

//https://api.mridul.tech/api/breaking-bad/characters/(1-56)
//https://api.mridul.tech/api/breaking-bad/episodes/(1-62)
//https://api.mridul.tech/api/breaking-bad/quotes/(1-86)
//https://api.mridul.tech/api/breaking-bad/deaths/(1-65)

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
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