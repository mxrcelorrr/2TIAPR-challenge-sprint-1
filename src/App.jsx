import { useState } from 'react'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Inicio from './pages/Inicio.jsx'
import Consultas from './pages/Consultas.jsx'
import Interacoes from './pages/Interacoes.jsx'

const ITENS_MENU = [
  { id: 'inicio', rotulo: 'Início' },
  { id: 'consultas', rotulo: 'Consultas' },
  { id: 'interacoes', rotulo: 'Interações' },
]

function App() {
  // Navegação simples com useState (sem React Router nesta sprint)
  const [telaAtual, setTelaAtual] = useState('inicio')

  function renderizarTela() {
    switch (telaAtual) {
      case 'consultas':
        return <Consultas />
      case 'interacoes':
        return <Interacoes />
      default:
        return <Inicio onIrPara={setTelaAtual} />
    }
  }

  return (
    <div className="app">
      <Header titulo="VozCampo" subtitulo="Assistente de voz para o profissional de campo da Motiva" />
      <Nav itens={ITENS_MENU} telaAtual={telaAtual} onTrocarTela={setTelaAtual} />
      <main className="conteudo">{renderizarTela()}</main>
    </div>
  )
}

export default App
