import { ThemeProvider, createTheme } from '@mui/system'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const Text1Style = styled('p')``
const Resaltado = styled('b')``

const theme = createTheme({
  palette: {
    background: {
      principalClaro: '#FF823B',
      secundarioClaro: '#AA3D72',
      azulado: '#05B3B2'
    },
    hover: {
      hoverPrincipalClaro: '#C65306',
      hoverSecundarioClaro: '#770047',
      hoverAzulado: '#00928E'
    },
    text: {
      white: '#FFFFFF'
    }
  }
})

const BoxCategory = ({ background, hover, title, paragraph, word }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: [background],
            m: '20px',
            height: '210px',
            display: 'inline-flex',
            borderRadius: { xs: '7px', md: '14px' },
            [theme.breakpoints.only('md')]: {
              height: '250px'
            },
            [theme.breakpoints.down('md')]: {
              height: '150px',
              mt: '10px',
              mb: '10px'
            },
            ':hover': {
              bgcolor: [hover]
            }
          }}
        >
          <div>
            <Box
              sx={{
                color: 'text.white',
                textAlign: 'left',
                letterSpacing: '1.25px',
                fontSize: '32px',
                margin: '1.6rem',
                fontFamily: 'Noto Sans',
                fontWeight: 'bold',
                [theme.breakpoints.down('md')]: {
                  margin: '1.3rem',
                  mb: '0.313rem',
                  mt: '0.938rem'
                }
              }}
            >
              {[title]}
            </Box>
            <Text1Style sx={{ ...estiloParrafo }}>
              {paragraph}
              <Resaltado sx={{ ...resaltado }}>{word}</Resaltado>
            </Text1Style>
          </div>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default BoxCategory

const resaltado = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700
}

const estiloParrafo = {
  color: 'text.white',
  textAlign: 'right',
  letterSpacing: '1.25px',
  fontFamily: 'Nunito',
  fontSize: { xs: '14px', sm: '18px', md: '17px', lg: '18px', xl: '21px' },
  mx: '20px',
  my: { xs: '1.6rem', md: '4.3rem', lg: '2.9rem' }
}
