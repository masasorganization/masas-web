import * as React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import MainTitle from 'components/admin/MainTitle'
import { administrador } from '../../components/admin/navigationData'
import Grid from '@mui/material/Grid'
import BoxAccountManag from '../../components/admin/BoxAccountManag'
import AccountLongForm from '../../components/admin/managers/LongVersion/New/AccountLongForm'
import Axios from 'axios'
import { styled } from '@mui/material/styles'

function Experimental() {
  // ReactHook para cambiar el estado de la pagina actual
  const [paginaActual, setPaginaActual] = React.useState(false)

  const ponerEstadoPagina = () => {
    setPaginaActual((administrador[1].estado = !paginaActual))
  }

  // ReactHook para cambiar el estado de todas las paginas y de la pagina actual
  React.useEffect(() => {
    limpiarPagina()
    ponerEstadoPagina()
    document.title = 'má sas | Gestión de cuentas'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [indice, setIndice] = React.useState(true)
  const [nuevo, setNuevo] = React.useState(false)
  const [editar, setEditar] = React.useState(false)
  const [indexDatos, setIndexDatos] = React.useState('false')

  function estadoIndiceBotonNuevo() {
    setIndice(!indice)
    setNuevo(!nuevo)
  }

  function estadoIndiceTarjetaEditar() {
    setIndice(!indice)
    setEditar(!editar)
  }

  function estadoNuevoBotonCancelar() {
    setIndice(!indice)
    setNuevo(!nuevo)
  }

  function estadoEditarBotonCancelar() {
    setIndice(!indice)
    setEditar(!editar)
  }

  return (
    <div>
      <AdminNavbar usuario='admin' />
      <RenderIndice
        indiceDatos={(indexDatos) => setIndexDatos(indexDatos)}
        edicion={() => estadoIndiceTarjetaEditar()}
        montar={indice}
        botonNuevo={
          <Button
            onClick={() => estadoIndiceBotonNuevo()}
            variant='contained'
            sx={{ ...botonPrimario }}
          >
            Nueva cuenta
          </Button>
        }
      />
      <RenderNuevo
        comportamiento={() => estadoNuevoBotonCancelar()}
        montar={nuevo}
        botonCancelar={
          <Button
            onClick={() => estadoNuevoBotonCancelar()}
            variant='contained'
            sx={{
              ...botonSecundario,
              backgroundColor: '#AA3D72',
              '&:hover': {
                backgroundColor: '#770047',
                boxShadow: 'none'
              }
            }}
          >
            Cancelar
          </Button>
        }
      ></RenderNuevo>
      <RenderEditar
        indiceProducto={indexDatos}
        comportamiento={() => estadoEditarBotonCancelar()}
        montar={editar}
        botonCancelar={
          <Button
            onClick={() => estadoEditarBotonCancelar()}
            variant='contained'
            sx={{
              ...botonSecundario,
              backgroundColor: '#AA3D72',
              '&:hover': {
                backgroundColor: '#770047',
                boxShadow: 'none'
              }
            }}
          >
            Cancelar
          </Button>
        }
      />
      {/* Pruebas */}
      {/* <RenderPrueba
        comportamiento={() => estadoEditarBotonCancelar()}
      ></RenderPrueba> */}
      {/* <Button onClick={() => setIndice(!indice)}>indice</Button>
      <Button onClick={() => estadoIndiceTarjetaEditar()}>editar</Button> */}
    </div>
  )
}

function RenderIndice({ indiceDatos, edicion, montar, botonNuevo }) {
  const varMontar = montar
  if (varMontar === true) {
    return (
      <LayoutSellerM botonNuevo={botonNuevo}>
        <AccountCatalog
          indiceDatos={(e) => indiceDatos(e)}
          edicion={() => edicion()}
        />
      </LayoutSellerM>
    )
  }
  return null
}

function RenderNuevo({ comportamiento, montar, botonCancelar }) {
  const varMontar = montar
  if (varMontar === true) {
    return (
      <AccountLongForm
        botonCancelar={botonCancelar}
        volverIndice={() => comportamiento()}
      />
    )
  }
  return null
}

function RenderEditar({
  indiceProducto,
  comportamiento,
  montar,
  botonCancelar
}) {
  const varMontar = montar
  if (varMontar === true) {
    return (
      <AccountLongForm
        producto={indiceProducto}
        botonCancelar={botonCancelar}
        botonEditar={true}
        editar={true}
        volverIndice={() => comportamiento()}
      />
    )
  }
  return null
}

// function RenderPrueba({ comportamiento }) {
//   return (
//     <>
//       <Button onClick={() => comportamiento()} sx={{ backgroundColor: 'red' }}>
//         Prueba
//       </Button>
//     </>
//   )
// }

// Logica del padre para la barra de navegación

// Función que devuelve el estado de todas las paginas a falso
const limpiarPagina = () => {
  for (let i = 0; i < administrador.length; i++) {
    administrador[i].estado = false
  }
}

export default Experimental

function LayoutSellerM({ botonNuevo, children }) {
  return (
    <>
      <Box sx={{ ...pantallaCompleta }}>
        {/* Contenedor principal */}
        <Box sx={{ ...contenedorSuperior }}>
          {/* Cuadro que contiene a los titlos */}
          <MainTitle
            cuerpo={'Gestión de '}
            resaltado={'cuentas'}
            posicion={'normal'}
            color={'principal'}
          />
          {/* Cuadro que contiene a los botones */}
          <Box sx={{ ...contenedorBotones }}>
            {/* <Button variant='contained' sx={{ ...botonSecundario }}>
              Archivo
            </Button> */}
            {botonNuevo}
          </Box>
        </Box>
        {children}
      </Box>
    </>
  )
}

function AccountCatalog(props) {
  let [datosProductos, setDatosProductos] = React.useState('error')
  // let urlBase = 'http://localhost:3004'
  // let endpoint = '/Cuentas/'

  let urlBase = 'https://masasapp.herokuapp.com'
  let endpoint = '/usuarios/listar'

  const cargarDatos = () => {
    Axios.get(urlBase + endpoint).then((res) => {
      setDatosProductos(res.data)
    })
  }

  // ReactHook para llamar a todos los Productos.
  React.useEffect(() => {
    cargarDatos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pulsarTarjeta = (e) => {
    props.indiceDatos(e)
    props.edicion()
  }

  if (datosProductos === 'error') {
    return (
      <>
        <MensajeError onLoad={() => cargarDatos()} />
      </>
    )
  } else {
    return (
      <>
        <Box
          onLoad={() => cargarDatos()}
          sx={{ mt: { xs: '42px', md: 0 }, mb: '20px' }}
        >
          <Grid
            container
            columns={{ xs: 12, md: 12, xl: 12 }}
            rowSpacing={{ xs: '30px' }}
            columnSpacing={{ xs: 0, md: '30px', lg: '180px', xl: '35px' }}
          >
            {datosProductos.map((datos, index) => {
              const { _id, nombre, apellido, usuario } = datos
              return (
                <Grid id={'casilla_' + index} item xs={12} md={6} lg={6} xl={4}>
                  <BoxAccountManag
                    key={'tarjeta_' + index}
                    id={'tarjeta_' + _id}
                    producto={_id}
                    title={nombre + ' ' + apellido}
                    paragraph={usuario}
                    sx={{ pointerEvents: 'auto' }}
                    editarProducto={(e) => {
                      pulsarTarjeta(e)
                    }}
                    recargar={() => {
                      cargarDatos()
                    }}
                  ></BoxAccountManag>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </>
    )
  }

  function MensajeError() {
    return (
      <>
        <Box
          sx={{
            mt: '100px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'center'
          }}
        >
          <Cuerpo sx={{ ...tituloCuerpo }}>No hay ninguna </Cuerpo>
          <Resaltado sx={{ ...tituloResaltado }}>Cuenta...</Resaltado>
        </Box>
      </>
    )
  }
}

// Componentes de Texto
const Resaltado = styled('p')``
const Cuerpo = styled('p')``

const tituloCuerpo = {
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 300,
  fontSize: { xs: '1.7rem', md: '3rem' },
  whiteSpace: 'pre-wrap',
  m: 0
}

const tituloResaltado = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: { xs: '1.7rem', md: '3rem' },
  color: '#FF823B',
  whiteSpace: 'pre-wrap',
  m: 0
}

const pantallaCompleta = {
  px: {
    xs: '18px',
    md: '50px'
  }
}

const contenedorSuperior = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-between',
  height: { xs: '55px', md: '143px' },
  width: '100%',
  mt: { xs: '10px', md: 0 }
}

const contenedorBotones = {
  position: { xs: 'none', md: 'unset' },
  bottom: { xs: '21px', md: 0 },
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: { xs: 'center', sm: 'center', md: 'unset' },
  mt: { xs: '10px', md: 0 }
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
  backgroundColor: '#05B3B2',
  borderRadius: '10px',
  width: '129px',
  px: '40px',
  height: '39px',
  textTransform: 'none',
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: '700',
  fontSize: '1.125rem',
  boxShadow: 'none',
  mr: '18px',
  '&:hover': {
    backgroundColor: '#00928e',
    boxShadow: 'none'
  }
}
