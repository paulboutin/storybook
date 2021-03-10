import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import RetailFull from '../../../components/pre-render/RetailFull'

const imgPath = '/img'

export const Retail = () => {
  const sticky = boolean('Sticky Nav', false)
  return <RetailFull imgPath={imgPath} sticky={sticky} />
}

export default {
  title: 'Templates/LOB'
}
