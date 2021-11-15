import Grid from '@mui/material/Grid';
import FormClient from '../../components/client/FormClient';
import BtnExit from '../../components/client/BtnExit';

function DeliveryRequest() {
    return(
        <div>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <div className="tab-showDelForm">
                        <h3 className="txt-title">Datos contra-entrega: </h3>
                    </div>
                </Grid>
                <Grid item>
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
