import React from 'react'
import { text } from '@storybook/addon-knobs'

export default (...args) => (
  <span
    dangerouslySetInnerHTML={{ __html: text(...args).replace(/\n/g, '<br>') }}
  />
)
