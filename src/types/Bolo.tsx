export interface Bolo {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  peso?: number;
  categorias: string[];
  imagens: string[];
}