import {useParams} from 'react-router-dom';
import { BackButton, SearchBar, Supplier } from '../../components';
import './index.css'
import BrokenImageIcon from '@mui/icons-material/BrokenImage';

const SingleProductPage = ({image, productDesc}) => {
const {productId, productName} = useParams();
console.log(productId, productName);

    return ( <span className="single-product-page">
    <SearchBar Heading="Products"/>
    <BackButton/>
    <div className="single-product-section">
        {/* if image is null */}
        {image!== undefined ? <div className="single-product-img"><img src={image} alt={`${productName}`}/></div> : <BrokenImageIcon sx={{fontSize: '200px'}}/>}
      
        <div className="single-product-info">
            <div className="single-product-name">{productName}</div>
            <div className="singel-product-text">    
                {productDesc==null ? <div className="no-desc">{productName} has yet to be given a description!</div> : <div className="desc">{productDesc}</div>}  
            </div>
        </div>
    </div>
    <div className="supplier-list">
        <Supplier supplier={{name: "First Choice Produce", offset: "0.50", price: "1.99", productid: "1"}}/>
        <Supplier supplier={{name: "YesChef", offset: "0.70", price: "1.99", productid: "2"}}/>
        <Supplier supplier={{name: "Allen Reeder", offset: "1.00", price: "2.00", productid: "3"}}/>
    
    </div>
    </span> );
}
 
export default SingleProductPage;
