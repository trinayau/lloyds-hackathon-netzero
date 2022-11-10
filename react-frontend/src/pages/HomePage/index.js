import MyVideo from './openingvid.mp4';

const HomePage = () => {
    return ( <>
    <video autostart autoPlay loop muted src={MyVideo} type="video/mp4" class="w-100 h-100 mh-vh"/>
    </> );
}
 
export default HomePage;
