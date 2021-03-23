import React from 'react'
import Accordion from '../../components/base/Accordion'
import { number, text } from '@storybook/addon-knobs'

const options = {
  range: true,
  min: 1,
  max: 10,
  step: 1
}

const defaultContent = [
  '<p>Accordion content</p>',
  '<img src="http://via.placeholder.com/160">',
  '<ul style="list-style: initial; padding-left: 40px;">' +
    '\n  <li>List item 1</li>' +
    '\n  <li>List item 2</li>' +
    '\n  <li>List item 3</li>' +
    '\n</ul>'
]

export const AccordionStory = () => {
  const accordions = []
  const accordionNumber = number('Accordions', 3, options, 'config')

  const title = text('Title', 'Headline', 'config')

  for (let i = 0; i < accordionNumber; i++) {
    const prefix = `Accordion ${i + 1}`

    accordions.push({
      title: text('Title', `Accordion ${i + 1} title`, prefix),
      content: text('Content', defaultContent[i], prefix)
    })
  }

  return (
    <div className='container'>
      <h2 className='text-h2 font-display'>{title}</h2>
      {accordions.map((accordion, index) => (
        <Accordion key={index} title={accordion.title}>
          <div dangerouslySetInnerHTML={{ __html: accordion.content }} />
        </Accordion>
      ))}
    </div>
  )
}

AccordionStory.story = {
  name: 'Accordion'
}

export default {
  title: 'Base Components',
  parameters: {
    'in-dsm': {
      id: '6054b3f0e8a36b228e3524f1'
    }
  }
}
