import React, { useState } from "react";
import { useAuth } from "../components/AuthContext";

function Reg() {
  const { registration } = useAuth();
  const backendLink = '/api/users/reg/items'; // Место для ссылки на бэкэнд
  const [showModal, setShowModal] = useState(false);

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

  const handleSubmit = async (event) => {
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

        setShowModal(true);        

      } catch (error) {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    registration();
  };

  return (
    <div className="SignInContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <div className="authFormTwo">
        <form id="sign-up-form" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit}>
          <img height={40} weight={40} src="/img/usericon.png" alt="user"></img>
          <p className="notification2">Please register in our store and then you can checkout an order</p>
          <h1 className="mb-40">Sign Up</h1>

          <input className="loginInput" type="text" id="new-login" name="new-login" placeholder="Login" onclick="this.value=''" />
          <input className="passwordInputReg" type="password" id="new-password" name="new-password" placeholder="Password" onclick="this.value=''" />
          <input className="submitButton" type="submit" value="Sign Up" />
        </form>
      </div>
      {/* Модальное окно "Книга не найдена" */}
      {showModal && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div className="modal-dialog" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', borderRadius: '20px' }}>
            <div className="modal-content">
              <div className="modal-header">

                <h5 className="modal-title">You have successfully registered!</h5>
              </div>

              <div className="modal-body">
                <p>To make purchases you need to SIGN IN!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Reg;
