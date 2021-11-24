import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SmartTitle from 'components/admin/SmartTitle'

export default function UpperSection({ body, bold, order, color }) {
  return (
    <>
      {/* Contenedor principal */}
      <Box sx={{ ...contenedorSuperior }}>
        {/* Cuadro que contiene a los titlos */}
        <Box sx={{ ...contenedorTitulos }}>
          <SmartTitle body={body} bold={bold} order={order} color={color} />
        </Box>
        {/* Cuadro que contiene a los botones */}
        <Box sx={{ ...contenedorBotones }}>
          <Button variant='contained' sx={{ ...botonSecundario }}>
            Cancelar
          </Button>
          <Button variant='contained' sx={{ ...botonPrimario }}>
            Actualizar producto
          </Button>
        </Box>
      </Box>
    </>
  )
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
  justifyContent: { xs: 'center', sm: 'center', md: 'unset' },
  mt: { xs: '10px', md: 0 }
}

const botonPrimario = {
  backgroundColor: '#FF823B',
  borderRadius: '10px',
  width: '270px',
  height: '39px',
  textTransform: 'none',
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: '700',
  fontSize: '1.125rem',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#c65306',
    boxShadow: 'none'
  }
}

const botonSecundario = {
  backgroundColor: '#AA3D72',
  borderRadius: '10px',
  width: '129px',
  px: '40px',
  height: '39px',
  textTransform: 'none',
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: '700',
  fontSize: '1.125rem',
  boxShadow: 'none',
  mr: '18px',
  '&:hover': {
    backgroundColor: '#770047',
    boxShadow: 'none'
  }
}
