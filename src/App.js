import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="wrapper clear">
      <Header />
      <div className="search-container">
        <input className="input-search" type="text"/>
        <img className="search-icon" height={20} width={20} src="/img/search.png" alt="Search" />
      </div>
      <div className="content p-40">
        <h1 className="mb-40">Our book range</h1>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />      
        </div>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
