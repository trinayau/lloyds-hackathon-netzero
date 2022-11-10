import MyVideo from './openingvid.mp4';
import './index.css';
import {Button} from '@mui/material'; 

const HomePage = () => {
    return ( 
    <div style={{display:'flex', position: 'relative', flexDirection: 'column'}}>

        <video autostart autoPlay loop muted src={MyVideo} type="video/mp4" class="w-100 h-100 mh-vh"/>
    <div className="content" style={{justifyContent: 'center'}}>
        <h1>Helping Restaurants Go Net Zero</h1>
        <p>Order ingredients from your suppliers and offset your carbon footprint in just one click.</p>
        <Button variant="contained" href="/"sx={{backgroundColor:'#354F52', my:'5px'}}>Join Today</Button>

        </div>
    </div> );
}
 
export default HomePage;
