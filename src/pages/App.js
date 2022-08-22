
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

import ProductList from './ProductList';
import Register from './Register';
import NotFound from "./NotFound";
import Product from './Product';
import Login from './Login';
import Cart from './Cart';
import Home from './Home'


function App() {

  // const user = true

  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route index element={<Home />} /></Route>
        <Route path="/Products/:category" element={<ProductList />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        {/* { user ? <Navigate to="/" />: <Register/>} */}
        {/* { user ? <Navigate to="/" />: <Login />} */}
    </BrowserRouter>
  );
}

export default App;
