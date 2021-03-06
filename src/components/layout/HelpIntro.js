import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Input from '../base/Input'
import Button from '../base/Button'
import Link from '../base/Link'

const HelpIntro = ({ showLinks, fullWidth }) => (
  <section className='help-intro'>
    <div className='container'>
      <h2 className='help-intro-title text-h1'>How can we help you today?</h2>

      <div
        className={classNames('help-intro-search', {
          'help-intro-search-small': !fullWidth
        })}
      >
        <Input
          variant='outline'
          placeholder='Search by topic or category'
          noHelperSpacing
          required
        />
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
