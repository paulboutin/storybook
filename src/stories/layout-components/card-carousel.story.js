import React from 'react'
import CardCarousel, {
  defaultItems
} from '../../components/layout/CardCarousel'

export const CardCarouselStory = () => {
  return <CardCarousel items={defaultItems} />
}

CardCarouselStory.story = {
  name: 'Card Carousel'
}

export default {
  title: 'Layout Components'
}
