import React from 'react'
import CardArticle from '../../../components/base/CardArticle'
import { text } from '@storybook/addon-knobs'

export const Services = () => {
  const image = text('Image', '/img/trees.png')
  const heading = text('Heading', 'Heading')

  return (
    <div className='sb:card sb:card-article'>
      <CardArticle type='services' image={{ src: image }} heading={heading} />
    </div>
  )
}

export default {
  title: 'Base Components/Card'
}
