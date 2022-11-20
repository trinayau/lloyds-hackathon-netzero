import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCardMUI = ({name, id, image, price, offset, isCategory}) => {
    return (
      <Card sx={{ minWidth: '300px', maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         {isCategory ? "Price from" : "Price:"} £{price}
          <br />
          {isCategory ? "Offset carbon from" : "Offset price"}: £{offset}
          </Typography>
        </CardContent>
        <CardActions>
        <a className="compare-link"href={`/products/${id}/${name}`}>Compare</a>
          {/* <div className="add-button" onClick={(e) => e.preventDefault}>
            ADD
          </div> */}
          <Button
            variant="contained"
            href="/cart"
            sx={{
              my: "5px",
              backgroundColor: "#84a98c",
              "&:hover": {
                backgroundColor: "#52796f",
                color: "#ffffff",
                textDecoration: "none",
                transition: "all 0.2s ease-in",
                
              },
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    );
  }

export default ProductCardMUI;
