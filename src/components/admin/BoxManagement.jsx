import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Image from '../../assets/placeholder.png';
import { createTheme } from "@mui/material";

const theme = createTheme({
});

const BoxManagement = ({title, paragraph}) => {
    return(
        <div>
            <Box sx={{
                bgcolor: '',
                height: '120px',
                m: '48px',
                mb: '18px',
                mt: '18px',
                display: 'flex',
                justifyContent: 'space-between',
                border: 1,  
                borderColor: '#a0a0a0',
                borderRadius: '10px',
                [theme.breakpoints.down('md')]: {ml: '0px', mr: '0px'}
            }}>
                <Box>
                    <Box sx={{
                        color: '#460020',
                        fontFamily: 'Noto Sans',
                        fontWeight: 'Bold',
                        fontSize: '16px',
                        letterSpacing: '1.25px',
                        m: '18px',
                        mb: '0px'
                    }}>
                        {[title]}
                    </Box>
                    <Box sx={{
                        color: '#000000',
                        fontFamily: 'Nunito',
                        fontWeight: 300,
                        fontSize: '14px',
                        letterSpacing: '1.25px',
                        mr: '18px',
                        ml: '18px',
                        mb: '20px'                
                    }}>
                        {[paragraph]}
                    </Box>
                    <Button variant="text" sx={{
                        color: '#AA3D72',
                        fontFamily: 'Noto Sans',
                        fontWeight: 'Bold',
                        fontSize: '14px',
                        letterSpacing: '1.25px',
                        textTransform: 'capitalize',
                        ml: '18px',
                        mr: '18px'
                    }}>Borrar</Button>
                    <Button variant="text" sx={{
                        color: '#05B3B2',
                        fontFamily: 'Noto Sans',
                        fontWeight: 'Bold',
                        fontSize: '14px',
                        letterSpacing: '1.25px',
                        textTransform: 'capitalize'
                    }}>Archivar</Button>        
                </Box>
                    <Box className='cards'>
                        <img src= {Image} alt="" />
                    </Box>            
            </Box>
        </div>
    )
}

export default BoxManagement;
