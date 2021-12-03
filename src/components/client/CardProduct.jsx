import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import ExpandMore from "@mui/icons-material/ExpandMore"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import React from "react"
import Beetroot from "../../assets/beetroot-cake-org1.jpg"
//import Autocomplete from '@mui/material/Autocomplete'
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
//import FormProduct from './FormProduct'
//import datosPedidos from "./datosPedidos"
import axios from "axios"

function CardProduct(props) {
  const [expanded, setExpanded] = React.useState(false)
  const click = () => {
    setExpanded(!expanded)
  }

  const [valorFinal, setValorFinal] = React.useState(props.valor)

  return (
    <>
      <Grid item xs={12} md={4}>
        <Card sx={{ boxShadow: "0", mt: "1rem", ml: "1rem", mr: "1rem" }}>
          <CardMedia
            sx={{
              height: {
                sm: "350px",
                xs: "230px"
              }
            }}
            component='img'
            image={Beetroot}
            alt='Torta de remolacha'
          />
          <CardContent sx={{ border: "2px solid #460020" }}>
            <Typography
              sx={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: "700",
                color: "#460020",
                fontSize: "1.25rem",
                mt: "1rem"
              }}
            >
              {props.titulo}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: "700",
                fontSize: "1.25rem",
                mt: "0.7rem"
              }}
            >
              {"$"}
              {valorFinal}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  mt: "1rem",
                  mr: "1rem",
                  width: {
                    md: "40%",
                    xs: "35%"
                  }
                }}
              >
                {props.descripcion}
              </Typography>
              <Box
                sx={{
                  width: {
                    md: "60%",
                    xs: "65%"
                  }
                }}
              >
                <FormProduct valor={props.valor} titulo={props.titulo} otroValor={valorFinal} calculoValor={(valorFinal) => setValorFinal(valorFinal)}/>
              </Box>
            </Box>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: "700",
                    fontSize: "1.25rem",
                    mt: "0.5rem"
                  }}
                >
                  Ingredientes
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "1.1rem",
                    mt: "0.5rem"
                  }}
                >
                  {props.ingredientes}
                </Typography>
              </CardContent>
            </Collapse>
          </CardContent>
          <CardActions sx={{ bgcolor: "#460020" }} disableSpacing>
            <div className='icon-exp'>
              <Box
                onClick={click}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "1.2rem",
                    fontFamily: "Noto Sans, sans-serif"
                  }}
                >
                  Ingredientes
                </Typography>
                <ExpandMore
                  sx={{
                    color: "#ffffff",
                    fontSize: "2rem",
                    textAlign: "center",
                    ":hover": {
                      color: "#aa3d72"
                    }
                  }}
                  expand={expanded}
                  onClick={click}
                  aria-expanded={expanded}
                  aria-label='more'
                />
              </Box>
            </div>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

