# VozCampo — Challenge Motiva (Front End & Mobile Development · 2TIAPR)

Plataforma web de apoio ao profissional de campo da Motiva, para consultar informações operacionais dos trechos e visualizar as interações feitas com um agente de voz.

> **Sprint 1:** base do projeto + MVP preparatório. O agente de voz ainda não existe — as interações são **simuladas com dados fixos** em `src/data/`.

## Problema escolhido

Durante as inspeções nas rodovias, o profissional de campo está dirigindo, usando EPI ou com as mãos ocupadas. Registrar uma ocorrência (vegetação alta, defensa danificada, drenagem obstruída) ou consultar a situação de um trecho exige parar, pegar o celular e preencher formulários. Isso atrasa os registros, gera dados incompletos e aumenta a exposição do operador a riscos na pista.

Nossa proposta é um **agente de voz** que permite registrar e consultar ocorrências apenas falando (ex.: *"registrar vegetação alta no km 42"*), e esta plataforma é o painel onde essas informações são visualizadas.

## Usuário da plataforma

- **Principal:** profissional de campo da Motiva (operador/inspetor de rodovia), que consulta trechos e revisa o que registrou por voz.
- **Secundário:** supervisão/centro de controle operacional, que acompanha os registros feitos em campo.

## Funcionalidades (Sprint 1)

| Tela | Descrição |
|------|-----------|
| **Início** | Apresenta a plataforma, o problema escolhido, o usuário e como o agente de voz funciona. |
| **Consultas** | Lista de trechos com rodovia, km, sentido, status e informação operacional (array fixo em `src/data/trechos.js`), com filtro por status e os mais urgentes no topo. |
| **Interações** | Histórico de comandos de voz simulados, agrupado por dia, com texto, horário e resposta do agente (`src/data/interacoes.js`). |

Navegação feita com `useState` (sem React Router nesta sprint).

## Estrutura

```
src/
  assets/       logo.png
  components/   Header, Nav, CardTrecho, CardInteracao, StatusBadge,
                PlacaKm, FiltroStatus, VozExemplo
  pages/        Inicio, Consultas, Interacoes
  data/         trechos.js, interacoes.js
  utils/        formatters.js
  App.jsx
  main.jsx
  index.css
```

## Como rodar

Pré-requisito: Node.js 18+.

```bash
npm install
npm run dev
```

Depois, abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Integrantes e divisão de tarefas

| Nome | RM | Responsabilidades |
|------|----|-------------------|
| Marcelo Augusto | RM567176 | Criação do repositório e do projeto com Vite (`package.json`, `vite.config.js`, `index.html`, `main.jsx`), `App.jsx` com a navegação entre telas via `useState` e o README |
| Leonardo Barros | RM566788 | Identidade visual: componentes `Header` (com a logo) e `Nav`, estilos globais em `index.css` (cores, tipografia e layout responsivo) |
| Yuri Quirino | RM568512 | Tela Consultas: página `Consultas.jsx`, componentes `CardTrecho`, `PlacaKm` e `FiltroStatus`, e os dados fixos de `src/data/trechos.js` |
| Rafael Tavares | RM567357 | Tela Interações: página `Interacoes.jsx`, componentes `CardInteracao` e `StatusBadge`, e o histórico simulado de `src/data/interacoes.js` |
| Gabriel Muniz | RM568237 | Tela Início: página `Inicio.jsx` com a apresentação do problema, componente `VozExemplo` e as funções de formatação de `src/utils/formatters.js` |
