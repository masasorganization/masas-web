import Grid from '@mui/material/Grid';
import AlertOrder from '../../components/client/AlertOrder';
import TotalOrder from '../../components/client/TotalOrder';
import BtnExit from '../../components/client/BtnExit';

function Orders() {
    return(
        <div>
            <Grid container>
                <Grid xs={12} md={12}>
                    <div className="tab-showOrders">
                        <h3 className="txt-title">Tu lista de pedidos: </h3>
                    </div>
                </Grid>
                <Grid xs={12} md={12}>
                    <AlertOrder />
                </Grid>
                <Grid xs={12} md={12}>
                    <TotalOrder />
                </Grid>
                <Grid xs={12} md={12}>
                    <BtnExit />
                </Grid>
            </Grid>
        </div>

    );
}

export default Orders;