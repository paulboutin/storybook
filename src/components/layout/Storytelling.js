import React from 'react'
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
    image: '/img/retail/storytelling/BOTW_Retail_Storytelling_BanksLend.png'
  },
  {
    title: 'Lorem Ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, illo?',
    image:
      '/img/retail/storytelling/BOTW_Retail_How Banks Works_WhatIsYourBankFinancing.png',
    Content: () => <Link standalone>Link CTA</Link>
  },
  {
    title: 'Lorem Ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, illo?',
    image: '/img/retail/storytelling/BOTW_Retail_How Banks Works_WhereYou.png',
    Content: () => <Button type='primary' label='Button CTA' />
  }
]

const AccordionItem = ({ expanded, title, text, image, children }) => {
  return (
    <Accordion expanded={expanded} title={title} text={text} data-toggle-mode>
      <div className='storytelling-item-wrapper'>
        <p className='accordion-text'>{text}</p>
        <div className='storytelling-item-content'>{children}</div>
      </div>
      <Image alt={title} src={image} ratio='auto' />
    </Accordion>
  )
}

const StorytellingItem = ({ expanded, image, title, text, children }) => {
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
        <div className='storytelling-item-content'>{children}</div>
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

const Storytelling = ({ items }) => {
  return (
    <section className='storytelling'>
      <div className='accordion-items'>
        {items.map(({ image, title, text, Content }, idx) => (
          <AccordionItem
            key={idx}
            expanded={idx === 0}
            title={title}
            text={text}
            image={image}
          >
            {Content && <Content />}
          </AccordionItem>
        ))}
      </div>

      <div className='storytelling-items'>
        {items.map(({ image, title, text, Content }, idx) => (
          <StorytellingItem
            key={idx}
            expanded={idx === 0}
            title={title}
            text={text}
            image={image}
          >
            {Content && <Content />}
          </StorytellingItem>
        ))}
      </div>
    </section>
  )
}

export default Storytelling
