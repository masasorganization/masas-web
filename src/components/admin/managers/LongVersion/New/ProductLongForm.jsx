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
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Axios from 'axios'

const ProductLongForm = ({ id, editar, botonCancelar }) => {
  let [acordeonIzqActivo, setAcordeonIzqActivo] = React.useState(false)
  let [acordeonDerActivo, setAcordeonDerActivo] = React.useState(false)
  let [primeraVez, setPrimeraVez] = React.useState(true)

  const cambioIzquierdo = () => {
    setAcordeonIzqActivo(!acordeonIzqActivo)
  }

  const cambioDerecho = () => {
    setAcordeonDerActivo(!acordeonDerActivo)
  }

  const [datosFormulario, setDatosFormulario] = React.useState({
    categoria: '',
    nombre: '',
    valor: '',
    descripcion: '',
    ingredientes: ''
  })

  let urlBase = 'http://localhost:3004'

  const enviarInformacion = async () => {
    let endpoint = '/Productos/'
    await Axios.post(urlBase + endpoint, datosFormulario)
  }

  const obtenerInformacion = async () => {
    let endpoint = '/Productos/' + id
    const response = Axios.get(endpoint)
    return response
  }

  return (
    <Box onClick={() => setPrimeraVez(false)} sx={{ ...pantallaCompleta }}>
      <Box sx={{ ...contenedorSuperior }}>
        <Box sx={{ ...contenedorTitulos }}>
          <Resaltado sx={{ ...tituloResaltado }}>Nuevo </Resaltado>
          <Cuerpo sx={{ ...tituloCuerpo }}>Producto</Cuerpo>
        </Box>

        <Box sx={{ ...contenedorBotones }}>
          {botonCancelar}
          <TooltipInferior
            title={textoTooltip}
            arrow
            open={primeraVez}
            sx={{ ...flechaTooltip }}
          >
            <Button
              variant='contained'
              sx={{ ...botonPrimario }}
              onClick={() => enviarInformacion()}
            >
              Crear Producto
            </Button>
          </TooltipInferior>
        </Box>
      </Box>

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
                    <DatosProducto
                      editar={editar}
                      categoria={'Sin azúcar'}
                      infoFormulario={(datosFormulario) =>
                        setDatosFormulario(datosFormulario)
                      }
                    />
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
      <Box onClick={() => obtenerInformacion()}>LlamarInfo</Box>
    </Box>
  )
}

export default ProductLongForm

// Estilos en variables
const pantallaCompleta = {
  px: {
    md: '50px',
    xs: '18px'
  }
}

const contenedorSuperior = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: { xs: '55px', md: '143px' },
  width: '100%'
}

const contenedorTitulos = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
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
    lg: '100%'
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
  whiteSpace: 'pre-wrap',
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

const flechaTooltip = {
  '& .MuiTooltip-arrow': {
    ':before': {
      backgroundColor: '#05B3B2'
    }
  }
}

// Componentes de Texto
const Resaltado = styled('p')``
const Cuerpo = styled('p')``

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

const TooltipInferior = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    right: '10px',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 300,
    fontSize: '12px',
    maxWidth: 400,
    textAlign: 'center',
    backgroundColor: '#05B3B2'
  }
})

// Componentes de formulario
let textoTooltip = 'Este botón se activará al ingresar toda la información.'
let textoTooltip2 =
  'Ingrese la información del producto pulsando en alguna de las dos secciones.'

function DatosProducto(props) {
  // Edita la información
  const editar = props.editar

  const [seleccionCategorias, setSeleccionCategorias] = React.useState('')

  const cambioCategoria = (event) => {
    setSeleccionCategorias(event.target.value)
    actualizarFormulario(event.target)
  }

  const categorias = [
    {
      value: 'Sin azúcar',
      label: 'Sin azúcar'
    },
    {
      value: 'Masa saludable',
      label: 'Masa saludable'
    },
    {
      value: 'Tipo orgánico',
      label: 'Tipo orgánico'
    }
  ]

  const [formulario, setFormulario] = React.useState({
    categoria: '',
    nombre: '',
    valor: '',
    descripcion: '',
    ingredientes: ''
  })

  const actualizarFormulario = (target) => {
    setFormulario({
      ...formulario,
      [target.name]: target.value
    })
  }

  return (
    <>
      <TextField
        id='categoriaProducto'
        select
        label='Categoria'
        placeholder='Categoria'
        value={editar ? props.categoria : seleccionCategorias}
        onChange={cambioCategoria}
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        helperText='Seleccione una categoria.'
        name='categoria'
        //required='true'
      >
        {categorias.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id='nombreProducto'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Nombre'
        placeholder='Nombre del producto'
        helperText='Escriba el nombre del producto.'
        name='nombre'
        onChange={(event) => actualizarFormulario(event.target)}
        value={props.nombre}
        //required='true'
      />
      <TextField
        id='valorProducto'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Valor'
        placeholder='Valor unitario'
        helperText='Escriba el valor del producto.'
        name='valor'
        onChange={(event) => actualizarFormulario(event.target)}
        value={props.valor}
        //required='true'
      />
      <TextField
        id='descripcionProducto'
        multiline
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Descripción'
        placeholder='Descripción'
        helperText='Escriba una descripción del producto.'
        name='descripcion'
        onChange={(event) => actualizarFormulario(event.target)}
        value={props.descripcion}
        //required='true'
      />
      <TextField
        id='ingredientesProducto'
        multiline
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Ingredientes'
        placeholder='Ingredientes'
        helperText='Escriba todos los ingredientes del producto.'
        name='ingredientes'
        onMouseOut={() => props.infoFormulario(formulario)}
        onChange={(event) => actualizarFormulario(event.target)}
        value={props.ingredientes}
        // onChange={(event) => {actualizarFormulario(event.target)
        //   props.infoFormulario(formulario)}}
        //required='true'
      />
    </>
  )
}
