import { Box, Typography } from '@mui/material'
import { Button } from '@mui/material'
import Image from '../../assets/placeholder.png'
import * as React from 'react'
import Axios from 'axios'

const BoxManagement = ({
  recargar,
  producto,
  title,
  paragraph,
  button1,
  button2,
  editarProducto
}) => {
  let urlBase = 'http://localhost:3004'
  let endpoint = '/Productos/'
  let indexProducto = producto

  //Peticion para ELIMINAR la informacion
  const eliminarInformacion = async () => {
    await Axios.delete(urlBase + endpoint + indexProducto).then(() =>
      recargar()
    )
  }

  const [botonEditar, setBotonEditar] = React.useState(false)

  const siwtchEditar = () => {
    setBotonEditar(!botonEditar)
  }

  return (
    <>
      <Box
        component='div'
        sx={{
          bgcolor: 'white',
          height: '120px',
          display: 'flex',
          maxWidth: { xs: 'unset', md: '540px', lg: '600px' },
          justifyContent: 'space-between',
          border: 1,
          borderColor: '#a0a0a0',
          borderRadius: '10px',
          ':hover': {
            transform: 'scale(1.005)'
          }
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundColor: 'white',
              color: '#460020',
              fontFamily: 'Noto Sans',
              fontWeight: 'Bold',
              fontSize: { xs: '15px', md: '15.2px', lg: '16px' },
              letterSpacing: { xs: '0.2px', md: '0.2px', lg: '1.25px' },
              m: '18px',
              mx: { xs: '16px', sm: '18px' },
              mb: '0px'
            }}
          >
            {[title]}
          </Box>
          <Box
            sx={{
              color: '#000000',
              fontFamily: 'Nunito',
              fontWeight: 300,
              fontSize: '14px',
              letterSpacing: '1.25px',
              mx: { xs: '16px', sm: '18px' },
              mr: '18px',
              ml: '18px',
              mb: '20px'
            }}
          >
            {[paragraph]}
          </Box>
          <Button
            variant='text'
            onClick={() => eliminarInformacion()}
            sx={{
              color: '#AA3D72',
              fontFamily: 'Noto Sans',
              fontWeight: 'Bold',
              fontSize: '14px',
              letterSpacing: '1.25px',
              textTransform: 'capitalize',
              ml: { xs: '18px' }
            }}
          >
            Borrar
          </Button>
          <Button
            onClick={() => {
              console.log('Boton archivar funciona')
            }}
            variant='text'
            sx={{
              color: '#05B3B2',
              fontFamily: 'Noto Sans',
              fontWeight: 'Bold',
              fontSize: '14px',
              letterSpacing: '1.25px',
              textTransform: 'capitalize',
              display: [button2],
              ml: '18px'
            }}
          >
            Archivar
          </Button>
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
              Editar
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
    </>
  )
}

export default BoxManagement

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
