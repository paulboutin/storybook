import React from 'react'
import Eyebrow from '../base/Eyebrow'
import Input from '../base/Input'
import Button from '../base/Button'
import Link from '../base/Link'

const HelpIntro = ({ showLinks }) => (
  <section className='help-intro'>
    <div className='container'>
      <h1 className='help-intro-title'>How can we help you today?</h1>

      <div className='help-intro-search'>
        <Input variant='outline' label='Search by topic or category' required />
        <Button type='tertiary' label='Search' />
      </div>

      {showLinks && (
        <div className='help-intro-links'>
          <Eyebrow>Popular Topics</Eyebrow>
          <Link>Frequently asked questions</Link>
          <Link>Latest updates related to COVID</Link>
          <Link>Useful documents and forms</Link>
          <Link>Mobile banking</Link>
        </div>
      )}
    </div>
  </section>
)

export default HelpIntro
