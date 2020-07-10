import React from 'react'
import classNames from 'classnames'
import { radios } from '@storybook/addon-knobs'
import { Eyebrow } from '../base/Eyebrow'
import { Link } from '../base/Link'

const Highlight = ({ contentPosition, type, images, backgroundColor }) => (
  <div
    className={classNames(
      'highlight',
      contentPosition === 'Left' ? 'highlight-left' : 'highlight-right',
      type === 'Single' ? 'highlight-single' : 'highlight-overlap'
    )}
  >
    <div className='highlight-img-container'></div>

    <div className='highlight-content-container'>
      <Eyebrow text='Bank for the planet' />
      <h4>The strongest environmental stance of any major bank.</h4>

      <p className='highlight-text'>
        Our policies are 100% transparent because we're proud of what we finance
        and what we don't.
      </p>

      <Link href='#' icon='long-arrow-alt-right' className='highlight-link'>
        Your choice of bank matters
      </Link>
    </div>
  </div>
)

export const HighlightStory = () => {
  const type = radios('Type', ['Single', 'Overlap'], 'Overlap')
  let images

  if (type === 'Overlap') {
    images = radios('Images', ['1', '2'], '1')
  }

  return (
    <div>
      <Highlight
        contentPosition='Right'
        type={type}
        images={images}
        backgroundColor='Primary'
      />
      <Highlight
        contentPosition='Left'
        type={type}
        images={images}
        backgroundColor='Secondary'
      />
    </div>
  )
}

HighlightStory.story = {
  name: 'Highlight'
}
