import LayoutReport from 'Layouts/LayoutReport'
import QuickReport from '../../components/admin/QuickReport'

function Report() {
  return (
    <div>
      <LayoutReport>
        <QuickReport />
        <h1>Contenido de Reporte</h1>
      </LayoutReport>
    </div>
  )
}

export default Report
