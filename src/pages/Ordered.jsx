import React from "react";
import {useNavigate } from 'react-router-dom';

function Ordered() {
  const navigate = useNavigate();
  return (
    <div className="wrapper clear">
      <button className="BackToButton ml-40" onClick={() => navigate('/')}>Back to startpage</button>
      <div className="content p-40">
        <h1 className="mb-40" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>Thank you for your purchase!</h1>
        <div className="d-flex flex-wrap justify-between">
          <img className="doneness" weight={150} height={150} src="/img/doneness.png" alt="done"  />
        </div>
        <h2 className="mb-40" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>Your order is being processed by the delivery service.</h2>
      </div>
    </div>
  );
}

export default Ordered;