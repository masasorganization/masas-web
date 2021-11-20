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

const TestNavbar = () => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const objetosMenu = [
    {
      tituloPagina: 'Productos',
      paginaURL: 'productmanag'
    },
    {
      tituloPagina: 'Cuentas',
      paginaURL: 'sellermanag'
    },
    {
      tituloPagina: 'Cifras',
      paginaURL: 'salesrep'
    },
    {
      tituloPagina: 'Salir',
      paginaURL: 'login'
    }
  ]

  return (
    <div>
      <AppBar elevation="0" position="static">
        <Toolbar sx={{ ...contenedorBarra }}>
          <Box sx={{ ...contenedorNavegacion }}>
            <IconButton
              expand={expanded}
              onClick={handleExpandClick}
              aria-label="Menu"
              sx={{ ...contenedorIcono }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ ...barraPC }}>
              {objetosMenu.map((objetoMenu) => {
                const { tituloPagina, paginaURL } = objetoMenu
                return (
                  <Button
                    component={Link}
                    sx={{ ...botonesNavegacion }}
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
              <Typography
                component={Link}
                sx={{ ...botonesNavegacion }}
                to="productmanag"
              >
                Productos
              </Typography>
              <Typography
                component={Link}
                sx={{ ...botonesNavegacion }}
                to="sellermanag"
              >
                Cuentas
              </Typography>
              <Typography
                component={Link}
                sx={{ ...botonesNavegacion }}
                to="salesrep"
              >
                Cifras
              </Typography>
              <Typography component={Link} sx={{ ...botonesNavegacion }} to="login">
                Salir
              </Typography>
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
  color: '#05B3B2',
  mr: { xs: '16px', md: '40px' },
  p: 0,
  minWidth: 0,
  textTransform: 'capitalize',
  letterSpacing: 0,
  textDecoration: 'none',
  ':hover': {
    color: '#666666',
    backgroundColor: 'unset',
    textDecoration: 'none'
  }
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
