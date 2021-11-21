import AdminNavbar from '../../components/admin/AdminNavbar'
import { administrador } from '../../components/admin/navigationData'

function SalesReport() {
  limpiarPaginas()
  return (
    <div>
      <AdminNavbar estado='3' />
      <h1>Aquí generas los reportes de venta</h1>
    </div>
  )
}

export default SalesReport

// Logica del padre para la barra de navegación

const limpiarPaginas = () => {
  administrador[0].estado = false
  administrador[1].estado = false
  administrador[2].estado = true
  administrador[3].estado = false
}

// Función que envia el estado de la pagina actual a verdadero
