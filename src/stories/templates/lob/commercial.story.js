import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import CommercialFull from '../../../components/pre-render/CommercialFull'

const imgPath = '/img'

export const Commercial = () => {
  const sticky = boolean('Sticky Nav', false)
  return <CommercialFull sticky={sticky} imgPath={imgPath} />
}

export default {
  title: 'Templates/LOB'
}
