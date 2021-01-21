import React from 'react'
import { text } from '@storybook/addon-knobs'
import ClosingCTA, {
  defaultText,
  defaultTitle,
  altTitle
} from '../../../components/layout/ClosingCTA'

const ClosingCTAStory = ({ type, image }) => {
  const title = text('Title', type === '2col' ? altTitle : defaultTitle)
  const textContent = text('Text', defaultText)

  return (
    <ClosingCTA type={type} image={image} text={textContent} title={title} />
  )
}

export default ClosingCTAStory
