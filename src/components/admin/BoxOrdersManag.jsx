import { Box, Typography } from '@mui/material'
import Image from '../../assets/placeholder.png'
import { createTheme } from '@mui/material'
import * as React from 'react'
// import Axios from 'axios'

const theme = createTheme({})

const BoxOrdersManag = ({
  recargar,
  producto,
  editarProducto,
  name,
  telephone,
  type,
  amount
}) => {
  // let urlBase = 'https://masasapp.herokuapp.com'
  // let endpoint = '/ventas/'
  let indexProducto = producto

  // //Peticion para ELIMINAR la informacion
  // const eliminarInformacion = async () => {
  //   let funcion = 'eliminar/'
  //   await Axios.delete(urlBase + endpoint + funcion + indexProducto).then(() =>
  //     recargar()
  //   )
  // }

  const [botonEditar, setBotonEditar] = React.useState(false)

  const siwtchEditar = () => {
    setBotonEditar(!botonEditar)
  }

  return (
    <div>
      <Box sx={{ ...box1Style }}>
        <Box sx={{ ...box2Style }}>
          <Box sx={{ ...nameStyle }}>{[name]}</Box>
          <Box sx={{ ...telephoneStyle }}>{[telephone]}</Box>
          <Box sx={{ ...typeStyle }}>{[type]}</Box>
          <Box sx={{ ...amountStyle }}>{[amount]}</Box>
        </Box>
        <Box
          className='cards'
          onClick={() => editarProducto(indexProducto)}
          onMouseEnter={() => siwtchEditar()}
          onMouseLeave={() => siwtchEditar()}
          sx={{ cursor: 'pointer' }}
        >
          <Box
            sx={{
              ...contenedorEditar,
              display: botonEditar ? 'flex' : 'none'
            }}
          >
            <Typography
              sx={{
                ...textoEditar
              }}
            >
              Info
            </Typography>
          </Box>
          <Box
            component='img'
            src={Image}
            alt=''
            sx={{ display: botonEditar ? 'none' : 'flex' }}
          />
        </Box>
      </Box>
    </div>
  )
}

export default BoxOrdersManag

const box1Style = {
  cursor: 'pointer',
  height: '120px',
  display: 'flex',
  maxWidth: { xs: 'unset', md: '540px', lg: '600px' },
  justifyContent: 'space-between',
  border: 1,
  borderColor: '#a0a0a0',
  borderRadius: '10px',
  [theme.breakpoints.down('md')]: { ml: '0px', mr: '0px' },
  ':hover': {
    borderColor: '#00928E',
    transform: 'scale(1.005)'
  }
}

const box2Style = {
  p: '20px 18px',
  [theme.breakpoints.down('md')]: { p: '20px 13px' }
}

const nameStyle = {
  color: '#460020',
  fontFamily: 'Noto Sans',
  fontWeight: 'Bold',
  fontSize: '16px',
  letterSpacing: '1.25px',
  mb: '2px'
}

const telephoneStyle = {
  color: '#000000',
  fontFamily: 'Nunito',
  fontWeight: 300,
  fontSize: '14px',
  letterSpacing: '1.25px',
  mb: '2px',
  mt: '2px'
}

const typeStyle = {
  color: '#000000',
  fontFamily: 'Nunito',
  fontWeight: 300,
  fontSize: '12px',
  letterSpacing: '1.25px',
  mb: '2px',
  mt: '2px'
}

const amountStyle = {
  color: '#000000',
  fontFamily: 'Nunito',
  fontWeight: 300,
  fontSize: '11px',
  letterSpacing: '1.25px',
  mt: '2px'
}

const contenedorEditar = {
  bgcolor: '#05B3B2',
  width: '120px',
  height: '100%',
  borderRadius: '0px 10px 10px 0px',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center'
}

const textoEditar = {
  m: 0,
  mt: '5px',
  color: 'white',
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: { xs: '18px', md: '18px' }
}
