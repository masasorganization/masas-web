import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

const ManageProduct = ({ children }) => {
  let [acordeonIzqActivo, setAcordeonIzqActivo] = React.useState(false)
  let [acordeonDerActivo, setAcordeonDerActivo] = React.useState(false)
  let [primeraVez, setPrimeraVez] = React.useState(true)

  const cambioIzquierdo = () => {
    setAcordeonIzqActivo(!acordeonIzqActivo)
  }

  const cambioDerecho = () => {
    setAcordeonDerActivo(!acordeonDerActivo)
  }

  return (
    <Box onClick={() => setPrimeraVez(false)} sx={{ ...pantallaCompleta }}>
      <Box sx={{ ...contenedorAcordeones }}>
        <Grid
          container
          rowSpacing={{ xs: '10px' }}
          columnSpacing={{ xs: 0, md: '96px' }}
          sx={{ cuadriculaResponsive }}
        >
          <TooltipCentral
            title={textoTooltip2}
            arrow
            open={primeraVez}
            sx={{ ...flechaTooltip }}
          >
            <Grid item xs={12} md={6}>
              <Accordion elevation={0} sx={{ ...acordeon }}>
                <AccordionSummary
                  onClick={() => cambioIzquierdo()}
                  expandIcon={
                    <ExpandMore
                      sx={{ color: acordeonIzqActivo ? '#ffffff' : '#666666' }}
                    />
                  }
                  aria-label='Expand'
                  aria-controls='-content'
                  id='-header'
                  sx={{
                    ...acordeones,
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
                <AccordionDetails sx={{ ...acordeonInterno }}>
                  <Container maxWidth='mb' sx={{ ...contenedorFormulario }}>
                    {children}
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </TooltipCentral>
          <Grid item xs={12} md={6}>
            <Accordion elevation={0} sx={{ ...acordeon }}>
              <AccordionSummary
                onClick={() => cambioDerecho()}
                expandIcon={
                  <ExpandMore
                    sx={{ color: acordeonDerActivo ? '#ffffff' : '#666666' }}
                  />
                }
                aria-label='Expand'
                aria-controls='-content'
                id='-header'
                sx={{
                  ...acordeones,
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
              <AccordionDetails sx={{ ...acordeonInterno }}>
                <Container maxWidth='mb' sx={{ ...contenedorFormulario }}>
                  Aquí va el componente de imágenes
                </Container>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ManageProduct

let textoTooltip2 =
  'Ingrese la información del producto pulsando en alguna de las dos secciones.'

// Componentes tooltip modificados
const TooltipCentral = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    top: '20px',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 300,
    fontSize: '13px',
    maxWidth: 300,
    textAlign: 'center',
    backgroundColor: '#05B3B2'
  }
})

// Estilos en variables

const pantallaCompleta = {
  px: {
    md: '94px',
    xs: '10px'
  }
}

const cuadriculaResponsive = {
  justifyContent: 'space-between'
}

// estilos de acordeones

const contenedorAcordeones = {
  display: 'flex',
  justifyContent: 'space-between',
  pb: '80px'
}

const acordeon = {
  maxWidth: {
    xs: '100%',
    lg: '839px'
  },
  border: 'solid gray 1px'
}

const tituloAcordeon = {
  fontFamily: 'Noto Sans, sans-serif',
  fontSize: '18px',
  fontWeight: 700,
  letterSpacing: '0.3px',
  lineHeight: 0
}

const acordeonInterno = {
  px: {
    md: '0',
    xs: '10px'
  }
}

const contenedorFormulario = {
  px: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left'
}

const acordeones = {
  px: {
    md: '24px',
    xs: '10px'
  }
}

const flechaTooltip = {
  '& .MuiTooltip-arrow': {
    ':before': {
      backgroundColor: '#05B3B2'
    }
  }
}
