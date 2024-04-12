import React from "react";

function Reg() {
  return (
    <div className="SignInContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
      <div className="authFormTwo">
        <form id="sign-up-form" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <img height={40} weight={40} src="/img/usericon.png" alt="user"></img>
        <p className="notification2">Please register in our store and then you can checkout an order</p>
          <h1 className="mb-40">Sign Up</h1>
          
          <input className="loginInput" type="text" id="new-login" name="new-login" placeholder="Login" onclick="this.value=''" />
          <input className="passwordInputReg" type="password" id="new-password" name="new-password" placeholder="Password" onclick="this.value=''" />
          <input className="submitButton" type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default Reg;
