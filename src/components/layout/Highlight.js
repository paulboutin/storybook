import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'

const HighlightContent = ({ eyebrow = {}, title, text, children }) => {
  return (
    <article className='highlight-content-container'>
      {eyebrow.enable && <Eyebrow>{eyebrow.text}</Eyebrow>}
      <h2 className='highlight-title'>{title}</h2>

      {text && <p className='highlight-text'>{text}</p>}

      {children}
    </article>
  )
}

export const Highlight = ({ type, image, reverse, className, children }) => (
  <section
    className={classNames(
      'highlight',
      `highlight-${type}`,
      {
        reverse,
        container: type === 'A'
      },
      className
    )}
  >
    <Image
      src={image}
      alt='Highlight image'
      ratio='1:1'
      className='highlight-img-container'
    />

    {children}
  </section>
)

const DefaultHighlight = ({
  title,
  text,
  type,
  image,
  reverse,
  eyebrow = {},
  className,
  children
}) => (
  <Highlight type={type} image={image} reverse={reverse} className={className}>
    <HighlightContent title={title} text={text} eyebrow={eyebrow}>
      {children}
    </HighlightContent>
  </Highlight>
)

export default DefaultHighlight
