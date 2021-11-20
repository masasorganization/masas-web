import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import React from 'react';
import Beetroot from '../../assets/beetroot-cake-org1.jpg';
import FormProduct from './FormProduct';

function CardProduct() {
    const [expanded, setExpanded] = React.useState(false);
    const click = () => {
        setExpanded(!expanded)
    };

    return(
        <div>
            <Card sx={{ boxShadow: '0',
                        mt: '1rem' }}>
                <CardMedia sx={{ height: {
                                    md: '270px',
                                    xs: '315px' } }} component="img" 
                            image={Beetroot}
                            alt="Torta de remolacha" />
                <CardContent sx={{ border: '2px solid #460020' }}>
                    <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                        fontWeight: '700',
                                        color: '#460020',
                                        fontSize: '1.25rem',
                                        mt: '1rem' }} h3>
                        Torta Morada de remolacha
                    </Typography>
                    <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                        fontWeight: '700',
                                        fontSize: '1.25rem',
                                        mt: '0.7rem' }} h3>
                        $10.000
                    </Typography>
                    <div className="box-selectPro">
                        <div>
                            <Typography sx={{ width: '50%',
                                                fontSize: '1rem',
                                                mt: '1rem' }} paragraph>
                            Un color natural divertido y deliciosas notas de sabor agridulce
                            </Typography>
                        </div>
                        <FormProduct />
                    </div>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                                fontWeight: '700',
                                                fontSize: '1.25rem',
                                                mt: '0.5rem' }} h3>
                                Ingredientes
                            </Typography>
                            <Typography sx={{ fontFamily: 'Nunito, sans-serif',
                                                fontSize: '1.1rem',
                                                mt: '0.5rem' }} paragraph> 
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
        </div>
    );
}

export default CardProduct;
