import React from 'react'
import Eyebrow from '../base/Eyebrow'

export const defaultItems = [
  {
    title: 'Banks lend every $9 out of $10',
    subtitle: 'Lorem ipsum'
  },
  {
    title: 'What is your bank financing?',
    subtitle: 'Lorem ipsum'
  },
  {
    title: 'Here’s how we’re different',
    subtitle: 'Lorem ipsum'
  },
  {
    title: 'Where you put your money matters',
    subtitle: 'Lorem ipsum'
  }
]

const StorytellingItem = ({ title, subtitle, index, children }) => {
  return (
    <article className='storytelling-item'>
      <div className='storytelling-item-wrapper'>
        <Eyebrow className='text-h2'>{index.padStart(2, '0')}</Eyebrow>
        <p className='storytelling-title font-bold'>{title}</p>
        <div className='storytelling-content'>{children}</div>
        <p className='storytelling-subtitle text-xs'>{subtitle}</p>
      </div>
    </article>
  )
}

const Storytelling = ({ items = defaultItems, headline = 'Headline' }) => {
  return (
    <section className='storytelling container'>
      <p className=' storytelling-headline text-h2 font-display'>{headline}</p>
      <div className='storytelling-items'>
        {items.map(({ title, subtitle }, idx) => (
          <StorytellingItem
            index={(idx + 1).toString()}
            title={title}
            subtitle={subtitle}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              porro?
            </p>
          </StorytellingItem>
        ))}
      </div>
    </section>
  )
}

export default Storytelling
