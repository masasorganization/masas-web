import Button from '@mui/material/Button';
import React from 'react';
import InvoicePdf from './InvoicePdf';
import {PDFViewer, PDFDownloadLink} from '@react-pdf/renderer';


function DataPdf() {
    const [seePdf] = React.useState(true);

    return(
        <>
            {seePdf ? (<PDFViewer style={{  width: '90%', height: '60vh'}}><InvoicePdf /></PDFViewer>) : null}
            <div className="btn-client">
                <PDFDownloadLink document={<InvoicePdf />} fileName="recibo-masas.pdf">
                    <Button sx={{ bgcolor: '#ff4e00',
                                    width: {
                                        md: '22rem',
                                        xs: '18rem',
                                    },
                                    mt: '1rem',
                                    borderRadius: '10px',
                                    boxShadow: '0',
                                    color: '#ffffff',
                                    textTransform: 'none',
                                    fontFamily: 'Noto Sans, sans-serif',
                                    fontSize: {
                                        md: '1.1rem',
                                        xs: '1rem',
                                    },
                                    fontWeight: '700',
                                    ":hover": {
                                        bgcolor: '#aa3d72'
                                    } }}>Descargar PDF</Button>
                </PDFDownloadLink>
            </div>
        </>
    );
}

export default DataPdf;
