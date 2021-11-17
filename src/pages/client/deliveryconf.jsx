import Grid from '@mui/material/Grid';
import DataClient from '../../components/client/DataClient';
import DataPdf from '../../components/client/DataPdf';
import Typography from '@mui/material/Typography';
import BtnExit from '../../components/client/BtnExit';

function DeliveryConfirm() {
    return(
        <div>
            <Grid container>
                <Grid xs={12} md={12}>
                    <div className="tab-showDelConf">
                        <h3 className="txt-title">Confirmación pedido contra-entrega: </h3>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{  mt: '1rem',
                                        ml: '1rem',
                                        fontFamily: 'Nunito, sans-serif',
                                        fontSize: '1.2rem', }}>
                        <Typography sx={{ fontWeight: '700'}} h3>
                            Datos de confirmación
                        </Typography>
                        <Typography sx={{ color: '#c30500' }} h4>
                            Verifica que tus datos sean correctos
                        </Typography>
                    </Typography>
                    <DataClient />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{  mt: '1rem',
                                        ml: '1rem',
                                        fontFamily: 'Nunito, sans-serif',
                                        fontSize: '1.2rem', }}>
                        <Typography sx={{ fontWeight: '700'}} h3>
                            Aquí tienes tu recibo
                        </Typography>
                        <Typography sx={{ color: '#c30500' }} h4>
                            Recuerda presentarlo en el momento de la entrega
                        </Typography>
                    </Typography>
                    <DataPdf />
                </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
                <BtnExit />
            </Grid>
        </div>
    );
}

export default DeliveryConfirm;
