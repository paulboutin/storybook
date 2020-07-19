import React from 'react'
import classNames from 'classnames'
import { number, boolean, text } from '@storybook/addon-knobs'
import { HighlightStory } from './Highlight'

const defaultImage = 'http://via.placeholder.com/256'

const defaultColumns = [
  {
    text: 'Debit card? Yes!',
    subtext: 'Use it anywhere that accepts a Mastercard debit card.'
  },
  {
    text: 'Overdraft protection? Yes!',
    subtext:
      'We can all lose track of our spending. Check out our overdraft programs.'
  },
  {
    text: 'Mobile wallet? Yes!',
    subtext: 'Use it anywhere that accepts a Mastercard debit card.'
  }
]

const Column = ({ image, text, subtext }) => (
  <div className='column-icon'>
    <div className='column-icon-circle'>
      <img src={image} alt='Icon description' className='column-icon-img' />
    </div>

    <h4 className='column-icon-text'>{text}</h4>
    {subtext && <p className='column-icon-subtext'>{subtext}</p>}
  </div>
)

export const ColumnIcons = ({ columns, inverted }) => (
  <div
    className={classNames('column-icons', {
      'column-icons-inverted': inverted
    })}
  >
    <div className='container'>
      {columns.map((column, index) => (
        <Column key={index} inverted={inverted} {...column} />
      ))}
    </div>
  </div>
)

export const ColumnIconsStory = () => {
  const columns = []
  const columnNumber = number('Columns', 3, { min: 2, max: 6 }, 'config')
  const inverted = boolean('Inverted', false, 'config')

  for (let i = 0; i < columnNumber; i++) {
    const defaultColumn = defaultColumns[i] || {}
    const prefix = `Column ${i + 1} -`

    columns.push({
      image: text(`${prefix} Image`, defaultImage, 'content'),
      text: text(`${prefix} Text`, defaultColumn.text, 'content'),
      subtext: text(`${prefix} Subtext`, defaultColumn.subtext, 'content')
    })
  }

  return <ColumnIcons columns={columns} inverted={inverted} />
}

ColumnIconsStory.story = {
  name: 'Column Icons'
}
