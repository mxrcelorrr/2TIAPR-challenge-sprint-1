import PlacaKm from './PlacaKm.jsx'
import StatusBadge from './StatusBadge.jsx'
import { formatarData, rotuloStatus } from '../utils/formatters.js'

function CardTrecho({ rodovia, kmInicio, kmFim, sentido, status, info, atualizadoEm }) {
  return (
    <article className={`trecho trecho--${status}`}>
      <PlacaKm kmInicio={kmInicio} kmFim={kmFim} />
      <div className="trecho__corpo">
        <div className="trecho__topo">
          <div>
            <h3 className="trecho__rodovia">{rodovia}</h3>
            <p className="trecho__sentido">Sentido {sentido}</p>
          </div>
          <StatusBadge variante={status} texto={rotuloStatus(status)} />
        </div>
        <p className="trecho__info">{info}</p>
        <p className="trecho__atualizado">Atualizado em {formatarData(atualizadoEm)}</p>
      </div>
    </article>
  )
}

export default CardTrecho
