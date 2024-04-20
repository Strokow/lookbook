import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';

function CardOfCart({ book }) {
  const { updateCartData } = useCart();
  const { user } = useAuth();

  const handleClick = async () => {
    const login = user?.message;
    const requestBody = {
      bookId: book.id
    };

    try {
      const response = await fetch(`/api/carts/${login}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Failed to add book to cart');
      }

      // Получение данных о корзине
      const cartResponse = await fetch(`/api/carts/${login}`);
      if (!cartResponse.ok) {
        throw new Error('Failed to fetch cart item count');
      }

      const data = await cartResponse.json();
      const newCartData = {
        totalCount: data.totalCount,
        totalPrice: data.totalPrice,
      };

      // Обновление контекста с новыми данными
      updateCartData(newCartData);
      
      window.location.reload(); // Перезагрузка страницы
    } catch (error) {
      console.error('Error:', error);
    }  
  }

  return (
    <div className="card" >
      <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} height={160} width={123} src={`/api/img/${book.pathimg}`} alt={book.name} />
      <h5>{book.name}, {book.author}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <b>{book.price}€</b>
        </div>
        <button className="button" onClick={handleClick}>
          <img height={25} width={25} src={"/img/greyminus.png"} alt={""} />
        </button>
      </div>
    </div>
  )
}

export default CardOfCart;