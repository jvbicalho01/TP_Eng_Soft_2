import Modal from "react-modal"

function NewTransactionModal({isOpen, onRequestClose}) {


  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    <h2>Cadastrar Transação</h2>
  </Modal>
  )
}

export default NewTransactionModal