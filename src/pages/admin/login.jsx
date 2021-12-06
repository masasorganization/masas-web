import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import imagenLogo from '../../assets/logo.png'
import imagenLogoAlt from '../../assets/logoAlt.png'
import imagenFondo from '../../assets/svg-fondo.svg'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

// Contenedores de Texto
const Resaltado = styled('p')``
const Cuerpo = styled('p')``

// Texto en variables
const texto1 = 'Inicia sesión en tu '
const texto2 = 'cuenta:'

function Login() {
  // Pone el titulo de la pagina actual en el navegador
  useEffect(() => {
    document.title = 'má sas | Iniciar sesión'
  })
  
  // Inicializando los espacios vacios
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')

  // Declara una variable vacia para almacenar el estado del botón submit.
  let botonActivo

  // Compara los campos de texto, si estan vacios la variable vacia se vuelve verdadera, de lo contrario es falsa.
  if (usuario !== '' && contrasena !== '') {
    botonActivo = false
  } else {
    botonActivo = true
  }

  // Recibo valores capturados en el formulario

  const login = async (e) => {
    e.preventDefault()

    //Generando un objeto con las credenciales capturadas
    const usuarioProps = { usuario, contrasena }

    //Aqui se completa la URl Base del index.js con /jefe/login y el objeto usuario que contiene las credenciales.

    //Andres: Puse el endpoint para probar el usuario jefe (test : test)
    //Andres: ajustar la ruta final antes de hacer el pull merge /jefe/login
    const respuesta = await Axios.post('usuarios/login', usuarioProps)

    //Mostrando la respuesta del servidor
    const mensaje = respuesta.data.mensaje

    //Validaciones del mensaje
    if (mensaje !== 'Bienvenido!') {
      Swal.fire({
        icon: 'error',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      //Recibiendo datos de Base de datos
      const token = respuesta.data.token
      const nombre = respuesta.data.nombre
      const idusuario = respuesta.data.id

      sessionStorage.setItem('token', token)
      sessionStorage.setItem('nombre', nombre)
      sessionStorage.setItem('idusuario', idusuario)

      Swal.fire({
        icon: 'success',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      })
    }
    setTimeout(() => {
      window.location.href = '/welcome'
    }, 500)
  }

  return (
    <div>
      {/* Fondo */}
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        sx={{ ...fondo }}
      >
        {/* Recubrimiento del fondo */}
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{ ...recubrimientoFondo }}
        >
          {/* Contenedor blanco del centro */}
          <Container
            align='center'
            fixed
            disableGutters={true}
            sx={{ ...contenedorBlanco }}
          >
            {/* Contenedor del logo */}
            <Box display='flex' sx={{ ...contenedorLogo }}>
              {/* logo */}
              <Box
                component={Link}
                alignSelf='center'
                sx={{ ...logo }}
                to='/'
              />
            </Box>
            {/* Texto de introducción */}
            {/* Contenedor del Texto */}
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='center'
              sx={{
                pt: { xs: '8px' },
                mb: '28px'
              }}
            >
              {/* Cuerpo del texto Nunito */}
              <Cuerpo sx={{ ...cuerpo }}>{texto1}</Cuerpo>
              {/* Texto resaltado Noto */}
              <Resaltado sx={{ ...resaltado }}>{texto2}</Resaltado>
            </Box>
            {/* Formulario que conecta al BackEnd por medio de Axios */}
            <form onSubmit={login}>
              <Grid container>
                <Grid item xs={12} sx={{ mb: '20px' }} className='form-group'>
                  {/* Campos de Texto */}
                  <TextField
                    required
                    id='username'
                    className='form-control'
                    label='Nombre de usuario'
                    onChange={(e) => setUsuario(e.target.value)}
                    variant='standard'
                    sx={{ ...formulario }}
                    //helperText="Ingrese su nombre de usuario"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id='password'
                    type='password'
                    className='form-control'
                    label='Contraseña'
                    onChange={(e) => setContrasena(e.target.value)}
                    variant='standard'
                    sx={{ ...formulario }}
                    //helperText="Ingrese su contraseña"
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  mt: { xs: '48px' },
                  mb: '26px'
                }}
              >
                <Button
                  type='submit'
                  className='btn btn-primary btn-block'
                  variant='contained'
                  color='primary'
                  sx={{ ...botonLogin }}
                  disabled={botonActivo}
                >
                  Inicio
                </Button>
              </Box>
            </form>
          </Container>
        </Box>
      </Box>
    </div>
  )
}

export default Login

// Estilos como variables (¿constantes? 🥴)
const fondo = {
  bgcolor: '#05B3B2',
  backgroundImage: `url(${imagenFondo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
  p: 0,
  m: 0
}

const recubrimientoFondo = {
  bgcolor: '#05B3B240',
  height: '100vh',
  width: '100vw',
  p: 0,
  m: 0
}

const contenedorBlanco = {
  bgcolor: 'white',
  height: { xs: '566px' },
  width: { xs: '340px' },
  borderRadius: '14px',
  p: '0'
}

const contenedorLogo = {
  height: { xs: '293px' },
  width: { xs: '340px' },
  borderRadius: '14px 14px 0 0'
}

const logo = {
  mx: 'auto',
  height: { xs: '227px' },
  width: '267px',
  backgroundImage: `url(${imagenLogo})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  ':hover': {
    transition: 'transform .4s',
    backgroundImage: `url(${imagenLogoAlt})`,
    transform: 'scale(1.06)'
  }
}

const cuerpo = {
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 300,
  fontSize: '1rem',
  whiteSpace: 'pre-wrap',
  m: 0,
  letterSpacing: '1.25px',
  lineHeight: '1rem'
}

const resaltado = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: '1rem',
  color: '#FF4E00',
  m: 0,
  letterSpacing: '1.25px',
  lineHeight: '14px'
}

const formulario = {
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
  '& .MuiInput-root': {
    '&:after': {
      borderBottom: '2px solid #00928e'
    }
  }
}

const botonLogin = {
  backgroundColor: '#05B3B2',
  borderRadius: '10px',
  width: '278px',
  height: '32px',
  textTransform: 'none',
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: '700',
  fontSize: '1.125rem',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#00928e',
    boxShadow: 'none'
  }
}
