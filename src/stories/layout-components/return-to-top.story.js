import React from 'react'
import { boolean, number } from '@storybook/addon-knobs'
import ReturnToTop from '../../components/base/ReturnToTop'
import ProductPage from '../templates/product-page'

const options = {
  min: 0
}

export const ReturnToTopStory = () => {
  const showAt = number('Show button at (px)', 200, options, 'config')
  const withProductPage = boolean('Show Product Page', true, 'config')

  return (
    <>
      <ReturnToTop />
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
