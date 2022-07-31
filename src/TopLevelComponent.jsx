import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import CartPage from "./pages/cartpage/CartPage";
import { useState } from "react";
function TopLevelComponent() {
  const [itemsInCart, setItemsInCart] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              itemsInCart={itemsInCart}
              setItemsInCart={setItemsInCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              itemsInCart={itemsInCart}
              setItemsInCart={setItemsInCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default TopLevelComponent;
