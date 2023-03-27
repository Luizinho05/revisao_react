import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Inicio from './pages/Inicio'
import Qsomos from './pages/Qsomos'
import Cadastro from './pages/Cadastro'

export default function Rotas (){
    return(
          <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={ <Inicio /> } />
            <Route path='/Qsomos' element={ <Qsomos /> } />
            <Route path='/Cadastro' element={ <Cadastro /> } />
          </Routes>
          </BrowserRouter>
    )
}