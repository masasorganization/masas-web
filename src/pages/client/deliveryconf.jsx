import Grid from '@mui/material/Grid';
function DeliveryConfirm() {
    return(
        <div>
            <Grid container>
                <Grid xs={12} md={12}>
                    <div className="tab-showDelConf">
                        <h3 className="txt-title">Confirmación pedido contra-entrega: </h3>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default DeliveryConfirm;
