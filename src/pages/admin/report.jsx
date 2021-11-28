import AdminNavbar from '../../components/admin/AdminNavbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'

// Arreglo de datos que deberian de llegar desde el padre
const datosReporte = [
  {
    idPedido: 1,
    categoriaPedido: 'Sin azúcar'
  },
  {
    idPedido: 2,
    categoriaPedido: 'Masa saludable'
  },
  {
    idPedido: 3,
    categoriaPedido: 'Tipo organico'
  }
]

// Devuelve un entero por cada objeto en el arreglo
let indice = datosReporte.length

//  Agrega un entero a la variable cada vez que encuentra la palabra "Sin azúcar"
let sinAzucar = 0
for (let a = 0; a < datosReporte.length; a++) {
  if (datosReporte[a].categoriaPedido === 'Sin azúcar') {
    sinAzucar++
  }
}

//  Agrega un entero a la variable cada vez que encuentra la palabra "Masa saludable"
let masaSaludable = 0
for (let b = 0; b < datosReporte.length; b++) {
  if (datosReporte[b].categoriaPedido === 'Masa saludable') {
    masaSaludable++
  }
}

//  Agrega un entero a la variable cada vez que encuentra la palabra "Tipo organico"
let tipoOrganico = 0
for (let c = 0; c < datosReporte.length; c++) {
  if (datosReporte[c].categoriaPedido === 'Tipo organico') {
    tipoOrganico++
  }
}

function Report() {
  return (
    <>
      <QuickReport />
    </>
  )
}

export default Report

function QuickReport() {
  return (
    <>
      <Box sx={{ height: '148px' }}>
        <Typography sx={{ ...subtitulos }}>{'hoy tienes:'}</Typography>
        <Box sx={{ ...cajaPrincipal }}>
          <Typography sx={{ ...numeroPrincipal }}>{indice}</Typography>
          <Typography sx={{ ...cuerpoPrincipal }}>{'Pedidos'}</Typography>
        </Box>
      </Box>
      <Box sx={{ height: '168px', mt: { xs: '64px', md: '40px' } }}>
        <Typography sx={{ ...subtitulos }}>{'de las categorias:'}</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Primera Caja */}
          <Box sx={{ ...cajaSecndaria }}>
            <Typography sx={{ ...numeroSecundario }}>{sinAzucar}</Typography>
            <Typography sx={{ ...cuerpoSecundario }}>
              {'Sin'} <br />
              {'azúcar'}
            </Typography>
          </Box>
          {/* Segunda Caja */}
          <Box sx={{ ...cajaSecndaria }}>
            <Typography sx={{ ...numeroSecundario }}>
              {masaSaludable}
            </Typography>
            <Typography sx={{ ...cuerpoSecundario }}>
              {'Masa saludable'}
            </Typography>
          </Box>
          {/* Tercera Caja */}
          <Box sx={{ ...cajaSecndaria }}>
            <Typography sx={{ ...numeroSecundario }}>{tipoOrganico}</Typography>
            <Typography sx={{ ...cuerpoSecundario }}>
              {'Tipo organico'}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: { xs: '103px', md: '118px' },
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <Button variant='contained' color='primary' sx={{ ...botonLogin }}>
            Continuar
          </Button>
        </Box>
      </Box>
    </>
  )
}

const cajaPrincipal = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '115px',
  bgcolor: '#ffffff',
  borderColor: '#66666699',
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderRadius: 2
}

const cajaSecndaria = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '135px',
  width: '115px',
  bgcolor: '#ffffff',
  borderColor: '#66666699',
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderRadius: 2
}

const subtitulos = {
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 300,
  fontSize: '1.5rem',
  letterSpacing: '1.25px'
}

const cuerpoPrincipal = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: '1.5rem',
  letterSpacing: '1.25px',
  lineHeight: '0.8',
  mt: '8px'
}

const numeroPrincipal = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: '4rem',
  letterSpacing: '1.25px',
  lineHeight: '0.8',
  color: '#05B3B2'
}

const cuerpoSecundario = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 'Bold',
  webkitTextStroke: 'medium',
  fontSize: '1.125rem',
  letterSpacing: '1.25px',
  lineHeight: '0.8',
  mt: '8px',
  textAlign: 'center'
}

const numeroSecundario = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: '3rem',
  letterSpacing: '1.25px',
  lineHeight: '0.8',
  color: '#AA3D72'
}

const botonLogin = {
  backgroundColor: '#05B3B2',
  width: { xs: '278px' },
  height: '39px',
  textTransform: 'none',
  fontFamily: 'Noto Sans, sans-serif',
  fontSize: '1.125rem',
  fontWeight: '700',
  borderRadius: '10px',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#00928e',
    boxShadow: 'none'
  }
}

// eslint-disable-next-line
function OldReport() {
  return (
    <div>
      <AdminNavbar estado='1' />
      <Container fixed>
        <h1>informe del día</h1>

        <h3>hoy tienes:</h3>
        <Box sx={{ bgcolor: 'gray' }}>
          <h1>{indice}</h1> Pedidos
        </Box>
        <br />
        <br />
        <h3>de las categorias:</h3>
        <Box sx={{ bgcolor: 'gray' }}>
          <h1>{sinAzucar}</h1> Sin azúcar
        </Box>
        <br />
        <Box sx={{ bgcolor: 'gray' }}>
          <h1>{masaSaludable}</h1> Masa saludable
        </Box>
        <br />
        <Box sx={{ bgcolor: 'gray' }}>
          <h1>{tipoOrganico}</h1> Tipo organico
        </Box>
        <br />
        <br />
        <Button
          component={Link}
          variant='contained'
          color='primary'
          to='ordersclient'
        >
          Continuar
        </Button>
      </Container>
    </div>
  )
}

// import LayoutReport from 'Layouts/LayoutReport'

// function Report() {
//   return (
//     <div>
//       <LayoutReport>
//         <h1>Contenido de Reporte</h1>
//       </LayoutReport>
//     </div>
//   )
// }

// export default Report
