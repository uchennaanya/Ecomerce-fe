
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// import Cart from './Cart';
// import Login from './Login';
import ProductList from './ProductList';
import Product from './Product';
import Register from './Register';
import NotFound from "./NotFound";
import Home from './Home'
// import Products from "../components/Products";


function App() {
  // const user = true
  return (
    <Router>
      <Routes>
        <Route>
        <Route index element={<Home />} /></Route>
        <Route path="/Products/:category" element={<ProductList />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Register" element={<Register />} />
        {/* <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* { user ? <Navigate to="/" />: <Login/>}
      { user ? <Navigate to="/" />: <Register/>} */}
    </Router>
  );
}

export default App;
