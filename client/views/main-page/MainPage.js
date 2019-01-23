import React from 'react'

import './main-page.css'

import Header from './components/header'


class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Header/>
      </div>
    )
  }
}

export default MainPage