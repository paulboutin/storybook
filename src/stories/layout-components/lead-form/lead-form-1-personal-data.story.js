import React from 'react'
import Button from '../../../components/base/Button'
import Input from '../../../components/base/Input'
import Link from '../../../components/base/Link'

export const PersonalData = () => {
  return (
    <form className='lead-form container'>
      <div className='lead-form-header'>
        <h3 className='lead-form-headline text-h3 font-semibold'>Headline</h3>
        <p className='text-h5'>Subtext</p>
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
          <h4 className='lead-form-subheadline text-h5 font-semibold'>
            Subheadline
          </h4>
          <Link standalone>Call To Action</Link>
          <Link standalone>Call To Action</Link>
          <p className='font-semibold'>Mon - Fri 6AM - 5PM PT</p>
        </div>
      </div>
    </form>
  )
}

PersonalData.story = {
  name: '1 - Personal Data'
}

export default {
  title: 'Layout Components/Lead Form'
}
