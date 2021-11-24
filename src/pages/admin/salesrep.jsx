import AdminLayout from 'Layouts/AdminLayout'
import * as React from 'react'
import { administrador } from '../../components/admin/navigationData'

function SalesReport() {
  // ReactHook para cambiar el estado de la pagina actual
  const [paginaActual, setPaginaActual] = React.useState(false)

  const ponerEstadoPagina = () => {
    setPaginaActual((administrador[2].estado = !paginaActual))
  }

  // ReactHook para cambiar el estado de todas las paginas y de la pagina actual
  React.useEffect(() => {
    limpiarPagina()
    ponerEstadoPagina()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <AdminLayout body={'Gestión de '} bold={'Cifras'} order={''} color={''}>
        <h1>titulos inteligentes???</h1>
      </AdminLayout>
    </div>
  )
}

export default SalesReport

// Logica del padre para la barra de navegación

// Función que devuelve el estado de todas las paginas a falso
const limpiarPagina = () => {
  for (let i = 0; i < administrador.length; i++) {
    administrador[i].estado = false
  }
}
