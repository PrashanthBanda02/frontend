import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { LoginSignup } from './Pages/LoginSignup';
import { Cart } from './Pages/Cart';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import AdminLoggedIn from './Pages/AdminLoggedIn'
import {AdminLogin} from './Pages/AdminLogin'
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/adminLogin" element={<AdminLogin/>}/>
          <Route path="/adminLoggedIn" element={<AdminLoggedIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
