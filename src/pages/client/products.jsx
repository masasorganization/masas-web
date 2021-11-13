import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
function Products() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <AppBar position="static">
            <Tabs
              sx={{ bgcolor: '#ff4e00' }}
              indicatorColor="secondary"
              variant="fullWidth"
            >
              <Tab
                sx={{
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontFamily: 'Noto Sans, sans-serif',
                  textTransform: 'none'
                }}
                label="Sin azúcar"
              />
              <Tab
                sx={{
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontFamily: 'Noto Sans, sans-serif',
                  textTransform: 'none'
                }}
                label="Masa saludable"
              />
              <Tab
                sx={{
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontFamily: 'Noto Sans, sans-serif',
                  textTransform: 'none'
                }}
                label="Orgánico"
              />
            </Tabs>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}

export default Products;
