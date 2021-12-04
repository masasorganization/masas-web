import Grid from "@mui/material/Grid"
import AlertOrder from "../../components/client/AlertOrder"
import TotalOrder from "../../components/client/TotalOrder"
import BtnExit from "../../components/client/BtnExit"
import axios from "axios"
import React from "react"

function Orders() {
  const URL = "http://localhost:3004/Productos"

  const getData = async () => {
    const response = axios.get(URL)
    return response
  }

  const [pedidos, setPedidos] = React.useState([])

  React.useEffect(() => {
    getData().then((response) => {
      setPedidos(response.data)
    })
  }, [])

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className='tab-showOrders'>
            <h3 className='txt-title'>Tu lista de pedidos: </h3>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          {pedidos.map((datos, indice) => {
            const { valor, titulo, tamaño, unidades, toppings } = datos
            return (
              <AlertOrder
                key={indice}
                valor={valor}
                titulo={titulo}
                tamaño={tamaño}
                unidades={unidades}
                toppings={toppings}
              />
            )
          })}
        </Grid>
        <Grid item xs={12} md={12}>
          <TotalOrder />
        </Grid>
        <Grid item xs={12} md={12}>
          <BtnExit />
        </Grid>
      </Grid>
    </div>
  )
}

export default Orders
