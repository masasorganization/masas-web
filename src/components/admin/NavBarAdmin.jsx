import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Image from '../../assets/isotipo.png'
import Grid from '@mui/material/Grid'
//import Collapse from '@mui/material/Collapse'

const ButtonAppBar = function () {
  const [collapseMenu, setCollapseMenu] = React.useState(false)

  const click = () => {
    setCollapseMenu(!collapseMenu)
  }

  return (
    <Box sx={{ ...navBorder, flexGrow: 1 }}>
      <AppBar elevation="0" position="static">
        <Toolbar sx={{ ...toolbarBehaviour }}>
          <IconButton
            expand={collapseMenu}
            onClick={click}
            aria-expanded={collapseMenu}
            aria-label="more"
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              bgcolor: 'red',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              {/* <Collapse
                in={collapseMenu}
                timeout="auto"
                unmountOnExit
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                <Grid item xs={12}>
                  <Button variant="text" sx={{ ...buttonStyle }}>
                    Productos
                  </Button>
                  <Button variant="text" sx={{ ...buttonStyle }}>
                    Cuentas
                  </Button>
                  <Button variant="text" sx={{ ...buttonStyle }}>
                    Cifras
                  </Button>
                  <Button variant="text" sx={{ ...buttonStyle }}>
                    Salir
                  </Button>
                </Grid>
              </Collapse> */}
              <Grid item xs={12}>
                <Button variant="text" sx={{ ...buttonStyle }}>
                  Productos
                </Button>
                <Button variant="text" sx={{ ...buttonStyle }}>
                  Cuentas
                </Button>
                <Button variant="text" sx={{ ...buttonStyle }}>
                  Cifras
                </Button>
                <Button variant="text" sx={{ ...buttonStyle }}>
                  Salir
                </Button>
              </Grid>
            </Grid>
            <Box className="navBarAdmin">
              <img src={Image} alt="" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default ButtonAppBar

const buttonStyle = {
  bgcolor: '#ffffff',
  color: '#05B3B2',
  textTransform: 'none',
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 'Bold',
  fontSize: '1.25rem',
  mr: {
    md: '40px',
    xs: '20px'
  }
}

const navBorder = {
  borderBottomColor: '#66666699',
  borderBottomStyle: 'solid',
  borderBottomWidth: 'thin'
}

const toolbarBehaviour = {
  bgcolor: '#ffffff',
  pl: {
    md: '94px !important',
    xs: 'none'
  },
  pr: {
    md: '94px !important',
    xs: '20px'
  },
  height: {
    md: '64px !important',
    xs: '64px !important'
  }
}
