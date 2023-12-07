'use client'

import React from 'react'
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube'

const YouTubePlayer: React.FC<YouTubeProps> = ({ videoId }) => {
  const onReady = (event: YouTubeEvent) => {
    const player = event.target
    player.playVideo()
  }

  const onError = (event: YouTubeEvent) => {
    console.error('YouTube Player Error:', event)
  }

  const opts = {
    height: '100%',
    width: '100%',
  }

  const wrapperStyle: React.CSSProperties = {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 Aspect Ratio
    height: 0,
    overflow: 'hidden',
  }

  const iframeStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }

  return (
    <div style={wrapperStyle}>
      <YouTube videoId={videoId} onReady={onReady} onError={onError} opts={opts} style={iframeStyle} />
    </div>
  )
}

export default YouTubePlayer
