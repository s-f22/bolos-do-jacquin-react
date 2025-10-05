import { Modal } from "react-bootstrap";
import type { ModalCustomizadoProps } from "../../types/ModalCustomizadoProps";
import './ModalCustomizado.css';

export default function ModalCustomizado({
  mostrar,
  aoFechar,
  titulo,
  corpo,
  textoBotaoConfirmacao = "Confirmar",
  textoBotaoCancelamento = "Cancelar",
  aoConfirmar,
  estadoBotaoConfirmacao = false,
  estadoConteudoCentralizado = true }: ModalCustomizadoProps) {
  return (
    <Modal
      style={{ fontFamily: "Bellota, system-ui" }}
      show={mostrar}
      onHide={aoFechar}
      centered={estadoConteudoCentralizado}
    >
      <Modal.Header>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{corpo}</Modal.Body>
      <Modal.Footer>
        {estadoBotaoConfirmacao && (
          <button onClick={aoFechar} className="botaoModalCancelar">
            {textoBotaoCancelamento}
          </button>
        )}
        <button
          onClick={estadoBotaoConfirmacao ? aoConfirmar : aoFechar}
          className="botaoSubmit"
        >
          {estadoBotaoConfirmacao ? textoBotaoConfirmacao : "OK"}
        </button>
      </Modal.Footer>
    </Modal>
  );
}
