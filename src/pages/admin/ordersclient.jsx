import LayoutOrdersC from 'Layouts/LayoutOrdersC'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import BoxOrdersManag from '../../components/admin/BoxOrdersManag'

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
            <BoxOrdersManag
              name='Maria Sandoval'
              telephone='321 123 666'
              type='Sin azúcar'
              amount='x12 porciones'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxOrdersManag
              name='Cristian Peralta'
              telephone='325 586 6558'
              type='Tipo orgánico'
              amount='x8 porciones'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxOrdersManag
              name='Lina Ochoa'
              telephone='314 851 3315'
              type='Masa saludable'
              amount='x8 porciones'
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
