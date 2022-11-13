import {SearchBar, BackButton, CartCard} from '../../components';
import './index.css';
const CartPage = () => {
    return ( <>
    <SearchBar Heading="Your Shopping Cart"/>
    <BackButton/>
    <div class="cart">
        {/* CartCard with cartItem */}
        <CartCard cartItem={{name: "Castor Sugar", supplier: "First Choice Produce", offset: 0.50, price: 1.99, quantity: 1, imgUrl: "https://images.unsplash.com/photo-1610219171722-87b3f4170557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"}}/> 
        <CartCard cartItem={{name: "Honey", supplier: "Allen Reeder", offset: 0.70, price: 5.99, quantity: 1, imgUrl: "https://images.unsplash.com/photo-1555211652-5c6222f971bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}/> 
        
    </div>
    </> );
}
 
export default CartPage;
