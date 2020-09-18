import React from 'react'
import Button from '../base/Button'

const InfographicBox = ({ title, children }) => (
  <article className='infographic-box'>
    <div className='infographic-box-wrapper'>
      <h1 className='infographic-box-title'>{title}</h1>
      <p className='infographic-box-text'>{children}</p>
    </div>
  </article>
)

const Infographic = () => {
  return (
    <section className='infographic'>
      <h2 className='infographic-title'>We invest in what we believe</h2>

      <div className='infographic-boxes container'>
        <InfographicBox title='962'>
          kilotonnes of CO2 (eq.) emissions avoided as a result of sustainable
          energy projects financed by BOTW.
        </InfographicBox>

        <InfographicBox title='2.9'>
          kilotonnes of CO2 (eq.) BOTW’s own emissions, 100% compensation.
        </InfographicBox>

        <InfographicBox title='30%'>
          of our leadership is composed of women, including our CEO.
        </InfographicBox>
      </div>

      <Button
        type='tertiary'
        label='Learn more'
        className='infographic-button'
        link
      />
    </section>
  )
}

export default Infographic
