import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

function BtnExit() {
    return(
        <div className="btn-exit" position="static">
            <Link to="/">
                <Button variant="contained" sx={{ bgcolor: '#c30500', 
                                color: '#ffffff',
                                boxShadow: '0',
                                mt: '1rem',
                                textTransform: 'none',
                                width: '18rem',
                                fontFamily: 'Noto Sans, sans-serif',
                                fontSize: {
                                    md: '1.1rem',
                                    xs: '1rem'
                                },
                                fontWeight: '700',
                                ":hover": {
                                    bgcolor: '#ff823b' 
                                } }}>Salir</Button>
            </Link>
        </div>
    );
}

export default BtnExit;
