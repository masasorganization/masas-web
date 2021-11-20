import { Link } from 'react-router-dom'

const testfield = () => {
  return (
    <div>
      <h3>espacio de prueba entre admin y vendedor</h3>
      <br />

      <ul>
        <Link to='welcome'>
          <h2>Inicio Admin</h2>
        </Link>
        <li>
          <Link to='productmanag'>Productos</Link>
        </li>
        <li>
          <Link to='sellermanag'>Cuentas</Link>
        </li>
        <li>
          <Link to='salesrep'>Cifras</Link>
        </li>
      </ul>
      <br />
      <br />
      <ul>
        <Link to='report'>
          <h2>Inicio Vendedor</h2>
        </Link>
        <li>
          <Link to='ordersclient'>Pedidos</Link>
        </li>
        <li>
          <Link to='registry'>Archivo</Link>
        </li>
      </ul>
      <br />
      <br />
      <ul>
        <Link to='login'>
          <h2>Login</h2>
        </Link>
      </ul>
    </div>
  )
}

export default testfield
