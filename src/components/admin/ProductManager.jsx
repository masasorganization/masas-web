import * as React from 'react'
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMore from '@mui/icons-material/ExpandMore'
import TextField from '@mui/material/TextField'
//import MenuItem from '@mui/material/MenuItem'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'

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
        <Cuerpo sx={{ ...tituloCuerpo }}>Editar</Cuerpo>
        <Resaltado sx={{ ...tituloResaltado }}>Producto</Resaltado>
        <Box sx={{ ...contenedorAcordeones }}>
          <Grid
            container
            justifyContent='space-between'
            rowSpacing={{ xs: '10px' }}
            columnSpacing={{ xs: 0, md: '96px' }}
          >
            <Grid item xs={12} md={6}>
              <Accordion
                onClick={() => cambioIzquierdo()}
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
                  expandIcon={<ExpandMore />}
                  aria-label='Expand'
                  aria-controls='-content'
                  id='-header'
                  sx={{
                    px: {
                      md: '24px',
                      xs: '10px'
                    }
                  }}
                >
                  <Typography
                    sx={{
                      ...tituloAcordeon,
                      color: acordeonIzqActivo ? '#05B3B2' : '#666666'
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
                onClick={() => cambioDerecho()}
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
                  expandIcon={<ExpandMore />}
                  aria-label='Expand'
                  aria-controls='-content'
                  id='-header'
                  sx={{
                    px: {
                      md: '24px',
                      xs: '10px'
                    }
                  }}
                >
                  <Typography
                    sx={{
                      ...tituloAcordeon,
                      color: acordeonDerActivo ? '#05B3B2' : '#666666'
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
                    Formulario para las imagenes
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
  fontSize: '1rem',
  fontWeight: 700,
  letterSpacing: '0.3px',
  color: '#666666'
}

const tituloCuerpo = {
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 300,
  fontSize: '1rem',
  whiteSpace: 'pre-wrap',
  m: 0,
  letterSpacing: '1.25px',
  lineHeight: '1rem'
}

const tituloResaltado = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: '1rem',
  color: '#FF4E00',
  m: 0,
  letterSpacing: '1.25px',
  lineHeight: '14px'
}
