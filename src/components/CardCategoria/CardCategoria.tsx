import type { CardCategoriaProps } from '../../types/CardCategoriaProps'
import { Link } from 'react-router-dom'

export default function CardCategoria({ rota, titulo, classe, svg }: CardCategoriaProps) {
  return (
    <Link to={rota} className={`homeCard ${classe}`}>
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path fill="currentColor"
          d="M240 48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 192-192 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0 0 192c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192 192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-192 0 0-192z" />
      </svg>
      {
        svg
      }
      <h2>{titulo}</h2>
    </Link>
  )
}
