function FiltroStatus({ opcoes, selecionado, onSelecionar }) {
  return (
    <div className="filtro" role="group" aria-label="Filtrar trechos por status">
      {opcoes.map((opcao) => (
        <button
          key={opcao.id}
          type="button"
          className={`filtro__opcao filtro__opcao--${opcao.id}`}
          aria-pressed={selecionado === opcao.id}
          onClick={() => onSelecionar(opcao.id)}
        >
          {opcao.rotulo}
          <span className="filtro__total">{opcao.total}</span>
        </button>
      ))}
    </div>
  )
}

export default FiltroStatus
