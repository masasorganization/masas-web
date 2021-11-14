import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardProduct from '../../components/client/CardProduct';

function Products() {
    return(
        <div>
           <Grid container>
               <Grid item xs={12} md={12}>
                   <AppBar sx={{ boxShadow: '0' }} position="static">
                       <Tabs sx={{ bgcolor: '#ff4e00',
                                    height: '3.5rem' }} variant="fullWidth">
                            <Tab sx={{ color: '#ffffff', 
                                        fontSize: {
                                            md: '1.2rem',
                                            xs: '0.9rem'
                                        },
                                        ":hover":{
                                            bgcolor: '#ff823b'
                                        },
                                        fontFamily: 'Noto Sans, sans-serif',
                                        fontWeight: '700',
                                        textTransform: 'none' }} label="Sin azúcar" />
                            <Tab sx={{ color: '#ffffff', 
                                        fontSize: {
                                            md: '1.2rem',
                                            xs: '0.9rem'
                                        },
                                        ":hover":{
                                            bgcolor: '#ff823b'
                                        },
                                        fontFamily: 'Noto Sans, sans-serif',
                                        fontWeight: '700',
                                        textTransform: 'none' }} label="Masa saludable" />
                            <Tab sx={{ color: '#ffffff', 
                                        fontSize: {
                                            md: '1.2rem',
                                            xs: '0.9rem'
                                        },
                                        ":hover":{
                                            bgcolor: '#ff823b'
                                        },
                                        fontFamily: 'Noto Sans, sans-serif',
                                        fontWeight: '700',
                                        textTransform: 'none' }} label="Orgánico" />
                       </Tabs>
                   </AppBar>
                   <Grid item xs={12} md={4}>
                        <CardProduct />
                   </Grid>
               </Grid>
           </Grid>
        </div>
    );
}

export default Products;
