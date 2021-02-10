import React from 'react'
import Eyebrow from '../base/Eyebrow'
import Button from '../base/Button'

const PopupVideo = () => (
  <section
    className='popup-video'
    data-popup-video-src='https://player.vimeo.com/video/445351154'
  >
    <img
      src='https://i.vimeocdn.com/video/936265353.jpg'
      alt='Popup video poster'
      className='popup-video-poster'
    />
    <div className='popup-video-overlay' />

    <div className='popup-video-content'>
      <div className='container'>
        <Eyebrow>Success stories</Eyebrow>
        <h2 className='text-h1'>A to Z Wineworks</h2>
        <Button type='primary' icon='play' />

        <p className='popup-video-text'>
          Bill and Deb Hatcher came west to follow their dream of being in the
          wine industry. See how Bank of the West has helped to make that
          happen.
        </p>
      </div>
    </div>
  </section>
)

export default PopupVideo
