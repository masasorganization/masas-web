import { Link } from "react-router-dom";
import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function BtnExit() {
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div className="btn-client" position="static">
      <Button
        onClick={openModal}
        sx={{
          bgcolor: "#c30500",
          color: "#ffffff",
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
            bgcolor: "#ff823b",
          },
        }}
      >
        Salir
      </Button>
      <Modal
        open={open}
        onClose={false}
        aria-labelledby="title-modal"
        aria-describedby="description-modal"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              md: "40%",
              xs: "70%",
            },
            bgcolor: "#ffffff",
            border: "2px solid #000",
            p: "2rem",
          }}
        >
          <Typography
            sx={{ fontWeight: "700", textAlign: "center" }}
            id="title-modal"
          >
            ¿Quieres abandonar el proceso?
          </Typography>
          <Typography
            sx={{ mt: "0.5rem", textAlign: "center", mb: "2rem" }}
            id="description-modal"
          >
            Tu progreso se eliminará
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <div className="btn-client">
              <Button
                onClick={closeModal}
                sx={{
                  bgcolor: "#ff4e00",
                  color: "#ffffff",
                  borderRadius: "10px",
                  boxShadow: "0",
                  mt: "1rem",
                  mr: {
                    md: "2rem",
                    xs: "0",
                  },
                  textTransform: "none",
                  width: "15rem",
                  fontFamily: "Noto Sans, sans-serif",
                  fontSize: {
                    md: "1.1rem",
                    xs: "1rem",
                  },
                  fontWeight: "700",
                  ":hover": {
                    bgcolor: "#770047",
                  },
                }}
              >
                No, quiero continuar
              </Button>
              <Link to="/">
                <Button
                  sx={{
                    bgcolor: "#c30500",
                    color: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "0",
                    mt: "1rem",
                    textTransform: "none",
                    width: "15rem",
                    fontFamily: "Noto Sans, sans-serif",
                    fontSize: {
                      md: "1.1rem",
                      xs: "1rem",
                    },
                    fontWeight: "700",
                    ":hover": {
                      bgcolor: "#770047",
                    },
                  }}
                >
                  Si, ya no me interesa
                </Button>
              </Link>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default BtnExit;
