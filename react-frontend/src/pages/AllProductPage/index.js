import './index.css';
import Butter from './images/butter.svg';
import Chocolate from './images/chocolate.svg';
import Flour from './images/flour.svg';
import Honey from './images/honey.svg';
import Orange from './images/orange.svg';
import Eggs from './images/eggs.svg';
import Raspberries from './images/raspberries.svg';
import Sugar from './images/sugar.svg';
import Search from './images/search.svg';


const AllProductPage = () => {
    return ( <div className="productsPage">

    <div className="search-bar">
        <p className="product-heading">Products</p>
        <div className="search-box">
            <input className="search" type="text" placeholder="Search"/>
            <img className="search-icon" src={Search} alt="search icon"/>
        </div>
    </div>

    <section>
        <div className="product-box">
            <div className="product-img"><img src={Sugar} alt="sugar" /></div>
            <div className="product-info">
                <h4>Castor Sugar</h4>
                Carbon Rating From: A <br/>
                Price from: $1.99
            </div>
            <div className="product-links">
                <a href="">More Info</a>
                <div className="add-button"><a href="/">ADD</a></div>
            </div>
        </div>
        <div className="product-box">
            <div className="product-img"><img src={Raspberries} alt="raspberries" /></div>
            <div className="product-info">
                <h4> Raspberries</h4>
                Carbon Rating From: A <br/>
                Price from: $1.99
            </div>
            <div className="product-links">                
                <a href="">More Info</a>
                <div className="add-button"><a href="/">ADD</a></div>
            </div>
        </div>
        <div className="product-box">
            <div className="product-img"><img src={Flour} alt="flour" /></div>
            <div className="product-info">
                <h4>Plain Flour</h4>
                Carbon Rating From: A <br/>
                Price from: $1.99
            </div>
            <div className="product-links">
                <a href="">More Info</a>
                <div className="add-button"><a href="/">ADD</a></div>
            </div>
        </div>
        <div className="product-box">
            <div className="product-img"><img src={Chocolate} alt="chocolate" /></div>
            <div className="product-info">
                <h4>Chocolate</h4>
                Carbon Rating From: A <br/>
                Price from: $1.99
            </div>
            <div className="product-links">
                <a href="">More Info</a>
                <div className="add-button"><a href="/">ADD</a></div>
                </div>
        </div>
        <div className="product-box">
            <div className="product-img"><img src={Butter} alt="butter" /></div>
            <div className="product-info">
                <h4>Butter</h4>
                Carbon Rating From: A <br/>
                Price from: $1.99
            </div>
            <div className="product-links">
                <a href="">More Info</a>
                <div className="add-button"><a href="/">ADD</a></div>
            </div>
        </div>
        <div className="product-box">
            <div className="product-img"><img src={Orange} alt="orange" /></div>
            <div className="product-info">
                <h4>Oranges</h4>
                Carbon Rating From: A <br/>
                Price from: $1.99
            </div>
            <div className="product-links">
                <a href="">More Info</a>
                <div className="add-button"><a href="/">ADD</a></div>
            </div>
        </div>
        <div className="product-box">
            <div className="product-img"><img src={Eggs} alt="eggs" /></div>
            <div className="product-info">
                <h4>Eggs</h4>
                Carbon Rating From: A <br/>
                Price from: $1.99
            </div>
            <div className="product-links">
                <a href="">More Info</a>
                <div className="add-button"><a href="">ADD</a></div>
            </div>
        </div>
        <div className="product-box">
            <div className="product-img"><img src={Honey} alt="honey" /></div>
            <div className="product-info">
                <h4>Honey</h4>
                Carbon Rating From: A <br/>
                Price from: $1.99
            </div>
            <div className="product-links">
                <a href="">More Info</a>
                <div className="add-button"><a href="">ADD</a></div>
            </div>
        </div>
  

    </section>
    </div> );
}
 
export default AllProductPage;
