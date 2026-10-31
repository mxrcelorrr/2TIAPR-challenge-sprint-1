// Histórico simulado de comandos de voz do operador.
// Nesta sprint o agente de voz ainda não existe: as respostas são fixas.
export const interacoes = [
  {
    id: 1,
    comando: 'Registrar vegetação alta no km 42 da Bandeirantes',
    data: '2026-10-25T07:12:00',
    resposta: 'Ocorrência #1024 registrada: vegetação alta, SP-348 km 42, sentido Interior.',
    tipo: 'registro',
  },
  {
    id: 2,
    comando: 'Qual a situação da Anhanguera no km 65?',
    data: '2026-10-25T07:30:00',
    resposta: 'Faixa 2 interditada entre o km 60 e 72 por recapeamento. Sinalização provisória ativa.',
    tipo: 'consulta',
  },
  {
    id: 3,
    comando: 'Registrar defensa danificada no km 214 da Dutra',
    data: '2026-10-24T16:48:00',
    resposta: 'Ocorrência #1019 registrada e encaminhada para a equipe de manutenção.',
    tipo: 'registro',
  },
  {
    id: 4,
    comando: 'Tem alguma ocorrência aberta perto do km 90?',
    data: '2026-10-24T11:05:00',
    resposta: 'Sim. Drenagem obstruída no km 91 da Bandeirantes, sentido Capital.',
    tipo: 'consulta',
  },
  {
    id: 5,
    comando: 'Encerrar ocorrência 1012',
    data: '2026-10-23T15:22:00',
    resposta: 'Ocorrência #1012 encerrada. Registro de fechamento salvo com seu usuário.',
    tipo: 'encerramento',
  },
]
