import React from 'react'
import { boolean, number, radios } from '@storybook/addon-knobs'
import ReturnToTop from '../../components/base/ReturnToTop'
import ProductPage from '../templates/product-page'

const options = {
  min: 0
}

const sideOptions = {
  Left: 'left',
  Right: 'right'
}

export const ReturnToTopStory = () => {
  const side = radios('Side', sideOptions, sideOptions.Right, 'config')
  const showAt = number('Show button at (px)', 200, options, 'config')
  const withProductPage = boolean('Show Product Page', true, 'config')

  return (
    <>
      <ReturnToTop showAtPX={showAt} side={side} />
      {withProductPage && <ProductPage />}
    </>
  )
}

ReturnToTopStory.story = {
  name: 'Return To Top'
}

export default {
  title: 'Layout Components'
}
