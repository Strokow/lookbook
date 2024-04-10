import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    <div className="wrapper clear">
      <Header />
      <div className="search-container">
        <input className="input-search" type="text" />
        <img
          className="search-icon"
          height={20}
          width={20}
          src="/img/search.png"
          alt="Search"
        />
      </div>
      <div className="content p-40">
        <h1 className="mb-40">Our book range</h1>
        <div className="d-flex flex-wrap justify-between">
          {books.map((book) => (
            <div style={{ marginBottom: "30px" }}>
              <Card book={book} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

