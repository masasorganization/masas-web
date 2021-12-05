import { Box } from '@mui/material'
import { Button } from '@mui/material'
import Image from '../../assets/placeholder.png'
import { createTheme } from '@mui/material'

const theme = createTheme({})

const BoxManagement = ({ title, paragraph, button1, button2 }) => {
  return (
    <>
      <Box
        component='div'
        sx={{
          //cursor: 'pointer',
          bgcolor: '',
          height: '120px',
          display: 'flex',
          maxWidth: { xs: 'unset', md: '540px', lg: '600px' },
          justifyContent: 'space-between',
          border: 1,
          borderColor: '#a0a0a0',
          borderRadius: '10px',
          [theme.breakpoints.down('md')]: { ml: '0px', mr: '0px' },
          ':hover': {
            borderColor: '#C65306',
            transform: 'scale(1.005)'
          }
        }}
      >
        <Box>
          <Box
            sx={{
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
            sx={{
              color: '#AA3D72',
              fontFamily: 'Noto Sans',
              fontWeight: 'Bold',
              fontSize: '14px',
              letterSpacing: '1.25px',
              textTransform: 'capitalize',
              display: [button1],
              ml: '18px',
              [theme.breakpoints.down('md')]: { ml: '10px' }
            }}
          >
            Borrar
          </Button>
          <Button
            variant='text'
            sx={{
              color: '#05B3B2',
              fontFamily: 'Noto Sans',
              fontWeight: 'Bold',
              fontSize: '14px',
              letterSpacing: '1.25px',
              textTransform: 'capitalize',
              display: [button2],
              ml: '18px',
              [theme.breakpoints.down('md')]: { ml: '10px' }
            }}
          >
            Archivar
          </Button>
        </Box>
        <Box className='cards'>
          <img src={Image} alt='' />
        </Box>
      </Box>
    </>
  )
}

export default BoxManagement
