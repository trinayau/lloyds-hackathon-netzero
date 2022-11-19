import chart from './images/Chart.svg'
import './index.css';
const AccountPage = () => {
    return (
        <div>
    <div class="account-header">
        <div class="hello-user">Hello, Kei</div>
        <div class="carbon-rating">Your carbon ranking: <span>#3 this week</span></div>
    </div>

    <div class="account-info">
        <div class="profile">
            <div class="profile-headers">
                <div class="company-namne">Company Name</div>
                <div class="company-email">Email</div>
                {/* <div class="affiliates">Affiliate</div> */}
            </div>
            <div class="profile-info">
                <div class="company-name-text">Kai Mayfair</div>
                <div class="company-email-text">kei@kaimayfair.com</div>
                {/* <div class="affiliate-text">affiliate link goes here</div> */}
            </div>
        </div>
        <div class="history">
            <div class="history-header">Order History</div>
            <div class="orders-list">
                <div class="orders">
                    <div class="order-id">Order #102</div>
                    <div class="order-id">Order #101</div>
                    <div class="order-id">Order #100</div>
                </div>
                <div class="order-date">
                    <div class="order-date">12/11/2022</div>
                    <div class="order-date">12/10/2022</div>
                    <div class="order-date">12/09/2022</div>
                </div>
            </div>
        </div>
    </div>
    <div class="carbon-history">
        <div class="carbon-history-info">
            <div class="carbon-history-header">Your Carbon History</div>
            <div class="carbon-history-chart"><img src={chart} alt="carbon chart" class="img-fluid"/></div>    
            <div class="certificate">
                <p>You have offset a total of : 1 ton of carbon </p>
                <p>View your certificate <a href="/">HERE</a> to display at your storefront</p>  
            </div>
        </div>
    </div>

    <div class="profile-offset">
        <div class="profile-offset-info">
            <div class="profile-offset-header">Offset Additional carbon</div>
            <div class="profile-offset-amount">
                <label for="donate">Enter offset amount:</label><br/>
                <input type="text" id="donate" name="donate"/> 
                <input type="submit" value="PAY NOW"/>
            </div>
            <div class="offset-info">
                <p>Every £10  can offset an average of 1 tonne  of CO2</p>
                <p>Your funding supports our Global Portfolio VCS certified carbon reduction programmes across the world</p>
            </div>
        </div>
    </div>

   
    </div>

  );
}
 
export default AccountPage;
