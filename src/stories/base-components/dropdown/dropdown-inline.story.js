import React from 'react'
import { array, boolean, radios, text } from '@storybook/addon-knobs'
import Dropdown from '../../../components/base/Dropdown'

export const DropdownInlineStory = () => {
  const label = text('Label', 'Label')
  const error = boolean('Error', false)
  const disabled = boolean('Disabled', false)
  const type = radios('Type', ['Normal', 'Links'], 'Normal').toLowerCase()

  const items =
    type === 'links'
      ? array('Links', ['Link 1', 'Link 2', 'Link 3'], '\n')
      : array('Options', ['Option 1', 'Option 2', 'Option 3'], '\n')

  return (
    <div className='row'>
      <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
        <Dropdown
          label={label}
          type={type}
          items={items}
          inline
          disabled={disabled}
          error={error}
        />
      </div>
    </div>
  )
}

DropdownInlineStory.story = {
  name: 'Inline (Custom)'
}

export default {
  title: 'Base Components/Dropdown',
  parameters: {
    'in-dsm': {
      id: '5f7b66fa333d218186ba5f73'
    }
  }
}
