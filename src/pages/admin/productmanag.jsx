import LayoutProductM from 'Layouts/LayoutProductM'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import BoxManagement from '../../components/admin/BoxManagement'

function ProductManagement() {
  return (
    <div>
      <LayoutProductM>
        <ProductCatalog />
      </LayoutProductM>
    </div>
  )
}

export default ProductManagement

function ProductCatalog() {
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
              title='titulo exageradamente largo'
              paragraph='parrafo exageradamente largo'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement
              title='titulo exageradamente largo'
              paragraph='parrafo exageradamente largo'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement
              title='titulo exageradamente largo'
              paragraph='parrafo exageradamente largo'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement title='prueba titulo' paragraph='prueba parrafo' />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement title='prueba titulo' paragraph='prueba parrafo' />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
