import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React from 'react';
import Beetroot from '../../assets/beetroot-cake-org1.jpg';
import FormProduct from './FormProduct';

function CardProduct() {
    const [expanded, setExpanded] = React.useState(false);
    const click = () => {
        setExpanded(!expanded)
    };

    return(
        <>
            <Grid item xs={12} md={4}>
                <Card sx={{ boxShadow: '0',
                            mt: '1rem',
                            ml: '1rem',
                            mr: '1rem' }}>
                    <CardMedia sx={{ height: {
                                        sm: '350px',
                                        xs: '230px' } }} component="img" 
                                image={Beetroot}
                                alt="Torta de remolacha" />
                    <CardContent sx={{ border: '2px solid #460020' }}>
                        <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                            fontWeight: '700',
                                            color: '#460020',
                                            fontSize: '1.25rem',
                                            mt: '1rem' }}>
                            Torta Morada de remolacha
                        </Typography>
                        <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                            fontWeight: '700',
                                            fontSize: '1.25rem',
                                            mt: '0.7rem' }}>
                            $10.000
                        </Typography>
                        <Box sx={{ display: 'flex',
                                    flexDirection: 'row' }} >
                            <Typography sx={{ fontSize: '1rem',
                                                mt: '1rem',
                                                mr: '1rem',
                                                width: {
                                                    md: '40%',
                                                    xs: '35%'
                                                } }}>
                                Un color natural divertido y deliciosas notas de sabor agridulce
                            </Typography>
                            <Box sx={{ width: {
                                        md: '60%',
                                        xs: '65%'
                                    } }} >
                                <FormProduct />
                            </Box>
                        </Box>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                                    fontWeight: '700',
                                                    fontSize: '1.25rem',
                                                    mt: '0.5rem' }}>
                                    Ingredientes
                                </Typography>
                                <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                                    fontSize: '1.1rem',
                                                    mt: '0.5rem' }}> 
                                    Remolachas confitadas, jugo de naranja tangelo, huevos de granja, aceite de oliva, aceite de coco,
                                    harina de maíz, harina de avena sin gluten, levadura orgánica y sal marina.
                                </Typography>
                                <div className="btn-client">
                                    <Button sx={{ bgcolor: '#ff823b',
                                                                    textTransform: 'none',
                                                                    width: '18rem',
                                                                    mt: '1rem',
                                                                    color: '#ffffff',
                                                                    borderRadius: '10px',
                                                                    boxShadow: '0',
                                                                    fontFamily: 'Noto Sans, sans-serif',
                                                                    fontSize: {
                                                                        md: '1.1rem',
                                                                        xs: '1rem'
                                                                    },
                                                                    fontWeight: '700',
                                                                    ":hover": {
                                                                        bgcolor: '#ff4e00' 
                                                                    }}}>Añadir</Button>
                                </div>
                            </CardContent>
                        </Collapse>
                    </CardContent>
                    <CardActions sx={{ bgcolor: '#460020' }} disableSpacing>
                        <div className="icon-exp">
                            <ExpandMore sx={{ color: '#ffffff',
                                                fontSize: '2rem',
                                                textAlign: 'center',
                                                ":hover": {
                                                    color: '#aa3d72'
                                                }}} expand={expanded}
                                                    onClick={click}
                                                    aria-expanded={expanded}
                                                    aria-label="more"  />
                        </div>
                    </CardActions>
                    <div className="btn-client">
                        <Link to="/orders">
                            <Button sx={{ bgcolor: '#9bd816',
                                            textTransform: 'none',
                                            width: '18rem',
                                            color: '#ffffff',
                                            borderRadius: '10px',
                                            boxShadow: '0',
                                            fontFamily: 'Noto Sans, sans-serif',
                                            fontSize: {
                                                md: '1.1rem',
                                                xs: '1rem'
                                            },
                                            fontWeight: '700',
                                            ":hover": {
                                                bgcolor: '#ff4e00' 
                                            },
                                            mt: '1rem'}}>Pagar</Button>
                        </Link>
                    </div>
                </Card>
            </Grid>
        </>
    );
}

export default CardProduct;
