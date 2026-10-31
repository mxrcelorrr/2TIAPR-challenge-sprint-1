function Nav({ itens, telaAtual, onTrocarTela }) {
  return (
    <nav className="nav" aria-label="Telas da plataforma">
      <div className="nav__trilho">
        {itens.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav__botao ${telaAtual === item.id ? 'nav__botao--ativo' : ''}`}
            aria-current={telaAtual === item.id ? 'page' : undefined}
            onClick={() => onTrocarTela(item.id)}
          >
            {item.rotulo}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Nav
