import LayoutSellerM from 'Layouts/LayoutSellerM'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import BoxManagement from '../../components/admin/BoxManagement'

function SellerManagement() {
  return (
    <div>
      <LayoutSellerM>
        <AccountCatalog />
      </LayoutSellerM>
    </div>
  )
}

export default SellerManagement

function AccountCatalog() {
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
              title='Federico Molano'
              paragraph='fedemolo'
              button2='none'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement
              title='Daniela Bedoya'
              paragraph='danibedo'
              button2='none'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement
              title='Javier Torres'
              paragraph='javitorr'
              button2='none'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement
              title='Agustina Montes'
              paragraph='agusmont'
              button2='none'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <BoxManagement
              title='Antonio Gutierrez'
              paragraph='antoguti'
              button2='none'
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
