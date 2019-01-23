import React from 'react'

import './bottom-content.scss'

class BottomContent extends React.Component {
  render() {
    return (
      <div className="bottom-content">
        <span className="bottom-content__item">340 456 учеников</span>
        <span className="bottom-content__item">123 000 учителей </span>
        <span className="bottom-content__item">1230 школ</span>
      </div>
    )
  }
}

export default BottomContent
