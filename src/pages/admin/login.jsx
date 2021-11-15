import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import logo from '../../assets/logo.png';
import fondo from '../../assets/svg-fondo.svg';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

// Contenedores de Texto
const Resaltado = styled('p')``;
const Cuerpo = styled('p')``;

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
        sx={{
          bgcolor: '#05B3B2',
          backgroundImage: `url(${fondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          p: 0,
          m: 0
        }}
      >
        {/* Recubrimiento del fondo */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            bgcolor: '#05B3B280',
            height: '100vh',
            width: '100vw',
            p: 0,
            m: 0
          }}
        >
          {/* Contenedor blanco del centro */}
          <Container
            align="center"
            fixed
            disableGutters={true}
            sx={{
              bgcolor: 'white',
              height: '680px',
              width: '363px',
              borderRadius: '14px',
              p: '0'
            }}
          >
            {/* Contenedor del logo */}
            <Box
              display="flex"
              sx={{
                // bgcolor: 'brown',
                height: '353px',
                width: '363px',
                borderRadius: '14px 14px 0 0'
              }}
            >
              {/* logo */}
              <Box
                alignSelf="center"
                component="img"
                srcSet={logo}
                alt="logo"
                sx={{
                  mx: 'auto',
                  height: '288px',
                  width: '267px'
                }}
              />
            </Box>
            {/* Texto de introducción */}
            {/* Contenedor del Texto */}
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              sx={{
                // bgcolor: 'green',
                pt: '36px',
                pb: '48px'
              }}
            >
              {/* Cuerpo del texto Nunito */}
              <Cuerpo
                alignCenter
                sx={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 300,
                  fontSize: '1rem',
                  whiteSpace: 'pre-wrap',
                  m: 0,
                  letterSpacing: '1.25px',
                  lineHeight: '1rem'
                }}
              >
                {texto1}
              </Cuerpo>
              {/* Texto resaltado Noto */}
              <Resaltado
                alignCenter
                sx={{
                  fontFamily: 'Noto Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#FF4E00',
                  m: 0,
                  letterSpacing: '1.25px',
                  lineHeight: '14px'
                }}
              >
                {texto2}
              </Resaltado>
            </Box>
            {/* Campos de Texto */}
            <Box
              sx={{
                // bgcolor: 'blue',
                height: '103px'
              }}
            >
              <TextField
                id="standard-basic"
                label="Nombre de usuario"
                variant="standard"
              />
              <TextField id="standard-basic" label="Contraseña" variant="standard" />
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
