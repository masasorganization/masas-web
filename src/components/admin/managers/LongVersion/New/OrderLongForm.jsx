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
import Axios from 'axios'

const OrderLongForm = ({
  botonEditar,
  volverIndice,
  editar,
  botonCancelar,
  producto
}) => {
  let [acordeonIzqActivo, setAcordeonIzqActivo] = React.useState(false)
  let [acordeonDerActivo, setAcordeonDerActivo] = React.useState(false)
  let [primeraVez, setPrimeraVez] = React.useState(true)

  const cambioIzquierdo = () => {
    setAcordeonIzqActivo(!acordeonIzqActivo)
  }

  const cambioDerecho = () => {
    setAcordeonDerActivo(!acordeonDerActivo)
  }

  let [datosProductos, setDatosProductos] = React.useState('error')
  let urlBase = 'https://masasapp.herokuapp.com'
  let endpoint = '/ventas/'
  let indexProducto = producto

  // ReactHook para llamar a todos los Productos.
  React.useEffect(() => {
    if (editar === true) {
      let funcion = 'buscarporid/'
      Axios.get(urlBase + endpoint + funcion + indexProducto).then((res) => {
        setDatosProductos(res.data)
      })
      console.log('modo edicion: Activado')
    } else {
      console.log('modo edicion: Desactivado')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box onClick={() => setPrimeraVez(false)} sx={{ ...pantallaCompleta }}>
      <Box sx={{ ...contenedorSuperior }}>
        <Box sx={{ ...contenedorTitulos }}>
          {/* <Resaltado sx={{ ...tituloResaltado }}>Detalles </Resaltado>
          <Cuerpo sx={{ ...tituloCuerpo }}>del pedido</Cuerpo> */}
          <TituloPrincipal botonEditar={botonEditar} />
        </Box>

        <Box sx={{ ...contenedorBotones }}>
          {botonCancelar}
          {/* <Button variant='contained' sx={{ ...botonSecundario }}>
            Cancelar
          </Button> */}
          {/* <TooltipInferior
            title={textoTooltip}
            arrow
            open={primeraVez}
            sx={{ ...flechaTooltip }}
          > */}
          {/* <Button variant='contained' sx={{ ...botonPrimario }}>
              Crear cuenta
            </Button> */}
          <BotonPrincipal
            botonEditar={botonEditar}
            tooltips={primeraVez}
            // enviarInfo={() => enviarInformacion()}
            // editarInfo={() => editarInformacion()}
            finalizar={() => volverIndice()}
          />
          {/* </TooltipInferior> */}
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
                    <b>Datos del cliente</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ ...acordeonInterno }}>
                  <Container maxWidth='mb' sx={{ ...contenedorFormulario }}>
                    <DatosCliente
                      nombres={datosProductos.nombres}
                      apellidos={datosProductos.apellidos}
                      numeroDocumento={datosProductos.numeroDocumento}
                      direccion={datosProductos.direccion}
                      numeroCasa={datosProductos.numeroCasa}
                      barrio={datosProductos.barrio}
                      telefono={datosProductos.telefono}
                      fechaDeEntrega={datosProductos.fechaDeEntrega}
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
                  Datos del pedido
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ ...acordeonInterno }}>
                <Container maxWidth='mb' sx={{ ...contenedorFormulario }}>
                  <DatosPedido
                    _id={indexProducto}
                    categoria={datosProductos.categoria}
                    nombre={datosProductos.nombrePto}
                    tamano={datosProductos.tamano}
                    complementos={datosProductos.complementos}
                    unidades={datosProductos.unidades}
                    valorFinal={datosProductos.valorFinal}
                  />
                </Container>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default OrderLongForm

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
  color: '#05B3B2',
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
  backgroundColor: '#05B3B2',
  borderRadius: '10px',
  width: '270px',
  height: '39px',
  textTransform: 'none',
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: '700',
  fontSize: '1.125rem',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#00928E',
    boxShadow: 'none'
  }
}

// const botonSecundario = {
//   backgroundColor: '#AA3D72',
//   borderRadius: '10px',
//   width: '129px',
//   px: '40px',
//   height: '39px',
//   textTransform: 'none',
//   fontFamily: 'Noto Sans, sans-serif',
//   fontWeight: '700',
//   fontSize: '1.125rem',
//   boxShadow: 'none',
//   mr: '18px',
//   '&:hover': {
//     backgroundColor: '#770047',
//     boxShadow: 'none'
//   }
// }

const flechaTooltip = {
  '& .MuiTooltip-arrow': {
    ':before': {
      backgroundColor: '#05B3B2'
    }
  }
}

