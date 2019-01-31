import React from 'react'

import './nav-bar.scss'

import AuthBar from './components/auth-bar'

class NavBar extends React.Component {
  render() {
    const logo = require('../../../../../../assets/logo.png')

    return (
      <nav className="nav-bar">
        <img className="nav-bar__logo" src={logo} />
        <AuthBar />
      </nav>
    )
  }
}

export default NavBar
