import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import classNames from 'classnames'
import Accordion from '../base/Accordion'
import Button from '../base/Button'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'
import Link from '../base/Link'

export const defaultItems = [
  {
    title: 'Lorem Ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, illo?',
    image: '/img/retail/storytelling/BOTW_Retail_Storytelling_BanksLend.png',
    content: null
  },
  {
    title: 'Lorem Ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, illo?',
    image:
      '/img/retail/storytelling/BOTW_Retail_How Banks Works_WhatIsYourBankFinancing.png',
    content: renderToStaticMarkup(<Link standalone>Link CTA</Link>)
  },
  {
    title: 'Lorem Ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, illo?',
    image: '/img/retail/storytelling/BOTW_Retail_How Banks Works_WhereYou.png',
    content: renderToStaticMarkup(<Button type='primary' label='Button CTA' />)
  }
]

const AccordionItem = ({ expanded, title, text, image, content }) => {
  return (
    <Accordion expanded={expanded} title={title} text={text} data-toggle-mode>
      <div className='storytelling-item-wrapper'>
        <p className='accordion-text'>{text}</p>
        <div
          className='storytelling-item-content'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <Image alt={title} src={image} ratio='auto' />
    </Accordion>
  )
}

const StorytellingItem = ({ expanded, image, title, text, content }) => {
  return (
    <article className={classNames('storytelling-item', { expanded })}>
      <div className='storytelling-item-cover'>
        <i className='icon icon-plus text-h3' />
        <Eyebrow />
        <p className='storytelling-title font-bold text-h6'>{title}</p>
      </div>

      <div className='storytelling-item-wrapper'>
        <Eyebrow />
        <p className='storytelling-title font-bold text-lg'>{title}</p>
        <p className='storytelling-text text-xs'>{text}</p>
        <div
          className='storytelling-item-content'
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Image
          alt={title}
          src={image}
          className='storytelling-image'
          ratio='auto'
        />
      </div>
    </article>
  )
}

const HorizontalAccordion = ({ items }) => {
  return (
    <section className='horizontal-accordion'>
      <div className='accordion-items'>
        {items.map(({ image, title, text, content }, idx) => (
          <AccordionItem
            key={idx}
            expanded={idx === 0}
            title={title}
            text={text}
            image={image}
            content={content}
          />
        ))}
      </div>

      <div className='storytelling-items'>
        {items.map(({ image, title, text, content }, idx) => (
          <StorytellingItem
            key={idx}
            expanded={idx === 0}
            title={title}
            text={text}
            image={image}
            content={content}
          />
        ))}
      </div>
    </section>
  )
}

export default HorizontalAccordion
