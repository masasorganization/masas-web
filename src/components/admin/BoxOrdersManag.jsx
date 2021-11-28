import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Image from '../../assets/placeholder.png';
import { createTheme } from "@mui/material";

const theme = createTheme({
});

const BoxManagement = ({name, telephone, type, amount}) => {
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

export default BoxManagement;


const box1Style = {
    height: '120px',
    m: '48px',
    mb: '18px',
    mt: '18px', 
    display: 'flex',
    justifyContent: 'space-between',
    border: 1,  
    borderColor: '#666666',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {ml: '0px', mr: '0px'}
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