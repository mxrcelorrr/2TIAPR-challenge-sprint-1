import { useState } from 'react'
import CardTrecho from '../components/CardTrecho.jsx'
import FiltroStatus from '../components/FiltroStatus.jsx'
import { trechos } from '../data/trechos.js'

const PRIORIDADE = { critico: 0, atencao: 1, normal: 2 }

function Consultas() {
  const [filtro, setFiltro] = useState('todos')

  const contar = (status) => trechos.filter((t) => t.status === status).length

  const opcoes = [
    { id: 'todos', rotulo: 'Todos', total: trechos.length },
    { id: 'critico', rotulo: 'Crítico', total: contar('critico') },
    { id: 'atencao', rotulo: 'Atenção', total: contar('atencao') },
    { id: 'normal', rotulo: 'Normal', total: contar('normal') },
  ]

  // Mais urgentes primeiro
  const visiveis = trechos
    .filter((t) => filtro === 'todos' || t.status === filtro)
    .sort((a, b) => PRIORIDADE[a.status] - PRIORIDADE[b.status])

  return (
    <section className="pagina">
      <div className="pagina__cabecalho">
        <h2 className="pagina__titulo">Consultas</h2>
        <p className="pagina__intro">
          Situação dos trechos monitorados, com os mais urgentes no topo.
        </p>
      </div>

      <FiltroStatus opcoes={opcoes} selecionado={filtro} onSelecionar={setFiltro} />

      <div className="lista-trechos">
        {visiveis.map((trecho) => (
          <CardTrecho
            key={trecho.id}
            rodovia={trecho.rodovia}
            kmInicio={trecho.kmInicio}
            kmFim={trecho.kmFim}
            sentido={trecho.sentido}
            status={trecho.status}
            info={trecho.info}
            atualizadoEm={trecho.atualizadoEm}
          />
        ))}
        {visiveis.length === 0 && (
          <p className="vazio">Nenhum trecho com esse status no momento.</p>
        )}
      </div>
    </section>
  )
}

export default Consultas
