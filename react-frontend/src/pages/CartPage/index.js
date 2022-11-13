import { SearchBar, BackButton, CartCard } from "../../components";
import Button from '@mui/material/Button';
import "./index.css";
const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Castor Sugar",
      supplier: "First Choice Produce",
      price: 1.99,
      offset: 0.5,
      quantity: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1610219171722-87b3f4170557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    },
    {
      id: 2,
      name: "Honey",
      supplier: "Allen Reeder",
      price: 5.99,
      offset: 0.7,
      quantity: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1555211652-5c6222f971bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
//   return (
//     <div class="cart-page">
//       <div class="cart-page-header">
//         <BackButton />
//         <SearchBar Heading="Cart" />
//       </div>
//       <div class="cart-page-body">
//         {cartItems.map((cartItem) => (
//           <CartCard cartItem={cartItem} />
//         ))}
//       </div>
//       <div class="cart-page-footer">
//         <div class="cart-page-footer-total">
//           <div class="cart-page-footer-total-text">Total</div>
//           <div class="cart-page-footer-total-price">£0.00</div>
//         </div>
//         <div class="cart-page-footer-checkout">
//           <button class="cart-page-footer-checkout-button">Checkout</button>
//         </div>
//       </div>
//     </div>
//   );

  return (
    <>
      <SearchBar Heading="Your Shopping Cart" />
      <BackButton />
      <div class="cart">
        {cartItems.map((cartItem) => (
          <CartCard cartItem={cartItem} />
        ))}
      </div>
      <div class="cart-page-footer">
        <div class="cart-page-footer-total">
          <div class="cart-page-footer-total-text">Total</div>
          <div class="cart-page-footer-total-price">£0.00</div>
        </div>
        <div class="cart-page-footer-checkout">
        <Button variant="contained" href="/orderstatus"sx={{backgroundColor:'#354F52', my:'5px'}}>Checkout</Button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
