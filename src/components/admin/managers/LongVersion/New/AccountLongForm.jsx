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

const AccountLongForm = (props) => {
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
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: ''
  })

  let [datosProductos, setDatosProductos] = React.useState('error')
  // let urlBase = 'http://localhost:3004'
  // let endpoint = '/Cuentas/'
  // let indexProducto = props.producto

  let urlBase = 'https://masasapp.herokuapp.com'
  let endpoint = '/usuarios/'
  let indexProducto = props.producto

  // ACTUALIZAR
  // let urlBase = 'https://masasapp.herokuapp.com/'
  // let endpoint = 'actualizar/'
  // let indexProducto = id

  const enviarInformacion = async () => {
    let funcion = 'crear'
    await Axios.post(urlBase + endpoint + funcion, datosFormulario)
  }

  //Variable que almacena los datos editados
  let [datosProductosEditados, setDatosProductosEditados] =
    React.useState('error')

  //Peticion para editar la informacion

  const editarInformacion = async () => {
    let funcion = 'actualizar/'
    await Axios.put(
      urlBase + endpoint + funcion + indexProducto,
      datosProductosEditados
    )
  }

  // ReactHook para llamar a todos los Productos.
  React.useEffect(() => {
    if (props.editar === true) {
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
          {/* <Resaltado sx={{ ...tituloResaltado }}>Nueva </Resaltado>
          <Cuerpo sx={{ ...tituloCuerpo }}>Cuenta</Cuerpo> */}
          <TituloPrincipal botonEditar={props.botonEditar} />
        </Box>

        <Box sx={{ ...contenedorBotones }}>
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
          {/* </TooltipInferior> */}
          {props.botonCancelar}
          <BotonPrincipal
            botonEditar={props.botonEditar}
            tooltips={primeraVez}
            enviarInfo={() => enviarInformacion()}
            editarInfo={() => editarInformacion()}
            finalizar={() => props.volverIndice()}
          />
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
                    <b>Información del vendedor</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ ...acordeonInterno }}>
                  <Container maxWidth='mb' sx={{ ...contenedorFormulario }}>
                    <DatosVendedor
                      edicion={props.editar}
                      producto={indexProducto}
                      nombre={datosProductos.nombre}
                      apellido={datosProductos.apellido}
                      usuario={datosProductos.usuario}
                      contrasena={datosProductos.contrasena}
                      infoFormulario={(datosFormulario) =>
                        setDatosFormulario(datosFormulario)
                      }
                      formularioEditado={(datosProductosEditados) =>
                        setDatosProductosEditados(datosProductosEditados)
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
    </Box>
  )
}

export default AccountLongForm

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
        <Resaltado sx={{ ...tituloResaltado }}>Editar </Resaltado>
        <Cuerpo sx={{ ...tituloCuerpo }}>cuenta</Cuerpo>
      </>
    )
  } else {
    return (
      <>
        <Resaltado sx={{ ...tituloResaltado }}>Nueva </Resaltado>
        <Cuerpo sx={{ ...tituloCuerpo }}>cuenta</Cuerpo>
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
            props.editarInfo()
            props.finalizar()
          }}
        >
          Actualizar cuenta
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
            Crear cuenta
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
  'Ingrese la información del producto pulsando en alguna de las dos secciones.'

function DatosVendedor(props) {
  // Formulario nuevo producto
  const [formulario, setFormulario] = React.useState({
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: ''
  })

  // Constructor nuevo
  const actualizarFormulario = (target) => {
    setFormulario({
      ...formulario,
      [target.name]: target.value
    })
  }

  let [datosCargar, setDatosCargar] = React.useState('error')
  let urlBase = 'https://masasapp.herokuapp.com'
  let endpoint = '/usuarios/'
  let indexProducto = props.producto

  // Constructor editar
  const constructorEditar = (target) => {
    setDatosCargar({
      ...datosCargar,
      [target.name]: target.value
    })
  }

  // ReactHook para llamar a todos los Productos.
  React.useEffect(() => {
    if (props.edicion === true) {
      let funcion = 'buscarporid/'
      Axios.get(urlBase + endpoint + funcion + indexProducto).then((res) => {
        setDatosCargar(res.data)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let valorSeleccion = datosCargar.nombre

  // if (datosCargar.categoria === 'Masa saludable') {
  //   valorSeleccion = 'Masa saludable'
  // } else if (datosCargar.categoria === 'Tipo orgánico') {
  //   valorSeleccion = 'Tipo orgánico'
  // } else if (datosCargar.categoria === 'Sin azúcar') {
  //   valorSeleccion = 'Sin azúcar'
  // } else {
  //   valorSeleccion = datosCargar.categoria
  // }

  const [textoFunciona, setTextoFunciona] = React.useState(valorSeleccion)
  const textoCambia = (e) => {
    console.log(`Texto => ${e.target.value}`)
    setTextoFunciona(e.target.value)
    constructorEditar(e.target)
  }

  return (
    <>
      <TextField
        value={datosCargar.nombre}
        defalutValue={textoFunciona}
        InputLabelProps={{ shrink: props.edicion ? true : undefined }}
        id='nombreVendedor'
        sx={{ ...camposTexto, my: '14px' }}
        variant='standard'
        label='Nombre'
        placeholder='Nombre del vendedor'
        helperText='Escriba el nombre del vendedor.'
        name='nombre'
        onChange={
          props.edicion
            ? (e) => textoCambia(e)
            : (event) => actualizarFormulario(event.target)
        }
        //required='true'
      />

      <TextField
        value={datosCargar.apellido}
        defalutValue={textoFunciona}
        InputLabelProps={{ shrink: props.edicion ? true : undefined }}
        id='apellidoVendedor'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Apellido'
        placeholder='Apellido del vendedor'
        helperText='Escriba el apellido del vendedor.'
        name='apellido'
        onChange={
          props.edicion
            ? (e) => textoCambia(e)
            : (event) => actualizarFormulario(event.target)
        }
        //required='true'
      />

      <TextField
        value={datosCargar.usuario}
        defalutValue={textoFunciona}
        InputLabelProps={{ shrink: props.edicion ? true : undefined }}
        id='nombreCuenta'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Nombre de usuario'
        placeholder='Nombre de usuario de la cuenta'
        helperText='Escriba el nombre de usuario del vendedor.'
        name='usuario'
        onChange={
          props.edicion
            ? (e) => textoCambia(e)
            : (event) => actualizarFormulario(event.target)
        }
        //required='true'
      />

      <TextField
        value={datosCargar.contrasena}
        defalutValue={textoFunciona}
        InputLabelProps={{ shrink: props.edicion ? true : undefined }}
        id='contraseñaCuenta'
        sx={{ ...camposTexto, mb: '14px' }}
        variant='standard'
        label='Contraseña'
        placeholder='Contraseña de la cuenta'
        helperText='Escriba una contraseña segura para el vendedor.'
        name='contrasena'
        onMouseOut={
          props.edicion
            ? () => props.formularioEditado(datosCargar)
            : () => props.infoFormulario(formulario)
        }
        onChange={
          props.edicion
            ? (e) => textoCambia(e)
            : (event) => actualizarFormulario(event.target)
        }
        //required='true'
      />
    </>
  )
}
