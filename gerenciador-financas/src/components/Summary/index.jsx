import IncomeImg from "../../assets/income.svg"
import OutcomeImg from "../../assets/outcome.svg"
import TotalImg from "../../assets/total.svg"

import { Cotainer } from "./styles";

function Summary() {

  return (
    <Cotainer>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Cotainer>
  )
}

export default Summary;