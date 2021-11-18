import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function DataPdf() {
    return(
        <div>
            <Box sx={{ bgcolor: 'gray',
                        width: '90%',
                        display: 'block',
                        mr: 'auto',
                        ml: 'auto' }}>
                Recibo de compra
            </Box>
            <Box sx={{ mt: {
                        md: '3rem',
                        xs: '2rem'
                        },
                        ml: '1rem',
                        mr: '1rem',
                        borderTop: '2px solid #770047' }} >
            </Box>
            <div className="btn-client">
                    <Button sx={{ bgcolor: '#ff4e00',
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
                                    } }}>Descargar PDF</Button>
            </div>
        </div>
    );
}

export default DataPdf;
