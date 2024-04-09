import React from 'react';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img height={80} weight={80} src="img/lookbooklogo.png" alt="Lookbook Logo" />
        </div>
        <ul className="d-flex justify-center">
          <div className="d-flex justify-between">
          <h3 className="text-uppercase login-button" style={{ marginRight: '5px' }}>Log In</h3>
          <h3 className="text-uppercase signin-button" style={{ marginRight: '5px' }}>Sign In</h3>
          </div>

          <div className="d-flex mr-30 align-center justify-between justify-between">
            <li className="d-flex align-center cart-button">
              <img height={30} weight={30} src="img/korblogo2.png" alt="Cart" />
              <span style={{marginLeft: '-10px', marginRight: '15px' }}>
                19€
              </span>
            </li>
            <li className="profile-button">
              <img height={30} weight={30} src="img/usericon.png" alt="Profile" />
            </li>
          </div>
        </ul>
      </header>
      <div className="search-container">
    <input className="input-search" type="text"/>
    <img className="search-icon" height={20} weight={20} src="/img/search.png" alt="Search" />
</div>
      <div className="content p-40">
      


        <h1 className="mb-40">Our book range</h1>
        <div className="card">
          <img height={150} weight={150} src="/img/crime.jpg" alt="Crime and Punishment"/>
          <h5>«Crime and punishment» Fyodor Dostoevsky</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <b>19€</b>
          </div>
          <button className="button">
            <img height={20} weight={20} src="/img/greyplus.png" alt="Add"/>
          </button>
          </div>

        </div>
      </div>
      <footer className="footer p-40 justify-center">
        <p>Titmannstraße 44 01309 Dresden Germany</p>
        <p>lookbook@examplemail.com</p>
        <p className="mb-25">Tel.01722223340</p>
        
        <a className="facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img className="mr-10" height={30} weight={30} src="img/fb.png" alt="Facebook" />
        </a>
        
        
        <a className="whatsapp" href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
        <img className="mr-10" height={30} weight={30} src="img/wp.png" alt="WhatsApp" />
       </a>
        
    
       <a className="instagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img className="mr-10" height={30} weight={30} src="img/ig.png" alt="Instagram" />
       </a>
    
        
      </footer>
    </div>
  );
}

export default App;