import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import ClosingCTA, {
  defaultText,
  defaultTitle,
  altTitle
} from '../../../components/layout/ClosingCTA'

const ClosingCTAStory = ({ type, image }) => {
  let starBirds

  const title = text(
    'Title',
    type === '2col' ? altTitle : defaultTitle,
    'content'
  )
  const textContent = text('Text', defaultText, 'content')

  if (['standard', '2col'].includes(type)) {
    starBirds = boolean('Starbirds', false, 'config')
  }

  return (
    <ClosingCTA
      className={starBirds && 'closing-cta-star-birds'}
      type={type}
      image={image}
      text={textContent}
      title={title}
    />
  )
}

export default ClosingCTAStory
