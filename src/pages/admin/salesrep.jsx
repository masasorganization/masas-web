import AdminNavbar from '../../components/admin/AdminNavbar'
import { administrador } from '../../components/admin/navigationData'

const paginaActiva = () => {
  administrador[2].estado = true
}

paginaActiva()

function SalesReport() {
  return (
    <div>
      <AdminNavbar estado='3' />
      <h1>Aquí generas los reportes de venta</h1>
    </div>
  )
}

export default SalesReport
