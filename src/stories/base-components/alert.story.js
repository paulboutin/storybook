import React from 'react'
import { text, radios, boolean } from '@storybook/addon-knobs'
import Alert from '../../components/base/Alert'
import ProductPage from '../templates/product-page'

const options = {
  Danger: 'danger',
  Success: 'success',
  Info: 'info',
  Warning: 'warning'
}

const defaultTitle = 'Alert Title Placeholder'
const defaultText =
  'Your current browser may not be able to run our content. To update to the latest version <a class="link" href="">click here</a>.'

export const AlertStory = () => {
  const title = text('Title', defaultTitle)
  const textContent = text('Text', defaultText)
  const type = radios('Type', options, options.Danger)
  const withProductPage = boolean('Show Product Page', false)

  return (
    <>
      <Alert type={type} title={title} text={textContent} />
      {withProductPage && <ProductPage />}
    </>
  )
}

AlertStory.story = {
  name: 'Alert'
}

export default {
  title: 'Base Components'
}
