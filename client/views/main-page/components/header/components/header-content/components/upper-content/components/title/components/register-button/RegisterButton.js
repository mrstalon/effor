import React from 'react'

class RegisterButton extends React.Component {
  render() {
    const { parentBlock } = this.props
    return <button className={`${parentBlock}__register-button`}>Регистрация</button>
  }
}

export default RegisterButton
