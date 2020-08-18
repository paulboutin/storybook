import React from 'react'
import Accordion from '../../../components/base/Accordion'
import { number, text } from '@storybook/addon-knobs'

export const AccordionStory = () => {
  const accordions = []
  const accordionNumber = number('Accordions', 3)

  for (let i = 1; i <= accordionNumber; i++) {
    const prefix = `Accordion ${i} -`

    accordions.push({
      title: text(`${prefix} Title`, `Accordion ${i} title`),
      content: text(`${prefix} Content`, `<p>Accordion ${i} content</p>`)
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
