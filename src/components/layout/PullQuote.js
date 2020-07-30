import React from 'react'
import Eyebrow from '../base/Eyebrow'
import ImageOverlap from '../base/ImageOverlap'

const PullQuote = () => {
  return (
    <div className='pull-quote container'>
      <Eyebrow text='From Bank of the West' />

      <ImageOverlap
        images={['http://via.placeholder.com/640']}
        position='right'
        color='primary'
      />

      <i className='fa fa-quote-left' />

      <blockquote>
        Life isn’t stopping, neither are we. We understand the important role
        that we play in people’s lives, in the community, and in the economy. In
        short: we’re available and open to meet your financial needs.
      </blockquote>

      <h6 className='pull-quote-author'>—Nandita Bakhshi</h6>
      <p>President and CEO at Bank of the West</p>
    </div>
  )
}

export default PullQuote
