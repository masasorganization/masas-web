import Button from '@mui/material/Button';

function BtnExit() {
    return(
        <div>
            <Button variant="contained" sx={{ bgcolor: '#c30500', 
                            color: '#ffffff',
                            textTransform: 'none',
			                width: '18rem',
			                fontFamily: 'Noto Sans, sans-serif',
			                fontSize: '0.9rem'}}>Salir</Button>
        </div>

    );
}

export default BtnExit;
