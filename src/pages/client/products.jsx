import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import AppBar from '@mui/material/AppBar'
import BtnExit from '../../components/client/BtnExit'
import CardProduct from '../../components/client/CardProduct'
import React from 'react'

function Products(props) {
  const { match, history } = props
  const { params } = match
  const { category } = params

  const tabIndex = {
    0: 'sugarfree',
    1: 'healthydough',
    2: 'organic'
  }

  const indexTab = {
    sugarfree: 0,
    healthydough: 1,
    organic: 2
  }

  const [selTab, setSelTab] = React.useState(indexTab[category])
  const clickTab = (event, newValue) => {
    history.push(`/products/${tabIndex[newValue]}`)
    setSelTab(newValue)
  }

  const dataSinAzucar = [
    {
      _id: '61a69676bbefa20b236bd1f3',
      fechaCreacion: '2021-11-30T00:00:00.000Z',
      categoria: 'Sin azúcar',
      nombre: 'Torta de chocolate amargo',
      porciones: 8,
      precio: 20000,
      descripcion: 'Torta elaborada con chocolate amargo y leche de almendras',
      ingredientes:
        'Harina, sal, mantequilla orgánica, chocolate amargo, leche de almendras',
      __v: 0
    }
  ]

  const dataMasaSaludable = [
    {
      _id: '6195becd3ffb016276b89674',
      fechaCreacion: '2021-11-14T00:00:00.000Z',
      categoria: 'Masas saludables',
      nombre: 'Torta de Almendras',
      porciones: 8,
      precio: 40000,
      descripcion: 'Torta elaborada con harina de almendras',
      ingredientes: 'Harina, sal, panela, almendras, agua',
      __v: 0
    },
    {
      _id: '6195caf53ffb016276b89693',
      fechaCreacion: '2021-11-14T00:00:00.000Z',
      categoria: 'Masas saludables',
      nombre: 'Torta de Quinua blanca',
      porciones: 8,
      precio: 32000,
      descripcion: 'Torta elaborada con quinua blanca',
      ingredientes: 'Harina, sal, panela, quinua, agua',
      __v: 0
    }
  ]

  const dataOrganico = [
    {
      _id: '61a695d2bbefa20b236bd1f2',
      fechaCreacion: '2021-11-30T00:00:00.000Z',
      categoria: 'Orgánico',
      nombre: 'Torta de naranja y zanahoria',
      porciones: 8,
      precio: 40000,
      descripcion: 'Torta elaborada con naranja y zanahoria',
      ingredientes: 'Harina, sal, panela, naranja, zanahoria, aceite',
      __v: 0
    }
  ]

  return (
    <div>
      <Grid container>
        <AppBar sx={{ bgcolor: '#ff4e00', boxShadow: '0' }} position='static'>
          <Tabs
            sx={{ height: '3.5rem' }}
            variant='fullWidth'
            value={selTab}
            onChange={clickTab}
          >
            <Tab sx={{ ...tabStyle }} label='Sin azúcar' />
            <Tab sx={{ ...tabStyle }} label='Masa saludable' />
            <Tab sx={{ ...tabStyle }} label='Orgánico' />
          </Tabs>
        </AppBar>
        {selTab === 0 && <Sugarfree />}
        {selTab === 1 && <HealthyDough />}
        {selTab === 2 && <Organic />}
        <Grid item xs={12} md={12}>
          <BtnExit />
        </Grid>
      </Grid>
    </div>
  )

  function Sugarfree() {
    return (
      <>
        {dataSinAzucar.map((datos, indice) => {
          const { nombre, precio, descripcion, ingredientes } = datos
          return (
            <CardProduct
              key={indice}
              titulo={nombre}
              valor={precio}
              descripcion={descripcion}
              ingredientes={ingredientes}
            />
          )
        })}
      </>
    )
  }

  function HealthyDough() {
    return (
      <>
        {dataMasaSaludable.map((datos, indice) => {
          const { nombre, precio, descripcion, ingredientes } = datos
          return (
            <CardProduct
              key={indice}
              titulo={nombre}
              valor={precio}
              descripcion={descripcion}
              ingredientes={ingredientes}
            />
          )
        })}
      </>
    )
  }

  function Organic() {
    return (
      <>
        {dataOrganico.map((datos, indice) => {
          const { nombre, precio, descripcion, ingredientes } = datos
          return (
            <CardProduct
              key={indice}
              titulo={nombre}
              valor={precio}
              descripcion={descripcion}
              ingredientes={ingredientes}
            />
          )
        })}
      </>
    )
  }
}

export default Products

const tabStyle = {
  color: '#ffffff',
  fontSize: {
    md: '1.2rem',
    xs: '0.9rem'
  },
  ':hover': {
    bgcolor: '#770047',
    color: '#ffffff'
  },
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: '700',
  textTransform: 'none'
}
