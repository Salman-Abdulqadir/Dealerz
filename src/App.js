import React from "react";

//import touter
import { Routes, Route } from "react-router-dom";

//COMPONENTS
import Nav from "./components/Nav";

//Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Gallery from "./pages/Gallery";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart"

//STYLING
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/detail" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