function TituloPrincipal(props) {
  const editar = props.botonEditar
  if (editar === true) {
    return (
      <>
        <Resaltado sx={{ ...tituloResaltado }}>Detalles </Resaltado>
        <Cuerpo sx={{ ...tituloCuerpo }}>del pedido</Cuerpo>
      </>
    )
  } else {
    return (
      <>
        <Resaltado sx={{ ...tituloResaltado }}>Nuevo </Resaltado>
        <Cuerpo sx={{ ...tituloCuerpo }}>pedido</Cuerpo>
      </>
    )
  }
}

function BotonPrincipal(props) {
  const primeraVez = props.tooltips
  const editar = props.botonEditar
  if (editar === true) {
    return (
      <>
        <Button
          id='btn-editar'
          variant='contained'
          sx={{ ...botonPrimario }}
          onClick={() => {
            // props.editarInfo()
            props.finalizar()
          }}
        >
          Imprimir recibo
        </Button>
      </>
    )
  } else {
    return (
      <>
        <TooltipInferior
          title={textoTooltip}
          arrow
          open={primeraVez}
          sx={{ ...flechaTooltip }}
        >
          <Button
            id='btn-crear'
            variant='contained'
            sx={{ ...botonPrimario }}
            onClick={() => {
              props.enviarInfo()
              props.finalizar()
            }}
          >
            Crear Pedido
          </Button>
        </TooltipInferior>
      </>
    )
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
  'Revise la información del producto pulsando en alguna de las dos secciones.'

function DatosCliente(props) {
  // let [datosCargar, setDatosCargar] = React.useState('error')
  // let urlBase = 'https://masasapp.herokuapp.com'
  // let endpoint = '/ventas/'
  // let indexProducto = props.producto

  // // ReactHook para llamar a todos los Productos.
  // React.useEffect(() => {
  //   if (props.edicion === true) {
  //     let funcion = 'buscarporid/'
  //     Axios.get(urlBase + endpoint + funcion + indexProducto).then((res) => {
  //       setDatosCargar(res.data)
  //     })
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <>
      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.nombres}
        id='nombreComprador'
        name='nombres'
        sx={{ ...camposTexto, my: '14px' }}
        variant='standard'
        label='Nombre completo'
      />

      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.apellidos}
        id='apellidosComprador'
        name='apellidos'
        sx={{ ...camposTexto, my: '14px' }}
        variant='standard'
        label='Nombre completo'
      />

      {/* <TextField
        id='tipoDocumentoComprador'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Tipo de documento'
        value={'CC'}
      /> */}

      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.numeroDocumento}
        id='documentoComprador'
        name='numeroDocumento'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Documento de identidad'
      />

      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.direccion}
        id='direccionComprador'
        name='direccion'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Dirección'
      />

      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.numeroCasa}
        id='detallesDireccionComprador'
        name='numeroCasa'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Número de casa o apartamento'
      />

      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.barrio}
        id='barrioComprador'
        name='barrio'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Barrio'
      />

      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.telefono}
        id='celularComprador'
        name='telefono'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Celular'
      />

      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.entregaComprador}
        id='entregaComprador'
        name='fechaDeEntrega'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Fecha de entrega'
      />
    </>
  )
}

function DatosPedido(props) {
  // let [datosCargar, setDatosCargar] = React.useState('error')
  // let urlBase = 'https://masasapp.herokuapp.com'
  // let endpoint = '/ventas/'
  // let indexProducto = props.producto

  // // ReactHook para llamar a todos los Productos.
  // React.useEffect(() => {
  //   if (props.edicion === true) {
  //     let funcion = 'buscarporid/'
  //     Axios.get(urlBase + endpoint + funcion + indexProducto).then((res) => {
  //       setDatosCargar(res.data)
  //     })
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  return (
    <>
      <TextField
        InputLabelProps={{ shrink: true }}
        value={props._id}
        id='idPedido'
        name='_id'
        sx={{ ...camposTexto, my: '14px' }}
        variant='standard'
        label='ID-Pago'
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.categoria}
        id='categoriaPedido'
        name='categoria'
        sx={{ ...camposTexto, my: '14px' }}
        variant='standard'
        label='Categoria del producto'
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.nombre}
        id='nombrePedido'
        name='nombre'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Nombre del producto'
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.tamano}
        id='tamañoPedido'
        name='tamano'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Tamaño'
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.unidades}
        id='unidadesPedido'
        name='unidades'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Unidades'
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.complementos}
        id='toppingsPedido'
        name='complementos'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Toppings'
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        value={props.valorFinal}
        id='idPedido'
        name='valorFinal'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Costo total'
      />
    </>
  )
}
