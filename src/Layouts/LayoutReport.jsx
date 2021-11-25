import * as React from 'react'
import AdminNavbar from '../components/admin/AdminNavbar'
import Box from '@mui/material/Box'
import SmartTitle from 'components/admin/SmartTitle'
import { vendedor } from '../components/admin/navigationData'

export default function LayoutSalesR({ children }) {
  // ReactHook para cambiar el estado de la pagina actual
  const [paginaActual, setPaginaActual] = React.useState(false)

  const ponerEstadoPagina = () => {
    setPaginaActual((vendedor[0].estado = !paginaActual))
  }

  // ReactHook para cambiar el estado de todas las paginas y de la pagina actual
  React.useEffect(() => {
    limpiarPagina()
    ponerEstadoPagina()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <AdminNavbar usuario='' />
      <Box sx={{ ...pantallaCompleta }}>
        {/* Contenedor principal */}
        <Box sx={{ ...contenedorSuperior }}>
          {/* Cuadro que contiene a los titlos */}
          <Box sx={{ ...contenedorTitulos }}>
            <SmartTitle
              body={'del día'}
              bold={'Informe '}
              order={'invertido'}
              color={''}
            />
          </Box>
        </Box>
        {children}
      </Box>
    </>
  )
}

const pantallaCompleta = {
  px: {
    md: '94px',
    xs: '18px'
  }
}

const contenedorSuperior = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'center',
  height: { xs: '55px', md: '143px' },
  width: '100%',
  mt: { xs: '10px', md: 0 }
}

const contenedorTitulos = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}

// Logica del padre para la barra de navegación

// Función que devuelve el estado de todas las paginas a falso
const limpiarPagina = () => {
  for (let i = 0; i < vendedor.length; i++) {
    vendedor[i].estado = false
  }
}
