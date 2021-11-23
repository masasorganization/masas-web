import * as React from 'react'
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMore from '@mui/icons-material/ExpandMore'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

// Contenedores de Texto
const Resaltado = styled('p')``
const Cuerpo = styled('p')``

const ProductManager = () => {
  let [acordeonIzqActivo, setAcordeonIzqActivo] = React.useState(false)
  let [acordeonDerActivo, setAcordeonDerActivo] = React.useState(false)

  const cambioIzquierdo = () => {
    setAcordeonIzqActivo(!acordeonIzqActivo)
  }

  const cambioDerecho = () => {
    setAcordeonDerActivo(!acordeonDerActivo)
  }

  return (
    <Box sx={{ ...pantallaCompleta }}>
      <div>
        <Box sx={{ ...contenedorTitulos }}>
          <Box display='flex' flexDirection='row' alignItems='center'>
            <Cuerpo sx={{ ...tituloCuerpo }}>Editar </Cuerpo>
            <Resaltado sx={{ ...tituloResaltado }}>Producto</Resaltado>
          </Box>

          <Box
            sx={{
              ...contenedorBotones
            }}
          >
            <Button variant='contained' sx={{ ...botonSecundario, mr: '18px' }}>
              Cancelar
            </Button>
            <Tooltip title={textoTooltip} arrow>
              <Button variant='contained' sx={{ ...botonPrimario }}>
                Actualizar producto
              </Button>
            </Tooltip>
          </Box>
        </Box>

        <Box sx={{ ...contenedorAcordeones, pb: '80px' }}>
          <Grid
            container
            justifyContent='space-between'
            rowSpacing={{ xs: '10px' }}
            columnSpacing={{ xs: 0, md: '96px' }}
          >
            <Grid item xs={12} md={6}>
              <Accordion
                elevation='0'
                sx={{
                  maxWidth: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '839px'
                  },
                  border: 'solid gray 1px'
                }}
              >
                <AccordionSummary
                  onClick={() => cambioIzquierdo()}
                  expandIcon={
                    <ExpandMore
                      sx={{
                        color: acordeonIzqActivo ? '#ffffff' : '#666666'
                      }}
                    />
                  }
                  aria-label='Expand'
                  aria-controls='-content'
                  id='-header'
                  sx={{
                    px: {
                      md: '24px',
                      xs: '10px'
                    },
                    bgcolor: acordeonIzqActivo ? '#05B3B2' : 'transparent'
                  }}
                >
                  <Typography
                    sx={{
                      ...tituloAcordeon,
                      color: acordeonIzqActivo ? '#ffffff' : '#666666'
                    }}
                  >
                    <b>Información general</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    px: {
                      md: '0',
                      xs: '10px'
                    }
                  }}
                >
                  <Container
                    maxWidth='mb'
                    sx={{
                      px: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left'
                    }}
                  >
                    <DatosCliente />
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} md={6}>
              <Accordion
                elevation='0'
                sx={{
                  maxWidth: {
                    xs: '100%',
                    sm: '100%',
                    md: '539px',
                    lg: '839px'
                  },
                  border: 'solid gray 1px'
                }}
              >
                <AccordionSummary
                  onClick={() => cambioDerecho()}
                  expandIcon={
                    <ExpandMore
                      sx={{
                        color: acordeonDerActivo ? '#ffffff' : '#666666'
                      }}
                    />
                  }
                  aria-label='Expand'
                  aria-controls='-content'
                  id='-header'
                  sx={{
                    px: {
                      md: '24px',
                      xs: '10px'
                    },
                    bgcolor: acordeonDerActivo ? '#05B3B2' : 'transparent'
                  }}
                >
                  <Typography
                    sx={{
                      ...tituloAcordeon,
                      color: acordeonDerActivo ? '#ffffff' : '#666666'
                    }}
                  >
                    Imágen
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    px: {
                      md: '0',
                      xs: '10px'
                    }
                  }}
                >
                  <Container
                    maxWidth='mb'
                    sx={{
                      px: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left'
                    }}
                  >
                    Aquí va el componente de imágenes
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Box>
  )
}

export default ProductManager

// Componentes de formulario

let textoTooltip = 'Este botón se activará al ingresar toda la información.'

function DatosCliente() {
  return (
    <>
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Nombre completo'
        //required='true'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Tipo de documento'
        //required='true'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Número de documento'
        //required='true'
        //helperText='Sin puntos (.) ni guiones (-) nit completo'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Dirección'
        //required='true'
        //helperText='Ej: Calle 20 sur # 2-28 o Carrera 13 este # 4-55'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Número casa, apto, oficina'
        //helperText='Ej: Torre 1 bloque b ap 202'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Barrio'
        //required='true'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Celular'
        //required='true'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Fecha de entrega'
        //required='true'
      />
    </>
  )
}

// Estilos en variables

const pantallaCompleta = {
  px: {
    md: '94px',
    xs: '10px'
  }
}

const contenedorTitulos = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: { xs: '55px', md: '143px' },
  width: '100%'
}

const camposTexto = {
  '& .MuiInput-input': {
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 300,
    fontSize: '1rem',
    letterSpacing: '1px'
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.3px',
    '&.Mui-focused': {
      color: '#00928e'
    }
  },
  '& .MuiFormHelperText-root': {
    fontSize: '0.70rem'
  },
  '& .MuiInput-root': {
    '&:after': {
      borderBottom: '2px solid #00928e'
    }
  }
}

const contenedorAcordeones = {
  display: 'flex',
  justifyContent: 'space-between'
}

const tituloAcordeon = {
  fontFamily: 'Noto Sans, sans-serif',
  fontSize: '18px',
  fontWeight: 700,
  letterSpacing: '0.3px',
  lineHeight: 0
}

const tituloCuerpo = {
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 300,
  fontSize: { xs: '1.125rem', md: '2.25rem' },
  whiteSpace: 'pre-wrap',
  m: 0
}

const tituloResaltado = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: { xs: '1.125rem', md: '2.25rem' },
  color: '#FF823B',
  m: 0
}

const contenedorBotones = {
  position: { xs: 'fixed', md: 'unset' },
  bottom: { xs: '21px', md: 0 },
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 1
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
  '&:hover': {
    backgroundColor: '#770047',
    boxShadow: 'none'
  }
}
