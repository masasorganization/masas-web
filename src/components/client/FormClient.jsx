import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
        { value: 'Pasaporte', label: 'P'},
    ];
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
                                xs: '70%' 
                            }, 
                            display: 'flex', 
                            flexDirection: 'column'}}>
                    <TextField sx={{ mb: '1rem' }} variant="outlined" label="Nombres" required="true" />
                    <TextField sx={{ mb: '1rem' }} variant="outlined" label="Apellidos" required="true" />
                    <TextField sx={{ mb: '1rem' }} select variant="outlined" value={id} onChange={handleChange} label="Tipo de documento" required="true">
                        {idclient.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))} 
                    </TextField>
                    <TextField variant="outlined" label="Número" required="true" />
                </Box>
                <Box sx={{ m: '2rem', 
                            width: { 
                                md: '50%', 
                                xs: '70%' 
                            }, 
                            display: 'flex', 
                            flexDirection: 'column' }}>
                    <TextField sx={{ mb: '1rem' }} variant="outlined" label="Dirección" required="true" />
                    <TextField sx={{ mb: '1rem' }} variant="outlined" label="# Casa o apto" />
                    <TextField sx={{ mb: '1rem' }} variant="outlined" label="Barrio" required="true" />
                    <TextField sx={{ mb: '1rem' }} variant="outlined" label="Celular" required="true" />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Fecha de entrega"
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box>
            </Box>
            <div className="btn-ok">
                <Link to="/deliveryconf">
                    <Button variant="contained" sx={{ bgcolor: '#ff4e00', 
                                        color: '#ffffff',
                                        textTransform: 'none',
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
                                            bgcolor: '#ff823b' 
                                        } }}>Ok</Button>
                </Link>
            </div>
        </div>
    );
}

export default FormClient;
