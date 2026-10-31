import CardInteracao from '../components/CardInteracao.jsx'
import { interacoes } from '../data/interacoes.js'
import { agruparPorDia, formatarDiaExtenso } from '../utils/formatters.js'

function Interacoes() {
  const dias = agruparPorDia(interacoes)

  return (
    <section className="pagina">
      <div className="pagina__cabecalho">
        <h2 className="pagina__titulo">Interações</h2>
        <p className="pagina__intro">Histórico de comandos de voz do operador.</p>
      </div>

      <p className="aviso">
        Dados simulados. O agente de voz será conectado nas próximas sprints.
      </p>

      {dias.map((grupo) => (
        <div key={grupo.dia} className="dia">
          <h3 className="dia__titulo">{formatarDiaExtenso(grupo.itens[0].data)}</h3>
          <div className="dia__lista">
            {grupo.itens.map((item) => (
              <CardInteracao
                key={item.id}
                comando={item.comando}
                data={item.data}
                resposta={item.resposta}
                tipo={item.tipo}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Interacoes
