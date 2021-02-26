import React from 'react'
import CardArticle from '../../../components/base/CardArticle'
import { text, radios } from '@storybook/addon-knobs'

const images = {
  trees: '/img/trees.png',
  icon: '/img/wealth/BOTW_Wealth_Expertise_Individual.png'
}

const options = {
  Services: 'services',
  'Services Icon': 'services-icon'
}

export const Services = () => {
  const type = radios('Type', options, options.Services)
  const image = type === options.Services ? images.trees : images.icon

  const heading = text('Heading', 'Heading')

  return (
    <div className='sb:card sb:card-article'>
      <CardArticle type={type} image={image} heading={heading} />
    </div>
  )
}

export default {
  title: 'Base Components/Card'
}
