import MoneyLogo from "../../assets/money-logo.svg"

import {
  Container,
  Content
} from "./styles"

function Header() {
  return (
    <Container>
      <Content>
        <img src={MoneyLogo} alt="Money" />
        <button type="button">
          Nova Trasação
        </button>
      </Content>
    </Container>
  )
}

export default Header