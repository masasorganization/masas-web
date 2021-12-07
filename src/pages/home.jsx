import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Logo from '../assets/logo-large.png'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Home() {
  return (
    <div>
      <Grid container>
        <nav className='nav-home'>
          <Link to='/login'>
            <Button
              sx={{
                bgcolor: '#ff4e00',
                width: {
                  md: '15rem',
                  xs: '13rem'
                },
                borderRadius: '10px',
                color: '#ffffff',
                textTransform: 'none',
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: {
                  md: '1.1rem',
                  xs: '1rem'
                },
                fontWeight: '700',
                ':hover': {
                  bgcolor: '#ff823b'
                }
              }}
            >
              Ingreso Vendedor
            </Button>
          </Link>
        </nav>
        <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', mt: '5rem' }}>
            <img
              src={Logo}
              style={{ width: '32vh', height: '34vh' }}
              alt='logo másas'
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              textAlign: 'center',
              fontFamily: 'Nunito, sans-serif',
              lineHeight: {
                md: '2.5rem',
                xs: '2.2rem'
              },
              fontSize: {
                md: '1.3rem',
                xs: '1.1rem'
              },
              mt: '2rem',
              mb: '2rem',
              b: {
                color: '#aa3d72',
                fontFamily: 'Noto Sans, sans-serif'
              }
            }}
          >
            <b>¡Hola!</b>, mezclamos los ingredientes más frescos
            <br />
            en pro de tu bienestar
          </Typography>
        </Grid>
        <div className='nav-home'>
          <Link to='/categories'>
            <Button
              sx={{
                bgcolor: '#770047',
                width: {
                  md: '22rem',
                  xs: '18rem'
                },
                borderRadius: '10px',
                boxShadow: '0',
                color: '#ffffff',
                textTransform: 'none',
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: {
                  md: '1.1rem',
                  xs: '1rem'
                },
                fontWeight: '700',
                ':hover': {
                  bgcolor: '#aa3d72'
                }
              }}
            >
              Conoce nuestros productos
            </Button>
          </Link>
        </div>
        <Grid item xs={12}>
          <Box
            sx={{
              bgcolor: '#ff4e00',
              textAlign: 'center',
              mt: '3rem',
              a: {
                textDecoration: 'none',
                color: '#ffffff',
                fontFamily: 'Noto Sans, sans-serif',
                fontWeight: '700',
                mt: '3rem'
              },
              ':hover': {
                a: {
                  color: '#ff823b'
                }
              },
              height: {
                md: '13.7vh',
                xs: '14.2vh'
              }
            }}
          >
            <Box sx={{ pt: { xs: '1.3rem' } }}>
              <Link to='/'>Contacto | </Link>
              <Link to='/politics'> Políticas | </Link>
              <Link to='/politics'>Términos</Link>
            </Box>
            <Typography sx={{ color: '#ff823b', mt: '0.5rem' }}>
              ©má sas 2021
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
