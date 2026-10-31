import VozExemplo from '../components/VozExemplo.jsx'
import { interacoes } from '../data/interacoes.js'

const PASSOS = [
  {
    id: 1,
    titulo: 'O operador fala',
    texto: 'Sem parar o carro e sem digitar: basta dizer o que encontrou e onde.',
  },
  {
    id: 2,
    titulo: 'O agente registra',
    texto: 'A ocorrência é criada com rodovia, km, sentido e horário.',
  },
  {
    id: 3,
    titulo: 'Tudo aparece aqui',
    texto: 'Operador e supervisão consultam os trechos e o histórico nesta plataforma.',
  },
]

function Inicio({ onIrPara }) {
  const exemplo = interacoes[0]

  return (
    <section className="pagina">
      <div className="hero">
        <div className="hero__texto">
          <h2 className="hero__titulo">
            Registre ocorrências na rodovia sem tirar as mãos do volante
          </h2>
          <p className="hero__descricao">
            O VozCampo é o painel do profissional de campo da Motiva. Consulte a situação dos
            trechos e acompanhe tudo o que foi registrado pelo agente de voz.
          </p>
          <div className="atalhos">
            <button type="button" className="botao" onClick={() => onIrPara('consultas')}>
              Consultar trechos
            </button>
            <button
              type="button"
              className="botao botao--secundario"
              onClick={() => onIrPara('interacoes')}
            >
              Ver histórico de voz
            </button>
          </div>
        </div>
        <VozExemplo comando={exemplo.comando} resposta={exemplo.resposta} />
      </div>

      <div className="contexto">
        <div>
          <h3>O problema</h3>
          <p>
            Na inspeção das rodovias, o profissional de campo está dirigindo, usando EPI ou com as
            mãos ocupadas. Registrar uma vegetação alta, uma defensa danificada ou uma drenagem
            obstruída exige parar, pegar o celular e preencher formulários. Isso atrasa o registro,
            gera informações incompletas e expõe o operador a riscos na pista.
          </p>
        </div>
        <div>
          <h3>Quem usa</h3>
          <p>
            O operador e o inspetor de rodovia, que registram e consultam ocorrências em campo, e a
            supervisão, que acompanha esses registros pelo centro de controle.
          </p>
        </div>
      </div>

      <h3 className="secao__titulo">Como funciona</h3>
      <ol className="passos">
        {PASSOS.map((passo) => (
          <li key={passo.id} className="passo">
            <span className="passo__numero">{passo.id}</span>
            <div>
              <h4>{passo.titulo}</h4>
              <p>{passo.texto}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Inicio
