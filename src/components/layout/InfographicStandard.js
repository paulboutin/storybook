import React from 'react'
import classNames from 'classnames'
import Button from '../base/Button'
import Image from '../base/Image'
import Column, { columnInfographicConfig } from '../base/Column'

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

export const Infographic = ({ columns, className, children }) => {
  return (
    <section className={classNames('infographic-standard', className)}>
      <h2 className='infographic-title text-h2'>
        We invest in what we believe
      </h2>

      <div className='container'>
        <div className='row'>
          {children.map((child, idx) => (
            <Column
              key={idx}
              columns={columns}
              configFn={columnInfographicConfig}
            >
              {child}
            </Column>
          ))}
        </div>
      </div>

      <Button
        type='secondary'
        label='Learn more'
        className='infographic-button'
        link
      />
    </section>
  )
}

const DefaultInfographic = ({ className }) => {
  return (
    <Infographic className={className} columns={defaultItems.length}>
      {defaultItems.map(({ title, content }, idx) => (
        <InfographicBox key={idx} title={title}>
          {content}
        </InfographicBox>
      ))}
    </Infographic>
  )
}

export default DefaultInfographic
