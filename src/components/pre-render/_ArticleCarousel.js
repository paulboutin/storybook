import React from 'react'
import CardCarousel from '../layout/CardCarousel'

const items = [
  {
    type: 'standard',
    tag: 'Label',
    heading: 'Article Title',
    subtext: 'Lorem ipsum',
    image: { src: '/img/trees.png', alt: 'trees' },
    href: 'https://www.bankofthewest.com/',
    tagHref: 'https://www.bankofthewest.com/'
  },
  {
    type: 'video',
    tag: 'Label',
    heading: 'Article Title',
    subtext: 'Lorem ipsum',
    tagHref: 'https://www.bankofthewest.com/'
  },
  {
    type: 'text-only',
    heading: 'Out-link',
    href: 'https://www.bankofthewest.com/'
  },
  {
    type: 'standard',
    tag: 'Label',
    heading: 'Article Title',
    subtext: 'Lorem ipsum',
    image: { src: '/img/trees.png', alt: 'trees' },
    href: 'https://www.bankofthewest.com/',
    tagHref: 'https://www.bankofthewest.com/'
  },
  {
    type: 'standard',
    tag: 'Label',
    heading: 'Article Title',
    subtext: 'Lorem ipsum',
    image: { src: '/img/trees.png', alt: 'trees' },
    href: 'https://www.bankofthewest.com/',
    tagHref: 'https://www.bankofthewest.com/'
  },
  {
    type: 'text-only',
    heading: 'Out-link',
    href: 'https://www.bankofthewest.com/'
  },
  {
    type: 'standard',
    tag: 'Label',
    heading: 'Article Title',
    subtext: 'Lorem ipsum',
    image: { src: '/img/trees.png', alt: 'trees' },
    href: 'https://www.bankofthewest.com/',
    tagHref: 'https://www.bankofthewest.com/'
  }
]

const CarouselPartial = () => <CardCarousel items={items} />

export default CarouselPartial
