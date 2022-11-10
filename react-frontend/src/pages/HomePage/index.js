import MyVideo from './openingvid.mp4';
import './index.css';

const HomePage = () => {
    return ( 
    <div style={{display:'flex', position: 'relative', flexDirection: 'column'}}>

        <video autostart autoPlay loop muted src={MyVideo} type="video/mp4" class="w-100 h-100 mh-vh"/>
    <div className="content" style={{justifyContent: 'center'}}>
        <h1>Helping Restaurants Go Net Zero</h1>
        <p>Compare and track the carbon footprint of ingredients from all of your suppliers.</p>
        </div>
    </div> );
}
 
export default HomePage;
