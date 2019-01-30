import React from 'react'

import './header-content.scss'

import BackgroundSlider from './components/background-slider'
import UpperContent from './components/upper-content'
import BottomContent from './components/bottom-content'

class HeaderContent extends React.Component {
  render() {
    return (
      <div className="header-content">
        <BackgroundSlider />
        <div className="content">
          <UpperContent />
          <BottomContent />
        </div>
      </div>
    )
  }
}

export default HeaderContent
