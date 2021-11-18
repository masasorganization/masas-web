import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Image from '../../assets/isotipo.png'
import Grid from '@mui/material/Grid'

const ButtonAppBar = function () {
  return (
    <Box sx={{ ...navBorder, flexGrow: 1 }}>
      <AppBar elevation="0" position="static">
        <Toolbar sx={{ ...toolbarBehaviour }}>
          <IconButton sx={{ display: { xs: 'block', md: 'none' } }}>
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
              spacing={4}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
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
            </Grid>
            {/* <Box></Box> */}
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
  fontSize: '1.25rem'
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
