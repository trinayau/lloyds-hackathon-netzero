import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const Supplier = ({supplier, lowestOffset}) => {
    const totalPrice = supplier.price + supplier.offset;
    const twoDecPlace = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    }
     const [quantity, setQuantity] = useState(1);

    // cart function
    const addToCart = () => {
        // send quantity and id to cart through redux
        console.log(quantity, supplier.id);
        // add toast
    }

    const handleLowestOffset = () => {
        if (supplier.offset == lowestOffset) {
            console.log(lowestOffset, 'lowest offset');
            return <span className="offset">{twoDecPlace(supplier.offset)}<EnergySavingsLeafIcon sx={{fontSize: '20px', color:'#52796f'}}/></span>
        } else {
            console.log('not lowest offset', lowestOffset, supplier.offset);
            return <span className="offset">{twoDecPlace(supplier.offset)}</span>
        }

    }

    return (<div className="supplier">
    <div className="supplier-name">{supplier.supplier}</div>
    <div className="product-price">£{twoDecPlace(supplier.price)}</div>
    <div className="offset-price">£{handleLowestOffset()}</div>
    {/* <div className="offset-price">£{twoDecPlace(supplier.offset)}</div> */}
    <div className="total-price">£{twoDecPlace(supplier.total)}</div>
    <div className="add-cart">
        {/* input for number of items */}
        <input type="number" min="1" max="90" value={quantity} onChange={(e) => setQuantity(e.target.value)}className="quantity" style={{textAlign: 'center'}}/>
   </div>
    <div className="add-cart">
    <ShoppingCartIcon onClick={addToCart} sx={{
        ":hover": {
            color: "#52796f",
            cursor: "pointer"
        }
    }}/>
    </div>
</div> );
}
 
export default Supplier;
