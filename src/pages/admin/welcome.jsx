import { Grid } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/system'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'
import BoxCategory from '../../components/admin/BoxCategory'
import { Link } from 'react-router-dom'

const Text1Style = styled('p')``
const Text2Style = styled('p')``

const theme = createTheme({
  palette: {
    blanco: '#FFFFFF',
    negro: '#000000',
    gris: '#dadada',
    principalClaro: '#FF823B',
    secundarioClaro: '#AA3D72',
    azulado: '#05B3B2'
  }
})

function CategoryPage() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            height: { xs: '184px', md: '295px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
            //my: '20px'
          }}
        >
          <Text1Style sx={{ ...text1Style }}>¿Por dónde quieres</Text1Style>
          <Text2Style sx={{ ...text2Style }}> comenzar?</Text2Style>
        </Box>
        <Box sx={{ ...text3Style }}>Selecciona una opción:</Box>
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} sm={11} md={4}>
            <Box
              component={Link}
              to={'productmanag'}
              sx={{ textDecoration: 'none' }}
            >
              <BoxCategory
                background='background.principalClaro'
                hover='hover.hoverPrincipalClaro'
                title='Productos'
                paragraph='En esta sección puedes crear, editar, modificar y archivar los productos del '
                word='catalogo.'
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={11} md={4}>
            <Box
              component={Link}
              to={'sellermanag'}
              sx={{ textDecoration: 'none' }}
            >
              <BoxCategory
                background='background.secundarioClaro'
                hover='hover.hoverSecundarioClaro'
                title='Cuentas'
                paragraph='En esta sección puedes crear, editar, modificar y eliminar las cuentas de '
                word='usuario.'
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={11} md={4}>
            <Box
              component={Link}
              to={'salesrep'}
              sx={{ textDecoration: 'none' }}
            >
              <BoxCategory
                background='background.azulado'
                hover='hover.hoverAzulado'
                title='Cifras'
                paragraph='En esta sección puedes acceder a los datos que se han recolectado sobre productos y '
                word='ventas.'
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={11} md={4}>
            <Box
              component={Link}
              to={'login'}
              sx={{
                bgcolor: 'gris',
                color: 'blanco',
                height: '60px',
                display: 'flex',
                m: '20px',
                borderRadius: 2,
                fontFamily: 'Noto Sans',
                fontWeight: 700,
                fontSize: '24px',
                letterSpacing: '1.25px',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                [theme.breakpoints.down('md')]: {
                  height: '30px',
                  fontSize: '18px'
                },
                ':hover': {
                  backgroundColor: '#979797',
                  textDecoration: 'none'
                }
              }}
            >
              Salir
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  )
}

export default CategoryPage

const text1Style = {
  color: 'negro',
  textAlign: 'Center',
  letterSpacing: '1.25px',
  fontSize: '60px',
  margin: '1.6rem',
  mb: '0rem',
  fontFamily: 'Nunito',
  fontWeight: '300',
  [theme.breakpoints.only('md')]: {
    fontSize: '48px',
    mb: '0rem'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '32px'
  }
}

const text2Style = {
  color: 'principalClaro',
  textAlign: 'Center',
  letterSpacing: '1.25px',
  fontSize: '60px',
  margin: '1.6rem',
  mt: '0rem',
  fontFamily: 'Noto Sans',
  fontWeight: 'bold',
  [theme.breakpoints.only('md')]: {
    fontSize: '48px',
    mb: '0rem'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '32px'
  }
}

const text3Style = {
  color: 'negro',
  textAlign: 'Left',
  letterSpacing: '1.25px',
  fontSize: '24px',
  margin: '1.6rem',
  mt: '0rem',
  fontFamily: 'Nunito',
  fontWeight: '300',
  [theme.breakpoints.only('md')]: {
    fontSize: '20px',
    mb: '0rem'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    mb: '0rem'
  }
}
