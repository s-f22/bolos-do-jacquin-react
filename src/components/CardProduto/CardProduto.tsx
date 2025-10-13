import './CardProduto.css';
import { formatosService } from '../../services/formatosService';
import type { CardProdutoProps } from '../../types/CardProdutoProps';

export default function CardProduto({ nome, descricao, preco, imagem, id }: CardProdutoProps) {
  return (
    <div id={id} className="cardProduto">
      <img src={`http://localhost:3000/static/${imagem}`} alt={descricao} />
      <div className='card_textos'>
        <h2>{nome}</h2>
        <p>{descricao}</p>
        <span>{formatosService.PrecoBR(preco)}</span>
      </div>
    </div>
  )
}
