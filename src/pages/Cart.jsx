import React, { useState, useEffect } from "react";
import MyLoader from "../components/MyLoader";
import CardOfCart from "../components/CardOfCart";
import { useAuth } from '../components/AuthContext';
import {useNavigate } from 'react-router-dom';

function Cart() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

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
    <button className="BackToButton ml-40" onClick={() => navigate('/')}>Back to startpage</button>
    <div className="content p-40">
    <h1 className="mb-40">{cartItems.length > 0 ? 'Books in the cart' : 'Cart is empty'}</h1>

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

      {/* {!isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button className="buy-button" onClick={() => {
            window.location.href = 'Ordered';
          }}>
            PURCHASE - TOTAL € {totalPrice.toFixed(2)}
          </button>
        </div>

      )} */}

      {!isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button className="buy-button" onClick={() => {
            // Выполнение запроса DELETE
            fetch(`/api/carts/clear/${user?.message}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                // Дополнительные заголовки
              },
              // Тело запроса
            })
              .then(response => {
                if (response.ok) {
                  // Обработка успешного ответа
                  console.log('Order successfully deleted');
                  // Перенаправление на страницу Ordered
                  window.location.href = 'Ordered';
                } else {
                  // Обработка ошибки
                  console.error('Failed to delete order');
                }
              })
              .catch(error => {
                // Обработка ошибок сети или других ошибок
                console.error('Error deleting order:', error);
              });
          }}>
            PURCHASE - TOTAL € {totalPrice.toFixed(2)}
          </button>
        </div>
      )}

    </div>
  </div>;
}

export default Cart;