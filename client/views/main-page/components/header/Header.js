import React from 'react'

import './header.scss'

import NavBar from './components/nav-bar'
import HeaderContent from './components/header-content'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <NavBar />
        <HeaderContent />
      </header>
    )
  }
}

export default Header