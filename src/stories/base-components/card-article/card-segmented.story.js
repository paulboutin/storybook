import React from 'react'
import CardArticle from '../../../components/base/CardArticle'
import { text, radios } from '@storybook/addon-knobs'

const images = {
  trees: '/img/trees.png',
  icon: '/img/wealth/BOTW_Wealth_Expertise_Individual.png'
}

const options = {
  Segmented: 'services',
  'Services Icon': 'services-icon'
}

export const SegmentedCard = () => {
  const type = radios('Type', options, options.Segmented)
  const heading = text('Heading', 'Heading')

  return (
    <div className='sb:card sb:card-article'>
      {type === options.Segmented && (
        <CardArticle type={type} image={images.trees} heading={heading} />
      )}
      {type === options['Services Icon'] && (
        <CardArticle type={type} image={images.icon} heading={heading} />
      )}
    </div>
  )
}

export default {
  title: 'Base Components/Card',
  parameters: {
    'in-dsm': {
      id: '605087d0ba8b25921e5c5f38'
    }
  }
}
