import React from 'react'
import Input from '../../../components/base/Input'
import Checkbox from '../../../components/base/Checkbox'
import Button from '../../../components/base/Button'
import Dropdown from '../../../components/base/Dropdown'

export const TwoColumnBackground = () => (
  <div className='sb:form-wrapper sb:form-2'>
    <form className='container'>
      <h4>Form title</h4>
      <p className='sb:form-description'>Form description</p>

      <div className='row'>
        <div className='col-xs-12'>
          <Input variant='outline' id='input-1' label='Label' required />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-6'>
          <Input
            variant='outline'
            id='input-2'
            label='Label'
            error='Required field'
            required
          />
        </div>

        <div className='col-xs-6'>
          <Input variant='outline' id='input-3' label='Label' required />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-6'>
          <Input variant='outline' id='input-4' label='Label' required />
        </div>

        <div className='col-xs-6'>
          <Input variant='outline' id='input-5' label='Label' required />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-6'>
          <h6 className='sb:form-title'>Checkbox title</h6>
          <Checkbox label='Checkbox Item' />
        </div>

        <div className='col-xs-6'>
          <Input variant='outline' id='input-6' label='Label' />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12'>
          <Dropdown
            label='Choose an option'
            items={['Personal Account', 'Business Account']}
          />
        </div>
      </div>

      <div className='sb:form-buttons'>
        <Button type='secondary' label='Cancel' />
        <Button type='primary' label='Submit' />
      </div>
    </form>
  </div>
)

TwoColumnBackground.storyName = 'Two Column'

export default {
  title: 'Layout Components/Form',
  parameters: {
    'in-dsm': {
      id: '5f6ce02d230daf48a39b932c'
    }
  }
}
