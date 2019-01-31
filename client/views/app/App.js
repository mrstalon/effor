import { hot } from 'react-hot-loader/root'
import React from 'react'

import Router from 'router/Router'

import './app.scss'

class App extends React.Component {
  render() {
    return <Router />
  }
}

export default hot(App)