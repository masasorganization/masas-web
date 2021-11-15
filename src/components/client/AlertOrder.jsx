import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function AlertOrder() {
    return(
        <div>
            <Alert severity="info" sx={{ bgcolor: '#ffffff',
                                        border: '2px solid #770047',
                                        mt: '1.5rem'}} action={<div className="custom-order">
                                            <div className="edit-order">
                                                <EditIcon sx={{ fontSize: '2rem',
                                                                color: '#ffffff' }} /> 
                                            </div>
                                            <div className="delete-order">
                                                <DeleteForeverIcon sx={{  fontSize: '2rem',
                                                                            color: '#ffffff' }} />   
                                            </div>    
                                        </div> }>
                <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                    fontSize: {
                                        md: '1.4rem',
                                        xs: '1rem'
                                    },
                                    display: 'flex',
                                    pr: '1rem',
                                    flexDirection: {
                                        md: 'row',
                                        xs: 'column'
                                    } }}>
                    <Typography h2 sx={{ color: '#770047',
                                        fontWeight: '700',
                                        pr: '1rem' }}>$10.000</Typography>
                    <Typography h3 sx={{ pr: '1rem' }}>Producto: Torta de remolacha</Typography>
                    <Typography h2 sx={{ pr: '1rem' }}>Tamaño: x8</Typography>
                    <Typography h2 sx={{ pr: '1rem' }}>Unidades: 1</Typography>
                    <Typography h2>Complementos: Gajos de naranja dulce</Typography>
                </Typography>                       
            </Alert>
        </div>
    );
}

export default AlertOrder;
