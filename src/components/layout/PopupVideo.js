import React from 'react'
import Eyebrow from '../base/Eyebrow'
import Button from '../base/Button'

const PopupVideo = () => (
  <div className='popup-video'>
    <img
      src='https://i.vimeocdn.com/video/936265353.jpg'
      alt='Popup video poster'
      className='popup-video-poster'
    />

    <div className='popup-video-overlay' />

    <div className='popup-video-content'>
      <div className='container'>
        <Eyebrow>Success stories</Eyebrow>
        <h1>A to Z Wineworks</h1>
        <Button type='primary' icon='play' />

        <p className='popup-video-text'>
          Bill and Deb Hatcher came west to follow their dream of being in the
          wine industry. See how Bank of the West has helped to make that
          happen.
        </p>
      </div>
    </div>

    <div className='popup-video-modal'>
      <iframe
        src='https://player.vimeo.com/video/445351154'
        className='popup-video-iframe'
        allow='autoplay; fullscreen'
        allowFullScreen
      />

      <i className='icon icon-close' />
    </div>
  </div>
)

export default PopupVideo
