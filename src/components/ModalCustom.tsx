// components/Modal/ModalCustom.tsx
import { Modal } from "react-bootstrap";

interface ModalCustomProps {
  show: boolean;
  onClose: () => void;
  title: string;
  body: string | React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  showConfirmButton?: boolean;
  centered?: boolean;
}

export default function ModalCustom({
  show,
  onClose,
  title,
  body,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  onConfirm,
  showConfirmButton = false,
  centered = true
}: ModalCustomProps) {
  return (
    <Modal
      style={{ fontFamily: "Bellota, system-ui" }}
      show={show}
      onHide={onClose}
      centered={centered}
    >
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        {showConfirmButton && (
          <button onClick={onClose} className="botaoModalCancelar">
            {cancelText}
          </button>
        )}
        <button
          onClick={showConfirmButton ? onConfirm : onClose}
          className="botaoSubmit"
        >
          {showConfirmButton ? confirmText : "OK"}
        </button>
      </Modal.Footer>
    </Modal>
  );
}
