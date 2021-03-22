import React from 'react'
import classNames from 'classnames'
import Image from '../base/Image'

export const defaultItems = [
  {
    title: '123',
    text: 'lorem ipsum'
  },
  {
    title: '123',
    text: 'lorem ipsum'
  }
]

const InfographicItem = ({ className, title, text }) => {
  return (
    <article className={classNames('infographic-alt-item', className)}>
      <p className='text-h4 font-display'>{title}</p>
      <p className='text-sm'>{text}</p>
    </article>
  )
}

const Infographic = ({
  className,
  background,
  headline = 'Headline',
  text = 'Lorem ipsum',
  items = []
}) => {
  return (
    <section className={classNames('infographic-alt', className)}>
      <div className='container'>
        <Image
          className='infographic-alt-wrapper'
          src={background}
          ratio='auto'
        />
        <p className='text-h3 font-display'>{headline}</p>
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <p className='infographic-alt-text'>{text}</p>
          </div>
          <div className='col-xs-12 col-sm-6'>
            <div className='row'>
              {items.map(({ title, text }, idx) => (
                <InfographicItem
                  key={idx}
                  className='col-xs-6'
                  title={title}
                  text={text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Infographic
