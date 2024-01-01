
import Modal from 'react-modal';

// Establece el punto de acceso para la accesibilidad
Modal.setAppElement('#root');

const CustomModal = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
    >
      <button onClick={closeModal}>Cerrar modal</button>
      {children}
    </Modal>
  );
};

export default CustomModal;