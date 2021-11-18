import Grid from '@mui/material/Grid';
function Orders() {
  return (
    <div>
      <Grid container>
        <Grid xs={12} md={12}>
          <div className="tab-showOrders">
            <h3 className="txt-title">Tu lista de pedidos: </h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Orders;
