import {Button} from '@mui/material'; 
import './index.css';

const Banner = ({MyVideo, buttonText}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <video
          autoPlay
          loop
          muted
          src={MyVideo}
          className="video"
          type="video/mp4"
         
        />
        <div className="content" style={{ justifyContent: "center", padding: '20px', textAlign:"center" }}>
          <h1>Helping Restaurants Go Net Zero</h1>
          <p>
            Order ingredients from your suppliers and offset your carbon
            footprint in just one click.
          </p>
          {buttonText !== "" && 
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
            {buttonText}
          </Button>
}
        </div>
      </div>
    </>
  );
};

export default Banner;
