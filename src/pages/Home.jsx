import React, { useState, useEffect } from "react";
import MyLoader from "../components/MyLoader";
import Card from "../components/Card";
import SearchField from "../components/SearchField";

function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/books/active")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="content p-40">
      <SearchField />
      <h1 className="mb-40">Our book range</h1>
      <div className="d-flex flex-wrap justify-between">
        { books.map((book) => (
          <div style={{ marginBottom: "30px" }} key={book.id}>
              {isLoading ? <MyLoader /> : <Card book={book} updateCart={updateCart} /> }
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