function FormProduct(props) {
  

  const URL = "http://localhost:3004/Productos"

  // const getData = async () => {
  //   const response = axios.get(URL)
  //   return response
  // }

  const enviarInformacion = async () => {
    await axios.post(URL, datosFormulario)
  }



  const [seleccionTamaño, setSeleccionTamaño] = React.useState("")

  const cambioTamaño = (event) => {
    setSeleccionTamaño(event.target.value)
    handleInputChange(event.target)
  }

  const seleccionarSize = [
    {
      value: "x8 porciones",
      label: "x8 porciones"
    },
    {
      value: "x12 porciones",
      label: "x12 porciones"
    }
  ]

  const [seleccionUnidades, setSeleccionUnidades] = React.useState("")

  const cambioUnidades = (event) => {
    setSeleccionUnidades(event.target.value)
    handleInputChange(event.target)
  }

  const seleccionarUnits = [
    {
      value: 1,
      label: "1"
    },
    {
      value: 2,
      label: "2"
    },
    {
      value: 3,
      label: "3"
    },
    {
      value: 4,
      label: "4"
    },
    {
      value: 5,
      label: "5"
    },
    {
      value: 6,
      label: "6"
    },
    {
      value: 7,
      label: "7"
    },
    {
      value: 8,
      label: "8"
    },
    {
      value: 9,
      label: "9"
    },
    {
      value: 10,
      label: "10"
    }
  ]

  const [seleccionToppings, setSeleccionToppings] = React.useState("")

  const cambioToppings = (event) => {
    setSeleccionToppings(event.target.value)
    handleInputChange(event.target)
  }

  const seleccionarToppings = [
    {
      value: "Gajos de naranja dulce",
      label: "Gajos de naranja dulce"
    },
    {
      value: "Jalea de ciruela",
      label: "Jalea de ciruela"
    },
    {
      value: "Nueces picadas",
      label: "Nueces picadas"
    },
    {
      value: "Salsa de chocolate",
      label: "Salsa de chocolate"
    },
    {
      value: "Zanahorias asadas",
      label: "Zanahorias asadas"
    }
  ]

  const [estadoBoton, setEstadoBoton] = React.useState(false)

  let a
  let b
  let c

  if (estadoBoton === true) {
    a = "#9bd816"
    b = "Añadido"
    c = "#85B816"
  } else {
    a = "#ff823b"
    b = "Añadir"
    c = "#ff4e00"
  }

  let v = props.valor

  // Calculo del precio sobre el tamaño
  if (seleccionTamaño === "x8 porciones") {
    v = v + 0
  } else if (seleccionTamaño === "x12 porciones") {
    v = v + 5000
  }

  // Calculo del precio sobre las unidades
  if (seleccionUnidades === 1) {
    v = v * 1
  } else if (seleccionUnidades === 2) {
    v = v * 2
  } else if (seleccionUnidades === 3) {
    v = v * 3
  } else if (seleccionUnidades === 4) {
    v = v * 4
  } else if (seleccionUnidades === 5) {
    v = v * 5
  } else if (seleccionUnidades === 6) {
    v = v * 6
  } else if (seleccionUnidades === 7) {
    v = v * 7
  } else if (seleccionUnidades === 8) {
    v = v * 8
  } else if (seleccionUnidades === 9) {
    v = v * 9
  } else if (seleccionUnidades === 10) {
    v = v * 10
  }

  // Calculo del precio sobre los topping
  if (seleccionToppings === "Gajos de naranja dulce") {
    v = v + 500
  } else if (seleccionToppings === "Jalea de ciruela") {
    v = v + 1000
  } else if (seleccionToppings === "Nueces picadas") {
    v = v + 1500
  } else if (seleccionToppings === "Salsa de chocolate") {
    v = v + 2000
  } else if (seleccionToppings === "Zanahorias asadas") {
    v = v + 2500
  }

  function primerCalculo(a) {
    if (seleccionTamaño === "x8 porciones") {
      a = a + 0
    } else if (seleccionTamaño === "x12 porciones") {
      a = a + 5000
    }
    return a
  }

  function segundoCalculo(a) {
    if (seleccionUnidades === 1) {
      a = a * 1
    } else if (seleccionUnidades === 2) {
      a = a * 2
    } else if (seleccionUnidades === 3) {
      a = a * 3
    } else if (seleccionUnidades === 4) {
      a = a * 4
    } else if (seleccionUnidades === 5) {
      a = a * 5
    } else if (seleccionUnidades === 6) {
      a = a * 6
    } else if (seleccionUnidades === 7) {
      a = a * 7
    } else if (seleccionUnidades === 8) {
      a = a * 8
    } else if (seleccionUnidades === 9) {
      a = a * 9
    } else if (seleccionUnidades === 10) {
      a = a * 10
    }
    return a
  }

  function tercerCalculo(a) {
    if (seleccionToppings === "Gajos de naranja dulce") {
      a = a + 500
    } else if (seleccionToppings === "Jalea de ciruela") {
      a = a + 1000
    } else if (seleccionToppings === "Nueces picadas") {
      a = a + 1500
    } else if (seleccionToppings === "Salsa de chocolate") {
      a = a + 2000
    } else if (seleccionToppings === "Zanahorias asadas") {
      a = a + 2500
    }
    return a
  }

  let valorfinalfinalfinal = tercerCalculo(segundoCalculo(primerCalculo(50000)))
  
  // console.log(primerCalculo(props.valor))
  //console.log(segundoCalculo(props.valor))
  // console.log(tercerCalculo(props.valor))

  console.log(valorfinalfinalfinal)



  // const valorFinal = props.otroValor

  const [datosFormulario, setDatosFormulario] = React.useState({
    titulo: props.titulo,
    valor: valorfinalfinalfinal,
    tamaño: "",
    unidades: "",
    toppings: ""
  })

  const handleInputChange = (target) => {
    setDatosFormulario({
      ...datosFormulario,
      [target.name]: target.value
    })
  }
  
  return (
    <div onload={props.calculoValor(v)}>

      {/* <TextField
        id='value-product'
        onChange={(event) =>{ handleInputChange(event.target.name)}}
        value={props.otroValor}
        name='valor'
        sx={{  }}
      >
      </TextField> */}


      <TextField
        id='size-product'
        select
        placeholder='Tamaño'
        label='Tamaño'
        value={seleccionTamaño}
        onChange={cambioTamaño}
        name='tamaño'
        sx={{ width: "100%" }}
      >
        {seleccionarSize.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id='units-product'
        select
        placeholder='Unidades'
        label='Unidades'
        value={seleccionUnidades}
        onChange={cambioUnidades}
        name='unidades'
        sx={{ width: "100%", mt: "0.6rem" }}
      >
        {seleccionarUnits.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id='toppings-product'
        select
        placeholder='toppings'
        label='Toppings'
        value={seleccionToppings}
        onChange={cambioToppings}
        name='toppings'
        sx={{ width: "100%", mt: "0.6rem" }}
      >
        {seleccionarToppings.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <div className='btn-client'>
        <Button
          onClick={() => {
            enviarInformacion()
            setEstadoBoton(!estadoBoton)
          }}
          style={{ bgcolor: a ? "#9bd816" : "#ff823b" }}
          sx={{
            bgcolor: a,
            textTransform: "none",
            width: { xs: "100%" },
            mt: "1rem",
            color: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0",
            fontFamily: "Noto Sans, sans-serif",
            fontSize: {
              md: "1.1rem",
              xs: "1rem"
            },
            fontWeight: "700",
            ":hover": {
              bgcolor: c
            }
          }}
        >
          {b}
        </Button>
      </div>
    </div>
  )
}

export default CardProduct
