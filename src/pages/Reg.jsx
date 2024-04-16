import React, { useState } from "react";

function Reg() {
  const backendLink = '/api/users/reg/items'; // Место для ссылки на бэкэнд

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
      const psw = event.target.elements["new-password"].value;

      try {
        // Отправка данных на сервер
        const response = await fetch(backendLink, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, psw }),
        });

        if (!response.ok) {
          throw new Error('Failed to register');
        }

        alert('You have successfully registered! To make purchases you need to log in!');
        document.getElementById("new-login").value = "";
        document.getElementById("new-password").value = "";
        
      } catch (error) {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="SignInContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
      <div className="authFormTwo">
        <form id="sign-up-form" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} onSubmit={handleSubmit}>
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
