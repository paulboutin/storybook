import React from 'react'
import Eyebrow from '../base/Eyebrow'
import ImageOverlap from '../base/ImageOverlap'
import Button from '../base/Button'

const PullQuote = ({ items }) => (
  <div className='pull-quote container'>
    <Eyebrow text='Bank of the West' />
    <h2 className='pull-quote-title'>From Our Team</h2>

    <div className='pull-quote-outer-wrapper'>
      <ImageOverlap
        images={[items[0].image]}
        position='right'
        color='primary'
      />

      <div className='pull-quote-middle-wrapper'>
        <i className='icon icon-quote' />

        <div className='pull-quote-inner-wrapper'>
          <blockquote>{items[0].quote}</blockquote>

          <h6 className='pull-quote-author'>—{items[0].author.name}</h6>
          <p className='pull-quote-description'>{items[0].author.role}</p>

          <div className='pull-quote-buttons'>
            <Button type='secondary' icon='chevron-left' />
            <span className='pull-quote-pagination'>1 of 8</span>
            <Button type='secondary' icon='chevron-right' />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PullQuote
