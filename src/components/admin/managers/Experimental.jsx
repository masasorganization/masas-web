import * as React from 'react'
import AdminNavbar from '../../../components/admin/AdminNavbar'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import MainTitle from 'components/admin/MainTitle'
import { administrador } from '../../../components/admin/navigationData'
import Grid from '@mui/material/Grid'
import BoxManagement from '../../../components/admin/BoxManagement'
import ProductLongForm from '../managers/LongVersion/New/ProductLongForm'
import Axios from 'axios'
import { styled } from '@mui/material/styles'

function Experimental() {
  // ReactHook para cambiar el estado de la pagina actual
  const [paginaActual, setPaginaActual] = React.useState(false)

  const ponerEstadoPagina = () => {
    setPaginaActual((administrador[0].estado = !paginaActual))
  }

  // ReactHook para cambiar el estado de todas las paginas y de la pagina actual
  React.useEffect(() => {
    limpiarPagina()
    ponerEstadoPagina()
    document.title = 'má sas | Gestión de productos'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [indice, setIndice] = React.useState(true)
  const [nuevo, setNuevo] = React.useState(false)
  const [editar, setEditar] = React.useState(false)

  function estadoIndiceBotonNuevo() {
    setIndice(!indice)
    setNuevo(!nuevo)
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
        montar={indice}
        botonNuevo={
          <Button
            onClick={() => estadoIndiceBotonNuevo()}
            variant='contained'
            sx={{ ...botonPrimario }}
          >
            Nuevo producto
          </Button>
        }
      />
      <RenderNuevo
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
      <Button onClick={() => setIndice(!indice)}>indice</Button>
      <Button onClick={() => setNuevo(!nuevo)}>nuevo</Button>
      <Button onClick={() => setEditar(!editar)}>editar</Button>
    </div>
  )
}

function RenderIndice({ montar, botonNuevo }) {
  const varMontar = montar
  if (varMontar === true) {
    return (
      <LayoutProductM botonNuevo={botonNuevo}>
        <ProductCatalog />
      </LayoutProductM>
    )
  }
  return null
}

function RenderNuevo({ montar, botonCancelar }) {
  const varMontar = montar
  if (varMontar === true) {
    return <ProductLongForm botonCancelar={botonCancelar} />
  }
  return null
}

function RenderEditar({ montar, botonCancelar }) {
  const varMontar = montar
  if (varMontar === true) {
    return <ProductLongForm botonCancelar={botonCancelar} editar={1} />
  }
  return null
}

// Logica del padre para la barra de navegación

// Función que devuelve el estado de todas las paginas a falso
const limpiarPagina = () => {
  for (let i = 0; i < administrador.length; i++) {
    administrador[i].estado = false
  }
}

export default Experimental

function LayoutProductM({ botonNuevo, children }) {
  return (
    <>
      <Box sx={{ ...pantallaCompleta }}>
        {/* Contenedor principal */}
        <Box sx={{ ...contenedorSuperior }}>
          {/* Cuadro que contiene a los titlos */}
          <MainTitle
            cuerpo={'Gestión de '}
            resaltado={'productos'}
            posicion={'normal'}
            color={'principal'}
          />
          {/* Cuadro que contiene a los botones */}
          <Box sx={{ ...contenedorBotones }}>
            <Button variant='contained' sx={{ ...botonSecundario }}>
              Archivo
            </Button>
            {botonNuevo}
          </Box>
        </Box>
        {children}
      </Box>
    </>
  )
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

function ProductCatalog() {
  let [datosProductos, setDatosProductos] = React.useState('error')
  let urlBase = 'http://localhost:3004'
  let endpoint = '/Productos/'

  // ReactHook para llamar a todos los Productos.
  React.useEffect(() => {
    Axios.get(urlBase + endpoint).then((res) => {
      setDatosProductos(res.data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (datosProductos === 'error') {
    return (
      <>
        <MensajeError />
      </>
    )
  } else {
    return (
      <>
        <Box sx={{ mt: { xs: '32px', md: 0 }, mb: '20px' }}>
          <Grid
            container
            columns={{ xs: 12, md: 12, xl: 12 }}
            rowSpacing={{ xs: '30px' }}
            columnSpacing={{ xs: 0, md: '30px', lg: '180px', xl: '35px' }}
          >
            {datosProductos.map((datos, indice) => {
              const { nombre, categoria } = datos
              return (
                <Grid item xs={12} md={6} lg={6} xl={4}>
                  <BoxManagement
                    key={indice}
                    title={nombre}
                    paragraph={categoria}
                  />
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
        <Box sx={{ mt: '100px', display: 'flex', justifyContent: 'center' }}>
          <Cuerpo sx={{ ...tituloCuerpo }}>No hay ningún </Cuerpo>
          <Resaltado sx={{ ...tituloResaltado }}>Producto...</Resaltado>
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
  fontSize: { xs: '2rem', md: '3rem' },
  whiteSpace: 'pre-wrap',
  m: 0
}

const tituloResaltado = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: { xs: '2rem', md: '3rem' },
  color: '#FF823B',
  whiteSpace: 'pre-wrap',
  m: 0
}
