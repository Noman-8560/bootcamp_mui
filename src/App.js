import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./pages/Layouts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Appbar from "./components/mui/Appbar";
import Details from "./pages/Details";
import Admins from './pages/Admins';
import AllProducts from './pages/AllProducts'


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        if (response.ok) {
          setProducts(data.products);
        } else {
          console.error("Error fetching products:", data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


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
          <Route path="/details" element={<Details />}></Route>
          <Route path="/admin/addproduct" element={<Admins />}></Route>
          <Route path="/admin/allproduct" element={<AllProducts />}></Route>
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
