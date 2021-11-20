import * as React from 'react'
import TestNavbar from '../../components/admin/TestNavbar'
import Collapse from '@mui/material/Collapse'

import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
//import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'

function SalesReport() {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <div>
      <TestNavbar></TestNavbar>
      {/* ESPACIO DE PRUEBA */}
      <h1>Aquí generas los reportes de venta</h1>
      <br />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Box
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </Box>
      </CardActions>

      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <IconButton
          aria-label="more"
          sx={{ display: { xs: 'flex', md: 'none' }, mr: '16px' }}
        >
          <MenuIcon />
        </IconButton>
        <Collapse
          orientation="horizontal"
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'flex'
              },
              flexDirection: 'row'
            }}
          >
            <Typography component={Link} sx={{ ...botonTexto }} to="productmanag">
              Productos
            </Typography>
            <Typography component={Link} sx={{ ...botonTexto }} to="sellermanag">
              Cuentas
            </Typography>
            <Typography component={Link} sx={{ ...botonTexto }} to="salesrep">
              Cifras
            </Typography>
            <Typography component={Link} sx={{ ...botonTexto }} to="login">
              Salir
            </Typography>
          </Box>
        </Collapse>
      </Box>
    </div>
  )
}

export default SalesReport

const botonTexto = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: '16px',
  color: '#05B3B2',
  mr: '16px',
  ':hover': {
    color: '#666666'
  }
}
