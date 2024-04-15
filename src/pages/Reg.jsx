import React, { useState } from "react";

function Reg() {
  const [backendLink, setBackendLink] = useState(null); // Место для ссылки на бэкэнд

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

  const handleSubmit = (event) => {
    if (validateForm(event)) {
      // Если форма валидна, отправляем данные на сервер
      // setBackendLink(...); // Здесь будет ваша ссылка на бэкэнд
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