import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import WealthFull from '../../../components/pre-render/WealthFull'

export const Wealth = () => {
  const sticky = boolean('Sticky Nav', false)
  return <WealthFull imgPath='/img' sticky={sticky} />
}

export default {
  title: 'Templates/LOB'
}
