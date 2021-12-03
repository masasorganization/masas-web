import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export default function SmartTitle({ cuerpo, resaltado, posicion, color }) {
  let textOrder = posicion
  let textColor = color

  let colorResaltado = ''

  if (textColor === 'principal') {
    colorResaltado = '#FF823B'
  } else if (textColor === 'secundario') {
    colorResaltado = '#05B3B2'
  } else {
    console.log('Error de color: debe introducir "principal" o "secundario"')
  }

  let orientacionTitulo = ''

  if (textOrder === 'normal') {
    orientacionTitulo = 'row'
  } else if (textOrder === 'invertido') {
    orientacionTitulo = 'row-reverse'
  } else {
    console.log('Error de orientación: debe introducir "normal" o "invertido"')
  }

  const tituloResaltado = {
    fontFamily: 'Noto Sans, sans-serif',
    fontWeight: 700,
    fontSize: { xs: '1.125rem', md: '2.25rem' },
    color: colorResaltado,
    whiteSpace: 'pre-wrap',
    m: 0
  }

  const contenedorTitulos = {
    display: 'flex',
    flexDirection: orientacionTitulo,
    alignItems: 'center',
    justifyContent: 'left'
  }

  return (
    <>
      <Box sx={{ ...contenedorTitulos }}>
        <Cuerpo sx={{ ...tituloCuerpo }}>{[cuerpo]}</Cuerpo>
        <Resaltado sx={{ ...tituloResaltado }}>{[resaltado]}</Resaltado>
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
  fontSize: { xs: '1.125rem', md: '2.25rem' },
  whiteSpace: 'pre-wrap',
  m: 0
}
