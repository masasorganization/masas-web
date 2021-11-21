import * as React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import { vendedor } from '../../components/admin/navigationData'

function Registry() {
  // ReactHook para cambiar el estado de la pagina actual
  const [paginaActual, setPaginaActual] = React.useState(false)

  const ponerEstadoPagina = () => {
    setPaginaActual((vendedor[2].estado = !paginaActual))
  }

  // ReactHook para cambiar el estado de todas las paginas y de la pagina actual
  React.useEffect(() => {
    limpiarPagina()
    ponerEstadoPagina()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <AdminNavbar />
      <h1>Aquí está tu archivo</h1>
    </div>
  )
}

export default Registry

// Logica del padre para la barra de navegación

// Función que devuelve el estado de todas las paginas a falso
const limpiarPagina = () => {
  for (let i = 0; i < vendedor.length; i++) {
    vendedor[i].estado = false
  }
}
