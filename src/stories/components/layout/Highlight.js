import React from 'react'
import classNames from 'classnames'
import { radios, text } from '@storybook/addon-knobs'
import { Eyebrow } from '../base/Eyebrow'
import { Link } from '../base/Link'

const defaultImage = 'http://via.placeholder.com/640'

const Highlight = ({ contentPosition, type, overlap, color, images }) => (
  <div
    className={classNames(
      'highlight container',
      contentPosition === 'Left' ? 'highlight-left' : 'highlight-right',
      type === 'Single' ? 'highlight-single' : 'highlight-overlap',
      type === 'Overlap' &&
        overlap === 'Color' &&
        (color === 'Secondary' ? 'highlight-secondary' : 'highlight-primary')
    )}
  >
    <div className='highlight-img-container'>
      {type === 'Single' ? (
        <img src={[images[0]]} alt='Highlight image' />
      ) : overlap === 'Color' ? (
        <>
          <div />
          <img src={[images[0]]} alt='Highlight image' />
        </>
      ) : (
        <>
          <img src={[images[0]]} alt='Secondary highlight image' />

          <img src={[images[1]]} alt='Primary highlight image' />
        </>
      )}
    </div>

    <div className='highlight-content-container'>
      <Eyebrow text='Bank for the planet' />
      <h4>The strongest environmental stance of any major bank.</h4>

      <p className='highlight-text'>
        Our policies are 100% transparent because we're proud of what we finance
        and what we don't.
      </p>

      <Link icon='long-arrow-alt-right' className='highlight-link'>
        Your choice of bank matters
      </Link>
    </div>
  </div>
)

export const HighlightStory = () => {
  const type = radios('Type', ['Single', 'Overlap'], 'Overlap')
  let overlap
  let images

  if (type === 'Overlap') {
    overlap = radios('Overlap', ['Color', 'Image'], 'Color')
  }

  if (type === 'Single' || overlap === 'Color') {
    images = [text('Image', defaultImage)]
  } else {
    images = [
      text('Background image', defaultImage),
      text('Foreground image', defaultImage)
    ]
  }

  return (
    <div>
      <Highlight
        contentPosition='Right'
        type={type}
        overlap={overlap}
        color='Primary'
        images={images}
      />
      <Highlight
        contentPosition='Left'
        type={type}
        overlap={overlap}
        color='Secondary'
        images={images}
      />
    </div>
  )
}

HighlightStory.story = {
  name: 'Highlight'
}
