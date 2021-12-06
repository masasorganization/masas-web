import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Politics() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className="tab-politics">
            <h3 className="txt-title">Políticas y términos </h3>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="btn-client"  >
            <Link to="/">
              <Button sx={{ bgcolor: '#ffffff',
                            textTransform: 'none',
                            width: '18rem',
                            mt: '1rem',
                            mb: '2rem',
                            color: '#ff4e00',
                            border: '2px solid #ff4e00',
                            borderRadius: '10px',
                            boxShadow: '0',
                            fontFamily: 'Noto Sans, sans-serif',
                            fontSize: {
                              md: '1.1rem',
                              xs: '1rem'
                            },
                            fontWeight: '700',
                            ":hover": {
                                bgcolor: '#ff4e00',
                                color: '#ffffff' 
                            }}}>Inicio</Button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Box id="politics" sx= {{ ml: '1rem',
                      mr: '1rem',
                      fontSize: {
                        md: '1.3rem',
                        xs: '1.1rem'
                      }}} >
            <Typography h3 sx={{ fontWeight: '700',
                                  textAlign: 'center',
                                  mt: {
                                    md: '3rem',
                                    xs: '1rem'
                                } }} >Políticas de privacidad</Typography>
            <Typography paragraph sx={{ mt: '1rem' }} >
              El presente documento describe los términos y condiciones generales aplicables a los servicios de Má
              S.A.S dentro de su sito de dominio:
            </Typography>
            <Typography h3>Manejo de datos: </Typography>    
            <Typography paragraph sx={{ mt: '1rem' }}>
              Al aceptar los términos y condiciones legales el usuario indica
              que conoce y autoriza el manejo de datos para uso exclusivo de la
              adquisición de los productos presentados por la empresa
              comercial, dicha información es tratada según la Ley 1581 de 2012
              y sus decretos, autoriza el manejo de datos para establecer una
              comunicación acorde y el cumplimineto del contrato de
              adquisición entre las partes, los datos suministrados por el cliente
              que accede al presente sitio web no pueden ser manipualdos por terceros,
              ni vendidos a ninguna persona o lugar ya que acarrea la pena legal constituida para la
              empresa comercial.
            </Typography>
            <Typography h3 sx={{ mt: '1rem' }}>Contrato de compra: </Typography> 
            <Typography paragraph sx={{ mt: '1rem' }} >
              Al establecerse la solicitud de compra por parte del cliente, este se compromete
              en aceptar las pautas concebidas para la realización de dicho contrato de adquisición de
              productos, el cliente debe tener en cuenta el pago de los productos adquiridos según sea la 
              modalidad de pago escogida y la empresa comercial se compromete a cumplir con los productos 
              adquiridos por el cliente.
            </Typography>   
          </Box>
          <Box id="terms" sx={{ ml: '1rem',
                      mr: '1rem',
                      fontSize: {
                        md: '1.3rem',
                        xs: '1.1rem'
                      }}} >
            <Typography h3 sx={{ fontWeight: '700',
                                  textAlign: 'center',
                                  mt: {
                                    md: '3rem',
                                    xs: '1rem'
                                } }} >Términos y condiciones de entrega</Typography>
            <Typography h3 sx={{ mt: '1rem' }} >Contrato contra-entrega: </Typography>    
            <Typography paragraph sx={{ mt: '1rem' }}>
              A partir de ahora se da a conocer como contrato contra-entrega la adquisición de un 
              producto por parte del cliente y que es pagado por el mismo cuando le llega a su lugar 
              de residencia o el lugar que escoja. Este contrato es aprobado por medio de la plataforma dominio 
              web de comercio en donde
              el cliente llena la solicitud para que dicho producto, con las características elegidas
              previamente, le llegue al lugar escogido.
              La empresa comercial se compromete a cumplir con:
            </Typography>
            <Typography paragraph sx={{ mt: '1rem' }}>
              <ol>
                <li>El tipo de producto seleccionado por el cliente</li>
                <li>El tamaño escogido en la forma de producto por parte del cliente</li>
                <li>Las cantidades escogidas en la forma de producto por parte del cliente</li>
                <li>El complemento escogido en la forma de producto por parte del cliente</li>
                <li>Los diferentes tipos de productos y características (+1) escogidos 
                  en la lista de pedidos por parte del cliente</li>
                <li>Los valores registrados al escoger el producto y llenar la forma de solicitud contra-entrega
                    por parte del cliente:
                    <ol>
                      <li>El subtotal, suma de los productos escogidos</li>
                      <li>Cobro de entrega, suma dispuesta para la entrega</li>
                      <li>Valor total: la suma del subtotal y el cobro de entrega</li>
                    </ol>
                </li>
                <li>La dirección de entrega suministrada en la forma de solicitud por parte del cliente</li>
                <li>Establecer acuerdos de horarios de entrega, personales, con el cliente</li>
                <li>La entrega completa del producto y la recepción del valor estipulado</li>
                <li>Generar una entrega de calidad que cumpla con los más altos estándares de sanidad</li>
                <li>Respetar las decisiones en cuanto al producto por parte de los clientes y 
                  dar término inmediato al contrato si es necesario</li>
              </ol>
            </Typography>
            <Typography paragraph sx={{ mt: '1rem' }}>
              Por su parte el cliente que es parte del contrato contra-entrega se compromete a cumplir con:
            </Typography>
            <Typography paragraph sx={{ mt: '1rem' }}>
              <ol>
                <li>El pago total generado con el producto adquirido al momento de realizar la entrega</li>
                <li>Estar en el lugar pactado y en la hora acordada para recibir la entrega</li>
                <li>Respetar tanto a las personas que realizan la entrega como a la empresa comercial</li>
                <li>Si por razones de fuerza mayor la persona no puede estar, se compromete a pactar otra 
                  fecha de entrega de manera personal</li>
                <li>Tener a la mano el recibo de pago generado en la solicitud de entrega para validar información</li>
                <li>Si ha decidido dar término al contrato, no exigir demandas de la empresa comercial después del tiempo...</li>
              </ol>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Politics;

