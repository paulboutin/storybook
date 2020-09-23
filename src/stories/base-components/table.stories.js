import React from 'react'
import Table from '../../components/base/Table'

export const TableStory = () => {
  const data = {
    header: [
      [
        { data: 'Header 1', rows: 2 },
        { data: 'Header 2', cols: 2 },
        { data: 'Header 3', cols: 2 }
      ],
      ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4']
    ],
    body: [
      [['Row 1', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4']],
      [['Row 2', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4']],
      [
        ['Row 3', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4'],
        ['Row 4', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4'],
        ['Row 5', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4'],
        ['Row 6', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4']
      ]
    ]
  }
  return <Table data={data} />
}

TableStory.story = {
  name: 'Table'
}

export default {
  title: 'Base Components'
}
