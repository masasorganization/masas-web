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

const ProductManager = () => {
  return (
    <Box sx={{ ...pantallaCompleta }}>
      <div>
        <h4>
          Editar <b>Producto</b>
        </h4>
        <Accordion
          elevation='0'
          sx={{ maxWidth: '600px', border: 'solid gray 1px' }}
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
            <Typography>
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
              <TextField
                sx={{ mb: '1rem' }}
                variant='standard'
                label='Nombre completo'
                required='true'
              />
              <TextField
                sx={{ mb: '1rem' }}
                variant='standard'
                label='Tipo de documento'
                required='true'
              />
              <TextField
                variant='standard'
                label='Número de documento'
                required='true'
                helperText='Sin puntos (.) ni guiones (-) nit completo'
              />
              <TextField
                sx={{ mb: '1rem' }}
                variant='standard'
                label='Dirección'
                required='true'
                helperText='Ej: Calle 20 sur # 2-28 o Carrera 13 este # 4-55'
              />
              <TextField
                sx={{ mb: '1rem' }}
                variant='standard'
                label='Número casa, apto, oficina'
                helperText='Ej: Torre 1 bloque b ap 202'
              />
              <TextField
                sx={{ mb: '1rem' }}
                variant='standard'
                label='Barrio'
                required='true'
              />
              <TextField
                sx={{ mb: '1rem' }}
                variant='standard'
                label='Celular'
                required='true'
              />
              <TextField
                sx={{ mb: '1rem' }}
                variant='standard'
                label='Fecha de entrega'
                required='true'
              />
            </Container>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation='0'
          sx={{ maxWidth: '600px', border: 'solid gray 1px' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-label='Expand'
            aria-controls='-content'
            id='-header'
            sx={{ px: '10px' }}
          >
            <Typography>
              <b>Imágen</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: '10px' }}>
            Formulario para las imagenes
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  )
}

export default ProductManager

const pantallaCompleta = {
  px: {
    md: '94px',
    xs: '10px'
  }
}
