import logo from '../assets/logo.png'

function Header({ titulo, subtitulo }) {
  return (
    <header className="header">
      <div className="header__marca">
        <img className="header__logo" src={logo} alt="Logo Motiva" />
        <div>
          <h1 className="header__titulo">{titulo}</h1>
          <p className="header__subtitulo">{subtitulo}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
