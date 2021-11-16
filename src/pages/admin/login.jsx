import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import imagenLogo from '../../assets/logo.png';
import imagenFondo from '../../assets/svg-fondo.svg';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

// Contenedores de Texto
const Resaltado = styled('p')``;
const Cuerpo = styled('p')``;

// Texto en variables (¿porque no?)
const texto1 = 'Inicia sesión en tu ';
const texto2 = 'cuenta:';

function Login() {
  return (
    <div>
      {/* Fondo */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ ...fondo }}
      >
        {/* Recubrimiento del fondo */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ ...recubrimientoFondo }}
        >
          {/* Contenedor blanco del centro */}
          <Container
            align="center"
            fixed
            disableGutters={true}
            sx={{ ...contenedorBlanco }}
          >
            {/* Contenedor del logo */}
            <Box display="flex" sx={{ ...contenedorLogo }}>
              {/* logo */}
              <Box
                alignSelf="center"
                component="img"
                srcSet={imagenLogo}
                alt="logo"
                sx={{ ...logo }}
              />
            </Box>
            {/* Texto de introducción */}
            {/* Contenedor del Texto */}
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              sx={{
                pt: '36px',
                pb: '48px'
              }}
            >
              {/* Cuerpo del texto Nunito */}
              <Cuerpo sx={{ ...cuerpo }}>{texto1}</Cuerpo>
              {/* Texto resaltado Noto */}
              <Resaltado sx={{ ...resaltado }}>{texto2}</Resaltado>
            </Box>
            {/* Campos de Texto */}
            <Box sx={{ height: '103px' }}>
              <TextField
                sx={{ ...formulario }}
                id="username"
                helperText="Ingrese su nombre de usuario"
                label="Nombre de usuario"
                variant="standard"
              />
              <TextField
                helperText="Ingrese su contraseña"
                id="password"
                label="Contraseña"
                variant="standard"
                sx={{
                  MuiFormHelperText: {
                    fontSize: '5rem'
                  }
                }}
              />
            </Box>
            <Box
              sx={{
                // bgcolor: 'violet',
                pt: '48px',
                pb: '36px'
              }}
            >
              <Button variant="contained" color="primary">
                Inicio
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Login;

// Estilos como variables (constantes 🥴)

const fondo = {
  bgcolor: '#05B3B2',
  backgroundImage: `url(${imagenFondo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
  p: 0,
  m: 0
};

const recubrimientoFondo = {
  bgcolor: '#05B3B280',
  height: '100vh',
  width: '100vw',
  p: 0,
  m: 0
};

const contenedorBlanco = {
  bgcolor: 'white',
  height: '680px',
  width: '363px',
  borderRadius: '14px',
  p: '0'
};

const contenedorLogo = {
  height: '353px',
  width: '363px',
  borderRadius: '14px 14px 0 0'
};

const logo = {
  mx: 'auto',
  height: '288px',
  width: '267px'
};

const cuerpo = {
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 300,
  fontSize: '1rem',
  whiteSpace: 'pre-wrap',
  m: 0,
  letterSpacing: '1.25px',
  lineHeight: '1rem'
};

const resaltado = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: '1rem',
  color: '#FF4E00',
  m: 0,
  letterSpacing: '1.25px',
  lineHeight: '14px'
};

const formulario = {
  fontFamily: 'Noto Sans, sans-serif',
  fontSize: '1rem',
  color: '#AEAEAE',
  fontWeight: 400,
  letterSpacing: '5.25px'
};
