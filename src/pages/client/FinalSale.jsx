import { Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme } from '@mui/system'
import { Link } from "react-router-dom";

const theme = createTheme({})

const FinalSale = () => {
    return(
        <Grid container>
        <Grid item xs={12} md={12}>
          <div className="tab-showDelConf" >
            <h3 className="txt-title">Finalización de la compra </h3>
          </div>
        </Grid>
        <Grid item xs={12} md={12} sx={{width: '100vw', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box>
                <Box sx={{ ...text1Style }}>¡Gracias por su</Box>
                <Box sx={{ ...text2Style }}> Compra!</Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: "5rem",}}>
                    <Link to="/">
                        <Button
                        sx={{...buttonSalir }}>
                        Inicio
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Grid>
        </Grid>

    )
}

export default FinalSale;

const text1Style = {
    color: '#000000',
    textAlign: 'Center',
    letterSpacing: '1.25px',
    fontSize: '60px',
    margin: '1.6rem',
    mb: '0rem',
    fontFamily: 'Nunito',
    fontWeight: '300',
    [theme.breakpoints.only('md')]: {
      fontSize: '48px',
      mb: '0rem'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '32px'
    }
  }

  const text2Style = {
    color: '#AA3D72',
    textAlign: 'Center',
    letterSpacing: '1.25px',
    fontSize: '60px',
    margin: '1.6rem',
    mt: '0rem',
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    [theme.breakpoints.only('md')]: {
      fontSize: '48px',
      mb: '0rem'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '32px'
    }
  }

  const buttonSalir = {
    border: "2px solid #ff4e00",
    color: "#ff4e00",
    borderRadius: "10px",
    boxShadow: "0",
    mt: "1rem",
    textTransform: "none",
    width: "18rem",
    fontFamily: "Noto Sans, sans-serif",
    fontSize: {
        md: "1.1rem",
        xs: "1rem",
    },
    fontWeight: "700",
        ":hover": {
    bgcolor: "#770047",
    color: "#ffffff",
    border: "0",
    },
}
