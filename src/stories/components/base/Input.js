import React from 'react'
import Input from '../../../components/base/Input'
import TextArea from '../../../components/base/TextArea'

export const InputStory = () => {
  return (
    <div className='sb:input'>
      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Enabled</h3>
        <Input id='first-name' label='First Name' required />
      </div>

      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Disabled</h3>
        <Input id='last-name' label='Last Name' required disabled />
      </div>

      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Completed</h3>
        <Input id='address-1' label='Address' required value='123 Little St.' />
      </div>

      <div className='sb:input-wrapper focus'>
        <h3 className='sb:input-title'>Active</h3>
        <Input id='address-2' label='Address' required />
      </div>

      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Password</h3>
        <Input
          id='password'
          label='Password'
          required
          minLength='6'
          type='password'
        />
      </div>

      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Optional</h3>
        <Input id='email' label='Email' type='email' />
      </div>

      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Error</h3>
        <Input
          id='phone-2'
          label='Phone Number'
          required
          type='tel'
          error='Please enter a correct phone number'
        />
      </div>

      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Textarea</h3>
        <TextArea label='Textarea' maxLength={100} rows={5} />
      </div>
    </div>
  )
}

InputStory.story = {
  name: 'Input'
}
