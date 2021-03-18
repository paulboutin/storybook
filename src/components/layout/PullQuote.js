import React from 'react'
import Eyebrow from '../base/Eyebrow'
import ImageOverlap from '../base/ImageOverlap'
import Button from '../base/Button'
import Slider from '../base/Slider'

const PullQuote = ({ items }) => (
  <section
    className='pull-quote slider-container container'
    data-prev-trigger='.pull-quote-prev-slide'
    data-next-trigger='.pull-quote-next-slide'
    data-pagination='.pull-quote-pagination'
  >
    <Eyebrow>Bank of the West</Eyebrow>
    <h3 className='pull-quote-title text-h2'>From Our Team</h3>

    <div className='pull-quote-outer-wrapper'>
      <ImageOverlap
        images={items.map(item => item.image)}
        position='right'
        color='primary'
        slider={{ axis: 'horizontal' }}
      />

      <div className='pull-quote-middle-wrapper'>
        <i className='icon icon-quote' />

        <div className='pull-quote-inner-wrapper'>
          <Slider axis='horizontal' transitionOpacity>
            {items.map((item, index) => (
              <blockquote key={index}>{item.quote}</blockquote>
            ))}
          </Slider>

          <Slider axis='vertical' transitionOpacity>
            {items.map((item, index) => (
              <div key={index} className='pull-quote-author'>
                <h6 className='pull-quote-author-name'>—{item.author.name}</h6>
                <p className='pull-quote-author-role'>{item.author.role}</p>
              </div>
            ))}
          </Slider>

          <nav className='pull-quote-pagination-container'>
            <Button
              type='tertiary'
              icon='chevron-left'
              className='pull-quote-prev-slide'
            />

            <span className='pull-quote-pagination' />

            <Button
              type='tertiary'
              icon='chevron-right'
              className='pull-quote-next-slide'
            />
          </nav>
        </div>
      </div>
    </div>
  </section>
)

export default PullQuote
