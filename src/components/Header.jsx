import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Header() {
  const { user, logout } = useAuth();
  const backendLink = '/api/auth/logout'; // Место для ссылки на бэкэнд

  const handleLogout = async () => {
    try {
      const response = await fetch(backendLink);

      if (response.ok) {
        alert("Logout successful");
        console.log('Logout successful');

        logout(); // Вызываем функцию logout из вашего контекста авторизации
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

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="lookBookLogo d-flex align-center">
          <img height={80} weight={80} src="img/lookbooklogo.png" alt="Lookbook Logo" />
        </div>
      </Link>
      <ul className="d-flex justify-center">
        {user ? (
          <>
            <li>Welcome, {user.userData.message}!</li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
            <div className="d-flex mr-30 align-center justify-between justify-between">
              <Link to="cart">
                <li className="d-flex align-center cart-button">
                  <img height={30} width={30} src="img/korblogo2.png" alt="Cart" />
                  <span style={{ marginLeft: '-10px', marginRight: '15px' }}>
                    19€
                  </span>
                </li>
              </Link>
            </div>

          </>

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