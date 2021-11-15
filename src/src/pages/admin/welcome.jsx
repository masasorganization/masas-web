import { Grid } from '@mui/material';
import { ThemeProvider, createTheme} from '@mui/system';
import { Box } from '@mui/system';
import BoxCategory from '../../components/admin/Category';


const theme = createTheme({
  palette: {
    blanco: '#FFFFFF',
    negro: '#000000',
    gris: '#dadada',
    principalClaro: '#FF823B',
    secundarioClaro: '#AA3D72',
    azulado: '#05B3B2',

  },
});

function CategoryPage() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <div>
              <Box sx={{
                color: "negro",
                textAlign: 'Center',
                letterSpacing: '1.25px',
                fontSize: '64px',   
                margin: '1.6rem',
                mb: '0rem',
                fontFamily: 'Nunito',
                fontWeight: '300',
                [theme.breakpoints.down('md')]: {
                  fontSize: '28px',
                },
              }}>¿Por dónde quieres</Box>
              <Box sx={{
                color: "principalClaro",
                textAlign: 'Center',
                letterSpacing: '1.25px',
                fontSize: '64px', 
                margin: '1.6rem',
                mt: '0rem',
                fontFamily: 'Noto Sans',
                fontWeight: 'bold',
                [theme.breakpoints.down('md')]: {
                  fontSize: '28px',
                },
              }}> comenzar?</Box>
            </div>
            <Box sx={{
                color: "negro",
                textAlign: 'Left',
                letterSpacing: '1.25px',
                fontSize: '24px', 
                margin: '1.6rem',
                mt: '0rem',
                fontFamily: 'Nunito',
                fontWeight: '300',
                [theme.breakpoints.down('md')]: {
                  fontSize: '16px',
                  mb: '0rem'
                },
              }}>Selecciona una opción:</Box>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} sm={11} md={4}><BoxCategory background="background.principalClaro" title= 'Productos' paragraph= 'En esta sección puedes crear, editar, modificar y archivar los productos del catalogo.'/> </Grid>
                <Grid item xs={12} sm={11} md={4}><BoxCategory background="background.secundarioClaro" title= 'Cuentas' paragraph= 'En esta sección puedes crear, editar, modificar y eliminar las cuantas de usuario.'/></Grid>
                <Grid item xs={12} sm={11} md={4}><BoxCategory background="background.azulado" title= 'Cifras' paragraph= 'En esta sección puedes acceder a los datos que se han recolectado sobre productos y ventas.'/></Grid>
            
              <Grid item xs={12} sm={11} md={4} >
                <Box sx={{
                bgcolor: 'gris',
                color: 'blanco',
                height: '60px',
                display: 'flex',
                m: '20px',
                borderRadius: 3, 
                fontFamily: 'Noto Sans',
                fontSize: '24px',
                letterSpacing: '1.25px',
                alignItems: 'center',
                justifyContent: 'center', 
              }}>Salir</Box>
              </Grid>       
            </Grid>     
        </ThemeProvider>
      </div>
    );
  }
  
  export default CategoryPage;