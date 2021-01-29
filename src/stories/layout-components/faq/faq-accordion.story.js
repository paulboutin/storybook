import React from 'react'
import FAQ, {
  FAQAccordion,
  accordionItems as defaultItems
} from '../../../components/layout/FAQ'
import { number, text } from '@storybook/addon-knobs'

const heading = `
  Still have questions?
  <br />
  We have answers.
`

const options = {
  range: true,
  min: 1,
  max: 10,
  step: 1
}

export const Accordion = () => {
  const items = []
  const num = number('Items', 5, options, 'config')

  for (let i = 0; i < num; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `item ${i + 1}`

    items.push({
      title: text('Title', defaultColumn.title, prefix),
      text: text('Text', defaultColumn.text, prefix)
    })
  }

  return (
    <FAQ heading={heading}>
      <FAQAccordion data={items} />
    </FAQ>
  )
}

export default {
  title: 'Layout Components/FAQ',
  parameters: {
    'in-dsm': {
      id: '5f29cc83b0d2dea29e7d823b'
    }
  }
}
