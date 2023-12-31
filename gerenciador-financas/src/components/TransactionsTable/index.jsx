import { useEffect } from "react";
import { useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

function TransactionsTable() {

  useEffect(() => {
    api.get("/transactions")
      .then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/10/2023</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.000</td>
            <td>Casa</td>
            <td>10/10/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionsTable;