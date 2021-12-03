import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function TotalOrder() {
    return(
        <div>
            <Box sx={{ borderTop: '2px solid #770047',
                        mt: '2rem',
                        ml: '1rem',
                        mr: '1rem'}}>
                <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                    fontSize: '1.3rem',
                                    mt: '1rem',
                                    ml: '1.2rem'  }}>
                    <Typography h3>
                            Subtotal pedidos: $30.000
                    </Typography>
                    <Typography h3>
                            Costo de entrega: $5.000
                    </Typography>
                    <Typography h3 sx={{ fontWeight: '700' }} >
                            Total pago contra-entrega: $35.000
                    </Typography> 
                </Typography>      
            </Box>
            <div className="btn-client">
                <Link to="/deliveryreq">
                    <Button sx={{ bgcolor: '#ff4e00', 
                                        color: '#ffffff',
                                        textTransform: 'none',
                                        borderRadius: '10px',
                                        boxShadow: '0',
                                        mt: '1rem',
                                        width: '18rem',
                                        fontFamily: 'Noto Sans, sans-serif',
                                        fontSize: {
                                            md: '1.1rem',
                                            xs: '1rem'
                                        },
                                        fontWeight: '700',
                                        ":hover": {
                                            bgcolor: '#9bd816' 
                                        } }}>Ok</Button  >
                </Link>
            </div>
        </div>
    );
}

export default TotalOrder;
