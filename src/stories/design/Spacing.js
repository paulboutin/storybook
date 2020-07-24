import React from 'react'
import classNames from 'classnames'
import { useEffect } from '@storybook/client-api'

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

const PixelValueBlock = ({ size }) => (
  <div className='sb:spacing-block--pixel'>
    <div className='sb:spacing-pixel-size'>{size}</div>
    <div className='sb:spacing-pixel-value' />
  </div>
)

const updatePixelValues = () => {
  const { fontSize } = getComputedStyle(document.body)
  const ratio = parseFloat(fontSize) / 16

  document.querySelectorAll('.sb\\:spacing-block--pixel').forEach(element => {
    const value = parseInt(element.children[0].textContent) * ratio
    element.children[1].textContent = value.toFixed(0)
  })
}

export const Spacing = () => {
  useEffect(() => {
    window.removeEventListener('resize', updatePixelValues)
    window.addEventListener('resize', updatePixelValues)
  })

  setTimeout(updatePixelValues, 0)

  return (
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
      <div className='sb:spacing-margin-section'>
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

      <h2 className='sb:spacing-heading'>Pixel values</h2>
      <div className='sb:spacing-pixel-section'>
        <PixelValueBlock size={4} />
        <PixelValueBlock size={8} />
        <PixelValueBlock size={12} />
        <PixelValueBlock size={16} />
        <PixelValueBlock size={24} />
        <PixelValueBlock size={32} />
        <PixelValueBlock size={48} />
        <PixelValueBlock size={64} />
        <PixelValueBlock size={96} />
        <PixelValueBlock size={160} />
      </div>
    </div>
  )
}
