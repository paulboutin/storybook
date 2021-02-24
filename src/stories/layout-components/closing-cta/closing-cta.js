import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import ClosingCTA, {
  defaultText,
  defaultTitle
} from '../../../components/layout/ClosingCTA'

const ClosingCTAStory = ({ type, image }) => {
  let starBirds

  const title = text('Title', defaultTitle, 'content')
  const textContent = text('Text', defaultText, 'content')

  if (type === 'standard') {
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
