import React from 'react'
import Button from '../base/Button'

const VideoHero = ({ video, poster }) => (
  <div className='video-hero'>
    <div className='video-hero-wrapper'>
      <video src={video} poster={poster} autoPlay loop muted playsInline />
      <div className='video-hero-overlay' />

      <div className='video-hero-content container'>
        <h1>The first bank account designed for climate action</h1>

        <p className='video-hero-text'>
          1% of our net revenue on this account will go to Protect Our Winters,
          a non-profit partner
        </p>

        <Button type='tertiary' label='Learn more' link />
      </div>
    </div>
  </div>
)

export default VideoHero
