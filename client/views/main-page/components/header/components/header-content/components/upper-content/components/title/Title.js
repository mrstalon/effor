import React from 'react'

import './title.scss'

import RegisterButton from './components/register-button'


class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <h1 className="title__text">EFFOR.BY – цифровая учебно-соревновательная платформа для школы и семьи</h1>
        <RegisterButton parentBlock={'title'}/>
      </div>
    )
  }
}

export default Title
