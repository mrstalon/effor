import React from 'react'

import './main-page.scss'

import Header from './components/header'
import VideoSlider from './components/video-slider'

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Header />
        <VideoSlider />
      </div>
    )
  }
}

export default MainPage
