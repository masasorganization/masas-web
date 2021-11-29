import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function DataClient() {
    return(
        <div>
            <Typography sx={{ mt: '2rem',
                                ml: {
                                    md: '1.6rem',
                                    xs: '1.4rem'
                                },
                                fontFamily: 'Nunito, sans-serif',
                                fontSize: '1.2rem' }} >  
                <Typography>
                    <b>ID-Compra:</b> 001
                </Typography>  
                <Typography>
                    <b>Nombres:</b> María Laura
                </Typography>  
                <Typography>
                    <b>Apellidos:</b> Gómez Vega
                </Typography>  
                <Typography>
                    <b>Tipo de documento:</b> Cédula de ciudadanía
                </Typography>  
                <Typography>
                    <b>Número:</b> 1234567890
                </Typography>  
                <Typography>
                    <b>Dirección:</b> Calle 22 sur # 12 80
                </Typography>
                <Typography>
                    <b>Número casa, apto, oficina:</b> ap 202
                </Typography>
                <Typography>
                    <b>Barrio:</b> Sociego II
                </Typography>
                <Typography>
                    <b>Celular:</b> 3001234567
                </Typography>
                <Typography>
                    <b>Fecha de entrega:</b> 17/11/2021
                </Typography>
            </Typography>
            <Box sx={{ mt: {
                        md: '3rem',
                        xs: '2rem'
                        },
                        ml: '1rem',
                        mr: '1rem',
                        borderTop: '2px solid #770047' }} >
            </Box>
            <div className="btn-client">
                <Link to="/deliveryreq">
                    <Button sx={{ bgcolor: '#ff9e0c',
                                    width: {
                                        md: '22rem',
                                        xs: '18rem',
                                    },
                                    mt: '1rem',
                                    borderRadius: '10px',
                                    boxShadow: '0',
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
                                    } }}>Editar datos</Button>
                </Link>
            </div>
        </div>
    );
}

export default DataClient;
