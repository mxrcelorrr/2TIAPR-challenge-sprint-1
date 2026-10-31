// Placa no estilo marco quilométrico de rodovia
function PlacaKm({ kmInicio, kmFim }) {
  return (
    <div className="placa" aria-label={`Do km ${kmInicio} ao km ${kmFim}`}>
      <span className="placa__rotulo">km</span>
      <span className="placa__numero">{kmInicio}</span>
      <span className="placa__ate">até</span>
      <span className="placa__numero">{kmFim}</span>
    </div>
  )
}

export default PlacaKm
