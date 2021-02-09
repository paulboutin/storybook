import React from 'react'
import CardArticle from '../base/CardArticle'

export const defaultItems = [
  {
    type: 'standard',
    tag: 'Label',
    heading: 'Article Title',
    subtext: 'Lorem ipsum',
    image: '/img/trees.png'
  },
  {
    type: 'video',
    tag: 'Living',
    heading: 'Article Title',
    subtext: 'Lorem ipsum'
  },
  {
    type: 'text-only',
    heading: 'Out-link'
  },
  {
    type: 'standard',
    tag: 'Label',
    heading: 'Article Title',
    subtext: 'Lorem ipsum',
    image: '/img/trees.png'
  },
  {
    type: 'standard',
    tag: 'Label',
    heading: 'Article Title',
    subtext: 'Lorem ipsum',
    image: '/img/trees.png'
  },
  {
    type: 'text-only',
    heading: 'Out-link'
  },
  {
    type: 'standard',
    tag: 'Label',
    heading: 'Article Title',
    subtext: 'Lorem ipsum',
    image: '/img/trees.png'
  }
]

const CardCarousel = ({ items = [] }) => {
  return (
    <section className='card-carousel'>
      <div className='card-carousel-wrapper container'>
        <div className='card-carousel-items'>
          {items.map(({ type, heading, subtext, tag, image }, idx) => (
            <div key={idx} className='card-carousel-item'>
              <CardArticle
                type={type}
                heading={heading}
                subtext={subtext}
                tag={tag}
                image={image}
              />
            </div>
          ))}
        </div>
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
