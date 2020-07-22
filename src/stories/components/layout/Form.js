import React from 'react'
import Input from '../../../components/base/Input'
import TextArea from '../../../components/base/TextArea'
import Checkbox from '../../../components/base/Checkbox'
import Switch from '../../../components/base/Switch'
import Button from '../../../components/base/Button'
import { radios } from '@storybook/addon-knobs'

export const Form = () => {
  const type = radios(
    'Type',
    { 'Single column': '1', 'Two column background': '2' },
    '1'
  )
  return type === '1' ? <Form1 /> : <Form2 />
}

const Form1 = () => (
  <div className='sb:form-wrapper sb:form-1'>
    <form className='container'>
      <h4>Form title</h4>
      <p className='sb:form-description'>Form description</p>

      <div className='row'>
        <div className='col-xs-6'>
          <Input id='input-1' label='Label' required />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-6'>
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
        <div className='col-xs-6'>
          <Input id='input-2' label='Label' required />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-6'>
          <Input id='input-3' label='Label' required />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-6'>
          <h6 className='sb:form-title'>Checkbox title</h6>
          <Checkbox label='Checkbox 1' />
          <Checkbox label='Checkbox 2' />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-6'>
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

const Form2 = () => (
  <div className='sb:form-wrapper sb:form-2'>
    <form className='container'>
      <h4>Form title</h4>
      <p className='sb:form-description'>Form description</p>

      <div className='row'>
        <div className='col-xs-12'>
          <Input id='input-1' label='Label' required />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-6'>
          <Input id='input-2' label='Label' error='Required field' required />
        </div>

        <div className='col-xs-6'>
          <Input id='input-3' label='Label' required />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-6'>
          <Input id='input-4' label='Label' required />
        </div>

        <div className='col-xs-6'>
          <Input id='input-5' label='Label' required />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-6'>
          <h6 className='sb:form-title'>Checkbox title</h6>
          <Checkbox label='Checkbox Item' />
        </div>

        <div className='col-xs-6'>
          <Input id='input-6' label='Label' />
        </div>
      </div>

      <div className='sb:form-buttons'>
        <Button type='secondary' label='Cancel' />
        <Button type='primary' label='Submit' />
      </div>
    </form>
  </div>
)
