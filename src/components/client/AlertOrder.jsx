import Alert from "@mui/material/Alert"
import Typography from "@mui/material/Typography"
import EditIcon from "@mui/icons-material/Edit"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import React from "react"
import FormEditProduct from "../../components/client/FormEditProduct"

function AlertOrder(props) {
  //Variables Modal Editar
  const [openEdit, setOpenEdit] = React.useState(false)
  const openEditModal = () => setOpenEdit(true)
  const closeEditModal = () => setOpenEdit(false)
  //Variables Modal Eliminar
  const [openDelete, setOpenDelete] = React.useState(false)
  const openDeleteModal = () => setOpenDelete(true)
  const closeDeleteModal = () => setOpenDelete(false)

  return (
    // "titulo": "Torta de chocolate amargo",
    //   "valor": 50000,
    //   "tamaño": "x12 porciones",
    //   "unidades": 5,
    //   "toppings": "Salsa de chocolate",
    <div>
      <Alert
        severity='info'
        sx={{
          bgcolor: "#ffffff",
          border: "2px solid #770047",
          ml: "1rem",
          mr: "1rem",
          mt: "1.5rem"
        }}
        action={
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column"
              }
            }}
          >
            <Box sx={{ bgcolor: "#ff9e0c", p: "0" }}>
              <EditIcon
                onClick={openEditModal}
                sx={{
                  fontSize: "2rem",
                  color: "#ffffff",
                  p: {
                    md: "0.8rem",
                    xs: "1.5rem"
                  },
                  ":hover": {
                    bgcolor: "#ffffff",
                    border: "2px solid #ff9e0c",
                    color: "#ff9e0c"
                  }
                }}
              />
            </Box>
            <Box sx={{ bgcolor: "#c30500" }}>
              <DeleteForeverIcon
                onClick={openDeleteModal}
                sx={{
                  fontSize: "2rem",
                  color: "#ffffff",
                  p: {
                    md: "0.8rem",
                    xs: "1.5rem"
                  },
                  ":hover": {
                    bgcolor: "#ffffff",
                    border: "2px solid #c30500",
                    color: "#c30500"
                  }
                }}
              />
            </Box>
          </Box>
        }
      >
        <Typography
          sx={{
            fontFamily: "Nunito, sans-serif",
            mt: {
              md: "0.6rem",
              xs: "0"
            },
            fontSize: {
              md: "2rem",
              xs: "1rem"
            },
            display: "flex",
            pr: "0.5rem",
            flexDirection: {
              md: "row",
              xs: "column"
            }
          }}
        >
          <Typography
            h2
            sx={{ color: "#770047", fontWeight: "700", pr: "0.5rem" }}
          >
            {"$"}
            {props.valor}
          </Typography>
          <Typography h3 sx={{ pr: "1rem", color: "#000000" }}>
            <b>Producto:</b> {props.titulo}
          </Typography>
          <Typography h2 sx={{ pr: "0.5rem", color: "#000000" }}>
            <b>Tamaño:</b> {props.tamaño}
          </Typography>
          <Typography h2 sx={{ pr: "0.5rem", color: "#000000" }}>
            <b>Unidades:</b> {props.unidades}
          </Typography>
          <Typography h2 sx={{ color: "#000000" }}>
            <b>Complementos:</b> {props.toppings}
          </Typography>
        </Typography>
      </Alert>
      <Modal
        open={openDelete}
        onClose={false}
        aria-labelledby='title-modal'
        aria-describedby='description-modal'
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              md: "40%",
              xs: "70%"
            },
            bgcolor: "#ffffff",
            border: "2px solid #000",
            p: "2rem"
          }}
        >
          <Typography
            sx={{ fontWeight: "700", textAlign: "center" }}
            id='title-modal'
          >
            ¿Seguro quieres eliminar este producto?
          </Typography>
          <Typography
            sx={{ mt: "0.5rem", textAlign: "center", mb: "2rem" }}
            id='description-modal'
          >
            Ya no estará en tu lista de pedidos
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <div className='btn-client'>
              <Button
                onClick={closeDeleteModal}
                sx={{
                  bgcolor: "#ff4e00",
                  color: "#ffffff",
                  borderRadius: "10px",
                  boxShadow: "0",
                  mt: "1rem",
                  mr: {
                    md: "2rem",
                    xs: "0"
                  },
                  textTransform: "none",
                  width: "15rem",
                  fontFamily: "Noto Sans, sans-serif",
                  fontSize: {
                    md: "1.1rem",
                    xs: "1rem"
                  },
                  fontWeight: "700",
                  ":hover": {
                    bgcolor: "#9bd816"
                  }
                }}
              >
                No, no eliminar
              </Button>
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
                    xs: "1rem"
                  },
                  fontWeight: "700",
                  ":hover": {
                    bgcolor: "#9bd816"
                  }
                }}
              >
                Si, quiero elimnarlo
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={openEdit}
        onClose={false}
        aria-labelledby='title-modal'
        aria-describedby='description-modal'
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              md: "40%",
              xs: "70%"
            },
            bgcolor: "#ffffff",
            border: "2px solid #000",
            p: "2rem"
          }}
        >
          <Typography
            sx={{ fontWeight: "700", textAlign: "center" }}
            id='title-modal'
          >
            Editar producto
          </Typography>
          <Typography sx={{ mt: "0.5rem", mb: "2rem" }} id='description-modal'>
            Producto: Torta de remolacha
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ ml: "2.5rem", mr: "2rem" }}>
              <FormEditProduct
                titulo={props.titulo}
                tamaño={props.tamaño}
                unidades={props.unidades}
                toppings={props.toppings}
              />
            </Box>
            <div className='btn-client'>
              <Button
                sx={{
                  bgcolor: "#ff4e00",
                  color: "#ffffff",
                  borderRadius: "10px",
                  boxShadow: "0",
                  mt: "1rem",
                  mr: {
                    md: "2rem",
                    xs: "0"
                  },
                  textTransform: "none",
                  width: "15rem",
                  fontFamily: "Noto Sans, sans-serif",
                  fontSize: {
                    md: "1.1rem",
                    xs: "1rem"
                  },
                  fontWeight: "700",
                  ":hover": {
                    bgcolor: "#9bd816"
                  }
                }}
              >
                Guardar cambios
              </Button>
              <Button
                onClick={closeEditModal}
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
                    xs: "1rem"
                  },
                  fontWeight: "700",
                  ":hover": {
                    bgcolor: "#9bd816"
                  }
                }}
              >
                Salir, sin guardar
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default AlertOrder
