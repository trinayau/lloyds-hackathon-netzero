import "./index.css";
import { ProductCard, SearchBar } from "../../components";
import Butter from "./images/butter.svg";
import Chocolate from "./images/chocolate.svg";
import Flour from "./images/flour.svg";
import Honey from "./images/honey.svg";
import Orange from "./images/orange.svg";
import Eggs from "./images/eggs.svg";
import Raspberries from "./images/raspberries.svg";
import Sugar from "./images/sugar.svg";

import axios from 'axios';
import { useEffect, useState } from 'react';

const AllProductPage = () => {

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() =>{ 
    async function searchApi() {
        try{
            const result = await axios.get(`https://lloyds-hackathon-server.vercel.app/api/v1/latest-products/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
            }
        });
            setLatestProducts(result.data);
        }catch(err){
            console.error(err)
        }
    }
    searchApi();
    }, [])
  
  return (
    <div className="productsPage">

      {/* latest products */}
      <section className="search-bar">
          <p className="product-heading">Latest Products</p>
      </section>
      <section className="latest-products">
        {latestProducts!== [] && latestProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={Butter}
              id={product.id}
              name={product.name}
              price={product.price}
              offset={product.offset}
              supplier={product.supplier}
              supplierImage={product.supplierImage}
            />
          );
        })}



      </section>
      <SearchBar Heading="Products" />

      <section>
        <ProductCard
          image={Sugar}
          name="Castor Sugar"
          price="1.00"
          offset="0.10"
          id="1"
        />
        <ProductCard
          image={Raspberries}
          name="Raspberries"
          price="2.00"
          offset="0.20"
          id="2"
        />
        <ProductCard
          image={Flour}
          name="Flour"
          price="3.00"
          offset="0.30"
          id="3"
        />
        <ProductCard
          image={Chocolate}
          name="Chocolate"
          price="4.00"
          offset="0.40"
          id="4"
        />
        <ProductCard
          image={Butter}
          name="Butter"
          price="5.00"
          offset="0.50"
          id="5"
        />
        <ProductCard
          image={Orange}
          name="Orange"
          price="6.00"
          offset="0.60"
          id="6"
        />
        <ProductCard
          image={Honey}
          name="Honey"
          price="7.00"
          offset="0.70"
          id="7"
        />
        <ProductCard
          image={Eggs}
          name="Eggs"
          price="8.00"
          offset="0.80"
          id="8"
        />
      </section>
    </div>
  );
};

export default AllProductPage;
