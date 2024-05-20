import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import {
  HomePage,
  Nagivation,
  Footer,
  HeadPhones,
  Speakers,
  EarPhones,
  ProductDetail,
  Checkout,
  Thankyou,
} from './components/'

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