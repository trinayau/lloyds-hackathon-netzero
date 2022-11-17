import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';

const Supplier = ({supplier}) => {
    const totalPrice = supplier.price + supplier.offset;
    const twoDecPlace = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    }
     const [quantity, setQuantity] = useState(1);

    // cart function
    const addToCart = () => {
        // send quantity and id to cart through redux
        console.log(quantity, supplier.productid);
    }

    return (<div className="supplier">
    <div className="supplier-name">{supplier.name}</div>
    <div className="product-price">£{twoDecPlace(supplier.price)}</div>
    <div className="offset-price">£{twoDecPlace(supplier.offset)}</div>
    <div className="total-price">£{twoDecPlace(totalPrice)}</div>
    <div className="add-cart">
        {/* input for number of items */}
        <input type="number" min="1" max="90" value={quantity} onChange={(e) => setQuantity(e.target.value)}className="quantity" style={{textAlign: 'center'}}/>
   </div>
    <div className="add-cart">
    <ShoppingCartIcon onClick={addToCart}/>
    </div>
</div> );
}
 
export default Supplier;
