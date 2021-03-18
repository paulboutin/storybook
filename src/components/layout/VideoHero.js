import React from 'react'
import Button from '../base/Button'

export const defaultTitle = 'The first bank account designed for climate action'
export const defaultText =
  '1% of our net revenue on this account will go to Protect Our Winters, a non-profit partner'

const VideoHero = ({
  video,
  poster,
  title = defaultTitle,
  text = defaultText
}) => (
  <section className='video-hero'>
    <div className='video-hero-wrapper'>
      <video
        className='ratio-16:9'
        src={video}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className='video-hero-overlay' />

      <div className='video-hero-content container'>
        <h2 className='text-h1'>{title}</h2>

        <p
          className='video-hero-text'
          dangerouslySetInnerHTML={{ __html: text }}
        />

        <Button type='secondary' label='Learn more' link />
      </div>
    </div>
  </section>
)

export default VideoHero
