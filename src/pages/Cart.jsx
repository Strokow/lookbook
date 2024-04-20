import React, { useState, useEffect } from "react";
import MyLoader from "../components/MyLoader";
import CardOfCart from "../components/CardOfCart";
import { useAuth } from '../components/AuthContext';

function Cart() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch(`/api/carts/books/${user?.message}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
        let total = 0;
        data.forEach(book => {
          total += book.price; // предполагая, что у каждой книги есть свойство цены
        });
        setTotalPrice(total);
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



      {!isLoading && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button className="buy-button" onClick={() => {
            // alert(`Total price is ${totalPrice}`);
            window.location.href = 'Ordered'; 
          }}>
            PURCHASE - TOTAL ${totalPrice}
          </button>
        </div>
        
        )}
    </div>
  );
}

export default Cart;