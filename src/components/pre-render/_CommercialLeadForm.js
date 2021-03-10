import React from 'react'
import Input from '../base/Input'
import Button from '../base/Button'
import Link from '../base/Link'

const CommercialLeadForm = ({ method = 'POST', action = '#' }) => {
  return (
    <form
      className='lead-form lead-form-alt container'
      method={method}
      action={action}
    >
      <div className='lead-form-header'>
        <p className='lead-form-headline text-h3 font-semibold font-display'>
          Get in touch
        </p>
      </div>
      <div className='lead-form-row row'>
        <div className='lead-form-input-group col-12 col-sm-6'>
          <Input label='Company Name' variant='outline' required />
          <Input label='Name' variant='outline' required />
          <Input
            label='Email Address'
            type='email'
            variant='outline'
            required
          />
          <Input label='Phone Number' type='tel' variant='outline' required />
          <Button label='Submit' type='primary' />
        </div>
        <div className='lead-form-text-group col-12 col-sm-6'>
          <p className='lead-form-subheadline text-h5 font-semibold'>
            Connect with a Relationship Manager to learn more about our
            solutions and see how we can help your business.
          </p>
        </div>
      </div>
    </form>
  )
}

export default CommercialLeadForm
