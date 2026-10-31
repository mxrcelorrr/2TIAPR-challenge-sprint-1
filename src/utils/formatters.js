// Funções utilitárias de formatação

export function formatarData(isoString) {
  const data = new Date(isoString)
  return data.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatarHora(isoString) {
  return new Date(isoString).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatarDiaExtenso(isoString) {
  const texto = new Date(isoString).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}

// Agrupa uma lista de itens com campo de data por dia (mais recente primeiro)
export function agruparPorDia(itens, campoData = 'data') {
  const ordenados = [...itens].sort((a, b) => new Date(b[campoData]) - new Date(a[campoData]))
  const grupos = []
  ordenados.forEach((item) => {
    const dia = item[campoData].slice(0, 10)
    const grupo = grupos.find((g) => g.dia === dia)
    if (grupo) grupo.itens.push(item)
    else grupos.push({ dia, itens: [item] })
  })
  return grupos
}

const STATUS_LABELS = {
  normal: 'Normal',
  atencao: 'Atenção',
  critico: 'Crítico',
}

export function rotuloStatus(status) {
  return STATUS_LABELS[status] ?? status
}

const TIPO_LABELS = {
  registro: 'Registro',
  consulta: 'Consulta',
  encerramento: 'Encerramento',
}

export function rotuloTipo(tipo) {
  return TIPO_LABELS[tipo] ?? tipo
}
