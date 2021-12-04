import TextField from "@mui/material/TextField"
import esLocale from "date-fns/locale/es"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import React from "react"
import { Input } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import DatePicker from "@mui/lab/DatePicker"
import MenuItem from "@mui/material/MenuItem"
import Modal from "@mui/material/Modal"
import { Link } from "react-router-dom"

function FormClient({datosC, children}) {
  //Documento de identificación
  const idclient = [
    { value: "Cédula de ciudadanía", label: "CC" },
    { value: "Cédula de extranjería", label: "CE" },
    { value: "Tarjeta de identidad", label: "TI" },
    { value: "Nit empresarial", label: "NIT" },
    { value: "Pasaporte", label: "P" }
  ]
  //Variables para gestionar idioma de fecha
  const localeMap = { es: esLocale }
  const date = { es: "__/__/____" }
  const [locale] = React.useState("es")
  const [value, setValue] = React.useState(null)
  const [id, setId] = React.useState("Cédula de ciudadanía")
  const handleChange = (event) => {
    setId(event.target.value)
  }
  // const handleClose = () => {
  //   handleClose();
  // }
  //Variables Modal enviar datos
  const [open, setOpen] = React.useState(false)
  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  // const [datosFinales, setDatosFinales] = React.useState([nombreC:""])

  const [datosFinales, setDatosFinales] = React.useState({})
  const [datosCliente, setDatosCliente] = React.useState({nombreC:""})
  

  console.log('Nuestros datos finales: ')
  console.log(datosFinales)

  React.useEffect(() => {
    setDatosFinales(datosC)
  }, [])

  // const handleInputChange = (target) => {
  //   setDatosFinales({
  //     ...datosFinales,
  //     [target.name]: target.value
  //   })
  // }
  const handleInputChange = (target) => {
    setDatosCliente({
      ...datosCliente,
      [target.name]: target.value
    })
  }

  console.log(datosCliente)



  // onload={() => setDatosFinales(nombreC)}
  return (
    <div >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            md: "row",
            xs: "column"
          }
        }}
      >
        <Box
          sx={{
            m: "2rem",
            width: {
              md: "50%",
              xs: "78%"
            },
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Typography sx={{ mb: "0.5rem" }}>
            Datos personales para generar recibo:
          </Typography>
          <TextField
            name="nombreC"
            sx={{ mb: "1rem" }}
            variant='outlined'
            type="text"
            label='Nombres'
            required={true}
            value={datosCliente.nombreC}
            onChange={handleInputChange}
           
          />
          <TextField
            sx={{ mb: "1rem" }}
            variant='outlined'
            label='Apellidos'
            required={true}
          />
          <TextField
            sx={{ mb: "1rem" }}
            select
            variant='outlined'
            value={id}
            onChange={handleChange}
            label='Tipo de documento'
            required={true}
          >
            {idclient.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant='outlined'
            label='Número'
            required={true}
            helperText='Sin puntos (.) ni guiones (-) nit completo'
          />
        </Box>
        <Box
          sx={{
            m: "2rem",
            width: {
              md: "50%",
              xs: "78%"
            },
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Typography sx={{ mb: "0.5rem" }}>Datos de entrega:</Typography>
          <TextField
            sx={{ mb: "1rem" }}
            variant='outlined'
            label='Dirección'
            required={true}
            helperText='Ej: Calle 20 sur # 2-28 o Carrera 13 este # 4-55'
          />
          <TextField
            sx={{ mb: "1rem" }}
            variant='outlined'
            label='Número casa, apto, oficina'
            helperText='Ej: Torre 1 bloque b ap 202'
          />
          <TextField
            sx={{ mb: "1rem" }}
            variant='outlined'
            label='Barrio'
            required={true}
          />
          <TextField
            sx={{ mb: "1rem" }}
            variant='outlined'
            label='Celular'
            required={true}
          />
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            locale={localeMap[locale]}
          >
            <DatePicker
              mask={date[locale]}
              label='Fecha de entrega'
              value={value}
              onChange={(newValue) => {
                setValue(newValue)
              }}
              renderInput={(params) => (
                <TextField {...params} required={true} />
              )}
            />
          </LocalizationProvider>
        </Box>
      </Box>
      <div className='btn-client'>
        <Button
          onClick={openModal}
          sx={{
            bgcolor: "#ff4e00",
            color: "#ffffff",
            textTransform: "none",
            borderRadius: "10px",
            boxShadow: "0",
            mt: "1rem",
            width: "18rem",
            fontFamily: "Noto Sans, sans-serif",
            fontSize: {
              md: "1.1rem",
              xs: "1rem"
            },
            fontWeight: "700",
            ":hover": {
              bgcolor: "#b70030"
            }
          }}
        >
          Ok
        </Button>
        {children}
      </div>
      <Modal
        open={open}
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
            Enviar la solicitud contra-entrega
          </Typography>
          <Typography
            sx={{ mt: "0.5rem", textAlign: "center", mb: "2rem" }}
            id='description-modal'
          >
            ¿Verificaste muy bien todos tus datos para la entrega del producto?
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <div className='btn-client'>
              <Link to='/deliveryconf'>
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
                  Ok, enviar solicitud
                </Button>
              </Link>
              <Button
                onClick={closeModal}
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
                No, quiero revisar
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default FormClient
