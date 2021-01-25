import React from 'react'
import classNames from 'classnames'
import Button from '../base/Button'
import Image from '../base/Image'

export const defaultItems = [
  {
    title: '962',
    content:
      'kilotonnes of CO2 (eq.) emissions avoided as a result of sustainable energy projects financed by BOTW.'
  },
  {
    title: '2.9',
    content: 'kilotonnes of CO2 (eq.) BOTW’s own emissions, 100% compensation.'
  },
  {
    title: '30%',
    content: 'of our leadership is composed of women, including our CEO.'
  }
]

export const InfographicBox = ({ title, children }) => (
  <article className='infographic-box'>
    <div className='infographic-box-wrapper'>
      <h1 className='infographic-box-title'>{title}</h1>
      <p className='infographic-box-text'>{children}</p>
    </div>
  </article>
)

export const InfographicBoxImage = ({ src }) => (
  <article className='infographic-box'>
    <Image src={src} />
  </article>
)

export const Infographic = ({ className, children }) => {
  return (
    <section className={classNames('infographic', className)}>
      <h2 className='infographic-title'>We invest in what we believe</h2>

      <div className='infographic-boxes container'>{children}</div>

      <Button
        type='tertiary'
        label='Learn more'
        className='infographic-button'
        link
      />
    </section>
  )
}

const DefaultInfographic = ({ className }) => {
  return (
    <Infographic className={className}>
      {defaultItems.map(({ title, content }) => (
        <InfographicBox title={title}>{content}</InfographicBox>
      ))}
    </Infographic>
  )
}

export default DefaultInfographic
