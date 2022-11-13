import { BackButton, SearchBar } from "../../components";
import './index.css';

const OrderStatusPage = () => {
  return (
    <div className="order-status-wrapper">
    
        <div className="order-status-body">
            <h1>Success!</h1>
            <p>Your order has been placed.</p>
            <p>Order ID: 123456789</p>
            <p>Order Status: Processing</p>
            <p>Order Total: £9.00</p>

            <p>Thank you for shopping with us at CarbonAltDel, Kei!</p>

        </div>
    <BackButton />
    </div>
  );
};

export default OrderStatusPage;
