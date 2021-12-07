import * as React from 'react'
import AdminNavbar from '../../../../components/admin/AdminNavbar'
import { administrador } from '../../../../components/admin/navigationData'
// import ProductLongForm from '../../../../components/admin/managers/LongVersion/New/ProductLongForm'
// import AccountLongForm from '../../../../components/admin/managers/LongVersion/New/AccountLongForm'
import OrderLongForm from '../../../../components/admin/managers/LongVersion/New/OrderLongForm'

export default function LayoutProdMan({ children }) {
  // ReactHook para cambiar el estado de la pagina actual
  const [paginaActual, setPaginaActual] = React.useState(false)

  const ponerEstadoPagina = () => {
    setPaginaActual((administrador[0].estado = !paginaActual))
  }

  // ReactHook para cambiar el estado de todas las paginas y de la pagina actual
  React.useEffect(() => {
    limpiarPagina()
    ponerEstadoPagina()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    document.title = 'má sas | Gestión de productos'
  })

  return (
    <>
      <AdminNavbar usuario='admin' />
      <OrderLongForm />
      {/* <AccountLongForm /> */}
      {/* <ProductLongForm /> */}
    </>
  )
}

// Logica del padre para la barra de navegación

// Función que devuelve el estado de todas las paginas a falso
const limpiarPagina = () => {
  for (let i = 0; i < administrador.length; i++) {
    administrador[i].estado = false
  }
}
