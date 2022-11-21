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
        <h3>Welcome to Carbon Alt Delete</h3>
        <ol class="text-decoration-none">
            <li>After joining us you will be able to purchase your ingredients from sustainable suppliers and can make intelligent choices based on both the cost of ingredients and the amount needed to make your order net zero.</li>
            <li>We calculate the carbon footprint of every ingredient from all of our suppliers and present it to you in a way that helps make the sustainable choice the easy choice. </li>
            <li>Our carbon credits are purchased from verified projects that are helping to reduce carbon emissions in the world. </li>
        </ol>
        </div>
        <div className="register">
        <Button
            variant="contained"
            href="/account"
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
