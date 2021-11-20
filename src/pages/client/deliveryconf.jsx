import Grid from "@mui/material/Grid";
import DataClient from "../../components/client/DataClient";
import DataPdf from "../../components/client/DataPdf";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function DeliveryConfirm() {
  return (
    <div>
      <Grid container>
        <Grid xs={12} md={12}>
          <div className="tab-showDelConf">
            <h3 className="txt-title">Confirmación pedido contra-entrega: </h3>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              mt: "1rem",
              ml: "1rem",
              fontFamily: "Nunito, sans-serif",
              fontSize: "1.2rem",
            }}
          >
            <Typography sx={{ fontWeight: "700" }} h3>
              Datos de confirmación
            </Typography>
            <Typography sx={{ color: "#c30500" }} h4>
              Verifica que tus datos sean correctos
            </Typography>
          </Typography>
          <DataClient />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              mt: "1rem",
              ml: "1rem",
              fontFamily: "Nunito, sans-serif",
              fontSize: "1.2rem",
            }}
          >
            <Typography sx={{ fontWeight: "700" }} h3>
              Aquí tienes tu recibo
            </Typography>
            <Typography sx={{ color: "#c30500" }} h4>
              Recuerda presentarlo en el momento de la entrega
            </Typography>
          </Typography>
          <DataPdf />
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}>
        <div className="btn-client">
          <Link to="/">
            <Button
              sx={{
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
              }}
            >
              Inicio
            </Button>
          </Link>
        </div>
      </Grid>
    </div>
  );
}

export default DeliveryConfirm;
