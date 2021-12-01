import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import datosPedidos from './datosPedidos'
import React from 'react'

function FormProduct() {
  const size = ['x8 porciones', 'x12 porciones']
  const units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const toppings = [
    'Gajos de naranja dulce',
    'Jalea de ciruela',
    'Nueces picadas',
    'Salsa de chocolate',
    'Zanahorias asadas'
  ]

  const [datosFormulario, setDatosFormulario] = React.useState('')

  console.log(datosFormulario)

  return (
    <div>
      <TextField onChange={(valor) => setDatosFormulario(valor.target.value)} />
      <Autocomplete
        onChange={(valor) => setDatosFormulario(valor.target.value.map(valor))}
        disablePortal
        id='size-product'
        options={size}
        renderInput={(params) => <TextField {...params} label='Tamaño' />}
      />
      <Autocomplete
        disablePortal
        sx={{ mt: '0.6rem' }}
        id='units-product'
        options={units}
        renderInput={(params) => <TextField {...params} label='Unidades' />}
      />
      <Autocomplete
        disablePortal
        sx={{ mt: '0.6rem' }}
        id='toppings-product'
        options={toppings}
        renderInput={(params) => <TextField {...params} label='Complementos' />}
      />
    </div>
  )
}

console.log(datosPedidos[0].Productos)

export default FormProduct
