export interface ModalCustomizadoProps {
  mostrar: boolean;
  aoFechar: () => void;
  titulo: string;
  corpo: string | React.ReactNode;
  
  textoBotaoConfirmacao?: string;
  textoBotaoCancelamento?: string;
  aoConfirmar?: () => void;
  estadoBotaoConfirmacao?: boolean;
  estadoConteudoCentralizado?: boolean;
}