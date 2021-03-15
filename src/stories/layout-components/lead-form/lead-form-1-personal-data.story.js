import React from 'react'
import { text } from '@storybook/addon-knobs'
import Button from '../../../components/base/Button'
import Input from '../../../components/base/Input'
import Link from '../../../components/base/Link'

export const PersonalData = () => {
  const headline = text('Headline', 'Headline')
  const subtext = text('Subtext', 'Subtext')
  const subHeadline = text('Subheadline', 'Subheadline')
  const cta1 = text('CTA 1', 'Call To Action')
  const cta2 = text('CTA 2', 'Call To Action')

  return (
    <form className='lead-form container'>
      <div className='lead-form-header'>
        <h3 className='lead-form-headline text-h3 font-semibold'>{headline}</h3>
        <p className='text-h5'>{subtext}</p>
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
            {subHeadline}
          </h4>
          <Link standalone>{cta1}</Link>
          <Link standalone>{cta2}</Link>
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
