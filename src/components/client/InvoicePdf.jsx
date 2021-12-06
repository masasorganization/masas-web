import {Document, Page, View, Text, Image} from '@react-pdf/renderer';
import Logo from '../../assets/logo-small.png';


function InvoicePdf() {

  return (
    <Document>
        <Page size="A4">
            <View style={{ width: '98%', marginLeft: '10px', fontSize: '12px'}}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Image src={Logo} style={{ width: '70px', height: '75px' }} />
                    <Text style= {{paddingLeft: '70px', marginTop: '50px'}} >Tienda de productos naturales</Text>
                    <Text style={{paddingLeft: '70px', marginTop: '50px'}} >Recibo de pago 001</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid #ff3300', marginBottom: '10px' }}>
                    <Text style={{marginLeft: '400px'}} >Fecha de recibo: 25/11/2021</Text>
                </View>
                <View style={{ width: '98%', display: 'flex', borderBottom: '1px solid #ff3e00', flexDirection: 'row', marginLeft: '10px'}}>
                    <Text style={{ borderRight: '1px solid #ff3e00', paddingRight: '5px' }}  >Productos adquiridos</Text>
                    <Text style={{ paddingLeft: '30px', borderRight: '1px solid #ff3e00', paddingRight: '20px' }}>Valor de la unidad</Text>
                    <Text style={{ paddingLeft: '30px', borderRight: '1px solid #ff3e00', paddingRight: '20px' }}>Cantidades</Text>
                    <Text style={{ paddingLeft: '30px' }}>Total producto </Text>
                </View>
                <View style={{ width: '98%', display: 'flex', flexDirection: 'row', margin: '10px 10px 0px 10px', borderBottom: '1px solid #ff3e00'}}>
                    <Text style={{ paddingRight: '40px' }}>Aceite esencial</Text>
                    <Text style={{ paddingLeft: '40px', paddingRight: '40px' }}>$10.400</Text>
                    <Text style={{ paddingLeft: '60px', paddingRight: '60px' }}>20</Text>
                    <Text style={{ paddingLeft: '40px' }}>$210.000</Text>
                </View>
                <View style={{marginLeft: '340px', borderTop: '1px solid #ff3e00', borderBottom: '1px solid #ff3e00', marginTop: '50px'}}>
                    <View style={{display: 'flex', flexDirection: 'row'}} >
                        <Text style={{marginRight: '45px'}} >Subtotal:</Text>
                        <Text>$210.000</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}} >
                        <Text style={{marginRight: '48px'}} >Entrega:</Text>
                        <Text>$5.500</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}} >
                        <Text style={{marginRight: '64px'}} >Total:</Text>
                        <Text>$215.500</Text>
                    </View>
                </View>
                <View style={{borderTop: '1px solid #ff3e00', marginTop: '10px'}}>
                    <Text style={{borderBottom: '1px solid #ff3e00'}} >Datos solicitud de pedido contra entrega:</Text>
                    <View style={{display: 'flex', flexDirection: 'column', marginTop: '10px'}} >
                        <View style={{display: 'flex', flexDirection: 'row', marginLeft: '40px', border: '1px solid #ff3e00', marginRight: '40px'}} >
                            <Text style={{ marginRight: '120px' }}>Nombres: Lina María</Text>
                            <Text>Apellidos: Arango Quvedo</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', marginLeft: '40px', border: '1px solid #ff3e00', marginTop: '10px', marginRight: '40px'}} >
                            <Text style={{ marginRight: '120px' }}>Número: 111111111</Text>
                            <Text>Tipo de documento: CC</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', marginLeft: '40px', border: '1px solid #ff3e00', marginTop: '10px', marginRight: '40px'}} >
                            <Text style={{ marginRight: '85px' }}>Dirección: Calle 12 # 35-80</Text>
                            <Text>Número casa, apto, oficina: Bloque B casa 202</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', marginLeft: '40px', border: '1px solid #ff3e00', marginTop: '10px', marginRight: '40px'}} >
                            <Text style={{ marginRight: '136px' }}>Barrio: San Diego</Text>
                            <Text>Celular: 3009876543</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', marginLeft: '40px', border: '1px solid #ff3e00', marginTop: '10px', marginRight: '40px'}} >
                            <Text>Fecha de entrega: 30/11/2021</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: '10px', fontSize: '10px', textAlign: 'center'}} >
                    <Text>Recuerda: no imprimas este recibo 
                        si no es necesario, en tal caso utiliza papel reciclado, 
                        piensa en el planeta.
                    </Text>
                </View>
            </View>
        </Page>
    </Document>

  );
}

export default InvoicePdf;
