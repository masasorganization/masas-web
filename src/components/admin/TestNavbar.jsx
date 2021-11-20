import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Collapse from '@mui/material/Collapse'
import { Link } from 'react-router-dom'
import imagenLogo from '../../assets/isotipo.png'
import imagenLogoAlt from '../../assets/isotipoAlt.png'
import Button from '@mui/material/Button'

const TestNavbar = (props) => {
  // Props que llegan desde el padre (la vista)
  const estadoBoton = props.estado

  // reactHook para el contenedor Collapse del menú hamburguesa
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  // Arreglo con los elementos de la barra de navegación
  const objetosMenu = [
    {
      tituloPagina: 'Productos',
      paginaURL: 'productmanag',
      estado: ''
    },
    {
      tituloPagina: 'Cuentas',
      paginaURL: 'sellermanag',
      estado: ''
    },
    {
      tituloPagina: 'Cifras',
      paginaURL: 'salesrep',
      estado: ''
    },
    {
      tituloPagina: 'Salir',
      paginaURL: 'login',
      estado: ''
    }
  ]

  // Funcion para cambiar el color al botón activo en la barra de navegación
  const cambiarEstadoNavBar = (e) => {
    if (e === '1') {
      objetosMenu[0].estado = activo
    } else if (e === '2') {
      objetosMenu[1].estado = activo
    } else if (e === '3') {
      objetosMenu[2].estado = activo
    } else {
      console.log('Parametro invalido para el botón de la barra de navegación')
    }
  }

  // Se llama la función cada vez que carga la barra de navegación
  cambiarEstadoNavBar(estadoBoton)

  return (
    <div>
      <AppBar elevation={desactivarElevacion} position="static">
        <Toolbar sx={{ ...contenedorBarra }}>
          <Box sx={{ ...contenedorNavegacion }}>
            <IconButton
              expand={expanded ? 1 : undefined}
              onClick={handleExpandClick}
              aria-label="Menu"
              sx={{ ...contenedorIcono }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ ...barraPC }}>
              {objetosMenu.map((objetoMenu, index) => {
                const { tituloPagina, paginaURL, estado } = objetoMenu
                return (
                  <Button
                    key={index}
                    component={Link}
                    sx={{ ...botonesNavegacion, ...estado }}
                    to={paginaURL}
                  >
                    {tituloPagina}
                  </Button>
                )
              })}
            </Box>
            <Collapse
              orientation="horizontal"
              in={expanded}
              timeout="auto"
              unmountOnExit
              sx={{ ...barraMovil }}
            >
              {objetosMenu.map((objetoMenu, index) => {
                const { tituloPagina, paginaURL, estado } = objetoMenu
                return (
                  <Typography
                    key={index}
                    component={Link}
                    sx={{ ...botonesNavegacion, ...estado }}
                    to={paginaURL}
                  >
                    {tituloPagina}
                  </Typography>
                )
              })}
            </Collapse>
          </Box>
          <Box component={Link} sx={{ ...logo }} to="welcome"></Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TestNavbar

const contenedorBarra = {
  bgcolor: '#ffffff',
  borderBottomColor: '#66666699',
  borderBottomStyle: 'solid',
  borderBottomWidth: 'thin',
  display: 'flex',
  justifyContent: 'space-between',
  px: {
    md: '94px',
    xs: 'none'
  },
  height: {
    md: '64px',
    xs: '64px'
  }
}

const contenedorNavegacion = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}

const contenedorIcono = {
  display: { xs: 'flex', md: 'none' },
  mr: '16px'
}

const botonesNavegacion = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: { xs: '16px', md: '20px' },
  color: '#666666',
  mr: { xs: '16px', md: '40px' },
  p: 0,
  minWidth: 0,
  textTransform: 'capitalize',
  letterSpacing: 0,
  textDecoration: 'none',
  ':hover': {
    color: '#05B3B2',
    backgroundColor: 'unset',
    textDecoration: 'none'
  }
}

const activo = {
  color: '#05B3B2'
}

const barraMovil = {
  display: {
    xs: 'flex',
    md: 'none'
  },
  flexDirection: 'row'
}

const barraPC = {
  display: {
    xs: 'none',
    md: 'flex'
  },
  flexDirection: 'row'
}

const logo = {
  backgroundImage: `url(${imagenLogo})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  width: { xs: '30px', md: '47px' },
  height: { xs: '28px', md: '44px' },
  ':hover': {
    transition: 'transform .1s',
    backgroundImage: `url(${imagenLogoAlt})`,
    transform: 'scale(1.05)'
  }
}

let desactivarElevacion = 0
