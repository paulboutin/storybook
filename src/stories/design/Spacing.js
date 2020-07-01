import React from 'react'
import classNames from 'classnames'

const SpacingBlock = ({ children, className }) => (
  <div className='flex flex-col items-center'>
    <div className={classNames('bg-green mb-12', className)} />
    <span>{children}</span>
  </div>
)

const PaddingBlock = ({ className }) => (
  <div className={classNames('bg-green mb-12', className)}>
    <div className='w-16 h-16 bg-green-darker' />
  </div>
)

const MarginBlock = ({ className }) => (
  <p className={classNames('bg-grey-20', className)}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
)

export const Spacing = () => (
  <div>
    <h2 className='mb-12 text-grey-40'>Spacing scale</h2>
    <div className='flex flex-wrap justify-between items-end mb-48'>
      <SpacingBlock className='w-4 h-4'>4</SpacingBlock>
      <SpacingBlock className='w-8 h-8'>8</SpacingBlock>
      <SpacingBlock className='w-12 h-12'>12</SpacingBlock>
      <SpacingBlock className='w-16 h-16'>16</SpacingBlock>
      <SpacingBlock className='w-24 h-24'>24</SpacingBlock>
      <SpacingBlock className='w-32 h-32'>32</SpacingBlock>
      <SpacingBlock className='w-48 h-48'>48</SpacingBlock>
      <SpacingBlock className='w-64 h-64'>64</SpacingBlock>
      <SpacingBlock className='w-96 h-96'>96</SpacingBlock>
      <SpacingBlock className='w-160 h-160'>160</SpacingBlock>
    </div>

    <h2 className='mb-12 text-grey-40'>Padding</h2>
    <div className='flex flex-wrap justify-between items-end mb-48'>
      <PaddingBlock className='p-4' />
      <PaddingBlock className='p-8' />
      <PaddingBlock className='p-12' />
      <PaddingBlock className='p-16' />
      <PaddingBlock className='p-24' />
      <PaddingBlock className='p-32' />
      <PaddingBlock className='p-48' />
      <PaddingBlock className='p-64' />
      <PaddingBlock className='p-96' />
    </div>

    <h2 className='mb-12 text-grey-40'>Margin</h2>
    <div>
      <MarginBlock className='mt-0' />
      <MarginBlock className='mt-4' />
      <MarginBlock className='mt-8' />
      <MarginBlock className='mt-12' />
      <MarginBlock className='mt-16' />
      <MarginBlock className='mt-24' />
      <MarginBlock className='mt-32' />
      <MarginBlock className='mt-48' />
      <MarginBlock className='mt-64' />
      <MarginBlock className='mt-96' />
      <MarginBlock className='mt-160' />
    </div>
  </div>
)
