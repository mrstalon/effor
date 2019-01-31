import React from 'react'
import PopupMenu from 'reactjs-popup'

import './auth-bar.scss'

class AuthBar extends React.Component {
  render() {
    const img = require(`../../../../../../../../assets/menu-icon.svg`)

    return (
      <div className="auth-bar">
        <a className="auth-bar__link">Войти</a>
        <a className="auth-bar__link">Регистрация</a>
        <PopupMenu
          trigger={
            <a className="auth-bar__link-mobile">
              <img src={img} />
            </a>
          }
        >
          <div>
            <a>Войти</a>
            <a>Регистрация</a>
          </div>
        </PopupMenu>
      </div>
    )
  }
}

export default AuthBar
