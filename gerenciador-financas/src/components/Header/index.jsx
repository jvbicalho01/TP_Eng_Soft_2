import { useState } from "react"

import Modal from "react-modal"

import MoneyLogo from "../../assets/money-logo.svg"

import {
  Container,
  Content
} from "./styles"

function Header({ onOpenNewTransactionModal }) {

  return (
    <Container>
      <Content>
        <img src={MoneyLogo} alt="Money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}

export default Header