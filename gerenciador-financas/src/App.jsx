import { useState } from "react";

import { GlobaStyle } from "./styles/global";

import Modal from "react-modal"

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import NewTransactionModal from "./components/NewTransactionModal";

Modal.setAppElement("#root")

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobaStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  )
}

export default App;