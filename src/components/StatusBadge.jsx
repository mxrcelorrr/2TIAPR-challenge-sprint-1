function StatusBadge({ variante, texto }) {
  return <span className={`badge badge--${variante}`}>{texto}</span>
}

export default StatusBadge
