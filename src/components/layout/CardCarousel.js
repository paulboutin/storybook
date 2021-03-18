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
      <div className='card-carousel-wrapper container splide'>
        <div className='splide__arrows'>
          <button className='card-carousel-prev card-carousel-control splide__arrow--prev splide__arrow '>
            <i className='icon icon-chevron-left' />
          </button>
          <button className='card-carousel-next card-carousel-control splide__arrow--next splide__arrow '>
            <i className='icon icon-chevron-right' />
          </button>
        </div>

        <div className='card-carousel-items splide__track'>
          <div className='splide__list'>
            {items.map((item, idx) => (
              <div key={idx} className='card-carousel-item splide__slide'>
                <CardArticle {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardCarousel
