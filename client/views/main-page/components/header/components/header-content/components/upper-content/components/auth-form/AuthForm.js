import React from 'react'

import './auth-form.scss'

class AuthForm extends React.Component {
  render() {
    return (
      <form className="auth-form">
        <span className="auth-form__title">Вход</span>
        <input
          className="auth-form__login-input"
          placeholder="Логин"
        />
        <input
          className="auth-form__password-input"
          placeholder="Пароль"
        />
        <button
          className="auth-form__pupil-login-button"
        >
          Войти как ученик
        </button>
        <button
          className="auth-form__teacher-login-button"
        >
          Войти как учитель
        </button>
        <button
          className="auth-form__change-password-button"
        > 
          Сменить пароль
        </button>
      </form>
    )
  }
}

export default AuthForm