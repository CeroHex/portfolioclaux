import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import SobreMi from './pages/SobreMi'
import Proyectos from './pages/Proyectos'
import Academia from './pages/Academia'
import Playground from './pages/Playground'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobremi' element={<SobreMi />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/academia' element={<Academia />} />
        <Route path='/playground' element={<Playground />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App