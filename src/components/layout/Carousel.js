import React from 'react'
import Button from '../base/Button'
import Image from '../base/Image'
import Eyebrow from '../base/Eyebrow'
import Link from '../base/Link'
import Slider from '../base/Slider'

const Carousel = ({ items }) => (
  <section
    className='carousel slider-container container'
    data-prev-trigger='.carousel-prev-slide'
    data-next-trigger='.carousel-next-slide'
    data-pagination='.carousel-pagination'
  >
    <div className='carousel-wrapper'>
      <div className='carousel-card'>
        <Slider axis='horizontal' className='carousel-image-slider'>
          {items.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              alt={`Carousel image ${index + 1}`}
              ratio='16:9'
              className='carousel-image'
            />
          ))}
        </Slider>

        <article className='carousel-card-content'>
          <Eyebrow>Recommended</Eyebrow>

          <Slider axis='horizontal' transitionOpacity>
            {items.map((item, index) => (
              <div key={index} className='carousel-slide-content'>
                <h2>{item.title}</h2>
                <p className='carousel-card-text'>{item.text}</p>
                <Link standalone>Learn more</Link>
              </div>
            ))}
          </Slider>

          <nav className='carousel-pagination-container'>
            <Button
              type='ghost'
              icon='chevron-left'
              className='carousel-prev-slide'
            />

            <span className='carousel-pagination' />

            <Button
              type='ghost'
              icon='chevron-right'
              className='carousel-next-slide'
            />
          </nav>
        </article>
      </div>
    </div>
  </section>
)

export default Carousel
