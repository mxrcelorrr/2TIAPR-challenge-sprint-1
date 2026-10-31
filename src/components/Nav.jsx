// Versão provisória: será substituída pelo Nav final
function Nav({ itens, telaAtual, onTrocarTela }) {
  return (
    <nav>
      {itens.map((item) => (
        <button
          key={item.id}
          type="button"
          disabled={telaAtual === item.id}
          onClick={() => onTrocarTela(item.id)}
        >
          {item.rotulo}
        </button>
      ))}
    </nav>
  )
}

export default Nav
