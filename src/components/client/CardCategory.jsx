import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CardActions from '@mui/material/CardActions';
import React from 'react';

function CardCategory() {
    const [expanded, setExpanded] = React.useState(false);
    const click = () => {
        setExpanded(!expanded)
    };

    return(
        <div>
            <Card sx={{ bgcolor: '#ff4e00',
                        boxShadow: '0',
                        borderRadius: '0',
                        mt: {
                            md: '3rem',
                            xs: '0.1rem'
                        } }}>
                <Link className="l-cat" to="/products">        
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
                                            }}} h1>
                            Sin azúcar
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
                            Tortas que no contienen endulzantes, apto cuando debes
                            cuidar tus niveles de glucosa Lorem ipsum dolor sit 
                            amet consectetur adipisicing elit. Asperiores, quibusdam
                            repellendus porro at vel quam sapiente autem magnam, 
                            mollitia esse aut pariatur nam sed, ipsam dolore enim 
                            soluta dignissimos delectus?
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}

export default CardCategory;
