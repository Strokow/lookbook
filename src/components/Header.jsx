function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img height={80} weight={80} src="img/lookbooklogo.png" alt="Lookbook Logo" />
        </div>
        <ul className="d-flex justify-center">
          <div className="d-flex justify-between">
            <h3 className="text-uppercase login-button" style={{ marginRight: '5px' }}>Sign In</h3>
            <h3 className="text-uppercase signin-button" style={{ marginRight: '5px' }}>Sign Up</h3>
          </div>

          <div className="d-flex mr-30 align-center justify-between justify-between">
            <li className="d-flex align-center cart-button">
              <img height={30} width={30} src="img/korblogo2.png" alt="Cart" />
              <span style={{marginLeft: '-10px', marginRight: '15px' }}>
                19€
              </span>
            </li>
            <li className="profile-button">
              {/* <img height={30} width={30} src="img/usericon.png" alt="Profile" /> */}
            </li>
          </div>
        </ul>
      </header>
    )
}

export default Header;