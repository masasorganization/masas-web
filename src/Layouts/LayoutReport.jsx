import * as React from 'react'
import AdminNavbar from '../components/admin/AdminNavbar'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
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
            <Cuerpo sx={{ ...tituloCuerpo }}>{'del día'}</Cuerpo>
            <Resaltado sx={{ ...tituloResaltado }}>{'Informe '}</Resaltado>
          </Box>
        </Box>
        {children}
      </Box>
    </>
  )
}

// Componentes de Texto
const Resaltado = styled('p')``
const Cuerpo = styled('p')``

const pantallaCompleta = {
  px: {
    xs: '18px',
    md: '50px'
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
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'center'
}

const tituloCuerpo = {
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 300,
  fontSize: { xs: '1.75rem', md: '2.25rem' },
  whiteSpace: 'pre-wrap',
  pt: '4.5px',
  m: 0
}

const tituloResaltado = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: { xs: '1.75rem', md: '2.25rem' },
  color: '#05B3B2',
  whiteSpace: 'pre-wrap',
  m: 0
}

// Logica del padre para la barra de navegación

// Función que devuelve el estado de todas las paginas a falso
const limpiarPagina = () => {
  for (let i = 0; i < vendedor.length; i++) {
    vendedor[i].estado = false
  }
}
