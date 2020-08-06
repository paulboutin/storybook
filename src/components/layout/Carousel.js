import React from 'react'
import Button from '../base/Button'
import Image from '../base/Image'
import Eyebrow from '../base/Eyebrow'
import Link from '../base/Link'

const Carousel = () => (
  <div className='carousel'>
    <div className='carousel-wrapper'>
      <div className='carousel-card'>
        <Image
          src='http://via.placeholder.com/640/eee'
          alt='Carousel image'
          ratio='16:9'
          className='carousel-image'
        />

        <div className='carousel-card-content'>
          <Eyebrow text='Recommended' />
          <h2>Investment Services</h2>

          <p className='carousel-card-text'>
            Investing doesn’t have to be so complicated. Start on your own
            terms.
          </p>

          <Link standalone>Learn more</Link>

          <div className='carousel-pagination-container'>
            <Button
              type='ghost'
              icon='chevron-left'
              className='carousel-prev-slide'
            />

            <span className='carousel-pagination'>1 of 8</span>

            <Button
              type='ghost'
              icon='chevron-right'
              className='carousel-next-slide'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Carousel
