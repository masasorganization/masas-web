import Typography from  '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function FormClient() {
    return(
        <div>
            <Typography sx={{  mt: '1rem',
                                ml: '1rem',
                                fontFamily: 'Nunito, sans-serif',
                                fontSize: '1.2rem', }}>
                <Typography sx={{ fontWeight: '700'}} h3>
                    Formulario de datos
                </Typography>
                <Typography sx={{ color: '#c30500' }} h4>
                    * Campo de datos obligatorio
                </Typography>
            </Typography>
            <Grid spacing={4} container>
                <Grid item xs={12} md={6}>
                    <Box sx={{ m: '2rem' }}>
                        <TextField sx={{ mb: '0.5rem' }} variant="outlined" label="Nombres" required="true" />
                        <TextField sx={{ mb: '0.5rem' }} variant="outlined" label="Apellidos" required="true" />
                        <Autocomplete sx={{ mb: '0.5rem' }} disablePortal id="id-client" required="true" options={idclient} renderInput={(params) => <TextField {...params}  label="Tipo de documento" />} />
                        <TextField variant="outlined" label="Número" required="true" />
                    </Box>
                </Grid>
                <Grid item sx={12} md={6}>
                    <Box sx={{ m: '2rem' }}>
                        <TextField sx={{ mb: '0.5rem' }} variant="outlined" label="Dirección" required="true" />
                        <TextField sx={{ mb: '0.5rem' }} variant="outlined" label="# Casa o apto" />
                        <TextField sx={{ mb: '0.5rem' }} variant="outlined" label="Barrio" required="true" />
                        <TextField sx={{ mb: '0.5rem' }} variant="outlined" label="Celular" required="true" />
                        <TextField variant="outlined" label="Fecha entrega" required="true" />
                    </Box>
                </Grid>
            </Grid>
            <div className="btn-ok">
                <Link to="/deliveryconf">
                    <Button variant="contained" sx={{ bgcolor: '#ff4e00', 
                                        color: '#ffffff',
                                        textTransform: 'none',
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
                                            bgcolor: '#ff823b' 
                                        } }}>Ok</Button>
                </Link>
            </div>
        </div>
    );
}

export default FormClient;

const idclient = ['CC', 'CE', 'TI', 'RC', 'PE'];
