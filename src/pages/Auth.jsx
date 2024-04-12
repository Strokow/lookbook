import React from "react";

function Auth() {
  return (
    <div className="SignInContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
      <div className="authForm">
        
        
          <form id="sign-in-form" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img height={40} weight={40} src="/img/usericon.png" alt="user"></img>
          <p className="notification2">Please log in to continue your book shopping</p>
      
          <h1 className="mb-40">Sign In</h1>
        
            <input className="loginInput" type="text" id="login" name="new-login" placeholder="Login" onclick="this.value=''" />
          <input className="passwordInputReg" type="password" id="password" name="new-password" placeholder="Password" onclick="this.value=''" />
          <input className="submitButton" type="submit" value="Sign in" />
          </form>
        </div>
    </div>
  );
}

export default Auth;
