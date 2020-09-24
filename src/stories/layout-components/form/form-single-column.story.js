import React from 'react'
import Input from '../../../components/base/Input'
import TextArea from '../../../components/base/TextArea'
import Checkbox from '../../../components/base/Checkbox'
import Switch from '../../../components/base/Switch'
import Button from '../../../components/base/Button'

export const SingleColumn = () => (
  <div className='sb:form-wrapper sb:form-1'>
    <form className='container'>
      <h4>Form title</h4>
      <p className='sb:form-description'>Form description</p>

      <div className='row'>
        <div className='col-xs-12 col-sm-6'>
          <Input variant='outline' id='input-1' label='Label' required />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12 col-sm-6'>
          <TextArea
            id='textarea'
            label='Label'
            maxLength={100}
            rows={5}
            required
          />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12 col-sm-6'>
          <Input variant='outline' id='input-2' label='Label' required />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12 col-sm-6'>
          <Input variant='outline' id='input-3' label='Label' required />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12 col-sm-6'>
          <h6 className='sb:form-title'>Checkbox title</h6>
          <Checkbox label='Checkbox 1' />
          <Checkbox label='Checkbox 2' />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12 col-sm-6'>
          <h6 className='sb:form-title'>Switch title</h6>
          <Switch label='Switch' checked />
        </div>
      </div>

      <div className='sb:form-buttons'>
        <Button type='secondary' label='Cancel' />
        <Button type='primary' label='Submit' />
      </div>
    </form>
  </div>
)

export default {
  title: 'Layout Components/Form',
  parameters: {
    'in-dsm': {
      id: '5f6ce028c5551921670680a5'
    }
  }
}
