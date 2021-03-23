import React from 'react'
import { text, radios, boolean, button } from '@storybook/addon-knobs'
import Alert from '../../components/layout/Alert'
import ProductPage from '../../components/templates/ProductPage'

const options = {
  Danger: 'danger',
  Success: 'success',
  Info: 'info',
  Warning: 'warning'
}

const defaultTitle = 'Alert Title Placeholder'
const defaultText =
  'Your current browser may not be able to run our content. To update to the latest version <a class="link dark" href="">click here</a>.'

let alerts = [
  <Alert
    key={0}
    type={options.Danger}
    title={defaultTitle}
    text={defaultText}
  />
]

export const AlertStory = () => {
  const title = text('Title', defaultTitle, 'new alert')
  const textContent = text('Text', defaultText, 'new alert')
  const type = radios('Type', options, options.Danger, 'new alert')

  const handleAddAlert = () => {
    const count = Array.from(document.querySelectorAll('.alert')).length

    alerts = alerts.slice(-count) // maintain current count

    alerts.push(
      <Alert key={alerts.length} type={type} title={title} text={textContent} />
    )
  }

  button('Add New Alert', handleAddAlert, 'new alert')

  const withProductPage = boolean('Show Product Page', false, 'config')

  return (
    <>
      {alerts}
      {withProductPage && <ProductPage />}
    </>
  )
}

AlertStory.story = {
  name: 'Alert'
}

export default {
  title: 'Base Components',
  parameters: {
    'in-dsm': {
      id: '60539cf4e8a36b95b3350e29'
    }
  }
}
