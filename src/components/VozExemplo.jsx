// Demonstração visual de um comando de voz (simulado)
function VozExemplo({ comando, resposta }) {
  const barras = [8, 18, 28, 14, 34, 22, 40, 26, 16, 30, 12, 24, 36, 18, 10]

  return (
    <div className="voz">
      <div className="voz__onda" aria-hidden="true">
        {barras.map((altura, i) => (
          <span key={i} style={{ height: `${altura}px`, animationDelay: `${i * 70}ms` }} />
        ))}
      </div>
      <p className="voz__comando">“{comando}”</p>
      <p className="voz__resposta">{resposta}</p>
    </div>
  )
}

export default VozExemplo
