import React from 'react'
import Eyebrow from '../base/Eyebrow'
import Button from '../base/Button'

export const defaults = {
  eyebrow: 'Success Stories',
  eyebrowEnable: true,
  src: 'https://player.vimeo.com/video/445351154',
  poster: 'https://i.vimeocdn.com/video/936265353.jpg',
  posterAlt: 'Popup video poster',
  title: 'A to Z Wineworks'
}

const PopupVideo = ({
  src,
  poster,
  posterAlt,
  title,
  eyebrow,
  eyebrowEnable
} = defaults) => (
  <section className='popup-video' data-popup-video-src={src}>
    <img src={poster} alt={posterAlt} className='popup-video-poster' />
    <div className='popup-video-overlay' />

    <div className='popup-video-content'>
      <div className='container'>
        {eyebrowEnable && <Eyebrow>{eyebrow}</Eyebrow>}
        <div className='popup-video-content-wrapper'>
          <Button type='secondary' icon='play' />
          <h2 className='text-h1'>{title}</h2>
        </div>
      </div>
    </div>
  </section>
)

export default PopupVideo
