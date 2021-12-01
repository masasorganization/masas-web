import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import React from 'react'
import Beetroot from '../../assets/beetroot-cake-org1.jpg'
//import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
//import FormProduct from './FormProduct'
//import datosPedidos from './datosPedidos'

function CardProduct(props) {
  const [expanded, setExpanded] = React.useState(false)
  const click = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <Grid item xs={12} md={4}>
        <Card sx={{ boxShadow: '0', mt: '1rem', ml: '1rem', mr: '1rem' }}>
          <CardMedia
            sx={{
              height: {
                sm: '350px',
                xs: '230px'
              }
            }}
            component='img'
            image={Beetroot}
            alt='Torta de remolacha'
          />
          <CardContent sx={{ border: '2px solid #460020' }}>
            <Typography
              sx={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: '700',
                color: '#460020',
                fontSize: '1.25rem',
                mt: '1rem'
              }}
            >
              {props.titulo}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: '700',
                fontSize: '1.25rem',
                mt: '0.7rem'
              }}
            >
              {'$'}
              {props.valor}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Typography
                sx={{
                  fontSize: '1rem',
                  mt: '1rem',
                  mr: '1rem',
                  width: {
                    md: '40%',
                    xs: '35%'
                  }
                }}
              >
                {props.descripcion}
              </Typography>
              <Box
                sx={{
                  width: {
                    md: '60%',
                    xs: '65%'
                  }
                }}
              >
                <FormProduct />
              </Box>
            </Box>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    mt: '0.5rem'
                  }}
                >
                  Ingredientes
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: '1.1rem',
                    mt: '0.5rem'
                  }}
                >
                  {props.ingredientes}
                </Typography>
                <div className='btn-client'>
                  <Button
                    onClick={console.log()}
                    sx={{
                      bgcolor: '#ff823b',
                      textTransform: 'none',
                      width: '18rem',
                      mt: '1rem',
                      color: '#ffffff',
                      borderRadius: '10px',
                      boxShadow: '0',
                      fontFamily: 'Noto Sans, sans-serif',
                      fontSize: {
                        md: '1.1rem',
                        xs: '1rem'
                      },
                      fontWeight: '700',
                      ':hover': {
                        bgcolor: '#ff4e00'
                      }
                    }}
                  >
                    Añadir
                  </Button>
                </div>
              </CardContent>
            </Collapse>
          </CardContent>
          <CardActions sx={{ bgcolor: '#460020' }} disableSpacing>
            <div className='icon-exp'>
              <ExpandMore
                sx={{
                  color: '#ffffff',
                  fontSize: '2rem',
                  textAlign: 'center',
                  ':hover': {
                    color: '#aa3d72'
                  }
                }}
                expand={expanded}
                onClick={click}
                aria-expanded={expanded}
                aria-label='more'
              />
            </div>
          </CardActions>
          <div className='btn-client'>
            <Link to='/orders'>
              <Button
                sx={{
                  bgcolor: '#9bd816',
                  textTransform: 'none',
                  width: '18rem',
                  color: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0',
                  fontFamily: 'Noto Sans, sans-serif',
                  fontSize: {
                    md: '1.1rem',
                    xs: '1rem'
                  },
                  fontWeight: '700',
                  ':hover': {
                    bgcolor: '#ff4e00'
                  },
                  mt: '1rem'
                }}
              >
                Pagar
              </Button>
            </Link>
          </div>
        </Card>
      </Grid>
    </>
  )
}

function FormProduct() {
  const [datosFormulario, setDatosFormulario] = React.useState({
    tamaño: '',
    unidades: '',
    toppings: ''
  })

  //   const componerFormulario = (val) =>
  //     setDatosFormulario({
  //       ...datosFormulario,
  //       tamaño: [val],
  //       unidades: [val],
  //       toppings: [val]
  //     })

  //   const componerFormulario = (clave, valor) =>
  //     setDatosFormulario({
  //       ...datosFormulario,
  //       [clave]: [valor]
  //     })

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatosFormulario({
      ...datosFormulario,
      [event]: event
    })
  }
  // const { tamaño, unidades, toppings } = datosFormulario

  console.log(datosFormulario)

  const [seleccionTamaño, setSeleccionTamaño] = React.useState('')

  const cambioTamaño = (event) => {
    setSeleccionTamaño(event.target.value)
    // handleInputChange(event.target.name)
    handleInputChange(event.target.value)
    console.log(handleInputChange(event.target.value))
  }

  console.log(cambioTamaño)

  const seleccionarSize = [
    {
      value: 'x8 porciones',
      label: 'x8 porciones'
    },
    {
      value: 'x12 porciones',
      label: 'x12 porciones'
    }
  ]

  const [seleccionUnidades, setSeleccionUnidades] = React.useState('')

  const cambioUnidades = (event) => {
    setSeleccionUnidades(event.target.value)
    //componerFormulario(event.target.value)
  }

  const seleccionarUnits = [
    {
      value: 1,
      label: '1'
    },
    {
      value: 2,
      label: '2'
    },
    {
      value: 3,
      label: '3'
    },
    {
      value: 4,
      label: '4'
    },
    {
      value: 5,
      label: '5'
    },
    {
      value: 6,
      label: '6'
    },
    {
      value: 7,
      label: '7'
    },
    {
      value: 8,
      label: '8'
    },
    {
      value: 9,
      label: '9'
    },
    {
      value: 10,
      label: '10'
    }
  ]

  const [seleccionToppings, setSeleccionToppings] = React.useState('')

  const cambioToppings = (event) => {
    setSeleccionToppings(event.target.value)
    //componerFormulario(event.target.value)
  }

  const seleccionarToppings = [
    {
      value: 'Gajos de naranja dulce',
      label: 'Gajos de naranja dulce'
    },
    {
      value: 'Jalea de ciruela',
      label: 'Jalea de ciruela'
    },
    {
      value: 'Nueces picadas',
      label: 'Nueces picadas'
    },
    {
      value: 'Salsa de chocolate',
      label: 'Salsa de chocolate'
    },
    {
      value: 'Zanahorias asadas',
      label: 'Zanahorias asadas'
    }
  ]

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
        sx={{ width: '100%' }}
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
        sx={{ width: '100%' }}
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
        label='toppings'
        value={seleccionToppings}
        onChange={cambioToppings}
        name='toppings'
        sx={{ width: '100%' }}
      >
        {seleccionarToppings.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {/* <Autocomplete
        disablePortal
        id='size-product'
        options={size}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Tamaño'
            //onChange={(valor) => setDatosFormulario(valor.target.value)}
          />
        )}
      /> */}
      {/* <Autocomplete
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
      /> */}
    </div>
  )
}

export default CardProduct
