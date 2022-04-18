import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
          <Routes>
          <Route exact path="/shop" element={<Shop/>}/>

          <Route exact path="/review" element={<Review/>}/>
          <Route exact path="/inventory" element={<Inventory/>}/>
          <Route exact path="/" element={<Shop/>}/>
          <Route exact path="/product/:productKey" element={<ProductDetails/>}/>
          <Route exact path="*" element={<NotFound/>}/>
          </Routes>
      </Router>
      
      {/* <Shop></Shop> */}
      {/* <Review></Review> */}
      {/* <Inventory></Inventory> */}
      
      
    </div>
  );
}

export default App;
