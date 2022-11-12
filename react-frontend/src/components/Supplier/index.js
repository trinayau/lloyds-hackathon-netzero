const Supplier = ({supplier}) => {
    return (<div className="supplier">
    <div className="supplier-name">{supplier.name}</div>
    <div className="offset-price">Carbon Offset Price: £{supplier.offset}</div>
    <div className="product-price">Price: £{supplier.price}</div>
    <div className="add-cart"><a href={`/addtocart/${supplier.productid}`}>Add to Cart</a></div>
</div> );
}
 
export default Supplier;
