import React from 'react'
import classNames from 'classnames'

const Column = ({ children, className }) => (
  <div
    className={classNames(
      'border border-dashed border-grey-40 bg-grey-20 px-12 py-4',
      className
    )}
  >
    {children}
  </div>
)

export const Grid = () => (
  <div className='text-grey'>
    <h2 className='mb-16 text-grey-40'>Bootstrap 3 style grid</h2>

    <div className='row'>
      <Column className='col-4'>.col-4</Column>
      <Column className='col-4'>.col-4</Column>
      <Column className='col-4'>.col-4</Column>
    </div>

    <div className='row'>
      <Column className='col-2'>.col-2</Column>
      <Column className='col-8'>.col-8</Column>
      <Column className='col-2'>.col-2</Column>
    </div>

    <div className='row'>
      <Column className='col-3'>.col-3</Column>
      <Column className='col-4'>.col-4</Column>
      <Column className='col-5'>.col-5</Column>
    </div>

    <div className='row'>
      <Column className='col'>.col</Column>
      <Column className='col'>.col</Column>
      <Column className='col'>.col</Column>
      <Column className='col'>.col</Column>
      <Column className='col'>.col</Column>
    </div>

    <h2 className='mt-32 mb-16 text-grey-40'>Responsive columns</h2>

    <div className='rounded bg-grey-20 mb-16 p-12'>
      <h6>Breakpoints:</h6>
      <ul className='pl-16'>
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
      <Column className='md:col-4 sm:col-8'>.md:col-4 .sm:col-8</Column>
      <Column className='md:col-8 sm:col-4'>.md:col-8 .sm:col-4</Column>
    </div>

    <div className='row'>
      <Column className='md:col-6 sm:col-3'>.md:col-6 .sm:col-3</Column>
      <Column className='md:col-6 sm:col-9'>.md:col-6 .sm:col-9</Column>
    </div>
  </div>
)
