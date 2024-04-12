import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
          <Link to="/">
        <div className="lookBookLogo d-flex align-center">
          <img height={80} weight={80} src="img/lookbooklogo.png" alt="Lookbook Logo" />
        </div>
        </Link>
        <ul className="d-flex justify-center">
          <div className="d-flex justify-between">
            <Link to="/auth">
              <h3 className="SignInHeader text-uppercase login-button" style={{ marginRight: '5px' }}>Sign In</h3>
            </Link>
            <Link to="/reg">
            <h3 className="SignUpHeader text-uppercase signin-button" style={{ marginRight: '5px' }}>Sign Up</h3>
            </Link>
          </div>
          

          <div className="d-flex mr-30 align-center justify-between justify-between">
            <Link to="cart">
            <li className="d-flex align-center cart-button">
              <img height={30} width={30} src="img/korblogo2.png" alt="Cart" />
              <span style={{marginLeft: '-10px', marginRight: '15px' }}>
                19€
              </span>
            </li>
            </Link>
          </div>
        </ul>
      </header>
    )
}

export default Header;