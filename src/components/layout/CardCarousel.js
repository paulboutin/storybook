import React from 'react'
import CardNew from '../base/CardNew'

export const defaultItems = [
  {
    type: 'standard',
    tag: 'Global Finance',
    heading: 'Real-Time Business: Are Your Payments Prepared?',
    subtext: '9min read',
    image: { src: 'http://via.placeholder.com/640' }
  },
  {
    type: 'video',
    tag: 'Living',
    heading: 'Pandemic Accelerates Change in U.S. Wine Business',
    subtext: '12min read'
  },
  {
    type: 'text-only',
    heading: 'Learn More About Paycheck Protection Program Round 3'
  },
  {
    type: 'standard',
    tag: 'Global Finance',
    heading: 'Six Keys to Remove Treasury Management',
    subtext: '9min read',
    image: { src: 'http://via.placeholder.com/640' }
  },
  {
    type: 'text-only',
    heading: 'Discover additional resources'
  },
  {
    type: 'standard',
    tag: 'Global Finance',
    heading: 'Real-Time Business: Are Your Payments Prepared?',
    subtext: '9min read',
    image: { src: 'http://via.placeholder.com/640' }
  },
  {
    type: 'standard',
    tag: 'Living',
    heading: 'Pandemic Accelerates Change in U.S. Wine Business',
    subtext: '12min read',
    image: { src: 'http://via.placeholder.com/640' }
  }
]

const CardCarousel = ({ items = [] }) => {
  console.log(items)

  return (
    <section className='card-carousel'>
      <div className='card-carousel-items-wrapper container'>
        <div className='card-carousel-items'>
          {items.map(({ type, heading, subtext, tag, image }, idx) => (
            <div key={idx} className='card-carousel-item'>
              <CardNew
                type={type}
                heading={heading}
                subtext={subtext}
                tag={tag}
                image={image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='card-carousel-controls'>
        <span className='card-carousel-control card-carousel-prev hidden'>
          <i className='icon icon-chevron-left' />
        </span>
        <span className='card-carousel-control card-carousel-next'>
          <i className='icon icon-chevron-right' />
        </span>
      </div>
    </section>
  )
}

export default CardCarousel
