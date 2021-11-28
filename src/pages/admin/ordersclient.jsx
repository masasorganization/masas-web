import LayoutOrdersC from 'Layouts/LayoutOrdersC'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import BoxManagement from '../../components/admin/BoxManagement'

function OrdersClient() {
  return (
    <div>
      <LayoutOrdersC>
        <OrdersCatalog />
      </LayoutOrdersC>
    </div>
  )
}

export default OrdersClient

function OrdersCatalog() {
  return (
    <>
      <Box sx={{ mt: { xs: '32px', md: 0 }, mb: '20px' }}>
        <Grid
          container
          columns={{ xs: 12, md: 12, xl: 12 }}
          rowSpacing={{ xs: '30px' }}
          columnSpacing={{ xs: 0, md: '30px', lg: '180px', xl: '35px' }}
        >
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement
              title='Pedido de prueba'
              paragraph='321 123 666'
              button2='none'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement
              title='Pedido de prueba'
              paragraph='321 123 666'
              button2='none'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement
              title='Pedido de prueba'
              paragraph='321 123 666'
              button2='none'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement
              title='Pedido de prueba'
              paragraph='321 123 666'
              button2='none'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement
              title='Pedido de prueba'
              paragraph='321 123 666'
              button2='none'
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
