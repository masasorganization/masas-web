import * as React from 'react'
import { Grid } from '@mui/material';
import { Button } from "@mui/material";
import { ThemeProvider, createTheme} from '@mui/system';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import BoxManagement from "../../components/admin/BoxManagement"
import AdminNavbar from '../../components/admin/AdminNavbar'
import { administrador } from '../../components/admin/navigationData'


const Text1Style = styled('p')``;
const Text2Style = styled('p')``;

const text1 = 'Gestión de ';
const text2 = 'cuentas';

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


function SellerManagement ({title}) {
    // ReactHook para cambiar el estado de la pagina actual
    const [paginaActual, setPaginaActual] = React.useState(false)

    const ponerEstadoPagina = () => {
      setPaginaActual((administrador[1].estado = !paginaActual))
    }
  
    // ReactHook para cambiar el estado de todas las paginas y de la pagina actual
    React.useEffect(() => {
      limpiarPagina()
      ponerEstadoPagina()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
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
                <Grid container sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        [theme.breakpoints.down('md')]: {justifyContent: 'center',}
                        }}>
                    <Box>
                        <ThemeProvider theme={theme}>
                            <Box  
                            display="flex"
                            flexDirection="row">
                                <Text1Style sx={{...text1Style, color: 'negro', [theme.breakpoints.down('md')]: {ml: '0px', fontSize: '32px'}}}>{text1}</Text1Style><Text2Style sx={{...text2Style, color: 'principalClaro', [theme.breakpoints.down('md')]: {ml: '0px', mr: '0px', fontSize: '32px'}}}>{text2}</Text2Style></Box>
                        </ThemeProvider> 
                    </Box>
                    <Box>
                    <Button sx={{...buttonStyle1, [theme.breakpoints.down('md')]: {...buttonStyle1md},  [theme.breakpoints.down('sm')]: {...buttonStyle1sm}}}>Nueva cuenta</Button>
                    </Box>
                </Grid>
                        
                    <Grid container >
                        <Grid item xs={12} md={6}><BoxManagement title='Federico Molano' paragraph='fedemolo' button2='none'></BoxManagement></Grid>
                        <Grid item xs={12} md={6}><BoxManagement title='Daniela Bedoya' paragraph='denibedo' button2='none'></BoxManagement></Grid>
                        <Grid item xs={12} md={6}><BoxManagement title='Javier Torres' paragraph='javitorr' button2='none'></BoxManagement></Grid>    
                    </Grid>
            </Box>             
        </div>
    )
}


export default SellerManagement;


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

const buttonStyle1 = {
    mt: '52px', 
    mb: '32px',
    ml: '5px',
    mr: '48px',
    pl: '30px',
    pr: '30px',
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontSize: '18px',
    letterSpacing: '1.25px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    bgcolor: '#FF823B',
    borderRadius: '10px',
    ':hover': {
        bgcolor: '#FF823B',
      }
};

const buttonStyle1md = {
    m: '12.5px',
    mt: '50px',
    p: '10px',
    width: '40vw',  
};

const buttonStyle1sm = {
    m: '12.5px',
    mt: '50px',
    width: '50vh',
};

// Logica del padre para la barra de navegación

// Función que devuelve el estado de todas las paginas a falso
const limpiarPagina = () => {
  for (let i = 0; i < administrador.length; i++) {
    administrador[i].estado = false
  }
}
