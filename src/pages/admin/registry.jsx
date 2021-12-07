import LayoutRegistry from 'Layouts/LayoutRegistry'
// import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
// import BoxOrdersManag from '../../components/admin/BoxOrdersManag'
import { styled } from '@mui/material/styles'

function Registry() {
  return (
    <div>
      <LayoutRegistry>
        <MensajeError />
      </LayoutRegistry>
    </div>
  )
}

export default Registry

// function ArchiveCatalog() {
//   return (
//     <>
//       <Box sx={{ mt: { xs: '32px', md: 0 }, mb: '20px' }}>
//         <Grid
//           container
//           columns={{ xs: 12, md: 12, xl: 12 }}
//           rowSpacing={{ xs: '30px' }}
//           columnSpacing={{ xs: 0, md: '30px', lg: '180px', xl: '35px' }}
//         >
//           <Grid item xs={12} md={6} lg={6} xl={4}>
//             <BoxOrdersManag
//               name='María Gómez Vega'
//               telephone='300 1234 45678'
//               type='Tipo orgánico'
//               amount='x8 porciones'
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   )
// }

function MensajeError() {
  return (
    <>
      <Box
        sx={{
          mt: '100px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'center'
        }}
      >
        <Cuerpo sx={{ ...tituloCuerpo }}>No hay ningún pedido </Cuerpo>
        <Resaltado sx={{ ...tituloResaltado }}>Archivado...</Resaltado>
      </Box>
    </>
  )
}

// Componentes de Texto
const Resaltado = styled('p')``
const Cuerpo = styled('p')``

const tituloCuerpo = {
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 300,
  fontSize: { xs: '1.7rem', md: '3rem' },
  whiteSpace: 'pre-wrap',
  m: 0
}

const tituloResaltado = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: { xs: '1.7rem', md: '3rem' },
  color: '#05B3B2',
  whiteSpace: 'pre-wrap',
  m: 0
}
