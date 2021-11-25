import { styled } from '@mui/material/styles'

export default function SmartTitle(props) {
  let textOrder = props.order
  let titleBody = props.body
  let titleBold = props.bold
  let textColor = props.color

  const colorPrincipal = {
    color: '#FF823B'
  }

  const colorSecundario = {
    color: '#05B3B2'
  }

  const tituloResaltado = {
    fontFamily: 'Noto Sans, sans-serif',
    fontWeight: 700,
    fontSize: { xs: '1.125rem', md: '2.25rem' },
    color: textColor ? colorPrincipal : colorSecundario,
    whiteSpace: 'pre-wrap',
    m: 0
  }

  function TitleComponent() {
    if (textOrder === 'invertido') {
      return OrderTwo()
    } else {
      return OrderOne()
    }
  }

  return (
    <>
      <TitleComponent />
    </>
  )

  function OrderOne() {
    return (
      <>
        <Cuerpo sx={{ ...tituloCuerpo }}>{titleBody}</Cuerpo>
        <Resaltado sx={{ ...tituloResaltado }}>{titleBold}</Resaltado>
      </>
    )
  }
  function OrderTwo() {
    return (
      <>
        <Resaltado sx={{ ...tituloResaltado }}>{titleBold}</Resaltado>
        <Cuerpo sx={{ ...tituloCuerpo }}>{titleBody}</Cuerpo>
      </>
    )
  }
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
