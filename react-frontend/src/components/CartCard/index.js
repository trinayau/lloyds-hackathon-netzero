import { useState, useEffect } from "react";
const CartCard = ({cartItem}) => {
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const [totalPrice, setTotalPrice] = useState(cartItem.price * quantity);
    const [totalOffset, setTotalOffset] = useState(cartItem.offset * quantity);
    const [totalCost, setTotalCost] = useState(totalPrice + totalOffset);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setQuantity(cartItem.quantity);
        setTotalPrice(cartItem.price * quantity);
        setTotalOffset(cartItem.offset * quantity);
        setTotalCost(totalPrice + totalOffset);
    }, [cartItem.quantity]);

    useEffect(() => {
        if(quantity < 0) {
            // delete item from cart
        }
    }, [quantity]);

    const handleQuantityChange = (amount) => {
        const newQuantity = quantity + amount;
        setQuantity(newQuantity);
        setTotalPrice(cartItem.price * newQuantity);
        setTotalOffset(cartItem.offset * newQuantity);
        setTotalCost(totalPrice + totalOffset);
    }

    const minus = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            handleQuantityChange(-1);
        }
    }

    const plus = (e) => {
        e.preventDefault();
        if (quantity > 0) {
            handleQuantityChange(1);
        }
    }



    // const handleEdit = () => {
    //     setIsEditing(!isEditing);
    // }
    

  return (
    <div class="cart-item">
      <div>
        <img class="cart-img" src={`${cartItem.imgUrl}`} alt={`${cartItem.name}`}/>
      </div>
      <div class="cart-info">
        <div class="cart-item-name">{cartItem.name}</div>
        <div class="cart-item-supplier">Supplier: {cartItem.supplier}</div>
        <div class="cart-item-info">
          <div class="cart-item-details">Carbon offset: £{(Math.round(totalOffset * 100) / 100).toFixed(2)}</div>
          <div class="cart-item-details">Price: £{(Math.round(totalPrice * 100) / 100).toFixed(2)}</div>
          <div class="cart-item-details">
            Quantity: <span onClick={minus}>-</span> <span class="quanity box">{quantity}</span> <span onClick={plus}>+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
