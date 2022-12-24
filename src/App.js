import React from "react";
import {BrowserRouter as Router,Navigate,Route,Routes} from 'react-router-dom';
import MasterLayout from "./layouts/admin/MasterLayout";
import Profile from './components/admin/Profile';
import Category from './components/admin/Category/Category';
import ViewCategory from './components/admin/Category/ViewCategory';
import AddProduct from './components/admin/Product/AddProduct';
import ViewProduct from './components/admin/Product/ViewProduct';
import EditProduct from './components/admin/Product/EditProduct';
import EditCategory from './components/admin/Category/EditCategory';
import Order from './components/admin/Order/Order';
import Dashboard from './components/admin/Dashboard';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Contact from './components/frontend/Contact';
import Cart from './components/frontend/Cart';
import Checkout from './components/frontend/Checkout';
import Thankyou from './components/frontend/Thankyou';
import ViewCategoryPublic from './components/frontend/Collections/ViewCategory';
import ViewProductPublic from './components/frontend/Collections/ViewProduct';
import ProductDetail from './components/frontend/Collections/ProductDetail';
import Page403 from './components/errors/Page403';
import Page404 from './components/errors/Page404';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import AdminPrivateRoute from './AdminPrivateRoute'; 


import axios from 'axios';
import PublicRoute from "./PublicRoute";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.interceptors.request.use(function (config){

  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {

  return (
    <div className="App">
    <Router>
    
      <Routes>
        {/* <Route path = "/admin" name="Admin" element ={<MasterLayout/>} /> */}
        <Route path="/admin/*" name = "Admin" element={<AdminPrivateRoute Cmp={MasterLayout}/>} />
      
        {/* <Route path = "/admin" name="Admin" element= {(props)=><MasterLayout {...props}/>} /> */}
        <Route  path = "/" element ={<Home/>} />
        <Route  path = "/about" element ={<About/>} />
        <Route  path = "/contact" element ={<Contact/>} />
        {/* <PublicRoute path="/" name="Home" element ={<Home/>}/> */}
        <Route  path = "/403" element ={<Page403/>} />
        <Route  path = "/404" element ={<Page404/>} />
        <Route  path = "/login" element ={<Login/>} />
        <Route  path = "/register" element ={<Register/>} />
        
      
        <Route exact path = "/admin/dashboard" element ={<Dashboard/>} />
        <Route exact path = "/admin/profile" element ={<Profile/>} />
        <Route exact path = "/admin/add-category" element ={<Category/>} />
        <Route exact path = "/admin/view-category" element ={<ViewCategory/>} />
        <Route exact path = "/admin/edit-category/:id" element ={<EditCategory/>} />
        <Route exact path = "/admin/add-product" element ={<AddProduct/>} />
        <Route exact path = "/admin/view-product" element ={<ViewProduct/>} />
        <Route exact path = "/edit-product/:id" element ={<EditProduct/>} />
        <Route path = "/collections/*" name="ViewCategoryPublic" element ={<ViewCategoryPublic/>} />
        <Route path = "/collections/:slug" name="ViewProductPublic" element ={<ViewProductPublic/>} />
        <Route path = "/collections/:category/:products" name="ProductDetail" element ={<ProductDetail/>} />
        <Route path = "/cart" name="Cart" element ={<Cart/>} />
        <Route path = "/checkout" name="Checkout" element ={<Checkout/>} />
        <Route path = "/thank-you" name="thank-you" element ={<Thankyou/>} />
        
        <Route path = "/admin/orders" name="Order" element ={<Order/>} />
        
  



       </Routes>
    </Router>
    </div>
  );
}

export default App;
