import { useState } from 'react';
import Home from './components/pages/home';
import Sobre from './components/pages/sobre';
import Habilidades from './components/pages/habilidades';
import Experiencias from './components/pages/experiencias';
import Contatos from './components/pages/contato';
import Navbar from './components/structures/navbar';
import Footer from './components/structures/footer';
import './App.css';

function App() {
  
  return (
    <div>
    <div className='Container'>
     <Navbar />
     <main className='MainBody'>
        <Home />
        <Sobre />
        <Habilidades />
        <Experiencias />
        <Contatos />
     </main>
     <Footer />
     </div>
    </div>
  )
}

export default App
