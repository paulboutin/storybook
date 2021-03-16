import React from 'react'
import { text, radios } from '@storybook/addon-knobs'
import {
  ClosingCTA,
  defaultText,
  defaultTitle,
  defaultLabel
} from '../../../components/layout/ClosingCTA'
import Button from '../../../components/base/Button'
import Link from '../../../components/base/Link'

const options = {
  Standard: '',
  White: 'closing-cta-white',
  Starbirds: 'closing-cta-star-birds'
}

const ClosingCTAStory = ({ type, image }) => {
  let className

  const title = text('Title', defaultTitle, 'content')
  const textContent = text('Text', defaultText, 'content')
  const label = text('Button Label', defaultLabel, 'content')
  const cta1 = text('CTA 1', 'Call To Action', 'content')
  const cta2 = text('CTA 1', 'Call To Action', 'content')
  const extra = text('Extra', 'Mon - Fri 6AM - 5PM PT', 'content')

  if (type === 'standard') {
    className = radios('Style', options, options.Standard, 'config')
  }

  return (
    <ClosingCTA
      className={className}
      type={type}
      image={image}
      text={textContent}
      title={title}
      label={label}
    >
      <div className='flex-content centered'>
        <Button
          type={'closing-cta-white' === className ? 'primary' : 'secondary'}
          label={label}
          link
        />
        {cta1 && <Link standalone>{cta1}</Link>}
        {cta2 && <Link standalone>{cta2}</Link>}
        {extra && <p className='text-sm'>{extra}</p>}
      </div>
    </ClosingCTA>
  )
}

export default ClosingCTAStory
