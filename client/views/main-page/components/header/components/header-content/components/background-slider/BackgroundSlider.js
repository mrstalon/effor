import React from 'react'
import cx from 'classnames'

import './background-slider.scss'

import headerBgList from '../../../../../../../../constants/header-bg-list'


class BackgroundSlider extends React.Component {
  state = {
    intervalId: null,
    bgImages: null,
    currentBgPosition: 0
  }

  componentDidMount() {
    this.preloadImgsPath()
    const intervalId = this.setAnimationInterval()
    this.setState({ intervalId })
  }

  setAnimationInterval = () => {
    const slide = () => {
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
    }

    return setInterval(slide, 3000)
  }

  componentWillUnmount() {
    const { currentBgPosition } = this.state
    clearInterval(currentBgPosition)
  }

  preloadImgsPath = () => {
    const bgImages = headerBgList.map((imgName) => require(`../../../../../../../../assets/${imgName}`))
    this.setState({ bgImages })
  }

  render() { 
    const { bgImages, currentBgPosition } = this.state

    if (!bgImages) {
      return null
    }

    return (
      <React.Fragment>
        {bgImages.map((imgPath, id) => {
          const isCurrent = currentBgPosition === id
          return (
            <div
              key={id}
              className={cx('header-content__bg-image', { 'active': isCurrent, 'out': !isCurrent  })}
              style={{
                background: `url(${imgPath}) no-repeat`
              }}
            />
          )
        })}
      </React.Fragment>
    )
  }
}

export default BackgroundSlider
