import React from 'react'
import cx from 'classnames'

import './nav-bar.css'

class NavBar extends React.Component {

  render() {
    const logo = require('../../../../../../assets/logo.png')

    return (
        <nav className="nav-bar">
          <img className="nav-bar__logo" src={logo} />
          <div className="auth-bar">
            <a>Войти</a>
            <a>Регистрация</a>
          </div>
        </nav>
    )
  }
}

export default NavBar
