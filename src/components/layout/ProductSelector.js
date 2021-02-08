import React from 'react'
import classNames from 'classnames'
import Button from '../base/Button'
import Link from '../base/Link'
import Highlight from './Highlight'

const ProductSelector = ({ items, headline }) => {
  return (
    <section className='product-selector container'>
      <h2 className='product-selector-headline'>{headline}</h2>
      <div className='product-selector-tabs'>
        {items.map(({ tab }, idx) => (
          <span
            key={idx}
            data-index={idx}
            className={classNames('product-selector-tab', {
              active: idx === 0
            })}
          >
            {tab}
          </span>
        ))}
        <span className='product-selector-tab-spacer' />
      </div>
      <div className='product-selector-items'>
        {items.map(({ image, title, text, button, cta }, idx) => (
          <Highlight
            key={idx}
            type='B'
            image={image}
            title={title}
            text={text}
            reverse
            container={false}
            className='product-selector-item'
          >
            {button && <Button type='primary' label={button} />}
            {cta && <Link>{cta}</Link>}
          </Highlight>
        ))}
      </div>
    </section>
  )
}

export default ProductSelector
