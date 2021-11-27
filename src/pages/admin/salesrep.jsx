import * as React from 'react'
import { Grid } from '@mui/material';
import { Button } from "@mui/material";
import { ThemeProvider, createTheme} from '@mui/system';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import AdminNavbar from '../../components/admin/AdminNavbar'
import { administrador } from '../../components/admin/navigationData'

const Text1Style = styled('p')``;
const Text2Style = styled('p')``;
const Text3Style = styled('p')``;

const text1 = 'Gestión de ';
const text2 = 'cifras';

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

const SalesPage = ({title}) => {
  // ReactHook para cambiar el estado de la pagina actual
  const [paginaActual, setPaginaActual] = React.useState(false)

  const ponerEstadoPagina = () => {
    setPaginaActual((administrador[2].estado = !paginaActual))
  }

  // ReactHook para cambiar el estado de todas las paginas y de la pagina actual
  React.useEffect(() => {
    limpiarPagina()
    ponerEstadoPagina()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return(
        <div>
            <AdminNavbar usuario='admin' />
            <Box sx={{
                pr: '48px',
                pl: '48px',
                [theme.breakpoints.down('sm')]: {
                    pr: '20px',
                    pl: '20px'
                }
            }}>
                
                    <Grid container  sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        [theme.breakpoints.down('md')]: {justifyContent: 'center',}
                        }}>
                        <Box>
                            <ThemeProvider theme={theme}>
                                <Box  
                                display="flex"
                                flexDirection="row">
                                    <Text1Style sx={{...text1Style, color: 'negro',  [theme.breakpoints.down('md')]: {ml: '0px', fontSize: '32px'}}}>{text1}</Text1Style><Text2Style sx={{...text2Style, color: 'azulado', [theme.breakpoints.down('md')]: {mr: '32px', fontSize: '32px'}}}>{text2}</Text2Style></Box>
                            </ThemeProvider> 
                        </Box>
                        <Box>
                            <Button sx={{...buttonStyle1,  [theme.breakpoints.down('md')]: {...buttonStyle1md}}}>Exportar</Button>
                        </Box>
                    </Grid>
                    
                
                <Box>
                    <Grid container>
                        <Grid xs={12} lg={6}>
                            <Box>
                                <Box sx={{pr: '48px', pl: '48px', [theme.breakpoints.down('md')]: {p: '0px'}}}>
                                    <Text3Style sx={{...text3Style, [theme.breakpoints.down('sm')]: {fontSize: '16px'}}}>Ciclo de datos:</Text3Style>
                                    <Grid container>
                                        <Grid xs={6} md={3} lg={4}><Button sx={{...buttonStyle2, ':active': {bgcolor: '#FF823B'}, [theme.breakpoints.down('md')]: {...buttonStyle2md}}}>Diario</Button></Grid>
                                        <Grid xs={6} md={3} lg={4}><Button sx={{...buttonStyle2, ':active': {bgcolor: '#FF823B'}, [theme.breakpoints.down('md')]: {...buttonStyle2md}}}>Semanal</Button></Grid>
                                        <Grid xs={6} md={3} lg={4}><Button sx={{...buttonStyle2, ':active': {bgcolor: '#FF823B'}, [theme.breakpoints.down('md')]: {...buttonStyle2md}}}>Mensual</Button></Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{pr: '48px', pl: '48px', [theme.breakpoints.down('md')]: {p: '0px'}}}>
                                    <Text3Style sx={{...text3Style, [theme.breakpoints.down('sm')]: {fontSize: '16px'}}}>Filtros:</Text3Style>
                                    <Grid container>
                                        <Grid xs={6} md={3} lg={4}><Button sx={{...buttonStyle2, ':active': {bgcolor: '#05B3B2'}, [theme.breakpoints.down('md')]: {...buttonStyle2md}}}>Ventas</Button></Grid>
                                        <Grid xs={6} md={3} lg={4}><Button sx={{...buttonStyle2, ':active': {bgcolor: '#05B3B2'}, [theme.breakpoints.down('md')]: {...buttonStyle2md}}}>Tamaños</Button></Grid>
                                        <Grid xs={6} md={3} lg={4}><Button sx={{...buttonStyle2, ':active': {bgcolor: '#05B3B2'}, [theme.breakpoints.down('md')]: {...buttonStyle2md}}}>Toppings</Button></Grid>
                                        <Grid xs={6} md={3} lg={4}><Button sx={{...buttonStyle2, ':active': {bgcolor: '#05B3B2'}, [theme.breakpoints.down('md')]: {...buttonStyle2md}}}>Categorias</Button></Grid>
                                    </Grid>
                                      
                                </Box>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={12} lg={6}>
                            <Box sx={{height: '50vh', mr: '48px', bgcolor: '#05B3B233', [theme.breakpoints.down('lg')]: {m: '0px', mt: '25px'}}}>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>    
            </Box> 

        </div>
    )
}

export default SalesPage; 


const text1Style = {
    m: '50px', 
    mr: '0px',
    mb: '32px',
    ml: '48',
    fontFamily: 'Nunito',
    fontSize: '36px',
    fontWeight: 300,
    whiteSpace: 'pre-wrap',

  };

const text2Style = {
    m: '48px', 
    ml: '0px',
    mb: '32px',
    fontFamily: 'Noto Sans',
    fontSize: '36px',
    fontWeight: 'Bold',

  };
  
const text3Style = {
    mt: '50px', 
    mb: '0px',
    fontFamily: 'Nunito',
    fontSize: '24px',
    fontWeight: 300,

  };

const buttonStyle1 = {
    mt: '50px', 
    mb: '32px',
    ml: '0px',
    mr: '48px', 
    pl: '70px',
    pr: '70px',
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontSize: '18px',
    letterSpacing: '1.25px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    bgcolor: '#AA3D72',
    borderRadius: '10px',
    ':hover': {
        bgcolor: '#AA3D72',
      }
};

const buttonStyle1md = {
    m: '12.5px',
    mt: '50px',
    p: '10px',
    width: '40vw',  
};

const buttonStyle2 = {
    width: '161px',
    mt: '32px', 
    mr: '15px',
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontSize: '18px',
    letterSpacing: '1.25px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    bgcolor: '#00000033',
    borderRadius: '4px',
    ':hover': {
        bgcolor: '#00000033',
      }
};

const buttonStyle2md = {
    [theme.breakpoints.down('md')]: {
        width: '40vw',
        m: '12.5px',
        p: '0px'
      },
    
    
}

// Logica del padre para la barra de navegación

// Función que devuelve el estado de todas las paginas a falso
const limpiarPagina = () => {
  for (let i = 0; i < administrador.length; i++) {
    administrador[i].estado = false
  }
}
