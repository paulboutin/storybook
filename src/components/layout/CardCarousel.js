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
    tag: 'Label',
    heading: 'Article Title',
    subtext: 'Lorem ipsum',
    src: 'https://player.vimeo.com/video/445351154',
    poster: 'https://i.vimeocdn.com/video/936265353.jpg',
    posterAlt: 'Popup video poster'
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
          {items.map((item, idx) => (
            <div key={idx} className='card-carousel-item'>
              <CardArticle {...item} />
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
