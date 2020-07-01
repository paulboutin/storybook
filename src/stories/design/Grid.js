import React from 'react'

export const Grid = () => (
  <div className='container'>
    <h2 className='mb-16 text-grey-40'>Bootstrap 3 style grid</h2>

    <div className='row'>
      <div className='col-4 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-4
      </div>
      <div className='col-4 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-4
      </div>
      <div className='col-4 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-4
      </div>
    </div>
    <div className='row'>
      <div className='col-2 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-2
      </div>
      <div className='col-8 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-8
      </div>
      <div className='col-2 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-2
      </div>
    </div>
    <div className='row'>
      <div className='col-3 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-3
      </div>
      <div className='col-4 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-4
      </div>
      <div className='col-5 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-5
      </div>
    </div>
    <div className='row mb-16'>
      <div className='col-12 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-12
      </div>
      <div className='col-12 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-12
      </div>
      <div className='col-12 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-12
      </div>
      <div className='col-12 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-12
      </div>
      <div className='col-12 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .col-12
      </div>
    </div>

    <h2 className='mb-16 text-grey-40'>Responsive columns</h2>
    <div className='rounded bg-grey-15 mb-16 p-12'>
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
      <div className='md:col-4 sm:col-8 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .md:col-4 .sm:col-8
      </div>
      <div className='md:col-8 sm:col-4 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .md:col-8 .sm:col-4
      </div>
    </div>
    <div className='row'>
      <div className='md:col-6 sm:col-3 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .md:col-6 .sm:col-3
      </div>
      <div className='md:col-6 sm:col-9 border border-dashed border-grey-25 bg-grey-15 p-4'>
        .md:col-6 .sm:col-9
      </div>
    </div>
  </div>
)
