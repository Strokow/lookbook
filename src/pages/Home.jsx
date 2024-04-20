import React, { useState, useEffect } from "react";
import MyLoader from "../components/MyLoader";
import Card from "../components/Card";
import SearchField from "../components/SearchField";
import { useAuth } from '../components/AuthContext';

function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartData, setCartData] = useState({});
  const { user } = useAuth();

  const updateCart = () => {
    // Здесь выполняется обновление данных о корзине
    // Например, запрос на сервер для получения актуальных данных
    // После получения данных вызываем setCartData() с новыми данными
    fetchData(); // Выполняем запрос на сервер для обновления данных
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/carts/${user?.message}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cart data');
      }
      const data = await response.json();
      setCartData(data); // Обновляем данные о корзине
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

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
  <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0 40px' }}>
    <img className="library" src="/img/library.png" alt="Library pattern" style={{ width: 'calc(100% - 200px)' }}/>
</div>

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
