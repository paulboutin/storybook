import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import WealthFull from '../../../components/pre-render/WealthFull'

const imgPath = '/img'

export const Wealth = () => {
  const sticky = boolean('Sticky Nav', false)
  return <WealthFull imgPath={imgPath} sticky={sticky} />
}

export default {
  title: 'Templates/LOB'
}
