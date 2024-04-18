import React, { useState } from "react";
import { useAuth } from "../components/AuthContext";

function Auth() {
  const { login } = useAuth();
  const backendLink = '/api/auth/login'; // Место для ссылки на бэкэнд

  const validateForm = (event) => {
    event.preventDefault();
    const login = event.target.elements["new-login"].value;
    const password = event.target.elements["new-password"].value;

    // Проверка логина
    const loginRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!loginRegex.test(login)) {
      alert("The login must be lowercase and contain the characters required to enter the email.");
      return false;
    }

    // Проверка пароля
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("The password must contain letters of any case and number.");
      return false;
    }

    // Если все проверки пройдены, форма считается валидной
    return true;
  };

  const handleSubmit =  async (event) => {
    if (validateForm(event)) {
      event.preventDefault();
      const name = event.target.elements["new-login"].value;
      const password = event.target.elements["new-password"].value;

      try {
        // Отправка данных на сервер
        const response = await fetch(backendLink, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, password }),
        });

        if (!response.ok) {
          throw new Error('Failed to authorization');
        }

        const data = await response.json();
        login(data);
        
      } catch (error) {
        console.error('Error:', error);
        alert('Authorization failed. Please try again.');
      }
    }
  };

  return (
    <div className="SignInContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
      <div className="authForm">
        <form id="sign-in-form" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} onSubmit={handleSubmit}>
          <img height={40} weight={40} src="/img/usericon.png" alt="user"></img>
          <p className="notification2">Please log in to continue your book shopping</p>

          <h1 className="mb-40">Sign In</h1>
          
          <input className="loginInput" type="text" id="login" name="new-login" placeholder="Login" onclick="this.value=''" />
          <input className="passwordInputReg" type="password" id="password" name="new-password" placeholder="Password" onclick="this.value=''" />
          <input className="submitButton" type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  );
}

export default Auth;
