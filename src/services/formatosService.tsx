export const formatosService = {

  PrecoBR: (preco: number): string => {
    return `${ preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }) } / kg`
  },

  PesoEmGramas: (valorPeso: number): string => {
    return `${valorPeso.toLocaleString('pt-BR')} g`;
  }

}