import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import CalculadoraImc from './pages/Calculadora/index.jsx'
import Footer from './components/Footer/index.jsx'
import './GlobalStyle.css'

createRoot(document.getElementById('root')).render(
  <>
    
    <StrictMode>
      <Header/>
      <CalculadoraImc/>
      <Footer/>
    </StrictMode>
  </>
)
