import TextField from '@mui/material/TextField';
import esLocale from 'date-fns/locale/es';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

function FormClient() {
    const idclient = [
        { value: 'Cédula de ciudadanía', label: 'CC'}, 
        { value: 'Cédula de extranjería', label: 'CE'},
        { value: 'Tarjeta de identidad', label: 'TI'},
        { value: 'Nit empresarial', label: 'NIT'},
        { value: 'Pasaporte', label: 'P'},
    ];
    const localeMap = { es: esLocale };
    const date = { es: '__/__/____' };
    const [locale] = React.useState('es');
	const [value, setValue] = React.useState(null);
    const [id, setId] = React.useState(null);
    const handleChange = (event) => {
        setId(event.target.value)
    };

    return(
        <div>
            <Box sx={{ display: 'flex', 
                        flexDirection: { 
                            md: 'row', 
                            xs: 'column' } }}>
                <Box sx={{ m: '2rem', 
                            width: { 
                                md: '50%', 
                                xs: '78%' 
                            }, 
                            display: 'flex', 
                            flexDirection: 'column'}}>
                    <Typography sx={{ mb: '0.5rem' }} h5>Datos personales para generar recibo:</Typography>
                    <TextField sx={{ mb: '1rem' }} variant="outlined" label="Nombres" required="true" />
                    <TextField sx={{ mb: '1rem' }} variant="outlined" label="Apellidos" required="true" />
                    <TextField sx={{ mb: '1rem' }} select variant="outlined" value={id} onChange={handleChange} label="Tipo de documento" required="true">
                        {idclient.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))} 
                    </TextField>
                    <TextField variant="outlined" label="Número" required="true" helperText="Sin puntos (.) ni guiones (-) nit completo" />
                </Box>
                <Box sx={{ m: '2rem', 
                            width: { 
                                md: '50%', 
                                xs: '78%' 
                            }, 
                            display: 'flex', 
                            flexDirection: 'column' }}>
                    <Typography sx={{ mb: '0.5rem' }} h5>Datos de entrega:</Typography>
                    <TextField sx={{ mb: '1rem' }} variant="outlined" label="Dirección" required="true" helperText="Ej: Calle 20 sur # 2-28 o Carrera 13 este # 4-55" />
                    <TextField sx={{ mb: '1rem' }} variant="outlined" label="Número casa, apto, oficina" helperText="Ej: Torre 1 bloque b ap 202" />
                    <TextField sx={{ mb: '1rem' }} variant="outlined" label="Barrio" required="true" />
                    <TextField sx={{ mb: '1rem' }} variant="outlined" label="Celular" required="true" />
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]}>
                        <DatePicker
                            mask={date[locale]}
                            label="Fecha de entrega"
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} required="true" />}
                        />
                    </LocalizationProvider>
                </Box>
            </Box>
            <div className="btn-ok">
                <Link to="/deliveryconf">
                    <Button sx={{ bgcolor: '#ff4e00', 
                                    color: '#ffffff',
                                    textTransform: 'none',
                                    borderRadius: '10px',
                                    boxShadow: '0',
                                    mt: '1rem',
                                    width: '18rem',
                                    fontFamily: 'Noto Sans, sans-serif',
                                    fontSize: {
                                        md: '1.1rem',
                                        xs: '1rem'
                                    },
                                    fontWeight: '700',
                                    ":hover": {
                                        bgcolor: '#b70030' 
                                    } }}>Ok</Button>
                </Link>
            </div>
        </div>
    );
}

export default FormClient;
