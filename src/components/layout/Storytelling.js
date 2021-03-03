import React from 'react'
import classNames from 'classnames'
import Accordion from '../base/Accordion'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'

export const defaultItems = [
  {
    title: 'Your money doesn’t just sit at a bank',
    text:
      'When you put your money in a bank, 90% of your deposits are lent out by your bank to finance things. ' +
      'Some of that money can be used to fund student loans, mortgages or community initiatives.',
    image: '/img/retail/storytelling/BOTW_Retail_How Banks Works_BanksLend.png'
  },
  {
    title: 'What is your bank financing?',
    text:
      'Unfortunately, many banks lend out your money to finance projects that you wouldn’t support—like those that cause climate change.' +
      ' In fact, 4 of the top US banks finance an average of $202 billion worth of fossil fuel funding.',
    image:
      '/img/retail/storytelling/BOTW_Retail_How Banks Works_WhatIsYourBankFinancing.png'
  },
  {
    title: 'Here’s how we’re different',
    text:
      'We have the strongest environmental stance of any major US bank, and have policies to back up our values. ' +
      'So not only do we invest in a sustainable planet, but we’ve restricted our financing for environmentally harmful industries.',
    image: '/img/retail/storytelling/BOTW_Retail_How Banks Works_HeresHow.png'
  },
  {
    title: 'Where you put your money matters',
    text:
      'Put your money where your values are. Your money supports the investments made by your bank, ' +
      'so when your bank finances a sustainable planet, you do too.',
    image: '/img/retail/storytelling/BOTW_Retail_How Banks Works_WhereYou.png'
  }
]

const AccordionItem = ({ expanded, title, text, image, children }) => {
  return (
    <Accordion expanded={expanded} title={title} text={text}>
      <p className='accordion-text text-sm'>{text}</p>
      <Image alt={title} src={image} ratio='auto' />
      {children}
    </Accordion>
  )
}

const StorytellingItem = ({ expanded, image, title, text, children }) => {
  return (
    <article className={classNames('storytelling-item', { expanded })}>
      <div className='storytelling-item-cover'>
        <i className='icon icon-plus text-h3' />
        <Eyebrow />
        <p className='storytelling-title font-bold text-sm'>{title}</p>
      </div>

      <div className='storytelling-item-wrapper'>
        <Eyebrow />
        <p className='storytelling-title font-bold text-lg'>{title}</p>
        <p className='storytelling-text text-xs'>{text}</p>
        <div className='storytelling-content'>{children}</div>
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

const Storytelling = ({ items = defaultItems, headline = 'Headline' }) => {
  return (
    <section className='storytelling container'>
      <p className=' storytelling-headline text-h2 font-display'>{headline}</p>

      <div className='accordion-items'>
        {items.map(({ image, title, text, children }, idx) => (
          <AccordionItem
            key={idx}
            expanded={idx === 0}
            title={title}
            text={text}
            image={image}
          >
            {children}
          </AccordionItem>
        ))}
      </div>

      <div className='storytelling-items'>
        {items.map(({ image, title, text, children }, idx) => (
          <StorytellingItem
            key={idx}
            expanded={idx === 0}
            title={title}
            text={text}
            image={image}
          >
            {children}
          </StorytellingItem>
        ))}
      </div>
    </section>
  )
}

export default Storytelling
