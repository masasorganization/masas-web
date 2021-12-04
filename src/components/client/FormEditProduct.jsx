import TextField from "@mui/material/TextField"
import React from "react"
import MenuItem from "@mui/material/MenuItem"
import axios from "axios"

function FormEditProduct(props) {
  const URL = "http://localhost:3004/Productos"

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

  const [datosFormulario, setDatosFormulario] = React.useState({
    titulo: props.titulo,
    valor: 50000,
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
    <div>
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
    </div>
  )
}

export default FormEditProduct
