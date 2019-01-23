import React from 'react'

import './header-content.css'

import UpperContent from './components/upper-content'
import BottomContent from './components/bottom-content'

class HeaderContent extends React.Component {
  render() {
    return (
      <div className="header-content">
        <div>
          <UpperContent />
          <BottomContent />
        </div>
      </div>
    )
  }
}

export default HeaderContent
