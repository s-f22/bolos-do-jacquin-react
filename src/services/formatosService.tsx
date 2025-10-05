export const formatosService = {

  PrecoBR: (preco: number): string => {
    return `${preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}`
  },

  PesoEmKg: (valorPeso: number): string => {
    return `${valorPeso.toLocaleString('pt-BR', { minimumFractionDigits: 3 })} kg`;
  }

}