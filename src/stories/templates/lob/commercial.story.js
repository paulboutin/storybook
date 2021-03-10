import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import CommercialFull from '../../../components/pre-render/CommercialFull'

export const Commercial = () => {
  const sticky = boolean('Sticky Nav', false)
  return <CommercialFull sticky={sticky} imgPath='/img' />
}

export default {
  title: 'Templates/LOB'
}
