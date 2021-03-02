import React from 'react'
import Button from '../base/Button'
import Image from '../base/Image'
import Slider from '../base/Slider'

const ClosingCTACarousel = ({ headline, items, children }) => {
  return (
    <section
      className='closing-cta-carousel slider-container'
      data-prev-trigger='.carousel-next-slide'
      data-next-trigger='.carousel-prev-slide'
    >
      <div className='closing-cta-carousel-background' />
      <div className='container'>
        <article className='closing-cta-carousel-container'>
          <Slider axis='horizontal' transitionOpacity>
            {items.map((item, index) => (
              <div className='carousel-slide-wrapper' key={index}>
                <Image
                  src={item.image}
                  alt={item.text}
                  ratio='3:4'
                  className='slider-image'
                />
                <div className='carousel-slide-content'>
                  <p className='carousel-card-title text-cta font-display'>
                    {item.title}
                  </p>
                  <p className='carousel-card-text text-h3 font-display'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          <nav className='carousel-pagination-container'>
            <Button
              type='secondary'
              icon='chevron-left'
              className='carousel-prev-slide'
            />

            <Button
              type='secondary'
              icon='chevron-right'
              className='carousel-next-slide'
            />
          </nav>
        </article>
        <div className='closing-cta-carousel-content'>
          <h3
            className='text-center text-h3 font-display'
            dangerouslySetInnerHTML={{ __html: headline }}
          />
          {children}
        </div>
      </div>
    </section>
  )
}

export default ClosingCTACarousel
