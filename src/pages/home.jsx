import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Logo from '../assets/logo-medium.png';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from'@mui/material/Box';

function Home() {
    return(
        <div>
            <Grid container>
                <nav className="nav-home">
                    <Link to="/login">
                        <Button sx={{ bgcolor: '#ff4e00',
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
                                        ":hover": {
                                            bgcolor: '#ff823b'
                                        } }}>Ingreso Vendedor</Button>
                    </Link>
                </nav>
                <Grid item xs={12}>
                    <img className="logo-home" src= {Logo} alt="logo másas" />
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ textAlign: 'center',
                                        fontFamily: 'Nunito, sans-serif',
                                        p: {
                                            md: '2rem',
                                            xs: '3rem'
                                        },
                                        lineHeight: {
                                            md: '2.5rem',
                                            xs: '2.2rem'
                                        },
                                        fontSize: {
                                            md: '1.25rem',
                                            xs: '1.1rem'
                                        },
                                        mt: {
                                            md: '3rem',
                                            xs: '2rem'
                                        },
                                        b: {
                                            color: '#aa3d72',
                                            fontFamily: 'Noto Sans, sans-serif'
                                        }
                                        }}>
                        <p><b>¡Hola!</b>, mezclamos los ingredientes más frescos<br />
                        en pro de tu bienestar</p>
                    </Typography>
                </Grid>
                <div className="btn-cat">
                    <Link to="/categories">
                        <Button sx={{ bgcolor: '#770047',
                                        width: {
                                            md: '22rem',
                                            xs: '18rem',
                                        },
                                        borderRadius: '10px',
                                        color: '#ffffff',
                                        textTransform: 'none',
                                        fontFamily: 'Noto Sans, sans-serif',
                                        fontSize: {
                                            md: '1.1rem',
                                            xs: '1rem',
                                        },
                                        fontWeight: '700',
                                        ":hover": {
                                            bgcolor: '#aa3d72'
                                        } }}>Conoce nuestros productos</Button>
                    </Link>
                </div>
                <Grid item xs={12}>
                    <Box sx={{ bgcolor: '#ff4e00',
                                textAlign: 'center',
                                mt: '5rem',
                                a: {
                                    textDecoration: 'none',
                                    color: '#ffffff',
                                    fontFamily: 'Noto Sans, sans-serif',
                                    fontWeight: '700',
                                    mt: '3rem'
                                },
                                ":hover": {
                                    a: {
                                        color: '#ff823b'
                                    }
                                },
                                height: {
                                    md: '7.2rem',
                                    xs: '4rem'
                                }}}>
                        <div className="foot-home">
                            <Link to="/">Contacto | </Link>
                            <Link to="/politics"> Políticas | </Link>
                            <Link to="/politics">Términos</Link>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
