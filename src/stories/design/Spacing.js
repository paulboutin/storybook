import React from 'react'
import classNames from 'classnames'

const SpacingBlock = ({ size }) => (
  <div className='sb:spacing'>
    <div className={classNames('sb:spacing-block', `sb:spacing--${size}`)} />
    <span>{size}</span>
  </div>
)

const PaddingBlock = ({ size }) => (
  <div className={classNames('sb:spacing-block', `sb:padding--${size}`)}>
    <div className='sb:spacing-block--padding' />
  </div>
)

const MarginBlock = ({ size }) => (
  <p className={classNames('sb:spacing-block--margin', `sb:margin--${size}`)}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
)

export const Spacing = () => (
  <div>
    <h2 className='sb:spacing-heading'>Spacing scale</h2>
    <div className='sb:spacing-block-section'>
      <SpacingBlock size={4} />
      <SpacingBlock size={8} />
      <SpacingBlock size={12} />
      <SpacingBlock size={16} />
      <SpacingBlock size={24} />
      <SpacingBlock size={32} />
      <SpacingBlock size={48} />
      <SpacingBlock size={64} />
      <SpacingBlock size={96} />
      <SpacingBlock size={160} />
    </div>

    <h2 className='sb:spacing-heading'>Padding</h2>
    <div className='sb:spacing-block-section'>
      <PaddingBlock size={4} />
      <PaddingBlock size={8} />
      <PaddingBlock size={12} />
      <PaddingBlock size={16} />
      <PaddingBlock size={24} />
      <PaddingBlock size={32} />
      <PaddingBlock size={48} />
      <PaddingBlock size={64} />
      <PaddingBlock size={96} />
    </div>

    <h2 className='sb:spacing-heading'>Margin</h2>
    <div>
      <MarginBlock size={0} />
      <MarginBlock size={4} />
      <MarginBlock size={8} />
      <MarginBlock size={12} />
      <MarginBlock size={16} />
      <MarginBlock size={24} />
      <MarginBlock size={32} />
      <MarginBlock size={48} />
      <MarginBlock size={64} />
      <MarginBlock size={96} />
      <MarginBlock size={160} />
    </div>
  </div>
)
