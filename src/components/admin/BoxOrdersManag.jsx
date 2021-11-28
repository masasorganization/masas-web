import { Box } from "@mui/material";
import Image from '../../assets/placeholder.png';
import { createTheme } from "@mui/material";

const theme = createTheme({
});

const BoxOrdersManag = ({name, telephone, type, amount}) => {
    return(
        <div>
            <Box sx={{...box1Style}}>
                <Box sx={{...box2Style}}>
                    <Box sx={{...nameStyle}}>
                        {[name]}
                    </Box>
                    <Box sx={{...telephoneStyle}}>
                        {[telephone]}
                    </Box>     
                    <Box sx={{...typeStyle}}>
                        {[type]}
                    </Box> 
                    <Box sx={{...amountStyle}}>
                        {[amount]}
                    </Box>    
                </Box>
                    <Box className='cards'>
                        <img src= {Image} alt="" />
                    </Box>            
            </Box>
        </div>
    )
}

export default BoxOrdersManag;


const box1Style = {
    height: '120px',
    display: 'flex',
    maxWidth: { xs: 'unset', md: '540px', lg: '600px' },
    justifyContent: 'space-between',
    border: 1,  
    borderColor: '#a0a0a0',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {ml: '0px', mr: '0px'},
    ':hover': {
    borderColor: '#FF4E00'
  }
}

const box2Style = {
    p: '20px 18px',
    [theme.breakpoints.down('md')]: {p: '20px 13px'}
}

const nameStyle = {
    color: '#460020',
    fontFamily: 'Noto Sans',
    fontWeight: 'Bold',
    fontSize: '16px',
    letterSpacing: '1.25px',
    mb: '2px',
}

const telephoneStyle = {
    color: '#000000',
    fontFamily: 'Nunito',
    fontWeight: 300,
    fontSize: '14px',
    letterSpacing: '1.25px',
    mb: '2px',
    mt: '2px',   
}

const typeStyle = {
    color: '#000000',
    fontFamily: 'Nunito',
    fontWeight: 300,
    fontSize: '12px',
    letterSpacing: '1.25px',
    mb: '2px',
    mt: '2px',  
}

const amountStyle = {
    color: '#000000',
    fontFamily: 'Nunito',
    fontWeight: 300,
    fontSize: '11px',
    letterSpacing: '1.25px',
    mt: '2px',  
}
