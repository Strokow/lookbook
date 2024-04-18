import React, { useState } from 'react';
import { useAuth } from './AuthContext';

function Card({ book, updateCart }) {
  const [isAdded, setIsAdded] = useState(false);
  const { user } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(user !== null);

  const handleClick = () => {
    setIsAdded(!isAdded);
    const login = user?.message;
    const requestBody = {
      bookId: book.id
    };
    fetch(`/api/carts/${login}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add book to cart');
        }
        // Обновляем данные о количестве книг и общей стоимости корзины
        updateCart();
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  return (
    <div className="card" >
      <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} height={160} width={123} src={`/api/img/${book.pathimg}`} alt={book.name} />
      <h5>{book.name}, {book.author}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <b>{book.price}€</b>
        </div>
        <button className="button" onClick={handleClick} disabled={!isLoggedIn}>
          <img height={25} width={25} src={isAdded ? "/img/doneblack.png" : "/img/greyplus.png"} alt={isAdded ? "Added" : "Add"} />
        </button>
      </div>
    </div>
  )
}

export default Card;