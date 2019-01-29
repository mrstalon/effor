import React from 'react'

import './header-content.scss'

import UpperContent from './components/upper-content'
import BottomContent from './components/bottom-content'

import headerBgList from '../../../../../../constants/header-bg-list'

class HeaderContent extends React.Component {
  state = {
    intervalId: null,
    currentBgPosition: 0,
    bgImages: null
  }

  componentDidMount() {
    this.preloadBgImages()
    const intervalId = this.setAnimationInterval()
    this.setState({ intervalId })
  }

  setAnimationInterval = () => {
    return setInterval(() => {
      const { currentBgPosition } = this.state
      let nextBgPosition
      if (currentBgPosition + 1 >= headerBgList.length) {
        nextBgPosition = 0
      } else {
        nextBgPosition = currentBgPosition + 1
      }
      this.setState({
        currentBgPosition: nextBgPosition
      })
    }, 3000)
  }

  componentWillUnmount() {
    const { currentBgPosition } = this.state
    clearInterval(currentBgPosition)
  }

  preloadBgImages = () => {
    Promise.all(headerBgList.map((imgPath) => prefetchImg(imgPath)))
      .then((data) => {
        this.setState({ bgImages: data.map((module) => module.default) })
      })

    function prefetchImg (imgName) {
      return import(/* webpackPrefetch: true */`../../../../../../assets/${imgName}`)
    }
  }

  render() {
    const { bgImages, currentBgPosition } = this.state
    if (!bgImages) {
      return null
    }
    const currentImg = bgImages[currentBgPosition]

    return (
      <div className="header-content">
        <div
          className="header-content__bg-image"
          style={{
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            background: `url(${currentImg}) no-repeat`
          }}
        />
        <div className="content">
          <UpperContent />
          <BottomContent />
        </div>
      </div>
    )
  }
}

export default HeaderContent
