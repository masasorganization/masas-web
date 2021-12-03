import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import React from 'react';

function CardCategory() {
    const [expanded, setExpanded] = React.useState(false);
    const click = () => {
        setExpanded(!expanded)
    };

    const cats = [
        {id: 1, 
        name: 'Sin azúcar', 
        description: 'Tortas que no contienen endulzantes artificiales o naturales, se recomienda su consumo: si desea mantener un buen balance de glucosa en su organismo ya sea por alguna enfermedad o por gusto general en el cuidado de la dieta de consumo',
        route: '/products/sugarfree'
        },
        {id: 2, 
        name: 'Masa saludable', 
        description: 'Tortas hechas con harinas saludables, se recomienda su consumo: para garantizar la estabilidad de su sistema digestivo e inmunitario, evitar la celiaquía y desórdenes gastrointestinales que afecten su bienestar',
        route: '/products/healthydough'
        },
        {id: 3, 
        name: 'Orgánico', 
        description: 'Tortas hechas con productos de origen natural y sin químicos tanto en la siembra como en la elaboración de los productos, se recomienda su consumo: Para garantizar una dieta rica en altos nutrientes naturales y sin derivados químicos que a largo tiempo pueden generar enfermedades',
        route: '/products/organic'
        },
    ];

    const [cat] = React.useState(cats);
    
    return(
        <>
            {cat.map(category => (
            <Grid item xs={12} md={4}>
            <Card key={category.id} sx={{ bgcolor: '#ff4e00',	
                        boxShadow: '0',
                        borderRadius: '0',
                        ml: '1rem',
                        mr: '1rem',
                        mt: {
                            md: '3rem',
                            xs: '1rem'
                        } }}   >
                <Link className="l-cat" to={category.route}>        
                    <CardContent>
                        <Typography sx={{ color: '#ffffff',
                                            fontFamily: 'Nunito, sans-serif',
                                            textAlign: 'center',
                                            fontWeight: '700',
                                            mt: '5rem',
                                            ":hover": {
                                                color: '#ff823b'
                                            },
                                            fontSize: {
                                                md: '1.8rem',
                                                xs: '1.2rem'
                                            }}}>
                            {category.name}
                        </Typography>
                    </CardContent>
                </Link>
                <CardActions disableSpacing> 
                    <AddIcon expand={expanded}
                            onClick={click}
                            aria-expanded={expanded}
                            aria-label="more" 
                            sx={{ color: '#ffffff',
                                    fontSize: '1.7rem',
                                    fontWeight: '700',
                                    ":hover": {
                                        color: '#460020'
                                    },
                                    ml: 'auto',
                                    mr: 'auto',
                                    mb: '3rem' }} />
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography sx={{ color: '#ffffff',
                                            textAlign: 'center',
                                            pl: '2rem',
                                            pr: '2rem',
                                            fontFamily: 'Nunito, sans-serif',
                                            fontSize: {
                                                md: '1.2rem',
                                                xs: '1rem'
                                            } }} paragraph>
                            {category.description}
                        </Typography>
                    </CardContent>
                </Collapse>
          </Card>
          </Grid>
         ))}   
        </>
    );
}

export default CardCategory;
