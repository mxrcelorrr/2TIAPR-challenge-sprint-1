import StatusBadge from './StatusBadge.jsx'
import { formatarData, rotuloTipo } from '../utils/formatters.js'

function CardInteracao({ comando, data, resposta, tipo }) {
  return (
    <article className="conversa">
      <div className="conversa__meta">
        <StatusBadge variante={tipo} texto={rotuloTipo(tipo)} />
        <time dateTime={data}>{formatarData(data)}</time>
      </div>
      <p className="balao balao--operador">
        <span className="balao__autor">Operador</span>
        {comando}
      </p>
      <p className="balao balao--agente">
        <span className="balao__autor">Agente VozCampo</span>
        {resposta}
      </p>
    </article>
  )
}

export default CardInteracao
