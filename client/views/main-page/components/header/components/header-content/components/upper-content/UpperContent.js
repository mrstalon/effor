import React from 'react'

import './upper-content.css'

import Title from './components/title'
import AuthForm from './components/auth-form'

class UpperContent extends React.Component {
  render() {
    return (
      <div className="upper-content">
        <Title />
        <AuthForm />
      </div>
    )
  }
}

export default UpperContent