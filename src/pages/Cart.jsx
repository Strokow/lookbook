import React, { useState, useEffect } from "react";
import MyLoader from "../components/MyLoader";
import Card from "../components/Card";
import { useAuth } from '../components/AuthContext';

function Cart() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`/api/carts/books/${user?.message}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
      });
  }, []);

  return <div className="wrapper clear">
    <div className="content p-40">
      <h1 className="mb-40">Books in the cart</h1>
      <div className="d-flex flex-wrap justify-between">
        {books.map((book) => (
          <div style={{ marginBottom: "30px" }} key={book.id}>
            {isLoading ? <MyLoader /> : <Card book={book}/>}
          </div>
        ))}
      </div>
    </div>
  </div>;
}

export default Cart;
