
import {Routes, Route} from 'react-router-dom';
import {default as Layout} from './layouts';
import { HomePage, LoginPage, AllProductPage, AccountPage, OrderStatusPage, ResultsPage, ShoppingCartPage, SingleProductPage, NotFoundPage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path ="/" element={<HomePage />} />
          <Route path ="/login" element={<LoginPage />} />
          <Route path ="/allproducts" element={<AllProductPage />} />
          <Route path ="/account" element={<AccountPage />} />
          <Route path ="/orderstatus" element={<OrderStatusPage />} />
          
          <Route path ="/results">
            <Route path ="/results" element={<ResultsPage />} />
            <Route path =":productId" element={<SingleProductPage />} />
          </Route>

          <Route path ="/shoppingcart" element={<ShoppingCartPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
