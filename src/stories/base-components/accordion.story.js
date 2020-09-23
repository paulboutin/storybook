import React from 'react'
import Accordion from '../../components/base/Accordion'
import { number, text } from '@storybook/addon-knobs'

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
  const accordionNumber = number('Accordions', 3)

  for (let i = 0; i < accordionNumber; i++) {
    const prefix = `Accordion ${i + 1} -`

    accordions.push({
      title: text(`${prefix} Title`, `Accordion ${i + 1} title`),
      content: text(`${prefix} Content`, defaultContent[i])
    })
  }

  return (
    <>
      {accordions.map((accordion, index) => (
        <Accordion key={index} title={accordion.title}>
          <div dangerouslySetInnerHTML={{ __html: accordion.content }} />
        </Accordion>
      ))}
    </>
  )
}

AccordionStory.story = {
  name: 'Accordion'
}

export default {
  title: 'Base Components'
}
