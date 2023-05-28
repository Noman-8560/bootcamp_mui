import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./pages/Layouts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Appbar from "./components/mui/Appbar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedItems = cartItems.filter((item) => item.id !== product.id);
    if (updatedItems) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const products = [
    {
      id:"1",
      imgs: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Jacket",
      price:"RS 15000",
      content:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    },
    {
      id:"2",
      imgs: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Watch",
      price:"RS 11000",
      content:
        "From our Legends Collection, the Naga was inspired by water dragon that protects the oceans pearl Wear facing inward to be bestowed with love and abundance or outward for protection.",
    },
    {
      id:"3",
      imgs: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Mobile Accessories",
      price:"RS 13000",
      content:
        "Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design",
    },
    {
      id:"4",
      imgs: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Shoes",
      price:"RS 10000",
      content:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    },
    {
      id:"5",
      imgs: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Laptop Accessories",
      price:"RS 19000",
      content:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests",
    },
  ];

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };
  return (
    <>
      <BrowserRouter>
        <Appbar cartItemCount={getCartItemCount()} />
        <Routes>
          <Route
            path="/"
            element={
              <Layouts products={products} onAddToCart={handleAddToCart} />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/cart"
            element={
              <Cart
                items={cartItems}
                onAdd={handleAddToCart}
                onRemove={handleRemoveFromCart}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
