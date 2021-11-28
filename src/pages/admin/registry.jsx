import LayoutRegistry from 'Layouts/LayoutRegistry'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import BoxOrdersManag from '../../components/admin/BoxOrdersManag'

function Registry() {
  return (
    <div>
      <LayoutRegistry>
        <ArchiveCatalog />
      </LayoutRegistry>
    </div>
  )
}

export default Registry

function ArchiveCatalog() {
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
              name='María Gómez Vega'
              telephone='300 1234 45678'
              type='Tipo orgánico'
              amount='x8 porciones'
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
