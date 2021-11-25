import * as React from 'react'
import AdminNavbar from '../components/admin/AdminNavbar'
import Box from '@mui/material/Box'
import SmartTitle from 'components/admin/SmartTitle'
import { vendedor } from '../components/admin/navigationData'
import Typography from '@mui/material/Typography'

export default function LayoutSalesR({ children }) {
  // ReactHook para cambiar el estado de la pagina actual
  const [paginaActual, setPaginaActual] = React.useState(false)

  const ponerEstadoPagina = () => {
    setPaginaActual((vendedor[1].estado = !paginaActual))
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
              body={'Gestión de '}
              bold={'pedidos'}
              order={''}
              color={''}
            />
          </Box>
          {/* Cuadro que contiene a los botones */}
          <Box sx={{ ...contenedorBotones }}>
            {/* <Button variant='contained' sx={{ ...botonPrimario }}>
              Exportar
            </Button> */}
            <Typography sx={{ ...textoComplementario }}>
              Seleccione un pedido para obtener más información.
            </Typography>
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
  justifyContent: 'space-between',
  height: { xs: '55px', md: '143px' },
  width: '100%',
  mt: { xs: '10px', md: 0 }
}

const contenedorTitulos = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}

const contenedorBotones = {
  position: { xs: 'none', md: 'unset' },
  bottom: { xs: '21px', md: 0 },
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: { xs: 'left', md: 'unset' },
  mt: { xs: '10px', md: 0 }
}

const textoComplementario = {
  textTransform: 'none',
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 300,
  fontSize: { xs: '0.875rem', md: '1.05rem' },
  color: '#666666',
  '&:hover': {
    color: '#000000'
  }
}

// Logica del padre para la barra de navegación

// Función que devuelve el estado de todas las paginas a falso
const limpiarPagina = () => {
  for (let i = 0; i < vendedor.length; i++) {
    vendedor[i].estado = false
  }
}
