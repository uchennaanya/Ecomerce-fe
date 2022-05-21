
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// import Cart from './pages/Cart';
// import Login from './pages/Login';
import ProductList from './ProductList';
// import Anouncement from './components/Anouncement'
// import styled from 'styled-components';
// import Product from './pages/Product';
// import Register from './pages/Register';
import Home from './Home'


function App() {
  return (

    <Router>
      <Routes>
        <Route>
        <Route index element={<Home />} />
          {/* <Route path='/updatepost/:id' element={<UpdatePost />} /> */}
          {/* <Home index component="/" /> */}
        </Route>
        <Route path="/ProductList" element='{<ProductList />}' />
        {/* <ProductList /> */}
          {/* <Product /> */}
          {/* <Register/> */}
          {/* <Login /> */}
          {/* <Cart /> */}


{/*
          <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RealestateCompany" element={<RealestateCompany />} />
        <Route path="/Agent" element={<Agent />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/BecomeRealtor" element={<BecomeRealtor />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />

        <Route element={<NotFound />} path="*" /> */}
      </Routes>
    </Router>
  );
}

export default App;
