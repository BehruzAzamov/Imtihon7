import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage';
import Nagivation from './components/Navigation';
import Footer from './components/Footer';
import HeadPhones from './components/HeadPhones';
import Speakers from './components/Speakers';
import EarPhones from './components/EarPhones';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import Thankyou from './components/Thankyou';

function App() {
  const [product, setProduct] = useState({});
  const [data, setDate] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then(response => response.json())
      .then(value => setDate(value))
  }, [])

  function viewProduct(slug) {
    data.map(item => item.slug == slug && setProduct(item))
  }

  return (
    <Router>
      <div style={{ backgroundColor: "#141414" }}>
        <Nagivation />
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage send={slug => viewProduct(slug)} />} />
        <Route exact path="/headphones" element={<HeadPhones send={slug => viewProduct(slug)} />} />
        <Route exact path="/speakers" element={<Speakers send={slug => viewProduct(slug)} />} />
        <Route exact path="/earphones" element={<EarPhones send={slug => viewProduct(slug)} />} />
        <Route exact path="/prdDetail" element={<ProductDetail product={product} send={slug => viewProduct(slug)} />} />
        <Route exact path="/checkout" element={
          <>
            <Checkout />
            <Thankyou />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
