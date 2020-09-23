import React from 'react'
import Dropdown from '../../components/base/Dropdown'
import { text, array, radios, boolean } from '@storybook/addon-knobs'

export const DropdownStory = () => {
  const label = text('Label', 'Label')
  const inline = boolean('Inline', false)
  const helper = boolean('Helper', false)
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
          inline={inline}
          disabled={disabled}
          helper={helper && 'Helper text'}
          error={error && 'Required field'}
        />
      </div>
    </div>
  )
}

DropdownStory.story = {
  name: 'Dropdown'
}

export default {
  title: 'Base Components',
  parameters: {
    'in-dsm': {
      id: '5f6ba2df230daf008f9b8fa4'
    }
  }
}
