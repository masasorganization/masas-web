import * as React from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

function ProductForm() {
  const [seleccionCategorias, setSeleccionCategorias] = React.useState('')
  const [seleccionTamaño, setSeleccionTamaño] = React.useState('')

  const cambioCategoria = (event) => {
    setSeleccionCategorias(event.target.value)
  }

  const cambioTamaño = (event) => {
    setSeleccionTamaño(event.target.value)
  }

  const categorias = [
    {
      value: 'Sin azúcar',
      label: 'Sin azúcar'
    },
    {
      value: 'Masa saludable',
      label: 'Masa saludable'
    },
    {
      value: 'Tipo orgánico',
      label: 'Tipo orgánico'
    }
  ]

  const tamaños = [
    {
      value: 'x8 porciones',
      label: 'x8 porciones'
    },
    {
      value: 'x16 porciones',
      label: 'x16 porciones'
    }
  ]
  return (
    <>
      <TextField
        id='categoriaProducto'
        select
        label='Categoria'
        value={seleccionCategorias}
        onChange={cambioCategoria}
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        helperText='Seleccione una categoria.'
        //required='true'
      >
        {categorias.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id='nombreProducto'
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Nombre'
        helperText='Escriba el nombre del producto.'
        //required='true'
      />

      <TextField
        id='tamañoProducto'
        select
        label='Tamaño'
        value={seleccionTamaño}
        onChange={cambioTamaño}
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        helperText='Seleccione la cantidad de porciones del producto.'
        //required='true'
      >
        {tamaños.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id='valorProducto'
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Valor'
        helperText='Escriba el valor del producto.'
        //required='true'
      />

      <TextField
        id='descripcionProducto'
        multiline
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Descripción'
        helperText='Escriba una descripción del producto.'
        //required='true'
      />

      <TextField
        id='ingredientesProducto'
        multiline
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Ingredientes'
        helperText='Escriba todos los ingredientes del producto.'
        //required='true'
      />
    </>
  )
}

export default ProductForm

const camposTexto = {
  '& .MuiInput-input': {
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 300,
    fontSize: '1rem',
    letterSpacing: '1px'
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.3px',
    '&.Mui-focused': {
      color: '#00928e'
    }
  },
  '& .MuiFormHelperText-root': {
    fontSize: '0.70rem'
  },
  '& .MuiInput-root': {
    '&:after': {
      borderBottom: '2px solid #00928e'
    }
  }
}
