import React from 'react'
import classNames from 'classnames'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
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

const getCSSVariables = properties => {
  const style = getComputedStyle(document.documentElement)
  return properties.map(property => Number(style.getPropertyValue(property)))
}

const clamp = (n, min, max) => (n < min ? min : n > max ? max : n)

export const Spacing = () => {
  useEffect(() => {
    const [
      minFontSize,
      maxFontSize,
      minScreenWidth,
      maxScreenWidth
    ] = getCSSVariables([
      '--min-font-size',
      '--max-font-size',
      '--min-screen-width',
      '--max-screen-width'
    ])

    const fontFactor = maxFontSize - minFontSize
    const screenFactor = maxScreenWidth - minScreenWidth

    const unitInput = document.getElementById('sb:spacing-unit-input')
    const widthInput = document.getElementById('sb:spacing-width-input')
    const button = document.getElementById('sb:spacing-calc-button')
    const resultText = document.getElementById('sb:spacing-calc-result')

    button.addEventListener('click', () => {
      resultText.classList.remove('invisible')

      const spacingUnit = parseInt(unitInput.value)
      const viewportWidth = parseInt(widthInput.value)

      if (Number.isNaN(spacingUnit) || Number.isNaN(viewportWidth)) {
        resultText.textContent = 'Invalid input'
        return
      }

      /* prettier-ignore */
      const fontSize = clamp(
        minFontSize + fontFactor * ((viewportWidth - minScreenWidth) / screenFactor),
        minFontSize,
        maxFontSize
      )

      const result = Math.round((fontSize / 16) * spacingUnit)
      resultText.textContent = `${result}px`
    })
  })

  return (
    <div>
      <h2 className='sb:spacing-heading'>Pixel value calculator</h2>
      <div className='sb:spacing-pixel-section'>
        <Input id='sb:spacing-unit-input' label='Spacing unit' required />
        <Input id='sb:spacing-width-input' label='Viewport width' required />
        <Button id='sb:spacing-calc-button' type='primary' label='Calculate' />
        <p id='sb:spacing-calc-result' className='invisible' />
      </div>

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
    </div>
  )
}
