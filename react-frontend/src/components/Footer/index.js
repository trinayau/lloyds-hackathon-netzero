import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
const Footer = () => {
    return ( 
        <Paper sx={{marginTop: 'calc(10% + 60px)', bottom:0, width: '100%',
        position: 'fixed', }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'Montserrat' }}> Contact Us </Typography><MailOutlineIcon fontSize="medium" sx={{marginTop: '4px'}} /> <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'Montserrat' }}> Email </Typography><LocalPhoneIcon /> <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'Montserrat' }}> Phone </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'Montserrat' }}> About Us </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial" sx={{fontFamily: 'Montserrat'}}>
            Copyright © CarbonAltDel 2022. 
          </Typography>
        </Box>
      </Container>
    </Paper>

     );
}
 
export default Footer;
