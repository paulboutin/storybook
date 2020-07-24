import React from 'react'
import Select from '../../../components/base/Select'
import { boolean, text, array } from '@storybook/addon-knobs'

export const SelectStory = () => {
  const inline = boolean('Inline', false)
  const error = boolean('Error', false)
  const label = text('Label', 'Label')
  const options = array('Options', ['Option 1', 'Option 2', 'Option 3'], '\n')

  return (
    <div className='row'>
      <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
        <Select
          label={label}
          options={options}
          inline={inline}
          error={error && 'Required field'}
        />
      </div>
    </div>
  )
}

SelectStory.story = {
  name: 'Select'
}
