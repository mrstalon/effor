import React from 'react'

import './main-page.scss'

import Header from './components/header'
import VideoGallary from './components/video-gallary'

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Header />
        <VideoGallary />
      </div>
    )
  }
}

export default MainPage
