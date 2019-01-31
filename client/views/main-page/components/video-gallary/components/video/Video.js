import React from 'react'
import YoutubeComponent from 'react-youtube'

import './video.scss'

class Video extends React.Component {

  render() { 
    const { youtubeId, id } = this.props
    //<YoutubeComponent videoId={youtubeId} />
    return <div className="video-wrapper"><div><iframe></iframe></div></div>
  }
}

export default Video
