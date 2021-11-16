import Grid from '@mui/material/Grid';
import FormClient from '../../components/client/FormClient';
import BtnExit from '../../components/client/BtnExit';
import Typography from '@mui/material/Typography';

function DeliveryRequest() {
    return(
        <div>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <div className="tab-showDelForm">
                        <h3 className="txt-title">Datos contra-entrega: </h3>
                    </div>
                </Grid>
                <Grid item xs={12} md={12}>
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
                </Grid>
		<Grid item xs={12} md={12}>
		<FormClient />
		</Grid>
                <Grid item xs={12} md={12}>
                    <BtnExit />
                </Grid>
            </Grid>
        </div>

    );
}

export default DeliveryRequest;
