import React from 'react'
import classNames from 'classnames'
import Button from '../base/Button'

export const defaultTitle =
  'Together, we can safeguard the environment and the future of our planet.'
export const altTitle = 'Open online in about 10 minutes'
export const defaultText = 'Type something'

const ClosingCTA = ({
  type,
  image,
  title = defaultTitle,
  text = defaultText
}) => (
  <section className={classNames('closing-cta', `closing-cta-${type}`)}>
    <div className='container'>
      {type === '2col' && (
        <img
          src={image}
          alt='Closing CTA image'
          className='closing-cta-image'
        />
      )}

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
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {type !== '2col' && text && (
          <p
            className='closing-cta-text'
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
        <Button type='tertiary' label='Call to Action' link />
      </div>
    </div>
  </section>
)

export default ClosingCTA
