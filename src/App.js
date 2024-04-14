import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Reg from "./pages/Reg";

function App() {
  const [books, setBooks] = useState([]);
  async function loadBooks() {
    const res = await fetch("/api/books/active");
    const obj = await res.json();
    console.log(obj);
    setBooks(obj);
  }
  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <Router>
      <div className="wrapper clear">
        <Header />
        
        <Routes>
          <Route path="/" component={Home} element={<Home books={books} />} />
          <Route path="/auth" component={Auth} element={<Auth />} />
          <Route path="/reg" component={Reg} element={<Reg />} />
          <Route path="/cart" component={Cart} element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;