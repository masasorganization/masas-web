import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';

function CardProduct() {
    const [expanded, setExpanded] = React.useState(false);
    const click = () => {
        setExpanded(!expanded)
    };

    return(
        <div>
            <Card sx={{ boxShadow: '0',
                        mt: '3rem'}}>
                <CardMedia />
                <CardContent sx={{ border: '2px solid #460020' }}>
                    <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                        fontWeight: '700',
                                        color: '#460020',
                                        fontSize: '1.2rem',
                                        mt: '1rem' }} h3>
                        Torta Morada de remolacha
                    </Typography>
                    <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                        fontWeight: '700',
                                        fontSize: '1.2rem',
                                        mt: '0.5rem' }} h3>
                        $10.000
                    </Typography>
                    <div>
                        <div>
                            <Typography sx={{ width: '50%' }} paragraph>
                            Un color natural divertido y deliciosas notas de saboragridulce
                            </Typography>
                        </div>
                        <div>
                            <Autocomplete disablePortal sx={{ width: '7rem'}} id="uno" 
                                                                    options={size} 
                                                                    renderInput={(params) => <TextField {...params}  label="tamaño" />} />
                  
                        </div>
                    </div>
                </CardContent>
                <CardActions sx={{ bgcolor: '#460020' }} disableSpacing>
                    <ExpandMore sx={{ color: '#ffffff'}} expand={expanded}
                                    onClick={click}
                                    aria-expanded={expanded}
                                    aria-label="more"  />
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                            fontWeight: '700',
                                            fontSize: '1.2rem',
                                            mt: '0.5rem' }} h3>
                            Ingredientes
                        </Typography>
                        <Typography sx={{ fontFamily: 'Nunito, sans-serif' }} paragraph> 
                            Remolachas confitadas, jugo de naranja tangelo, huevos de granja, aceite de oliva, aceite de coco,
                            harina de maíz, harina de avena sin gluten, levadura orgánica y sal marina.
                        </Typography>
                        <Button variant="contained" sx={{ bgcolor: '#ff823b',
                                                        textTransform: 'none',
                                                        width: '18rem',
                                                        fontFamily: 'Noto Sans, sans-serif',
                                                        fontSize: {
                                                            md: '1.1rem',
                                                            xs: '1rem'
                                                        },
                                                        fontWeight: '700',
                                                        ":hover": {
                                                            bgcolor: 'blue' 
                                                        }}}>Añadir</Button>
                    </CardContent>
                </Collapse>
                <Link to="/orders">
                    <Button variant="contained" sx={{ bgcolor: '#9bd816',
                                                        textTransform: 'none',
                                                        width: '18rem',
                                                        fontFamily: 'Noto Sans, sans-serif',
                                                        fontSize: {
                                                            md: '1.1rem',
                                                            xs: '1rem'
                                                        },
                                                        fontWeight: '700',
                                                        ":hover": {
                                                            bgcolor: 'blue' 
                                                        },
                                                        mt: '1rem'}}>Pagar</Button>
                </Link>
            </Card>
        </div>
    );
}

export default CardProduct;

const size = ['x8', 'x12'];
