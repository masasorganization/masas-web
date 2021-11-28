import LayoutSalesR from 'Layouts/LayoutSalesR'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import { createTheme } from '@mui/system'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

function SalesReport() {
  return (
    <div>
      <LayoutSalesR>
        <FullReport />
      </LayoutSalesR>
    </div>
  )
}

export default SalesReport

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

const Text3Style = styled('p')``

function FullReport() {
  return (
    <>
      <Box
        sx={{
          mb: '20px',
          pr: '48px',
          pl: '48px',
          [theme.breakpoints.down('sm')]: {
            pr: '20px',
            pl: '20px'
          }
        }}
      >
        <Box>
          <Grid container>
            <Grid xs={12} lg={6}>
              <Box>
                <Box
                  sx={{
                    pr: '48px',
                    pl: '48px',
                    [theme.breakpoints.down('md')]: { p: '0px' }
                  }}
                >
                  <Text3Style
                    sx={{
                      ...text3Style,
                      [theme.breakpoints.down('sm')]: { fontSize: '16px' }
                    }}
                  >
                    Ciclo de datos:
                  </Text3Style>
                  <Grid container>
                    <Grid xs={6} md={3} lg={4}>
                      <Button
                        sx={{
                          ...buttonStyle2,
                          ':active': { bgcolor: '#FF823B' },
                          [theme.breakpoints.down('md')]: { ...buttonStyle2md }
                        }}
                      >
                        Diario
                      </Button>
                    </Grid>
                    <Grid xs={6} md={3} lg={4}>
                      <Button
                        sx={{
                          ...buttonStyle2,
                          ':active': { bgcolor: '#FF823B' },
                          [theme.breakpoints.down('md')]: { ...buttonStyle2md }
                        }}
                      >
                        Semanal
                      </Button>
                    </Grid>
                    <Grid xs={6} md={3} lg={4}>
                      <Button
                        sx={{
                          ...buttonStyle2,
                          ':active': { bgcolor: '#FF823B' },
                          [theme.breakpoints.down('md')]: { ...buttonStyle2md }
                        }}
                      >
                        Mensual
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    pr: '48px',
                    pl: '48px',
                    [theme.breakpoints.down('md')]: { p: '0px' }
                  }}
                >
                  <Text3Style
                    sx={{
                      ...text3Style,
                      [theme.breakpoints.down('sm')]: { fontSize: '16px' }
                    }}
                  >
                    Filtros:
                  </Text3Style>
                  <Grid container>
                    <Grid xs={6} md={3} lg={4}>
                      <Button
                        sx={{
                          ...buttonStyle2,
                          ':active': { bgcolor: '#05B3B2' },
                          [theme.breakpoints.down('md')]: { ...buttonStyle2md }
                        }}
                      >
                        Ventas
                      </Button>
                    </Grid>
                    <Grid xs={6} md={3} lg={4}>
                      <Button
                        sx={{
                          ...buttonStyle2,
                          ':active': { bgcolor: '#05B3B2' },
                          [theme.breakpoints.down('md')]: { ...buttonStyle2md }
                        }}
                      >
                        Tamaños
                      </Button>
                    </Grid>
                    <Grid xs={6} md={3} lg={4}>
                      <Button
                        sx={{
                          ...buttonStyle2,
                          ':active': { bgcolor: '#05B3B2' },
                          [theme.breakpoints.down('md')]: { ...buttonStyle2md }
                        }}
                      >
                        Toppings
                      </Button>
                    </Grid>
                    <Grid xs={6} md={3} lg={4}>
                      <Button
                        sx={{
                          ...buttonStyle2,
                          ':active': { bgcolor: '#05B3B2' },
                          [theme.breakpoints.down('md')]: { ...buttonStyle2md }
                        }}
                      >
                        Categorias
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} md={12} lg={6}>
              <Box
                sx={{
                  height: '50vh',
                  mr: '48px',
                  bgcolor: '#05B3B233',
                  [theme.breakpoints.down('lg')]: { m: '0px', mt: '25px' }
                }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

const text3Style = {
  mt: '50px',
  mb: '0px',
  fontFamily: 'Nunito',
  fontSize: '24px',
  fontWeight: 300
}

const buttonStyle2 = {
  width: '161px',
  mt: '32px',
  mr: '15px',
  fontFamily: 'Noto Sans',
  fontWeight: 'bold',
  fontSize: '18px',
  letterSpacing: '1.25px',
  textTransform: 'capitalize',
  color: '#FFFFFF',
  bgcolor: '#00000033',
  borderRadius: '4px',
  ':hover': {
    bgcolor: '#00000033'
  }
}

const buttonStyle2md = {
  [theme.breakpoints.down('md')]: {
    width: '40vw',
    m: '12.5px',
    p: '0px'
  }
}
