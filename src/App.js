function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img height={80} weight={80} src="img/lookbooklogo.png" alt="Lookbook Logo" />

        
        
        </div>
        <ul className="d-flex justify-center">
        <div className="d-flex justify-between">
          <h3 className="text-uppercase">Log In</h3>
          <h3 className="text-uppercase">Sign In</h3>
          </div>
         
          <div className="d-flex mr-30 justify-between justify-between">
          <li>
          <img height={30} weight={30} src="img/korblogo2.png" alt="Cart" />
          <span>
            19€
          </span>
          </li>
          <li>
          <img height={30} weight={30} src="img/usericon.png" alt="Profile" />
          </li>
          </div>

        </ul>
      </header>
      <div className="content p-40">
        <h1>All books</h1>
        <p>Here will be some content
          

        </p>
        
      </div>
    </div>
  );
}

export default App;