import { Grid } from '@mui/material'
import { Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/system'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'
//import ButtonAppBar from '../../components/admin/NavBarAdmin'
import BoxManagement from '../../components/admin/BoxManagement'
import TestNavbar from '../../components/admin/TestNavbar'

const Text1Style = styled('p')``
const Text2Style = styled('p')``

const text1 = 'Gestión de '

const theme = createTheme({
  palette: {
    blanco: '#FFFFFF',
    negro: '#000000',
    gris: '#dadada',
    principalClaro: '#FF823B',
    secundarioClaro: '#AA3D72',
    azulado: '#05B3B2'
  }
})

// eslint-disable-next-line react/prop-types
function SellerManagement({ title }) {
  return (
    <div>
      <TestNavbar></TestNavbar>
      {/* <ButtonAppBar></ButtonAppBar> */}
      <Box
        sx={{
          pr: '48px',
          pl: '48px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <ThemeProvider theme={theme}>
              <Box display="flex" flexDirection="row">
                <Text1Style sx={{ ...text1Style, color: 'negro' }}>
                  {text1}
                </Text1Style>
                <Text2Style sx={{ ...text2Style, color: 'principalClaro' }}>
                  {title}
                </Text2Style>
              </Box>
            </ThemeProvider>
          </Box>
          <Box>
            <Button sx={{ ...buttonStyle1 }}>Nueva cuenta</Button>
          </Box>
        </Box>

        <Grid container>
          <Grid item xs={12} md={6}>
            <BoxManagement
              title="Federico Molano"
              paragraph="fedemolo"
            ></BoxManagement>
          </Grid>
          <Grid item xs={12} md={6}>
            <BoxManagement
              title="Daniela Bedoya"
              paragraph="denibedo"
            ></BoxManagement>
          </Grid>
          <Grid item xs={12} md={6}>
            <BoxManagement
              title="Javier Torres"
              paragraph="javitorr"
            ></BoxManagement>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default SellerManagement

const text1Style = {
  m: '50px',
  mr: '0px',
  mb: '32px',
  ml: '48',
  fontFamily: 'Nunito',
  fontSize: '36px',
  fontWeight: 300,
  whiteSpace: 'pre-wrap'
}

const text2Style = {
  m: '50px',
  ml: '0px',
  mb: '32px',
  fontFamily: 'Noto Sans',
  fontSize: '36px',
  fontWeight: 'Bold'
}

const buttonStyle1 = {
  mt: '52px',
  mb: '32px',
  ml: '5px',
  mr: '48px',
  pl: '30px',
  pr: '30px',
  fontFamily: 'Noto Sans',
  fontWeight: 'bold',
  fontSize: '18px',
  letterSpacing: '1.25px',
  textTransform: 'capitalize',
  color: '#FFFFFF',
  bgcolor: '#FF823B',
  borderRadius: '10px',
  ':hover': {
    bgcolor: '#FF823B'
  }
}
