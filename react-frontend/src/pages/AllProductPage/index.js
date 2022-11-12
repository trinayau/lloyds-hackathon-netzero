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

const AllProductPage = () => {
  return (
    <div className="productsPage">
      <SearchBar Heading="Products" />

      <section>
        <ProductCard
          Image={Sugar}
          Name="Castor Sugar"
          MinPrice="1.00"
          MinOffset="0.10"
          id="1"
        />
        <ProductCard
          Image={Raspberries}
          Name="Raspberries"
          MinPrice="2.00"
          MinOffset="0.20"
          id="2"
        />
        <ProductCard
          Image={Flour}
          Name="Flour"
          MinPrice="3.00"
          MinOffset="0.30"
          id="3"
        />
        <ProductCard
          Image={Chocolate}
          Name="Chocolate"
          MinPrice="4.00"
          MinOffset="0.40"
          id="4"
        />
        <ProductCard
          Image={Butter}
          Name="Butter"
          MinPrice="5.00"
          MinOffset="0.50"
          id="5"
        />
        <ProductCard
          Image={Orange}
          Name="Orange"
          MinPrice="6.00"
          MinOffset="0.60"
          id="6"
        />
        <ProductCard
          Image={Honey}
          Name="Honey"
          MinPrice="7.00"
          MinOffset="0.70"
          id="7"
        />
        <ProductCard
          Image={Eggs}
          Name="Eggs"
          MinPrice="8.00"
          MinOffset="0.80"
          id="8"
        />
      </section>
    </div>
  );
};

export default AllProductPage;
