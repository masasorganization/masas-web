import Grid from '@mui/material/Grid';
function DeliveryRequest() {
    return(
        <div>
            <Grid container>
                <Grid xs={12} md={12}>
                    <div className="tab-showDelForm">
                        <h3 className="txt-title">Datos contra-entrega: </h3>
                    </div>
                </Grid>
            </Grid>
        </div>

    );
}

export default DeliveryRequest;
