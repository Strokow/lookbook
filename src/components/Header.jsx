import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';
import { useEffect } from 'react';

function Header() {
  const { user, logout } = useAuth();
  const backendLink = '/api/auth/logout'; // Место для ссылки на бэкэнд
  const { cartData, updateCartData } = useCart();

  const handleLogout = async () => {
    try {
      const response = await fetch(backendLink);

      if (response.ok) {
        console.log('Logout successful');

        logout(); // Вызываем функцию logout из вашего контекста авторизации
        window.location.reload(); // Перезагрузка страницы

      } else {
        alert("Logout failed");
        console.error('Logout failed');

      }
    } catch (error) {
      // Обработка ошибок при выполнении запроса
      console.error('Logout failed', error);
      // Дополнительные действия при ошибке
    }

  }

  useEffect(() => {
    fetch(`/api/carts/${user?.message}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch cart item count');
        }
        return response.json();
        
      })
      .then(data => {
        const newCartData = {
          totalCount: data.totalCount, // Новое количество книг в корзине
          totalPrice: data.totalPrice, // Новая общая стоимость корзины
        };
        updateCartData(newCartData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  },[user])

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="lookBookLogo d-flex align-center">
          <img height={80} weight={80} src="img/lookbooklogo.png" alt="Lookbook Logo" />
        </div>
      </Link>
      <ul className="d-flex justify-center justify-between">
        {user ? (
          <div className="d-flex align-center">
            <li className="userData mr-10">Welcome, {user?.message}!</li>
            <li>
              <button className="logOutButton text-uppercase mr-5" onClick={handleLogout}>Log out</button>
            </li>
            <Link to="cart">
              <li className="d-flex align-center cart-button">
                <img height={30} width={30} src="img/korblogo2.png" alt="Cart" />
                <span style={{ marginLeft: '-10px', marginRight: '15px' }}>          
                  {cartData.totalCount} pcs / {cartData.totalPrice.toFixed(2)} €
                </span>
              </li>
            </Link>
          </div>
        ) : (
          <div className="d-flex justify-between">
            <Link to="/auth">
              <h3 className="SignInHeader text-uppercase login-button" style={{ marginRight: '5px' }}>Sign In</h3>
            </Link>
            <Link to="/reg">
              <h3 className="SignUpHeader text-uppercase signin-button" style={{ marginRight: '5px' }}>Sign Up</h3>
            </Link>
          </div>
        )}
      </ul>
    </header>
  )
}

export default Header;