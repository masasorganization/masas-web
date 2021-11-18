import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "../../assets/isotipo.png";

const ButtonAppBar = function () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            bgcolor: "#ffffff",
            pl: {
              md: "94px !important",
              xs: "none",
            },
            pr: {
              md: "94px !important",
              xs: "20px",
            },
            height: {
              md: "64px !important",
              xs: "64px !important",
            },
          }}
        >
          <IconButton sx={{ display: { xs: "block", md: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alighContent: 'center',
            }}
          >
            <Box>
              <Button
                variant="text"
                sx={{...buttonStyle}}>
                Productos
              </Button>
              <Button
                variant="text"
                sx={{...buttonStyle}}>
                Cuentas
              </Button>
              <Button
                variant="text"
                sx={{...buttonStyle}}>
                Cifras
              </Button>
              <Button
                variant="text"
                sx={{...buttonStyle}}
              >
                Salir
              </Button>
            </Box>
            <Box className='navBarAdmin'>
              <img src= {Image} alt="" />
            </Box>    
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;

const buttonStyle = {
  bgcolor: "#ffffff",
  color: "#05B3B2",
  textTransform: "none",
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: "Bold",
  fontSize: "1.25rem",
}