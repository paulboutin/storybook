import React from 'react'
import CardNew from '../../../components/base/CardNew'
import { radios, text } from '@storybook/addon-knobs'

export const Services = () => {
  const image = text('Image', 'http://via.placeholder.com/640')
  const heading = text('Heading', 'Agribusiness & Farming')

  return (
    <div className='sb:card sb:card-new'>
      <CardNew type='services' image={{ src: image }} heading={heading} />
    </div>
  )
}

export default {
  title: 'Base Components/Card New'
}
