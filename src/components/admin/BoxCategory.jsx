import { ThemeProvider, createTheme} from '@mui/system';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Text1Style = styled('p')``;

const theme = createTheme({
  palette: {
    background: {
      principalClaro: '#FF823B',
      secundarioClaro: '#AA3D72',
      azulado: '#05B3B2',
    },
    hover: {
      hoverPrincipalClaro: '#C65306',
      hoverSecundarioClaro: '#770047',
      hoverAzulado: '#00928E',
    },
    text: {
      white: '#FFFFFF',
    },
  },
});

const BoxCategory = ({background, hover, title, paragraph, word}) => {
    return (   
      <div>
            <ThemeProvider theme={theme}>
                <Box sx={{
                    bgcolor: [background],
                    m: '20px',
                    height: '210px',
                    display: 'inline-flex',
                    borderRadius: '14px',
                    [theme.breakpoints.only('md')]: {
                      height: '250px',
                    },
                    [theme.breakpoints.down('md')]: {
                      height: '150px',
                      mt: '10px',
                      mb: '10px',
                    }, 
                    ':hover': {
                      bgcolor: [hover],
                    },
                }}>
                    <div>
                        <Box sx={{ 
                            color: "text.white",
                            textAlign: 'left',
                            letterSpacing: '1.25px',
                            fontSize: '32px', 
                            margin: '1.6rem',
                            fontFamily: 'Noto Sans',
                            fontWeight: 'bold',
                            [theme.breakpoints.down('md')]: {
                              margin: '1.3rem',
                              mb: '0.313rem',
                              mt: '0.938rem',
                            },
                            }}>
                                {[title]}
                        </Box>
                        <Text1Style sx={{ 
                            color: "text.white",
                            textAlign: 'right',
                            letterSpacing: '1.25px',
                            fontSize: '20px', 
                            m: '1.6rem',
                            fontFamily: 'Nunito',
                            [theme.breakpoints.down('md')]: {
                              fontSize: '18px',
                              margin: '1.3rem',
                              mt: '0rem',
                            },
                            }}>
                                {paragraph}{word}
                        </Text1Style>           
                    </div>
                </Box>
            </ThemeProvider>
      </div>
    )
        
}

export default BoxCategory;
