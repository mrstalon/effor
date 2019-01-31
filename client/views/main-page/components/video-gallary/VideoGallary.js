import React from 'react'
import Slider from 'react-slick'

import './video-gallary.scss'

import Video from './components/video'

import videosList from '../../../../constants/videos-list'

class VideoSlider extends React.Component {
  state = {
    videos: videosList
  }

  render() {
    const { videos } = this.state
    const sliderSettings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
    }

    return (
      <section className="video-gallary">
          <h1>Видео про нас!</h1>
          <Slider {...sliderSettings}>
            {videos.map((video, id) => {
              return <Video youtubeId={video.youtubeId} key={id} id={id} />
            })}
          </Slider>
      </section>
    )
  }
}

export default VideoSlider
