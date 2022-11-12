import "./index.css";

const ProductCard = ({ Image, Name, MinPrice, MinOffset, id }) => {
  return (
    <>
      <div className="product-box">
        <div className="product-img">
          <img src={Image} alt="sugar" />
        </div>
        <div className="product-info">
          <h4>{Name}</h4>
          Price from: £{MinPrice}
          <br />
          Offset carbon from: £{MinOffset}
        </div>
        <div className="product-links">
          <a href={`/products/${id}`}>More Info</a>
          <div className="add-button" onClick={(e) => e.preventDefault}>
            ADD
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
