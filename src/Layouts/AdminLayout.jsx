import AdminNavbar from '../components/admin/AdminNavbar'
import Box from '@mui/material/Box'
import UpperSection from '../components/admin/UpperSection'

export default function AdminLayout({ children, body, bold, order, color }) {
  return (
    <>
      <AdminNavbar usuario='admin' />
      <Box sx={{ ...pantallaCompleta }}>
        <UpperSection body={body} bold={bold} order={order} color={color} />
        {children}
      </Box>
    </>
  )
}

const pantallaCompleta = {
  px: {
    md: '94px',
    xs: '18px'
  }
}
