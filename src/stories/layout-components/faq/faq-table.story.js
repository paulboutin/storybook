import React from 'react'
import FAQ, { FAQTables } from '../../../components/layout/FAQ'
import { defaultItems } from '../../templates/rates-and-fees.story'
import { number, text, object } from '@storybook/addon-knobs'

const options = {
  range: true,
  min: 1,
  max: 15,
  step: 1
}

export const Table = () => {
  const items = []
  const num = number('Items', defaultItems.length, options, 'config')

  for (let i = 0; i < num; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `item ${i + 1}`

    items.push({
      title: text('Title', defaultColumn.title, prefix),
      table: {
        header: object('Table Header', defaultColumn.table.header, prefix),
        body: object('Table Data', defaultColumn.table.body, prefix)
      }
    })
  }

  return (
    <FAQ>
      <FAQTables data={items} />
    </FAQ>
  )
}

export default {
  title: 'Layout Components/FAQ'
}
