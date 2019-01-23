import React from 'react'

import './header-content.scss'

import UpperContent from './components/upper-content'
import BottomContent from './components/bottom-content'

import headerBgList from '../../../../../../constants/header-bg-list'

class HeaderContent extends React.Component {
  state = {
    intervalId: null,
    currentBgPosition: 0
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      const { currentBgPosition } = this.state
      let nextBgPosition
      if (currentBgPosition + 1 >= headerBgList.length) {
        nextBgPosition = 0
      } else {
        nextBgPosition = currentBgPosition + 1
      }
      this.changeHeaderBg(nextBgPosition)
      this.setState({
        currentBgPosition: nextBgPosition
      })
    }, 3000)
    this.setState({ intervalId })
  }

  componentWillUnmount() {
    const { currentBgPosition } = this.state
    clearInterval(currentBgPosition)
  }

  changeHeaderBg = (nextBgPosition) => {
    const bgName = headerBgList[nextBgPosition]
    const newBgImg = require(`../../../../../../assets/${bgName}`)
    const header = document.querySelector('.header-content__bg-image')
    header.style.background = `url(${newBgImg}) no-repeat`
    header.style.backgroundSize = 'cover';
    header.style.backgroundPosition = 'center center';
  }

  render() {
    return (
      <div className="header-content">
        <div className="header-content__bg-image"></div>
        <div className="content">
          <UpperContent />
          <BottomContent />
        </div>
      </div>
    )
  }
}

export default HeaderContent
