import React from 'react'
import Eyebrow from '../base/Eyebrow'
import Input from '../base/Input'
import Button from '../base/Button'
import Link from '../base/Link'

const HelpIntro = ({ showLinks }) => (
  <section className='help-intro'>
    <div className='container'>
      <Eyebrow>Help Center</Eyebrow>

      <div className='help-intro-search'>
        <Input
          variant='underline'
          label='How can we help you today?'
          required
        />
        <Button type='tertiary' label='Search' icon='search' />
      </div>

      {showLinks && (
        <div className='help-intro-links'>
          <h5 className='help-intro-links-title'>Popular Topics</h5>
          <Link>Credit cards</Link>
          <Link>Online banking</Link>
          <Link>Check a balance</Link>
          <Link>Make a payment</Link>
          <Link>Find a branch</Link>
        </div>
      )}
    </div>
  </section>
)

export default HelpIntro
