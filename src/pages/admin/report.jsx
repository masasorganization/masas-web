import AdminNavbar from '../../components/admin/AdminNavbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'

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

export default Report
