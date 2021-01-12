import React from 'react'
import classNames from 'classnames'

const Column = ({ className }) => (
  <div className={classNames('sb:grid-column', className)}>
    {className.replace(/col/g, '.col')}
  </div>
)

export const Grid = () => (
  <div className='sb:grid'>
    <h2 className='sb:grid-heading'>Bootstrap 3 style grid</h2>

    <div className='row'>
      <Column className='col-xs-4' />
      <Column className='col-xs-4' />
      <Column className='col-xs-4' />
    </div>

    <div className='row'>
      <Column className='col-xs-2' />
      <Column className='col-xs-8' />
      <Column className='col-xs-2' />
    </div>

    <div className='row'>
      <Column className='col-xs-3' />
      <Column className='col-xs-4' />
      <Column className='col-xs-5' />
    </div>

    <h2 className='sb:grid-heading'>Responsive columns</h2>

    <div className='sb:grid-breakpoints'>
      <h6>Breakpoints:</h6>
      <ul>
        <li>
          <strong>xs</strong>: >480px
        </li>
        <li>
          <strong>sm</strong>: >768px
        </li>
        <li>
          <strong>md</strong>: >992px
        </li>
        <li>
          <strong>lg</strong>: >1200px
        </li>
      </ul>
    </div>

    <div className='row'>
      <Column className='col-md-4 col-xs-8' />
      <Column className='col-md-8 col-xs-4' />
    </div>

    <div className='row'>
      <Column className='col-md-6 col-xs-4' />
      <Column className='col-md-6 col-xs-8' />
    </div>

    <h2 className='sb:grid-heading'>Offset columns</h2>

    <div className='row'>
      <Column className='col-xs-4' />
      <Column className='col-xs-offset-2 col-xs-6' />
    </div>

    <div className='row'>
      <Column className='col-xs-2' />
      <Column className='col-md-offset-4 col-md-6 col-xs-10' />
    </div>
  </div>
)

export default {
  title: 'Design System/Grid'
}
