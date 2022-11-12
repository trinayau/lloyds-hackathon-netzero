import MyVideo from './openingvid.mp4';
import './index.css';
import {Banner} from '../../components';
import Join from './images/join.svg';
import Compare from './images/compare.svg';
import Offset from './images/offset.svg';
import {Button} from '@mui/material';

const HomePage = () => {
    return (
      <div class="d-flex flex-column">
      <Banner MyVideo={MyVideo} buttonText={"Start Your Journey"}/>

    <div className="how-it-works">
        <h1>How It Works</h1>
    </div>
    <div className="main-points">
        <div className="statement">
            <div className="icon"><img src={Join} alt="Join icon"/></div>
            <div className="text">
                <h4>Join us for free</h4>
                Join today for 14-day free trial to start doing your part for the planet
            </div>
        </div>
        <div className="statement">
            <div className="icon"><img src={Compare} alt="Join icon"/></div>
            <div className="text">
                <h4>Compare</h4>
                Purchase from the largest suppliers and compare ingredients on both price and carbon footprint
            </div>
        </div>
        <div className="statement">
            <div className="icon"><img src={Offset} alt="Join icon"/></div>
            <div className="text">
                <h4>Offset</h4>
                Purchase carbon credits to help offset the carbon footprint of your ingredients’ supply chain, helping your business reach net zero
            </div>
        </div>
    </div>

    <div className="about">
        <div className="about-text">
        <h3>Welcome to carbon Alt Delete</h3>
        <ol>
            <li>After joining us you will be able to purchase  all your ingredients from sustainable suppliers and and can make intelligent choices based on each suppliers carbon rating</li>
            <li>We calculate teh carbon footprint of every ingredient from all out auupliers and present it to you a an easy to understad way so you can easily order what you need adn from which supplier easily </li>
            <li>We also offer to help help companies like you to offet your carbon footprint </li>
        </ol>
        </div>
        <div className="register">
        <Button
            variant="contained"
            href="/login"
            sx={{
              backgroundColor: "#354F52",
              my: "5px",
              "&:hover": {
                backgroundColor: "#52796f",
                color: "#ffffff",
                textDecoration: "none",
                transition: "all 0.2s ease-in",
              },
            }}
          >
            Join Us Today
          </Button>
          </div>
    </div>
      </div>
    );
}
 
export default HomePage;
