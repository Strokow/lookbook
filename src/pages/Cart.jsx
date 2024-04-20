import React, { useState, useEffect } from "react";
import MyLoader from "../components/MyLoader";
import CardOfCart from "../components/CardOfCart";
import { useAuth } from '../components/AuthContext';

function Cart() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/carts/books/${user?.message}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        let total = 0;
        data.forEach(book => {
          total += book.price; // предполагая, что у каждой книги есть свойство цены
        });
        setTotalPrice(total);

        setBooks(data);

        // Группируем книги по book_id и вычисляем количество каждой книги
        const groupedBooks = data.reduce((acc, currentItem) => {
          if (acc[currentItem.id]) {
            acc[currentItem.id].quantity += 1;
          } else {
            acc[currentItem.id] = {
              id: currentItem.id,
              quantity: 1,
            };
          }
          return acc;
        }, {});

        // Преобразование объекта в массив книг
        const booksArray = Object.values(groupedBooks);
        // Установка полученных данных о книгах в состояние
        setCartItems(booksArray);
        setIsLoading(false);

      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchData();
  }, [user?.message]);

  return <div className="wrapper clear">
    <div className="content p-40">
      <h1 className="mb-40">Books in the cart</h1>

      <div className="d-flex flex-wrap justify-between">
        {cartItems.map(item => {
          const foundBook = books.find(itm => itm.id === item.id);
          return (
            <div style={{ marginBottom: "30px" }} key={item.id}>
              {isLoading ? <MyLoader /> : <CardOfCart book={foundBook} quantity={item.quantity} />}
            </div>
          );
        })}
      </div>

      {!isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button className="buy-button" onClick={() => {
            window.location.href = 'Ordered';
          }}>
            PURCHASE - TOTAL ${totalPrice.toFixed(2)}
          </button>
        </div>

      )}
    </div>
  </div>;
}

export default Cart;