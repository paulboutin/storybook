import React from 'react'
import classNames from 'classnames'
import Button from '../base/Button'
import Image from '../base/Image'

export const defaultTitle =
  'Together, we can safeguard the environment and the future of our planet.'
export const altTitle = 'Open online in about 10 minutes'
export const defaultText = 'Type something'
export const defaultLabel = 'Call to Action'

const ClosingCTA = ({
  type,
  image,
  title = defaultTitle,
  text = defaultText,
  label = defaultLabel,
  className
}) => (
  <section
    className={classNames('closing-cta', `closing-cta-${type}`, className)}
  >
    <div className='container'>
      {type === 'bgi' && (
        <>
          <img
            src={image}
            alt='Closing CTA background image'
            className='closing-cta-background-image'
          />
          <div className='closing-cta-overlay' />
        </>
      )}

      <div className='closing-cta-content'>
        <h3 className='text-h2' dangerouslySetInnerHTML={{ __html: title }} />
        {text && (
          <p
            className='closing-cta-text'
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
        <Button type='tertiary' label={label} link />
      </div>
    </div>
  </section>
)

export default ClosingCTA
