import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ispotipo from "../../assets/isotipo.png";

function ButtonAppBar() {
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
              display: "inline-flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "space-between",
            }}
          >
            <Box>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#ffffff",
                  color: "#05B3B2",
                  textTransform: "none",
                  fontFamily: "Noto Sans, sans-serif",
                  fontWeight: "Bold",
                  fontSize: "1.25rem",
                }}
              >
                Productos
              </Button>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#ffffff",
                  color: "#05B3B2",
                  textTransform: "none",
                  fontFamily: "Noto Sans, sans-serif",
                  fontWeight: "Bold",
                  fontSize: "1.25rem",
                }}
              >
                Cuentas
              </Button>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#ffffff",
                  color: "#05B3B2",
                  textTransform: "none",
                  fontFamily: "Noto Sans, sans-serif",
                  fontWeight: "Bold",
                  fontSize: "1.25rem",
                }}
              >
                Cifras
              </Button>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#ffffff",
                  color: "#05B3B2",
                  textTransform: "none",
                  fontFamily: "Noto Sans, sans-serif",
                  fontWeight: "Bold",
                  fontSize: "1.25rem",
                }}
              >
                Salir
              </Button>
            </Box>

            <Box
              sx={{
                alignSelf: "flex-end",
              }}
            >
              <img
                src={ispotipo}
                alt="Isotipo de la marca"
                class="imagen"
              ></img>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
