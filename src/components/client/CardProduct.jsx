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

function CardProduct() {
    const [expanded, setExpanded] = React.useState(false);
    const click = () => {
        setExpanded(!expanded)
    };

    return(
        <div>
            <Card>
                <CardMedia />
                <CardContent>
                    <Typography h3>
                        Torta Morada de remolacha
                    </Typography>
                    <Typography h3>
                        $10.000
                    </Typography>
                    <div>
                        <div>
                            <Typography paragraph>
                            Un color natural divertido y deliciosas notas de saboragridulce
                            </Typography>
                        </div>
                        <div>

                        </div>
                    </div>
                </CardContent>
                <CardActions disableSpacing>
                    <ExpandMore expand={expanded}
                                    onClick={click}
                                    aria-expanded={expanded}
                                    aria-label="more"  />
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography h3>
                            Ingredientes
                        </Typography>
                        <Typography paragraph> 
                            Remolachas confitadas, jugo de naranja tangelo, huevos de granja, aceite de oliva, aceite de coco,
                            harina de maíz, harina de avena sin gluten, levadura orgánica y sal marina.
                        </Typography>
                        <Button>Añadir</Button>
                    </CardContent>
                </Collapse>
                <Link to="/orders">
                    <Button>Pagar</Button>
                </Link>
            </Card>
        </div>
    );
}

export default CardProduct;
