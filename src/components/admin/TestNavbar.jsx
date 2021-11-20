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

const TestNavbar = () => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div>
      <AppBar elevation="0" position="static">
        <Toolbar sx={{ ...contenedorBarra }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <IconButton
              expand={expanded}
              onClick={handleExpandClick}
              aria-label="more"
              sx={{ display: { xs: 'flex', md: 'none' }, mr: '16px' }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex'
                },
                flexDirection: 'row'
              }}
            >
              <Typography component={Link} sx={{ ...botonTexto }} to="productmanag">
                Productos
              </Typography>
              <Typography component={Link} sx={{ ...botonTexto }} to="sellermanag">
                Cuentas
              </Typography>
              <Typography component={Link} sx={{ ...botonTexto }} to="salesrep">
                Cifras
              </Typography>
              <Typography component={Link} sx={{ ...botonTexto }} to="login">
                Salir
              </Typography>
            </Box>
            <Collapse
              orientation="horizontal"
              in={expanded}
              timeout="auto"
              unmountOnExit
              sx={{ ...barraColapsada }}
            >
              <Typography component={Link} sx={{ ...botonTexto }} to="productmanag">
                Productos
              </Typography>
              <Typography component={Link} sx={{ ...botonTexto }} to="sellermanag">
                Cuentas
              </Typography>
              <Typography component={Link} sx={{ ...botonTexto }} to="salesrep">
                Cifras
              </Typography>
              <Typography component={Link} sx={{ ...botonTexto }} to="login">
                Salir
              </Typography>
            </Collapse>
          </Box>

          <Box sx={{ ...logo }}></Box>
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

const botonTexto = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: '16px',
  color: '#05B3B2',
  mr: '16px',
  ':hover': {
    color: '#666666'
  }
}

const barraColapsada = {
  display: {
    xs: 'flex',
    md: 'none'
  },
  flexDirection: 'row'
}

const logo = {
  backgroundImage: `url(${imagenLogo})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  width: { xs: '30px', md: '47px' },
  height: { xs: '28px', md: '44px' }
}
