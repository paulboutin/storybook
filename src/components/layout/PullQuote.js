import React from 'react'
import Eyebrow from '../base/Eyebrow'
import ImageOverlap from '../base/ImageOverlap'
import Button from '../base/Button'

const PullQuote = ({ image }) => (
  <div className='pull-quote container'>
    <Eyebrow text='Our members' />
    <h2 className='pull-quote-title'>Testimonials From Our Team</h2>

    <div className='pull-quote-outer-wrapper'>
      <ImageOverlap images={[image]} position='right' color='primary' />

      <div className='pull-quote-middle-wrapper'>
        <i className='icon icon-help' />

        <div className='pull-quote-inner-wrapper'>
          <blockquote>
            Life isn’t stopping, neither are we. We understand the important
            role that we play in people’s lives.
          </blockquote>

          <h6 className='pull-quote-author'>—Nandita Bakhshi</h6>
          <p className='pull-quote-description'>
            President and CEO at Bank of the West
          </p>

          <div className='pull-quote-buttons'>
            <Button type='secondary' icon='left' />
            <span className='pull-quote-pagination'>1 of 8</span>
            <Button type='secondary' icon='right' />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PullQuote
