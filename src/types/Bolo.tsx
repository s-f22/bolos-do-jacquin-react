export interface Bolo {
  id: string | undefined;
  nome: string;
  descricao: string;
  preco: number;
  peso?: number;
  categorias: string[];
  imagens: string[];
}